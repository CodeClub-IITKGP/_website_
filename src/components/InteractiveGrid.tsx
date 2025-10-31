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
  connections: number[]; // indices of connected cells for circuit lines
};

const TAU = Math.PI * 2;

function clamp(v: number, a = 0, b = 1) {
  return Math.max(a, Math.min(b, v));
}

// Simple noise function for organic distortion
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

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let dpr = Math.max(1, window.devicePixelRatio || 1);

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      dpr = Math.max(1, window.devicePixelRatio || 1);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildCells(w, h);
    };

    // Build tech-style geometric grid
    const buildCells = (w: number, h: number) => {
      const cells: Cell[] = [];
      const gridArea = { x: 0, y: h * 0.05, w: w, h: h * 0.55 }; // Full width, top 60% for grid

      // Responsive hexagonal grid pattern
      const isMobile = w < 768;
      const hexRadius = isMobile ? 18 : 25; // Smaller radius on mobile
      const hexSpacing = hexRadius * (isMobile ? 1.6 : 1.8); // Tighter spacing on mobile
      const rowHeight = hexRadius * Math.sqrt(3);

      const cols = Math.floor(gridArea.w / hexSpacing) + 2; // Extra columns to ensure full coverage
      const rows = Math.floor(gridArea.h / rowHeight);

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const offset = row % 2 === 0 ? 0 : hexSpacing / 2;
          const x = gridArea.x + col * hexSpacing + offset - hexSpacing; // Start before left edge
          const y = gridArea.y + row * rowHeight;

          // Skip some cells randomly for a more organic tech look, but only if not near edges
          const nearEdge = x < hexSpacing || x > w - hexSpacing;
          const skipChance = nearEdge ? 0.05 : isMobile ? 0.2 : 0.15; // More skipping on mobile for performance

          if (Math.random() > skipChance) {
            const cellType = Math.random();
            let type: Cell["type"];
            let size = hexRadius;

            if (cellType < 0.6) {
              type = "hex";
            } else if (cellType < 0.8) {
              type = "square";
              size *= 0.8;
            } else if (cellType < 0.95) {
              type = "diamond";
              size *= 0.7;
            } else {
              type = "circuit";
              size *= 0.5;
            }

            // Tech color palette: cyan, electric blue, neon green, purple
            let hue;
            const colorType = Math.random();
            if (colorType < 0.3) {
              hue = 180 + Math.random() * 40; // Cyan to light blue
            } else if (colorType < 0.5) {
              hue = 220 + Math.random() * 40; // Electric blue
            } else if (colorType < 0.7) {
              hue = 120 + Math.random() * 40; // Neon green
            } else {
              hue = 280 + Math.random() * 40; // Purple/magenta
            }

            cells.push({
              x,
              y,
              size,
              hue,
              lightness: 0,
              targetL: 0,
              distortionX: 0,
              distortionY: 0,
              targetDistortionX: 0,
              targetDistortionY: 0,
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

      // Add some circuit connections between nearby cells
      for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        for (let j = i + 1; j < cells.length; j++) {
          const other = cells[j];
          const distance = Math.sqrt(
            (cell.x - other.x) ** 2 + (cell.y - other.y) ** 2
          );

          // Connect cells that are close and create interesting patterns
          if (distance < hexSpacing * 2 && Math.random() > 0.7) {
            cell.connections.push(j);
          }
        }
      }

      cellsRef.current = cells;
    };

    // Distance calculation for geometric cells
    const cellDistance = (c: Cell, mx: number, my: number) => {
      const dx = c.x + c.distortionX - mx;
      const dy = c.y + c.distortionY - my;
      return Math.sqrt(dx * dx + dy * dy);
    };

    // Draw different cell shapes
    const drawCellShape = (ctx: CanvasRenderingContext2D, cell: Cell) => {
      const { x, y, size, type } = cell;
      const finalX = x + cell.distortionX;
      const finalY = y + cell.distortionY;

      ctx.beginPath();

      switch (type) {
        case "hex":
          // Hexagon
          for (let i = 0; i < 6; i++) {
            const angle = (i * TAU) / 6;
            const px = finalX + Math.cos(angle) * size;
            const py = finalY + Math.sin(angle) * size;
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.closePath();
          break;

        case "square":
          // Rotated square
          const angle = Math.PI / 4; // 45 degree rotation
          for (let i = 0; i < 4; i++) {
            const a = angle + (i * TAU) / 4;
            const px = finalX + Math.cos(a) * size;
            const py = finalY + Math.sin(a) * size;
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.closePath();
          break;

        case "diamond":
          // Diamond shape
          ctx.moveTo(finalX, finalY - size);
          ctx.lineTo(finalX + size, finalY);
          ctx.lineTo(finalX, finalY + size);
          ctx.lineTo(finalX - size, finalY);
          ctx.closePath();
          break;

        case "circuit":
          // Circuit node (circle with inner details)
          ctx.arc(finalX, finalY, size, 0, TAU);
          break;
      }
    };

    // Draw circuit connections
    const drawConnections = (ctx: CanvasRenderingContext2D, cells: Cell[]) => {
      ctx.strokeStyle = "rgba(0, 255, 200, 0.2)";
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 5]);

      for (const cell of cells) {
        if (cell.lightness > 10) {
          // Only show connections for active cells
          for (const connectionIndex of cell.connections) {
            const target = cells[connectionIndex];
            if (target && target.lightness > 10) {
              ctx.beginPath();
              ctx.moveTo(cell.x + cell.distortionX, cell.y + cell.distortionY);
              ctx.lineTo(
                target.x + target.distortionX,
                target.y + target.distortionY
              );
              ctx.stroke();
            }
          }
        }
      }

      ctx.setLineDash([]); // Reset line dash
    };

    // render loop
    const render = () => {
      timeRef.current += 16;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);

      // Tech-style background with grid pattern
      const g = ctx.createLinearGradient(0, 0, w, h);
      g.addColorStop(0, "#0a0a0a");
      g.addColorStop(0.3, "#0f1419");
      g.addColorStop(0.7, "#1a1a2e");
      g.addColorStop(1, "#16213e");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      // Add subtle tech grid lines
      ctx.strokeStyle = "rgba(0, 255, 255, 0.03)";
      ctx.lineWidth = 0.5;
      for (let i = 0; i < w; i += 50) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, h);
        ctx.stroke();
      }
      for (let i = 0; i < h; i += 50) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(w, i);
        ctx.stroke();
      }

      const cells = cellsRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const time = timeRef.current;

      // Mobile-optimized interaction radius (larger for touch)
      const isMobile = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      const influenceRadius = isMobile ? 120 : 80; // Larger radius for mobile touch
      const fadeOutDuration = 2000;

      for (const cell of cells) {
        const d = cellDistance(cell, mx, my);
        const isCurrentlyHovered = d < influenceRadius;

        if (isCurrentlyHovered) {
          cell.lastHoverTime = time;
          if (!cell.isActivated) {
            cell.isActivated = true;
            cell.activationTime = time;
          }
        }

        const timeSinceLastHover = time - cell.lastHoverTime;

        if (cell.isActivated) {
          if (isCurrentlyHovered) {
            const proximity = 1 - d / influenceRadius;
            cell.targetL = 70 + proximity * 30;
          } else if (timeSinceLastHover < fadeOutDuration) {
            const fadeProgress = timeSinceLastHover / fadeOutDuration;
            const baseBrightness = 65;
            cell.targetL = baseBrightness * (1 - fadeProgress);
          } else {
            cell.targetL = 0;
            cell.isActivated = false;
          }
        } else {
          cell.targetL = 0;
        }

        // Enhanced distortion for tech effect
        if (d < influenceRadius * 1.5) {
          const distortionStrength = 15;
          const techRipple = Math.sin(d * 0.1 - time * 0.008) * 0.5 + 0.5;
          const angleToMouse = Math.atan2(my - cell.y, mx - cell.x);

          cell.targetDistortionX =
            Math.cos(angleToMouse) * distortionStrength * techRipple;
          cell.targetDistortionY =
            Math.sin(angleToMouse) * distortionStrength * techRipple;
        } else {
          cell.targetDistortionX = 0;
          cell.targetDistortionY = 0;
        }

        // Add subtle tech noise
        const noiseScale = 3;
        const organicX =
          noise(cell.x, cell.y, time + cell.noiseOffset) * noiseScale;
        const organicY =
          noise(cell.y, cell.x, time + cell.noiseOffset + 100) * noiseScale;

        cell.targetDistortionX += organicX;
        cell.targetDistortionY += organicY;
      }

      // Animate and draw
      for (const cell of cells) {
        cell.lightness += (cell.targetL - cell.lightness) * 0.2;
        cell.distortionX += (cell.targetDistortionX - cell.distortionX) * 0.1;
        cell.distortionY += (cell.targetDistortionY - cell.distortionY) * 0.1;

        if (cell.lightness > 0.5) {
          const saturation = Math.min(90 + cell.lightness * 0.1, 100);
          const fill = `hsl(${cell.hue}deg ${saturation}% ${cell.lightness}%)`;

          ctx.save();

          // Draw main shape
          drawCellShape(ctx, cell);
          ctx.fillStyle = fill;
          ctx.fill();

          // Tech-style stroke
          const strokeOpacity = clamp(cell.lightness / 100, 0.1, 0.8);
          ctx.lineWidth = cell.type === "circuit" ? 3 : 2;
          ctx.strokeStyle = `rgba(255,255,255,${strokeOpacity})`;
          ctx.stroke();

          // Glow effect for active cells
          if (cell.lightness > 40) {
            ctx.shadowColor = fill;
            ctx.shadowBlur = cell.lightness * 0.5;
            ctx.stroke();
            ctx.shadowBlur = 0;
          }

          // Special effects for circuit nodes
          if (cell.type === "circuit" && cell.lightness > 30) {
            ctx.beginPath();
            ctx.arc(
              cell.x + cell.distortionX,
              cell.y + cell.distortionY,
              cell.size * 0.3,
              0,
              TAU
            );
            ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
            ctx.fill();
          }

          ctx.restore();
        }
      }

      // Draw circuit connections
      drawConnections(ctx, cells);

      // Add scanning lines effect
      ctx.strokeStyle = `rgba(0, 255, 200, ${
        0.1 + Math.sin(time * 0.005) * 0.05
      })`;
      ctx.lineWidth = 1;
      const scanY = (Math.sin(time * 0.003) * 0.5 + 0.5) * h * 0.6;
      ctx.beginPath();
      ctx.moveTo(0, scanY);
      ctx.lineTo(w, scanY);
      ctx.stroke();

      animationRef.current = requestAnimationFrame(render);
    };

    // mouse and touch handlers
    const onMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault(); // Prevent scrolling while touching
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        mouseRef.current.x = touch.clientX;
        mouseRef.current.y = touch.clientY;
      }
    };

    const onTouchStart = (e: TouchEvent) => {
      e.preventDefault();
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        mouseRef.current.x = touch.clientX;
        mouseRef.current.y = touch.clientY;
      }
    };

    const onLeave = () => {
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    };

    const onTouchEnd = () => {
      // Keep the position for a moment before hiding
      setTimeout(() => {
        mouseRef.current.x = -9999;
        mouseRef.current.y = -9999;
      }, 100);
    };

    // init
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    // Add touch event listeners for mobile
    canvas.addEventListener("touchstart", onTouchStart, { passive: false });
    canvas.addEventListener("touchmove", onTouchMove, { passive: false });
    canvas.addEventListener("touchend", onTouchEnd);
    canvas.addEventListener("touchcancel", onTouchEnd);

    animationRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);

      // Remove touch event listeners
      canvas.removeEventListener("touchstart", onTouchStart);
      canvas.removeEventListener("touchmove", onTouchMove);
      canvas.removeEventListener("touchend", onTouchEnd);
      canvas.removeEventListener("touchcancel", onTouchEnd);

      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden", // Prevent scrolling on mobile
        touchAction: "none", // Prevent default touch behaviors
        userSelect: "none", // Prevent text selection on touch
        WebkitUserSelect: "none", // Safari
        WebkitTouchCallout: "none", // Prevent callout on long press
      }}
    >
      <canvas
        ref={canvasRef}
        className="interactive-canvas"
        style={{
          touchAction: "none", // Prevent scrolling and zooming
          WebkitTouchCallout: "none",
          WebkitUserSelect: "none",
          userSelect: "none",
          display: "block",
        }}
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
          fontSize: "clamp(1.5rem, 8vw, 4rem)", // Better mobile scaling
          fontWeight: "bold",
          textShadow: "0 0 20px rgba(0, 255, 200, 0.5)",
          lineHeight: "1.2",
          padding: "0 1rem", // Add padding for mobile
          maxWidth: "90%", // Prevent text overflow on small screens
          pointerEvents: "none", // Don't interfere with touch events
        }}
      >
        <div>&lt;CodeClub&gt;</div>
        <div
          style={{
            fontSize: "clamp(0.8rem, 4vw, 1.8rem)", // Better mobile scaling
            marginTop: "0.5rem",
            opacity: 0.9,
          }}
        >
          &lt;Department of Computer Science and Engineering&gt;
        </div>

        {/* Touch instruction for mobile users */}
        <div
          style={{
            fontSize: "clamp(0.6rem, 2.5vw, 1rem)",
            marginTop: "1rem",
            opacity: 0.6,
            fontStyle: "italic",
            display: "ontouchstart" in window ? "block" : "none", // Only show on touch devices
          }}
        >
          Touch and drag to explore the grid
        </div>
      </div>
    </div>
  );
}
