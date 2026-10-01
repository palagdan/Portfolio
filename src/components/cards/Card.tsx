import React from "react";
import {cn} from "@/lib/utils.ts";

export const Card = ({
                         className,
                         children,
                     }: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "rounded-2xl h-full w-full overflow-hidden bg-tertiaryTmp border border-transparent group-hover:border-slate-700 relative z-20",
                className
            )}
        >
            <div className="relative z-50">
                <div>{children}</div>
            </div>
        </div>
    );
};