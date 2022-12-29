import React from "react";
import { ButtonProps } from "./types";
import { StyledButton } from "./styled"

const Button: React.FC<ButtonProps> = ({ text, primary, disabled, size, onClick, ...props }) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      primary={primary}
      disabled={disabled}
      size={size}
      {...props}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
