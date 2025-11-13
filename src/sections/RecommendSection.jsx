import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Recommendation from "../components/Recommendations/Recommendation";
import recommendations from "../data/recommendations";

const Recommend = () => {
  const baseX = useMotionValue(0);
  const smoothX = useSpring(baseX, { damping: 40, stiffness: 90 });
  const x = useTransform(smoothX, (v) => `${v}px`);

  const [isHovered, setIsHovered] = useState(false);
  const lastTimestamp = useRef(null);
  const offset = useRef(0);
  const containerRef = useRef(null);

  const contentWidth = useRef(0); // width of one set of items (pixels)
  const viewportWidth = useRef(0); // visible width of the container (pixels)
  const resetDistance = useRef(0); // when abs(offset) >= resetDistance -> reset to 0

  const SPEED = 40; // pixels per second
  const END_GAP = 10; // minimum extra space after the last card before reset (pixels)

  // calculate widths
  const calculateWidths = () => {
    const container = containerRef.current;
    if (!container) return;

    // the motion div contains duplicated content, so firstChild.scrollWidth is total of both sets
    const fullScrollWidth = container.scrollWidth; // duplicated width (two sets)
    // each set width:
    const oneSetWidth = fullScrollWidth / 2;

    contentWidth.current = oneSetWidth;
    viewportWidth.current = container.parentElement
      ? container.parentElement.offsetWidth
      : container.offsetWidth;

    // Reset distance: one set width + end gap + viewport width to ensure last card fully visible + extra space
    resetDistance.current = contentWidth.current + END_GAP + viewportWidth.current;
  };

  // recalc on mount and resize
  useEffect(() => {
    calculateWidths();
    const onResize = () => {
      calculateWidths();
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    let frameId;

    const tick = (timestamp) => {
      if (lastTimestamp.current === null) {
        lastTimestamp.current = timestamp;
      }

      const delta = (timestamp - lastTimestamp.current) / 1000;
      lastTimestamp.current = timestamp;

      if (!isHovered && resetDistance.current > 0) {
        offset.current -= SPEED * delta;

        // Reset after the full pass + gap + viewport width
        if (Math.abs(offset.current) >= resetDistance.current) {
          offset.current = 0;
        }

        baseX.set(offset.current);
      }

      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frameId);
      lastTimestamp.current = null;
    };
  }, [isHovered, baseX]);

  return (
    <section
      id="recommendations"
      className="bg-night min-h-screen flex flex-col justify-center text-center py-20"
    >
      <h2 className="font-medium text-3xl md:text-5xl text-center mb-10">
        Recommendations
      </h2>

      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          ref={containerRef}
          className="flex gap-8 w-max items-stretch"
          style={{ x }}
        >
          {/* duplicated for seamless looping */}
          {[...recommendations, ...recommendations].map((rec, index) => (
            <Recommendation
              key={rec.name + index}
              name={rec.name}
              title={rec.title}
              description={rec.description}
            />
          ))}

          {/* spacer to create room after the last card.
              We add viewportWidth as extra spacer to ensure full visibility + END_GAP */
          }
          <div style={{ width: END_GAP + (viewportWidth.current || 0) }} />
        </motion.div>
      </div>
    </section>
  );
};

export default Recommend;
