"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

const Slide = ({ children }: { children: React.ReactNode }) => {
  const slideVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    }),
    []
  );

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Change "once" to true
      variants={slideVariants}
    >
      {children}
    </motion.div>
  );
};

export default Slide;
