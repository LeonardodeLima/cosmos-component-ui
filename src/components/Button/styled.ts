
import styled, { css } from "styled-components";
import { ButtonProps } from "./types";
import { theme as defaultTheme } from "@tokens";

export const StyledButton = styled.button<ButtonProps>`
  ${({ theme, primary, size, disabled }) => {
   
    const activeTheme = theme?.colors ? theme : defaultTheme;
    const { space, colors, typography, radius, motion } = activeTheme;
    
    return css`
      border: 0;
      line-height: ${typography.lineHeight.tight};
      font-family: ${typography.fontFamily.sans};
      font-size: ${size === "small"
        ? typography.fontSize.sm
        : typography.fontSize.md};
      cursor: pointer;
      font-weight: ${typography.fontWeight.bold};
      border-radius: ${radius.sm};
      display: inline-block;
      transition: all ${motion.duration.fast} ${motion.easing.easeInOut};
      
      padding: ${size === "small"
        ? `${space['2xs']} ${space.lg}`
        : size === "medium"
        ? `${space.xs} ${space.xl}`
        : `${space.sm} ${space.xl}`};
      
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
  }}
`;