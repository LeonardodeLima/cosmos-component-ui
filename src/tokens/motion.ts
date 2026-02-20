/**
 * Durações e easings para animações e transições.
 */

export const motion = {
  duration: {
    instant: '0ms',
    fast:    '100ms',
    normal:  '200ms',
    slow:    '300ms',
    slower:  '500ms',
  },
  easing: {
    linear:    'linear',
    easeIn:    'cubic-bezier(0.4, 0, 1, 1)',
    easeOut:   'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    spring:    'cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
} as const

export type Motion = typeof motion
