"use client";

import clsx from "clsx";

interface ButtonProps {
  children: string;
  className?: string;
  variant?: string;
  disabled?: boolean;
  onClick: () => void;
}

export function Button({
  children,
  className,
  variant,
  disabled,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "flex items-center justify-center gap-2 p-2 px-6 rounded-full transition-colors cursor-pointer",
        variant === "outline"
          ? "bg-white border border-gray-700 hover:bg-gray-100"
          : "bg-black text-white hover:bg-gray-800",
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
