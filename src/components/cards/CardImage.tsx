import {cn} from "@/lib/utils.ts";

export const CardImage = ({
                              src,
                              alt,
                              className,
                          }: {
    src: string;
    alt: string;
    className?: string;
}) => {
    return (
        <div className={cn("relative rounded-xl overflow-hidden", className)}>
            <img
                src={"https://github.com/shadcn.png"}
                alt={alt}
                className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
            />
        </div>
    );
};