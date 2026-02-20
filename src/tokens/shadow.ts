/**
 * Escala de elevação + focus rings para acessibilidade.
 */

export const shadow = {
  none:  'none',
  xs:    '0 1px 2px 0 rgba(6, 8, 16, 0.06)',
  sm:    '0 1px 4px 0 rgba(6, 8, 16, 0.08), 0 1px 2px -1px rgba(6, 8, 16, 0.06)',
  md:    '0 4px 8px -2px rgba(6, 8, 16, 0.10), 0 2px 4px -2px rgba(6, 8, 16, 0.06)',
  lg:    '0 12px 24px -4px rgba(6, 8, 16, 0.12), 0 4px 8px -2px rgba(6, 8, 16, 0.08)',
  xl:    '0 24px 48px -8px rgba(6, 8, 16, 0.18), 0 8px 16px -4px rgba(6, 8, 16, 0.10)',
 
  // Focus rings — acessibilidade
  focusBrand: '0 0 0 4px rgba(108, 63, 255, 0.24)',
  focusError: '0 0 0 4px rgba(248, 59, 59, 0.24)',
} as const

export type ShadowToken = keyof typeof shadow
