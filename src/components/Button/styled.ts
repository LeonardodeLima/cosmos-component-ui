import styled, { css, keyframes } from "styled-components";
import { ButtonProps } from "./types";
import { theme as defaultTheme } from "@tokens";

const glitchAnim = keyframes`
  0%   { transform: translate(0);         clip-path: inset(0 0 0 0); }
  20%  { transform: translate(-5px, 3px); clip-path: inset(50% 0 20% 0); }
  40%  { transform: translate(3px, -2px); clip-path: inset(20% 0 60% 0); }
  60%  { transform: translate(-4px, 2px); clip-path: inset(80% 0  5% 0); }
  80%  { transform: translate(4px, -3px); clip-path: inset(30% 0 45% 0); }
  100% { transform: translate(0);         clip-path: inset(0 0 0 0); }
`;


export const BtnText = styled.span`
  position: relative;
  z-index: 1;
  transition: opacity 0.2s ease;
`;


const baseStyles = ({ theme, primary, size, disabled }: ButtonProps & { theme: any }) => {
  const activeTheme = theme?.colors ? theme : defaultTheme;
  const { space, colors, typography, radius, motion } = activeTheme;

  return css`
    border: 0;
    line-height: ${typography.lineHeight.tight};
    font-family: ${typography.fontFamily.sans};
    font-size: ${size === "small" ? typography.fontSize.sm : typography.fontSize.md};
    cursor: pointer;
    font-weight: ${typography.fontWeight.bold};
    border-radius: ${radius.sm};
    display: inline-block;
    transition: all ${motion.duration.fast} ${motion.easing.easeInOut};

    padding: ${
      size === "small"
        ? `${space["2xs"]} ${space.lg}`
        : size === "medium"
        ? `${space.xs} ${space.xl}`
        : `${space.sm} ${space.xl}`
    };

    color: ${primary ? colors.text.inverse : colors.text.primary};
    background-color: ${primary ? colors.brand.default : colors.neutral.bgSunken};
    opacity: ${disabled ? 0.5 : 1};

    &:hover {
      background-color: ${primary ? colors.brand.hover : colors.neutral.bgElevated};
    }

    &:active {
      background-color: ${primary ? colors.brand.active : colors.neutral.bgSunken};
      transform: scale(0.98);
    }

    &:disabled {
      cursor: not-allowed;
      background-color: ${colors.interactive.disabled};
      color: ${colors.text.disabled};
    }
  `;
};


const glitchStyles = ({ theme, size, disabled }: ButtonProps & { theme: any }) => {
  const activeTheme = theme?.colors ? theme : defaultTheme;
  const { space, colors, typography, radius, motion } = activeTheme;

  const glitchPrimary = colors.brand.default;
  const glitchAccent  = colors.accent.default;
  const glitchBg      = colors.neutral.bgSunken;

  return css`
    background-color: transparent;
    border: 2px solid ${glitchPrimary};
    color: ${glitchPrimary};
    font-family: ${typography.fontFamily.mono};
    font-size: ${size === "small" ? typography.fontSize.sm : typography.fontSize.md};
    font-weight: ${typography.fontWeight.bold};
    text-transform: uppercase;
    letter-spacing: ${typography.letterSpacing.widest};
    line-height: ${typography.lineHeight.tight};
    border-radius: ${radius.sm};
    cursor: pointer;
    position: relative;
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    opacity: ${disabled ? 0.5 : 1};

    padding: ${
      size === "small"
        ? `${space["2xs"]} ${space.lg}`
        : size === "medium"
        ? `${space.xs} ${space.xl}`
        : `${space.sm} ${space.xl}`
    };

    transition:
      background-color ${motion.duration.slow} ${motion.easing.easeInOut},
      color             ${motion.duration.slow} ${motion.easing.easeInOut},
      box-shadow        ${motion.duration.slow} ${motion.easing.easeInOut};

    &:hover ${BtnText},
    &:focus ${BtnText} {
      opacity: 0;
    }

    &::before,
    &::after {
      content: attr(data-text);
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${glitchPrimary};
      font-family: ${typography.fontFamily.mono};
      font-weight: ${typography.fontWeight.bold};
      font-size: ${size === "small" ? typography.fontSize.sm : typography.fontSize.md};
      text-transform: uppercase;
      letter-spacing: ${typography.letterSpacing.widest};
      opacity: 0;
      transition: opacity 0.2s ease;
    }

    &:hover,
    &:focus {
      background-color: ${glitchPrimary};
      color: ${glitchBg};
      box-shadow: 0 0 20px ${glitchPrimary}, 0 0 40px ${glitchAccent}55;
      outline: none;
    }

    &:hover::before,
    &:focus::before {
      opacity: 1;
      color: ${glitchAccent};
      animation: ${glitchAnim} ${motion.duration.slower} ${motion.easing.easeInOut} both;
    }

    &:hover::after,
    &:focus::after {
      opacity: 1;
      color: ${colors.text.inverse};
      animation: ${glitchAnim} ${motion.duration.slower} ${motion.easing.easeInOut} reverse both;
    }

    &:active {
      transform: scale(0.97);
    }

    &:disabled {
      cursor: not-allowed;
      border-color: ${colors.interactive.disabled};
      color: ${colors.text.disabled};
      box-shadow: none;
    }

    @media (prefers-reduced-motion: reduce) {
      &::before,
      &::after { animation: none !important; opacity: 0 !important; }
      &:hover ${BtnText},
      &:focus ${BtnText} { opacity: 1; }
    }
  `;
};


export const StyledButton = styled.button<ButtonProps>`
  ${({ theme, primary, size, disabled, variant }) =>
    variant === "glitch"
      ? glitchStyles({ theme, primary, size, disabled })
      : baseStyles({ theme, primary, size, disabled })}
`;
