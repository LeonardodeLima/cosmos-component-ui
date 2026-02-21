import styled from "styled-components";
import { colors, radius, spacing, typography, shadow, motion } from "../../tokens";
import { InputProps } from "./types";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.xs};
  width: 100%;
`;

export const StyledLabel = styled.label<Pick<InputProps, "disabled">>`
  font-family: ${typography.fontFamily.sans};
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeight.medium};
  line-height: ${typography.lineHeight.normal};
  color: ${({ disabled }) =>
    disabled ? colors.text.disabled : colors.text.primary};
`;

export const StyledInput = styled.input<InputProps>`
  width: 100%;
  height: 40px;
  padding: 0 ${spacing.sm};

  font-family: ${typography.fontFamily.sans};
  font-size: ${typography.fontSize.md};
  line-height: ${typography.lineHeight.normal};
  color: ${colors.text.primary};

  background-color: ${colors.neutral.bgElevated};
  border-radius: ${radius.md};
  border: 1.5px solid
    ${({ disabled, error, success }) =>
      disabled
        ? colors.interactive.disabled
        : error
        ? colors.error.border
        : success
        ? colors.success.border
        : colors.neutral.borderStrong};

  outline: none;
  transition: border-color ${motion.duration.fast} ${motion.easing.easeInOut},
              box-shadow   ${motion.duration.fast} ${motion.easing.easeInOut};

  &::placeholder {
    color: ${colors.text.tertiary};
  }

  &:hover:not(:disabled) {
    border-color: ${({ error, success }) =>
      error
        ? colors.error.default
        : success
        ? colors.success.default
        : colors.neutral.borderStrong};
  }

  &:focus:not(:disabled) {
    border-color: ${({ error }) =>
      error ? colors.error.default : colors.interactive.focus};
    box-shadow: ${({ error }) =>
      error ? shadow.focusError : shadow.focusBrand};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${colors.neutral.bgSunken};
    color: ${colors.text.disabled};
    border-color: ${colors.interactive.disabled};
  }
`;

export const StyledMessage = styled.span<Pick<InputProps, "error" | "success">>`
  font-family: ${typography.fontFamily.sans};
  font-size: ${typography.fontSize.xs};
  line-height: ${typography.lineHeight.normal};
  color: ${({ error, success }) =>
    error
      ? colors.error.text
      : success
      ? colors.success.text
      : colors.text.secondary};
`;