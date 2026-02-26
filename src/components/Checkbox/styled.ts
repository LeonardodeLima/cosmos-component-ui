import styled, { css, keyframes } from "styled-components";
import { colors, radius, spacing, typography, motion, theme as defaultTheme } from "../../tokens";
import { CheckboxProps } from "./types";


const glitchAnimCheckbox = keyframes`
  0%   { transform: translate(-50%, -50%);                         clip-path: inset(0 0 0 0); }
  20%  { transform: translate(calc(-50% - 3px), calc(-50% + 2px)); clip-path: inset(50% 0 20% 0); }
  40%  { transform: translate(calc(-50% + 2px), calc(-50% - 1px)); clip-path: inset(20% 0 60% 0); }
  60%  { transform: translate(calc(-50% - 2px), calc(-50% + 1px)); clip-path: inset(80% 0  5% 0); }
  80%  { transform: translate(calc(-50% + 2px), calc(-50% - 2px)); clip-path: inset(30% 0 45% 0); }
  100% { transform: translate(-50%, -50%);                         clip-path: inset(0 0 0 0); }
`;

const glitchAnimText = keyframes`
  0%   { transform: translate(0);         clip-path: inset(0 0 0 0); }
  20%  { transform: translate(-3px, 2px); clip-path: inset(50% 0 20% 0); }
  40%  { transform: translate(2px, -1px); clip-path: inset(20% 0 60% 0); }
  60%  { transform: translate(-2px, 1px); clip-path: inset(80% 0  5% 0); }
  80%  { transform: translate(2px, -2px); clip-path: inset(30% 0 45% 0); }
  100% { transform: translate(0);         clip-path: inset(0 0 0 0); }
`;

const octagon = `polygon(15% 0, 85% 0, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0 85%, 0 15%)`;

export const HiddenInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
`;

export const GlitchMark = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60%;
  height: 60%;
  background-color: ${colors.brand.default};
  transform: translate(-50%, -50%) scale(0);
  opacity: 0;
  clip-path: ${octagon};
  transition: opacity ${motion.duration.normal} ${motion.easing.easeInOut},
              transform ${motion.duration.normal} cubic-bezier(0.18, 0.89, 0.32, 1.28);
`;

export const CheckMark = styled.svg`
  width: 10px;
  height: 10px;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  stroke: ${colors.text.inverse};
  opacity: 0;
  transform: scale(0.6);
  transition: opacity ${motion.duration.fast} ${motion.easing.spring},
              transform ${motion.duration.fast} ${motion.easing.spring};
`;

export const CheckboxBox = styled.span<Pick<CheckboxProps, "variant" | "disabled">>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  transition: border-color ${motion.duration.fast} ${motion.easing.easeInOut},
              background-color ${motion.duration.fast} ${motion.easing.easeInOut},
              box-shadow ${motion.duration.slow} ${motion.easing.easeInOut};

  ${({ variant, disabled }) =>
    variant === "glitch"
      ? css`
          border: 2px solid ${disabled ? colors.interactive.disabled : colors.brand.default};
          clip-path: ${octagon};
          background-color: transparent;
          opacity: ${disabled ? 0.5 : 1};
        `
      : css`
          border: 1.5px solid ${disabled ? colors.interactive.disabled : colors.neutral.borderStrong};
          border-radius: ${radius.xs};
          background-color: ${disabled ? colors.neutral.bgSunken : colors.neutral.bgElevated};
        `}
`;

export const LabelText = styled.span<Pick<CheckboxProps, "variant" | "disabled">>`
  position: relative;
  font-size: ${typography.fontSize.sm};
  line-height: ${typography.lineHeight.normal};
  transition: color ${motion.duration.fast} ${motion.easing.easeInOut},
              text-shadow ${motion.duration.fast} ${motion.easing.easeInOut};

  ${({ variant, disabled, theme }) => {
    const c = theme?.colors ?? defaultTheme.colors;
    const isDark = c.text.primary !== defaultTheme.colors.text.primary;
    const defaultLabelColor = isDark ? c.brand.default : c.text.primary;

    return variant === "glitch"
      ? css`
          font-family: ${typography.fontFamily.mono};
          font-weight: ${typography.fontWeight.bold};
          text-transform: uppercase;
          letter-spacing: ${typography.letterSpacing.wider};
          color: ${disabled ? c.text.disabled : c.brand.default};
        `
      : css`
          font-family: ${typography.fontFamily.sans};
          font-weight: ${typography.fontWeight.medium};
          color: ${disabled ? c.text.disabled : defaultLabelColor};
        `;
  }}
`;

export const CheckboxLabel = styled.label<Pick<CheckboxProps, "disabled" | "variant">>`
  display: inline-flex;
  align-items: center;
  gap: ${spacing.xs};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  user-select: none;
  position: relative;

  /* ── Checked: show mark ── */
  ${HiddenInput}:checked ~ ${CheckboxBox} ${GlitchMark} {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }

  ${HiddenInput}:checked ~ ${CheckboxBox} ${CheckMark} {
    opacity: 1;
    transform: scale(1);
  }

  /* ── Checked: fill box (default) ── */
  ${HiddenInput}:checked ~ ${CheckboxBox} {
    ${({ variant }) =>
      variant !== "glitch" &&
      css`
        background-color: ${colors.brand.default};
        border-color: ${colors.brand.default};
      `}
    ${({ variant }) =>
      variant === "glitch" &&
      css`border-color: ${colors.brand.default};`}
  }

  /* ── Checked: glitch mark animation ── */
  ${({ variant }) =>
    variant === "glitch" &&
    css`
      ${HiddenInput}:checked ~ ${CheckboxBox} ${GlitchMark} {
        animation: ${glitchAnimCheckbox} ${motion.duration.slow} both;
      }

      ${HiddenInput}:checked ~ ${LabelText} {
        color: ${colors.brand.default};
        text-shadow: 0 0 8px ${colors.brand.default}b3;
      }
    `}

  /* ── Hover: default ── */
  &:hover ${CheckboxBox} {
    ${({ variant, disabled }) =>
      !disabled &&
      variant !== "glitch" &&
      css`border-color: ${colors.interactive.hover};`}
  }

  /* ── Hover: glitch box glow + text glitch ── */
  ${({ variant, disabled }) =>
    variant === "glitch" &&
    !disabled &&
    css`
      &:hover ${CheckboxBox} {
        box-shadow: 0 0 10px ${colors.brand.default};
      }

      &:hover ${LabelText}::before,
      &:hover ${LabelText}::after {
        content: attr(data-text);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      &:hover ${LabelText}::before {
        color: ${colors.accent.default};
        animation: ${glitchAnimText} ${motion.duration.slow}
          cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      }

      &:hover ${LabelText}::after {
        color: ${colors.brand.default};
        animation: ${glitchAnimText} ${motion.duration.slow}
          cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both;
      }
    `}

  /* ── Focus visible ── */
  ${HiddenInput}:focus-visible ~ ${CheckboxBox} {
    outline: 2px solid ${colors.interactive.focus};
    outline-offset: 2px;
  }

  /* ── Reduced motion ── */
  @media (prefers-reduced-motion: reduce) {
    ${GlitchMark}, ${CheckMark}, ${LabelText} {
      transition: none;
      animation: none !important;
    }
    &:hover ${LabelText}::before,
    &:hover ${LabelText}::after {
      animation: none !important;
    }
  }
`;
