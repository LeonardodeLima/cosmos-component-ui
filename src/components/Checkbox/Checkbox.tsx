import React, { useId } from "react";
import { CheckboxProps } from "./types";
import {
  CheckboxLabel,
  CheckboxBox,
  GlitchMark,
  CheckMark,
  HiddenInput,
  LabelText,
} from "./styled";

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  checked,
  defaultChecked,
  disabled,
  variant = "default",
  onChange,
  ...props
}) => {
  const autoId = useId();
  const inputId = id ?? autoId;

  return (
    <CheckboxLabel htmlFor={inputId} disabled={disabled} variant={variant}>
      <HiddenInput
        type="checkbox"
        id={inputId}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={onChange}
        {...props}
      />

      <CheckboxBox variant={variant} disabled={disabled}>
        {variant === "glitch" ? (
          <GlitchMark />
        ) : (
          <CheckMark viewBox="0 0 12 12" aria-hidden="true">
            <polyline points="1.5,6 4.5,9.5 10.5,2.5" />
          </CheckMark>
        )}
      </CheckboxBox>

      {label && (
        <LabelText variant={variant} disabled={disabled} data-text={label}>
          {label}
        </LabelText>
      )}
    </CheckboxLabel>
  );
};

export default Checkbox;
