import { useEffect, useRef } from "react";

type Cell = {
  x: number;
  y: number;
  size: number;
  hue: number;
  lightness: number;
  targetL: number;
  distortionX: number;
  distortionY: number;
  targetDistortionX: number;
  targetDistortionY: number;
  noiseOffset: number;
  isActivated: boolean;
  activationTime: number;
  lastHoverTime: number;
  type: "hex" | "square" | "diamond" | "circuit";
  connections: number[];
};

const TAU = Math.PI * 2;

function clamp(v: number, a = 0, b = 1) {
  return Math.max(a, Math.min(b, v));
}

function noise(x: number, y: number, t: number) {
  return (
    (Math.sin(x * 0.01 + t * 0.002) +
      Math.sin(y * 0.015 + t * 0.003) +
      Math.sin((x + y) * 0.008 + t * 0.001)) *
    0.33
  );
}

export default function InteractiveGrid() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const cellsRef = useRef<Cell[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const timeRef = useRef(0);
  const isMobileRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d", { alpha: false })!;
    
    // Performance: Cap DPR to 2
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      isMobileRef.current = w < 768;
      
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildCells(w, h);
    };

    const buildCells = (w: number, h: number) => {
      const cells: Cell[] = [];
      const gridArea = { x: 0, y: h * 0.05, w: w, h: h * 0.55 };

      const isMobile = w < 768;
      // Mobile: Bigger cells (30) = Fewer objects = Higher FPS
      const hexRadius = isMobile ? 30 : 25; 
      const hexSpacing = hexRadius * (isMobile ? 1.7 : 1.8); 
      const rowHeight = hexRadius * Math.sqrt(3);

      const cols = Math.floor(gridArea.w / hexSpacing) + 2;
      const rows = Math.floor(gridArea.h / rowHeight);

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const offset = row % 2 === 0 ? 0 : hexSpacing / 2;
          const x = gridArea.x + col * hexSpacing + offset - hexSpacing;
          const y = gridArea.y + row * rowHeight;

          const nearEdge = x < hexSpacing || x > w - hexSpacing;
          const skipChance = nearEdge ? 0.05 : isMobile ? 0.3 : 0.15; 

          if (Math.random() > skipChance) {
            const cellType = Math.random();
            let type: Cell["type"];
            let size = hexRadius;

            if (cellType < 0.6) type = "hex";
            else if (cellType < 0.8) { type = "square"; size *= 0.8; }
            else if (cellType < 0.95) { type = "diamond"; size *= 0.7; }
            else { type = "circuit"; size *= 0.5; }

            let hue;
            const colorType = Math.random();
            if (colorType < 0.3) hue = 180 + Math.random() * 40;
            else if (colorType < 0.5) hue = 220 + Math.random() * 40;
            else if (colorType < 0.7) hue = 120 + Math.random() * 40;
            else hue = 280 + Math.random() * 40;

            cells.push({
              x, y, size, hue,
              lightness: 0, targetL: 0,
              distortionX: 0, distortionY: 0,
              targetDistortionX: 0, targetDistortionY: 0,
              noiseOffset: Math.random() * TAU,
              isActivated: false,
              activationTime: 0,
              lastHoverTime: 0,
              type,
              connections: [],
            });
          }
        }
      }

      // Circuit connections
      const connectionDist = hexSpacing * (isMobile ? 1.5 : 2);
      for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        const limit = Math.min(i + 20, cells.length); 
        for (let j = i + 1; j < limit; j++) {
          const other = cells[j];
          const distance = Math.sqrt((cell.x - other.x) ** 2 + (cell.y - other.y) ** 2);
          if (distance < connectionDist && Math.random() > 0.7) {
            cell.connections.push(j);
          }
        }
      }
      cellsRef.current = cells;
    };

    const cellDistance = (c: Cell, mx: number, my: number) => {
        const dx = c.x + c.distortionX - mx;
        const dy = c.y + c.distortionY - my;
        return Math.sqrt(dx * dx + dy * dy);
    };

    const drawCellShape = (ctx: CanvasRenderingContext2D, cell: Cell) => {
      const { size, type } = cell;
      const finalX = cell.x + cell.distortionX;
      const finalY = cell.y + cell.distortionY;

      ctx.beginPath();
      switch (type) {
        case "hex":
          for (let i = 0; i < 6; i++) {
            const angle = (i * TAU) / 6;
            const px = finalX + Math.cos(angle) * size;
            const py = finalY + Math.sin(angle) * size;
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          break;
        case "square":
          const angle = Math.PI / 4;
          for (let i = 0; i < 4; i++) {
            const a = angle + (i * TAU) / 4;
            const px = finalX + Math.cos(a) * size;
            const py = finalY + Math.sin(a) * size;
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          break;
        case "diamond":
          ctx.moveTo(finalX, finalY - size);
          ctx.lineTo(finalX + size, finalY);
          ctx.lineTo(finalX, finalY + size);
          ctx.lineTo(finalX - size, finalY);
          break;
        case "circuit":
          ctx.arc(finalX, finalY, size, 0, TAU);
          break;
      }
      ctx.closePath();
    };

    const drawConnections = (ctx: CanvasRenderingContext2D, cells: Cell[]) => {
      ctx.strokeStyle = "rgba(0, 255, 200, 0.2)";
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 5]);
      ctx.beginPath(); 

      for (const cell of cells) {
        if (cell.lightness > 10) {
          for (const connectionIndex of cell.connections) {
            const target = cells[connectionIndex];
            if (target && target.lightness > 10) {
              ctx.moveTo(cell.x + cell.distortionX, cell.y + cell.distortionY);
              ctx.lineTo(target.x + target.distortionX, target.y + target.distortionY);
            }
          }
        }
      }
      ctx.stroke();
      ctx.setLineDash([]);
    };

    const render = () => {
      timeRef.current += 16;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const isMobile = isMobileRef.current;
      
      ctx.clearRect(0, 0, w, h);

      const g = ctx.createLinearGradient(0, 0, w, h);
      g.addColorStop(0, "#0a0a0a");
      g.addColorStop(0.3, "#0f1419");
      g.addColorStop(0.7, "#1a1a2e");
      g.addColorStop(1, "#16213e");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      ctx.strokeStyle = "rgba(0, 255, 255, 0.03)";
      ctx.lineWidth = 0.5;
      const gridSize = isMobile ? 80 : 50; 
      
      ctx.beginPath();
      for (let i = 0; i < w; i += gridSize) { ctx.moveTo(i, 0); ctx.lineTo(i, h); }
      for (let i = 0; i < h; i += gridSize) { ctx.moveTo(0, i); ctx.lineTo(w, i); }
      ctx.stroke();

      const cells = cellsRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const time = timeRef.current;
      const isIdle = mx === -9999;
      const influenceRadius = isMobile ? 120 : 100;
      const idleChance = 0.0009; 

      for (const cell of cells) {
        // --- LOGIC AND PHYSICS ---
        // 1. Random Blinking (Always runs first)
        if (!cell.isActivated && Math.random() < idleChance) {
           cell.isActivated = true;
           cell.lastHoverTime = time;
           cell.targetL = 30 + Math.random() * 30; 
        }

        // 2. Optimization Check
        const distLimit = influenceRadius * 1.5;
        if (!cell.isActivated && !isIdle && 
            (Math.abs(cell.x - mx) > distLimit || Math.abs(cell.y - my) > distLimit)) {
          // If far away and not active, we still need to dampen properties to 0
          cell.targetL = 0;
          cell.targetDistortionX = 0;
          cell.targetDistortionY = 0;
          // We can skip detailed distance checks, but we MUST NOT skip the physics update loop below
          // So we continue to the next iteration of logic, but we must update physics in the second loop
        } else {
            // 3. Detailed Mouse Interaction
            const d = cellDistance(cell, mx, my);
            const isCurrentlyHovered = d < influenceRadius;

            if (isCurrentlyHovered) {
              cell.lastHoverTime = time;
              if (!cell.isActivated) {
                cell.isActivated = true;
                cell.activationTime = time;
              }
            } 
            else if (isIdle && Math.random() < idleChance && !cell.isActivated) {
                 cell.isActivated = true;
                 cell.lastHoverTime = time;
                 cell.targetL = 20 + Math.random() * 40;
            }

            const timeSinceLastHover = time - cell.lastHoverTime;
            const fadeOutDuration = 2000;

            if (cell.isActivated) {
              if (isCurrentlyHovered) {
                const proximity = 1 - d / influenceRadius;
                cell.targetL = 50 + proximity * 25;
              } else if (timeSinceLastHover < fadeOutDuration) {
                const fadeProgress = timeSinceLastHover / fadeOutDuration;
                const flicker = Math.random() > 0.9 ? 0.5 : 1;
                cell.targetL = 50 * (1 - fadeProgress) * flicker;
              } else {
                cell.targetL = 0;
                cell.isActivated = false;
              }
            } else {
               cell.targetL = 0;
            }

            // Distortion
            if (d < influenceRadius * 1.5) {
              const distortionStrength = 15;
              const techRipple = Math.sin(d * 0.1 - time * 0.008) * 0.5 + 0.5;
              const angleToMouse = Math.atan2(my - cell.y, mx - cell.x);
              cell.targetDistortionX = Math.cos(angleToMouse) * distortionStrength * techRipple;
              cell.targetDistortionY = Math.sin(angleToMouse) * distortionStrength * techRipple;
            } else {
              cell.targetDistortionX = 0;
              cell.targetDistortionY = 0;
            }

            const noiseScale = 3;
            const organicX = noise(cell.x, cell.y, time + cell.noiseOffset) * noiseScale;
            const organicY = noise(cell.y, cell.x, time + cell.noiseOffset + 100) * noiseScale;
            cell.targetDistortionX += organicX;
            cell.targetDistortionY += organicY;
        }
      }

      // --- DRAWING AND STATE UPDATE ---
      for (const cell of cells) {
        // FIXED: Update physics FIRST, before checking visibility
        cell.lightness += (cell.targetL - cell.lightness) * 0.2;
        cell.distortionX += (cell.targetDistortionX - cell.distortionX) * 0.1;
        cell.distortionY += (cell.targetDistortionY - cell.distortionY) * 0.1;

        // FIXED: Only skip drawing if completely dark
        if (cell.lightness < 0.5) continue;

        const saturation = Math.min(80 + cell.lightness * 0.1, 90);
        const fill = `hsl(${cell.hue}deg ${saturation}% ${cell.lightness}%)`;

        ctx.save();
        drawCellShape(ctx, cell);
        ctx.fillStyle = fill;
        ctx.fill();

        const strokeOpacity = clamp(cell.lightness / 100, 0.1, 0.8);
        ctx.lineWidth = cell.type === "circuit" ? 3 : 2;
        ctx.strokeStyle = `rgba(255,255,255,${strokeOpacity})`;
        ctx.stroke();

        // Optimization: No ShadowBlur on Mobile
        if (!isMobile && cell.lightness > 40) {
          ctx.shadowColor = fill;
          ctx.shadowBlur = cell.lightness * 0.5;
          ctx.stroke();
          ctx.shadowBlur = 0;
        }

        if (cell.type === "circuit" && cell.lightness > 30) {
          ctx.beginPath();
          ctx.arc(
            cell.x + cell.distortionX,
            cell.y + cell.distortionY,
            cell.size * 0.3,
            0, TAU
          );
          ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
          ctx.fill();
        }
        ctx.restore();
      }

      drawConnections(ctx, cells);

      ctx.strokeStyle = `rgba(0, 255, 200, ${0.1 + Math.sin(time * 0.005) * 0.05})`;
      ctx.lineWidth = 1;
      const scanY = (Math.sin(time * 0.003) * 0.5 + 0.5) * h * 0.6;
      ctx.beginPath();
      ctx.moveTo(0, scanY);
      ctx.lineTo(w, scanY);
      ctx.stroke();

      animationRef.current = requestAnimationFrame(render);
    };

    const onMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      if (e.touches.length > 0) {
        mouseRef.current.x = e.touches[0].clientX;
        mouseRef.current.y = e.touches[0].clientY;
      }
    };

    const onTouchStart = (e: TouchEvent) => {
      e.preventDefault();
      if (e.touches.length > 0) {
        mouseRef.current.x = e.touches[0].clientX;
        mouseRef.current.y = e.touches[0].clientY;
      }
    };

    const onLeave = () => {
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    };

    const onTouchEnd = () => {
        setTimeout(onLeave, 100);
    };

    resize();
    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);
    canvas.addEventListener("touchstart", onTouchStart, { passive: false });
    canvas.addEventListener("touchmove", onTouchMove, { passive: false });
    canvas.addEventListener("touchend", onTouchEnd);
    canvas.addEventListener("touchcancel", onTouchEnd);

    animationRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
      canvas.removeEventListener("touchstart", onTouchStart);
      canvas.removeEventListener("touchmove", onTouchMove);
      canvas.removeEventListener("touchend", onTouchEnd);
      canvas.removeEventListener("touchcancel", onTouchEnd);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden", touchAction: "none", userSelect: "none", background: "#0a0a0a" }}>
      <canvas
        ref={canvasRef}
        style={{ display: "block", width: "100%", height: "100%" }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          color: "white",
          fontFamily: '"Courier New", "Monaco", "Lucida Console", monospace',
          fontSize: "clamp(1.5rem, 8vw, 4rem)",
          fontWeight: "bold",
          textShadow: "0 0 20px rgba(0, 255, 200, 0.5)",
          lineHeight: "1.2",
          padding: "0 1rem",
          maxWidth: "90%",
          pointerEvents: "none",
        }}
      >
        <div>&lt;CodeClub&gt;</div>
        <div style={{ fontSize: "clamp(0.8rem, 4vw, 1.8rem)", marginTop: "0.5rem", opacity: 0.9 }}>
          &lt;Department of Computer Science and Engineering&gt;
        </div>
        <div style={{ fontSize: "clamp(0.6rem, 2.5vw, 1rem)", marginTop: "1rem", opacity: 0.6, fontStyle: "italic", display: "ontouchstart" in window ? "block" : "none" }}>
          Touch and drag to explore the grid
        </div>
      </div>
    </div>
  );
}