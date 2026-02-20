import { primitive } from './primitive'

export const colors = {
  brand: {
    default:  primitive.nebula[500],
    hover:    primitive.nebula[600],
    active:   primitive.nebula[700],
    subtle:   primitive.nebula[50],
    emphasis: primitive.nebula[900],
  },
  accent: {
    default: primitive.aurora[500],
    hover:   primitive.aurora[600],
    subtle:  primitive.aurora[50],
  },
  neutral: {
    bg:           primitive.stardust[50],
    bgElevated:   primitive.stardust[0],
    bgSunken:     primitive.stardust[100],
    border:       primitive.stardust[200],
    borderStrong: primitive.stardust[300],
  },
  text: {
    primary:   primitive.stardust[950],
    secondary: primitive.stardust[700],
    tertiary:  primitive.stardust[500],
    disabled:  primitive.stardust[400],
    inverse:   primitive.stardust[0],
    brand:     primitive.nebula[600],
    accent:    primitive.aurora[700],
  },
  success: {
    default: primitive.nova[500],
    hover:   primitive.nova[600],
    subtle:  primitive.nova[50],
    text:    primitive.nova[800],
    border:  primitive.nova[300],
  },
  warning: {
    default: primitive.supernova[500],
    hover:   primitive.supernova[600],
    subtle:  primitive.supernova[50],
    text:    primitive.supernova[800],
    border:  primitive.supernova[300],
  },
  error: {
    default: primitive.pulsar[500],
    hover:   primitive.pulsar[600],
    subtle:  primitive.pulsar[50],
    text:    primitive.pulsar[800],
    border:  primitive.pulsar[300],
  },
  info: {
    default: primitive.aurora[500],
    hover:   primitive.aurora[600],
    subtle:  primitive.aurora[50],
    text:    primitive.aurora[800],
    border:  primitive.aurora[300],
  },
  interactive: {
    default:  primitive.nebula[500],
    hover:    primitive.nebula[600],
    active:   primitive.nebula[700],
    focus:    primitive.nebula[400],
    disabled: primitive.stardust[300],
  },
} as const

export const colorsDark = {
  ...colors,
  neutral: {
    bg:           primitive.stardust[950],
    bgElevated:   primitive.stardust[900],
    bgSunken:     primitive.stardust[1000],
    border:       primitive.stardust[800],
    borderStrong: primitive.stardust[700],
  },
  text: {
    primary:   primitive.stardust[50],
    secondary: primitive.stardust[300],
    tertiary:  primitive.stardust[500],
    disabled:  primitive.stardust[600],
    inverse:   primitive.stardust[950],
    brand:     primitive.nebula[300],
    accent:    primitive.aurora[300],
  },
  brand: {
    ...colors.brand,
    default: primitive.nebula[400],
    hover:   primitive.nebula[300],
    subtle:  primitive.nebula[950],
  },
} as const

export type Colors = typeof colors
