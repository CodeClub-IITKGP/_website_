
import { useEffect, useRef } from "react";

export default function EnergyPulseCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pulseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const pulse = pulseRef.current;

    if (!cursor || !pulse) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    const touchDevice = window.matchMedia("(pointer: coarse)");

    let enabled = false;

    const updateEnabled = () => {
      enabled = !reducedMotion.matches && !touchDevice.matches;

      if (!enabled) {
        cursor.style.opacity = "0";
        document.documentElement.classList.remove(
          "energy-cursor-active"
        );
      }
    };

    const onMove = (e: MouseEvent) => {
      if (!enabled) return;

      const target = e.target;
      const interactive =
        target instanceof Element &&
        target.closest(
          'a, button, input, textarea, select, [role="button"], [contenteditable="true"]'
        );

        if (interactive) {
            cursor.style.opacity = "1";
            cursor.style.transform =
              `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
          
            // Keep the custom cursor visible over buttons and links.
            document.documentElement.classList.add(
              "energy-cursor-active"
            );
            return;
        }

      cursor.style.opacity = "1";
      cursor.style.transform =
        `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;

      document.documentElement.classList.add(
        "energy-cursor-active"
      );
    };

    const onClick = (e: MouseEvent) => {
      if (!enabled || cursor.style.opacity !== "1") return;

      const target = e.target;
      if (
        target instanceof Element &&
        target.closest(
          'a, button, input, textarea, select, [role="button"]'
        )
      ) {
        return;
      }

      pulse.getAnimations().forEach((animation) =>
        animation.cancel()
      );

      pulse.animate(
        [
          { transform: "scale(0.5)", opacity: 0.9 },
          { transform: "scale(2.8)", opacity: 0 }
        ],
        {
          duration: 450,
          easing: "ease-out"
        }
      );
    };

    const hide = () => {
      cursor.style.opacity = "0";
      document.documentElement.classList.remove(
        "energy-cursor-active"
      );
    };

    updateEnabled();

    window.addEventListener("mousemove", onMove);
    window.addEventListener("click", onClick);
    window.addEventListener("blur", hide);
    document.addEventListener("mouseleave", hide);
    reducedMotion.addEventListener("change", updateEnabled);
    touchDevice.addEventListener("change", updateEnabled);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("click", onClick);
      window.removeEventListener("blur", hide);
      document.removeEventListener("mouseleave", hide);
      reducedMotion.removeEventListener("change", updateEnabled);
      touchDevice.removeEventListener("change", updateEnabled);

      document.documentElement.classList.remove(
        "energy-cursor-active"
      );
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: 0,
        height: 0,
        zIndex: 99999,
        pointerEvents: "none",
        opacity: 0,
        willChange: "transform"
      }}
    >
      <div
        ref={pulseRef}
        style={{
          position: "absolute",
          left: -17,
          top: -17,
          width: 34,
          height: 34,
          borderRadius: "50%",
          border: "1px solid rgba(0, 255, 200, 0.9)",
          boxShadow: "0 0 12px rgba(0, 255, 200, 0.35)",
          opacity: 0
        }}
      />

      <div
        style={{
          position: "absolute",
          left: -11,
          top: -11,
          width: 22,
          height: 22,
          borderRadius: "50%",
          border: "1.5px solid #00ffc8",
          boxShadow:
            "0 0 8px rgba(0,255,200,.55), inset 0 0 6px rgba(0,255,200,.15)"
        }}
      />

      <div
        style={{
          position: "absolute",
          left: -2.5,
          top: -2.5,
          width: 5,
          height: 5,
          borderRadius: "50%",
          background: "#cafff4",
          boxShadow: "0 0 10px 3px rgba(0,255,200,.75)"
        }}
      />
    </div>
  );
}
