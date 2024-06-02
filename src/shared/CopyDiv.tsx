import React from "react";
import { AnimatePresence, motion } from "framer-motion";

interface ICopyDiv {
    value: string | null;
    isDisabled?: boolean;
    children: React.ReactNode;
}

export const CopyDiv: React.FC<ICopyDiv> = ({
    value,
    isDisabled = false,
    children,
}) => {
    const [copied, setCopied] = React.useState<boolean>(false);

    const copyToClipboard = (text: string | null) => {
        if (!text || isDisabled) return;
        navigator.clipboard.writeText(text).then();
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 700);
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === "Enter" || event.key === " ") {
            copyToClipboard(value);
            event.preventDefault(); // Prevent the default action to avoid scrolling when using Space
        }
    };

    return (
        <div
            onClick={() => copyToClipboard(value)}
            onKeyDown={handleKeyDown}
            className={"relative z-0"}
            tabIndex={1}
            role="button"
        >
            <div className={`confetti-button ${copied && "animate thx-lucid"}`}>
                {children}
            </div>

            <AnimatePresence>
                {copied && (
                    <>
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: -5, rotate: -10 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className={
                                "text-bold absolute inset-x-0 -bottom-10 -right-4 z-10 mx-auto max-w-max rounded-md p-2 text-xs text-white"
                            }
                        >
                            Copied
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};
