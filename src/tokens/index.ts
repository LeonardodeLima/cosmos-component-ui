/**
 *
 * Importação completa:
 *   import { colors, spacing, radius } from '@cosmos/tokens'
 *
 * Importação direta (tree-shakeable):
 *   import { spacing } from '@cosmos/tokens/spacing'
 */

export * from './primitive'
export * from './colors'
export * from './spacing'
export * from './typography'
export * from './radius'
export * from './shadow'
export * from './motion'

import { colors, colorsDark } from './colors'
import { spacing }    from './spacing'
import { typography } from './typography'
import { radius }     from './radius'
import { shadow }     from './shadow'
import { motion }     from './motion'

export const theme = {
  colors,
  space: spacing,
  typography,
  radius,
  shadow,
  motion,
} as const

export const themeDark = {
  ...theme,
  colors: colorsDark,
} as const

export type CosmosTheme = typeof theme
