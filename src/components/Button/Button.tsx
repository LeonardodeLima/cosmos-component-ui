import React from "react";
import { ButtonProps } from "./types";
import { StyledButton, BtnText } from "./styled";

const Button: React.FC<ButtonProps> = ({
  text,
  primary,
  disabled,
  size,
  variant = "default",
  onClick,
  "aria-label": ariaLabel,
  "aria-pressed": ariaPressed,
  ...props
}) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      primary={primary}
      disabled={disabled}
      size={size}
      variant={variant}
      data-text={variant === "glitch" ? text : undefined}
      aria-label={ariaLabel}
      aria-pressed={ariaPressed}
      {...props}
    >
      {variant === "glitch" ? <BtnText>{text}</BtnText> : text}
    </StyledButton>
  );
};

export default Button;
