'use client'

import { motion } from 'framer-motion'
import { useCallback, useState } from 'react'

const variants = {
  normal: { scale: 1 },
  animate: {
    scale: [1, 1.2, 0.9, 1.1, 1],
    transition: { duration: 0.4, ease: 'easeInOut' },
  },
}

const AngryIcon = ({ size = 24, color = 'currentColor', strokeWidth = 2, className }) => {
  const [isAnimating, setIsAnimating] = useState(false)

  const handleMouseEnter = useCallback(() => {
    if (!isAnimating) setIsAnimating(true)
  }, [isAnimating])

  const handleAnimationComplete = useCallback(() => {
    setIsAnimating(false)
  }, [])

  return (
    <div
      onMouseEnter={handleMouseEnter}
      style={{ display: 'inline-flex', cursor: 'pointer' }}
      className={className}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
      <motion.g
        variants={variants}
        animate={isAnimating ? 'animate' : 'normal'}
        style={{ originX: '12px', originY: '12px' }}
        onAnimationComplete={handleAnimationComplete}
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
        <path d="M7.5 8 10 9" />
        <path d="m14 9 2.5-1" />
        <path d="M9 10h.01" />
        <path d="M15 10h.01" />
      </motion.g>
      </svg>
    </div>
  )
}

export { AngryIcon }
