import { motion, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Recommendation from "../components/Recommendations/Recommendation";
import recommendations from "../data/recommendations";

const SPEED = 40; // pixels per second
const DRAG_THRESHOLD = 6;
const MAX_FRAME_SECONDS = 0.05;

// Keep the offset inside one copy of the list. The second copy then
// occupies the same place, so crossing the end does not jump back.
const wrapOffset = (value, width) => {
  if (width <= 0) return value;
  const wrapped = value % width;
  return wrapped > 0 ? wrapped - width : wrapped;
};

const Recommend = () => {
  const x = useMotionValue(0);
  const containerRef = useRef(null);
  const viewportRef = useRef(null);
  const offset = useRef(0);
  const loopWidth = useRef(0);
  const isHovered = useRef(false);
  const isDragging = useRef(false);
  const dragMoved = useRef(false);
  const dragOriginX = useRef(0);
  const dragOriginOffset = useRef(0);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const measure = () => {
      const count = recommendations.length;
      const set = Array.from(container.children).slice(0, count);
      if (set.length < count) return;

      const cardsWidth = set.reduce(
        (total, child) => total + child.getBoundingClientRect().width,
        0,
      );
      const gap = Number.parseFloat(getComputedStyle(container).columnGap) || 0;
      // The extra gap is the space between the last card of this copy
      // and the first card of the next one.
      loopWidth.current = cardsWidth + gap * count;
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let frameId;
    let lastTimestamp = null;

    const tick = (timestamp) => {
      if (lastTimestamp === null) lastTimestamp = timestamp;
      const delta = Math.min((timestamp - lastTimestamp) / 1000, MAX_FRAME_SECONDS);
      lastTimestamp = timestamp;

      if (!isHovered.current && !isDragging.current && loopWidth.current > 0) {
        offset.current = wrapOffset(
          offset.current - SPEED * delta,
          loopWidth.current,
        );
        x.set(offset.current);
      }

      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [x]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return undefined;

    const onPointerDown = (event) => {
      if (event.button !== 0) return;
      isDragging.current = true;
      dragMoved.current = false;
      dragOriginX.current = event.clientX;
      dragOriginOffset.current = offset.current;
    };

    const onPointerMove = (event) => {
      if (!isDragging.current) return;
      const dx = event.clientX - dragOriginX.current;
      if (!dragMoved.current) {
        if (Math.abs(dx) < DRAG_THRESHOLD) return;
        dragMoved.current = true;
        setDragging(true);
      }
      offset.current = wrapOffset(dragOriginOffset.current + dx, loopWidth.current);
      x.set(offset.current);
    };

    const endDrag = () => {
      if (!isDragging.current) return;
      isDragging.current = false;
      setDragging(false);
      // Click is dispatched after pointerup, so clear the flag on the next turn.
      window.setTimeout(() => {
        dragMoved.current = false;
      }, 0);
    };

    const onClickCapture = (event) => {
      if (!dragMoved.current) return;
      event.preventDefault();
      event.stopPropagation();
    };

    const onMouseEnter = () => {
      isHovered.current = true;
    };
    const onMouseLeave = () => {
      isHovered.current = false;
    };

    viewport.addEventListener("pointerdown", onPointerDown);
    viewport.addEventListener("click", onClickCapture, true);
    viewport.addEventListener("mouseenter", onMouseEnter);
    viewport.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", endDrag);
    window.addEventListener("pointercancel", endDrag);

    return () => {
      viewport.removeEventListener("pointerdown", onPointerDown);
      viewport.removeEventListener("click", onClickCapture, true);
      viewport.removeEventListener("mouseenter", onMouseEnter);
      viewport.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", endDrag);
      window.removeEventListener("pointercancel", endDrag);
    };
  }, [x]);

  const trackClass = dragging
    ? "cursor-grabbing [&_*]:cursor-grabbing"
    : "cursor-grab";

  return (
    <section
      id="recommendations"
      className="bg-night min-h-screen flex flex-col justify-center text-center py-20"
    >
      <h2 className="font-medium text-3xl md:text-5xl text-center">
        Recommendations
      </h2>
      <p className="text-lg md:text-xl text-center mt-3 mb-10">
        Here&apos;s what people have to say about me
      </p>

      <div
        ref={viewportRef}
        className={`relative w-full overflow-hidden select-none touch-pan-y ${trackClass}`}
      >
        <motion.div
          ref={containerRef}
          className="flex gap-8 w-max items-start py-8"
          style={{ x }}
        >
          {["primary", "copy"].map((copy) => recommendations.map((rec) => (
            <Recommendation
              key={`${rec.name}-${copy}`}
              name={rec.name}
              title={rec.title}
              description={rec.description}
            />
          )))}
        </motion.div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-night to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-night to-transparent" />
      </div>
    </section>
  );
};

export default Recommend;
