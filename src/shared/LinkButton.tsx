import React, { forwardRef } from "react";

interface LinkButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
}

const LinkButton = forwardRef<HTMLDivElement, LinkButtonProps>(
    ({ onClick, children, className }, ref) => {
        return (
            <div
                className={className}
                role="button"
                onClick={onClick}
                onKeyDown={onClick}
                ref={ref}
            >
                {children}
            </div>
        );
    },
);

LinkButton.displayName = "LinkButton";

export { LinkButton };
