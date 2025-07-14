import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { Phone } from "lucide-react";
import { useEffect } from "react";

const CallNowButton = () => {
  const phoneNumber = "9766242424";
  const controls = useAnimation();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Constrain movement to stay within viewport
  const constrainedX = useTransform(x, [0, 1], [0, 1], {
    clamp: true,
  });

  const handleClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  useEffect(() => {
    const moveButton = () => {
      const viewportWidth = window.innerWidth - 200; // Account for button width
      const viewportHeight = window.innerHeight - 100; // Account for button height

      const randomX =
        Math.floor(Math.random() * viewportWidth) - viewportWidth / 2;
      const randomY =
        Math.floor(Math.random() * viewportHeight) - viewportHeight / 2;

      controls.start({
        x: randomX,
        y: randomY,
        transition: {
          duration: 15,
          ease: "linear",
        },
      });
    };

    // Initial movement
    moveButton();

    // Set up interval for continuous movement
    const interval = setInterval(moveButton, 15000);

    return () => clearInterval(interval);
  }, [controls]);

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-50 flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-full shadow-lg font-bold text-lg"
      style={{ x, y }}
      animate={controls}
      initial={{ opacity: 1, scale: 1 }}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
      }}
      whileTap={{
        scale: 0.95,
        backgroundColor: "#dc2626",
      }}
    >
      <Phone size={20} className="inline" />
      <span>Call Now</span>
    </motion.button>
  );
};

export default CallNowButton;
