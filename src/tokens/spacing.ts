/**
 * Escala t-shirt sizes com base 16px (md).
 */

export const spacing = {
  '3xs': '2px',
  '2xs': '4px',
  xs:    '8px',
  sm:    '12px',
  md:    '16px',
  lg:    '24px',
  xl:    '32px',
  '2xl': '48px',
  '3xl': '64px',
  '4xl': '96px',
  '5xl': '128px',
} as const

export type SpacingToken = keyof typeof spacing
