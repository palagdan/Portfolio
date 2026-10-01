import React, {ReactNode, MouseEventHandler} from 'react';

interface BorderMagicButtonProps {
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLElement>;
    href?: string;
    target?: string;
    rel?: string;
}

const outerClassName =
    "relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[3px_3px_0px_white] transition-all duration-200";

const BorderMagicButton: React.FC<BorderMagicButtonProps> = ({children, onClick, href, target, rel}) => {
    const inner = (
        <>
            <span
                className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
            />
            <span
                className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl"
            >
                {children}
            </span>
        </>
    );

    if (href) {
        return (
            <a className={outerClassName} href={href} target={target} rel={rel} onClick={onClick}>
                {inner}
            </a>
        );
    }

    return (
        <button className={outerClassName} onClick={onClick}>
            {inner}
        </button>
    );
};

export default BorderMagicButton;