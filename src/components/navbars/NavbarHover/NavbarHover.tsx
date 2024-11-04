import {cn} from "@/lib/utils.ts";
import {AnimatePresence, motion} from "framer-motion";
import React, {useState} from "react";

const NavbarHover = ({
                                      children,
                                      className,
                                  }: {
    children: React.ReactNode;
    className?: string;
}) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const childArray = React.Children.toArray(children);

    return (
        <div
            className={cn(
                "flex flex-row space-x-8 items-center antialiased border px-4 py-2 rounded-2xl border-zinc-700/60 bg-zinc-800",
                className
            )}
        >
            {childArray.map((child, idx) => (
                <div
                    key={idx}
                    className="text-white text-sm relative"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-zinc-700 dark:bg-slate-800/[0.8] block rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    {child}
                </div>
            ))}
        </div>
    );
};

export default NavbarHover;
