"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const GradientBlobs = () => {
    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMouse({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="relative z-0">
            {/* Background gradient layer */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-zinc-100/10 dark:from-zinc-900/40 dark:to-black/10 opacity-60 -z-10 pointer-events-none" />

            {/* Blurred blob 1 */}
            <motion.div
                className="absolute top-20 left-40 w-72 h-72 rounded-full blur-[100px] opacity-30 mix-blend-multiply pointer-events-none
        bg-gradient-to-r from-orange-300 via-yellow-400 to-pink-400
        dark:from-orange-500 dark:via-pink-500 dark:to-purple-500"
                animate={{
                    x: mouse.x * 0.02,
                    y: mouse.y * 0.02,
                }}
                transition={{ type: "spring", stiffness: 40, damping: 20 }}
            />

            {/* Blurred blob 2 */}
            <motion.div
                className="absolute top-40 right-40 w-72 h-72 rounded-full blur-[100px] opacity-30 mix-blend-multiply pointer-events-none
        bg-gradient-to-r from-pink-300 via-rose-400 to-purple-400
        dark:from-pink-600 dark:via-purple-600 dark:to-indigo-600"
                animate={{
                    x: -mouse.x * 0.02,
                    y: mouse.y * 0.02,
                }}
                transition={{ type: "spring", stiffness: 40, damping: 20 }}
            />
        </div>
    );
};

export default GradientBlobs;
