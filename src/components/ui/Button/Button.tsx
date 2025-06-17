"use client";

import clsx from "clsx";
import styles from "./Button.module.scss";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: string;
  className?: string;
  type?: "button" | "submit";
}

const ButtonComponent = ({
  children,
  onClick,
  variant = "primary",
  className,
  type = "button",
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(styles[variant], className)}
    >
      {children}
    </button>
  );
};

export default React.memo(ButtonComponent);
ButtonComponent.displayName = "Button";
