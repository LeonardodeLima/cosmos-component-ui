/**
 * Typography Tokens
 */

export const typography = {
  fontFamily: {
    sans: "'Inter', system-ui, -apple-system, sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', monospace",
  },
  fontSize: {
    xs:    '12px',
    sm:    '14px',
    md:    '16px',
    lg:    '18px',
    xl:    '20px',
    '2xl': '24px',
    '3xl': '30px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '60px',
  },
  fontWeight: {
    regular:  400,
    medium:   500,
    semibold: 600,
    bold:     700,
  },
  lineHeight: {
    tight:   1.25,
    snug:    1.375,
    normal:  1.5,
    relaxed: 1.625,
  },
  letterSpacing: {
    tight:   '-0.025em',
    normal:   '0em',
    wide:     '0.025em',
    wider:    '0.05em',
    widest:   '0.1em',
  },
} as const

export type Typography = typeof typography
