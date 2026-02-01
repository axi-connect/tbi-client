"use client";

import { motion } from "framer-motion";

interface WaveEffectProps {
  isActive: boolean;
  color?: string;
}

export const WaveEffect = ({ isActive, color = "rgba(255, 255, 255, 0.2)" }: WaveEffectProps) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-inherit">
      {isActive && (
        <>
          <motion.div
            className="absolute inset-0 border rounded-inherit"
            style={{ borderColor: color }}
            initial={{ scale: 1, opacity: 0 }}
            animate={{
              scale: [1, 1.2, 1.4],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
          <motion.div
            className="absolute inset-0 border rounded-inherit"
            style={{ borderColor: color }}
            initial={{ scale: 1, opacity: 0 }}
            animate={{
              scale: [1, 1.3, 1.6],
              opacity: [0, 0.2, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeOut",
              delay: 0.5,
            }}
          />
        </>
      )}
    </div>
  );
};

