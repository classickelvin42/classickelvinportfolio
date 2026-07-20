"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-base-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="flex items-center gap-3">
            <motion.span
              className="font-display text-2xl tracking-tight text-ink-100"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              YN
            </motion.span>
            <div className="flex items-end gap-[3px] h-5">
              {[0, 1, 2, 3].map((i) => (
                <motion.span
                  key={i}
                  className="signal-bar"
                  initial={{ height: 4 }}
                  animate={{ height: [4, 20, 8, 16, 4] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.12,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
