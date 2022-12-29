import React from "react";
import { InputProps } from "./types";
import { StyledLabel, StyledText, StyledInput, StyledMessage } from "./styled"

const Input: React.FC<InputProps> = ({
  id,
  label,
  error,
  message,
  success,
  disabled,
  placeholder,
  onChange,
  ...props
}) => {
  return (
    <>
      <StyledLabel>
        <StyledText disabled={disabled} error={error}>
          {label}
        </StyledText>
      </StyledLabel>
      <StyledInput
        id={id}
        type="text"
        onChange={onChange}
        disabled={disabled}
        error={error}
        success={success}
        placeholder={placeholder}
        {...props}
      ></StyledInput>
      <StyledMessage>
        <StyledText error={error}>{message}</StyledText>
      </StyledMessage>
    </>
  );
};

export default Input;
