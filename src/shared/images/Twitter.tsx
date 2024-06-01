import React from "react";
import { IIconProps } from "@/shared/images/interfaces.tsx";

const TwitterIcon: React.FC<IIconProps> = ({ className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="512"
            height="512"
            x="0"
            y="0"
            viewBox="0 0 1226.37 1226.37"
            className={`dark:invert ${className}`}
        >
            <g>
                <path
                    d="M727.348 519.284 1174.075 0h-105.86L680.322 450.887 370.513 0H13.185l468.492 681.821L13.185 1226.37h105.866l409.625-476.152 327.181 476.152h357.328L727.322 519.284zM582.35 687.828l-47.468-67.894-377.686-540.24H319.8l304.797 435.991 47.468 67.894 396.2 566.721H905.661L582.35 687.854z"
                    fill="#000000"
                    opacity="1"
                    data-original="#000000"
                    className=""
                ></path>
            </g>
        </svg>
    );
};

export default TwitterIcon;
