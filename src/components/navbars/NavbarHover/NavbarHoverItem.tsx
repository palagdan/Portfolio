import {cn} from "@/lib/utils.ts";
import React from "react";
import {Link} from "react-scroll";


 const NavbarHoverItem = ({
                         className,
                         children,
                         to,
                         onClick
                     }: {
    className?: string;
    children: React.ReactNode;
    to?: string;
    onClick?: () => void
}) => {
    return (
        <div className={cn("relative z-10 px-2 py-2 inline-block", className)}>
            <Link to={to}   smooth={true}
                  duration={500}
                  onClick={onClick}
                  className="cursor-pointer p-4">
                {children}
            </Link>
        </div>
    );
};

export default NavbarHoverItem;
