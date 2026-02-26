import React, { useId } from "react";
import { InputProps } from "./types";
import { StyledWrapper, StyledLabel, StyledInput, StyledMessage } from "./styled";

const Input: React.FC<InputProps> = ({
  id,
  label,
  error,
  message,
  success,
  disabled,
  required,
  placeholder,
  onChange,
  "aria-label": ariaLabel,
  ...props
}) => {
  const autoId = useId();
  const inputId = id ?? autoId;

  return (
    <StyledWrapper>
      {label && (
        <StyledLabel htmlFor={inputId} disabled={disabled}>
          {label}
          {required && <span aria-hidden="true"> *</span>}
        </StyledLabel>
      )}

      <StyledInput
        id={inputId}
        type="text"
        onChange={onChange}
        disabled={disabled}
        error={error}
        success={success}
        placeholder={placeholder}
        required={required}
        aria-required={required ? "true" : undefined}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={message ? `${inputId}-message` : undefined}
        aria-label={!label ? ariaLabel : undefined}
        {...props}
      />

      {message && (
        <StyledMessage
          id={`${inputId}-message`}
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
