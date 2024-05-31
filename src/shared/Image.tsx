import React from "react";

interface ImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
}

export const Image: React.FC<ImageProps> = ({ src, alt, ...props }) => {
    return <img src={src} alt={alt} {...props} />;
};
