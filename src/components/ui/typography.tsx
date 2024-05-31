import React from "react";
interface TypographyProps {
    children: React.ReactNode;
    className?: string;
}

export const TypographyH1: React.FC<TypographyProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <h1
            {...props}
            className={`scroll-m-20 text-4xl font-extrabold tracking-tight text-foreground lg:text-5xl ${className}`}
        >
            {children}
        </h1>
    );
};
export const TypographyH2: React.FC<TypographyProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <h2
            {...props}
            className={`scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight text-foreground first:mt-0 ${className}`}
        >
            {children}
        </h2>
    );
};
export const TypographyH3: React.FC<TypographyProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <h3
            {...props}
            className={`scroll-m-20 text-2xl font-semibold tracking-tight text-foreground ${className}`}
        >
            {children}
        </h3>
    );
};
export const TypographyH4: React.FC<TypographyProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <h4
            {...props}
            className={`scroll-m-20 text-xl font-semibold tracking-tight text-foreground ${className}`}
        >
            {children}
        </h4>
    );
};
export const TypographyP: React.FC<TypographyProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <p
            {...props}
            className={`leading-7 text-foreground [&:not(:first-child)]:mt-6 ${className}`}
        >
            {children}
        </p>
    );
};
export const TypographyBlockquote: React.FC<TypographyProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <blockquote
            {...props}
            className={`mt-6 border-l-2 pl-6 italic text-foreground ${className}`}
        >
            {children}
        </blockquote>
    );
};
export const TypographyInlineCode: React.FC<TypographyProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <code
            {...props}
            className={`relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-foreground ${className}`}
        >
            {children}
        </code>
    );
};

export const TypographyLead: React.FC<TypographyProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <p {...props} className={`text-xl text-muted-foreground${className}`}>
            {children}
        </p>
    );
};
export const TypographyLarge: React.FC<TypographyProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <div
            {...props}
            className={`text-lg font-semibold text-foreground ${className}`}
        >
            {children}
        </div>
    );
};
export const TypographySmall: React.FC<TypographyProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <small
            {...props}
            className={`text-sm font-medium leading-none text-foreground ${className}`}
        >
            {children}
        </small>
    );
};
export const TypographyMuted: React.FC<TypographyProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <p {...props} className={`text-sm text-muted-foreground  ${className}`}>
            {children}
        </p>
    );
};

interface LabelProps extends TypographyProps {
    htmlFor: string;
}

export const Label: React.FC<LabelProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <label
            {...props}
            className={`text-sm font-semibold text-muted-foreground ${className}`}
        >
            {children}
        </label>
    );
};
