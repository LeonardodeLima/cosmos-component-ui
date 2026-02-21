import React from "react";
import { InputProps } from "./types";
import { StyledWrapper, StyledLabel, StyledInput, StyledMessage } from "./styled";

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
    <StyledWrapper>
      {label && (
        <StyledLabel htmlFor={id} disabled={disabled}>
          {label}
        </StyledLabel>
      )}

      <StyledInput
        id={id}
        type="text"
        onChange={onChange}
        disabled={disabled}
        error={error}
        success={success}
        placeholder={placeholder}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={message ? `${id}-message` : undefined}
        {...props}
      />

      {message && (
        <StyledMessage
          id={`${id}-message`}
          error={error}
          success={success}
          role={error ? "alert" : undefined}
        >
          {message}
        </StyledMessage>
      )}
    </StyledWrapper>
  );
};

export default Input;