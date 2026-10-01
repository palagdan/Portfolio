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
        <div className={cn("relative rounded-t-lg overflow-hidden", className)}>
            <img
                src={src}
                alt={alt}
                loading="lazy"
                decoding="async"
                className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
            />
        </div>
    );
};