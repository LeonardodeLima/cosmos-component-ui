import { MouseEventHandler } from "react";
export interface ButtonProps {
  text?: string;
  primary?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  variant?: "default" | "glitch";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
