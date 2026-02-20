'use client'

import { motion } from 'framer-motion'
import { useCallback, useState } from 'react'

const variants = {
  normal: { pathLength: 1, opacity: 1 },
  animate: {
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

const AccessibilityIcon = ({ size = 24, color = 'currentColor', strokeWidth = 2, className }) => {
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
      <motion.circle
        cx="16" cy="4" r="1"
        variants={variants}
        animate={isAnimating ? 'animate' : 'normal'}
        onAnimationComplete={handleAnimationComplete}
      />
      <motion.path
        d="m18 19 1-7-6 1"
        variants={variants}
        animate={isAnimating ? 'animate' : 'normal'}
        
          custom={1}
      />
      <motion.path
        d="m5 8 3-3 5.5 3-2.36 3.5"
        variants={variants}
        animate={isAnimating ? 'animate' : 'normal'}
        
          custom={2}
      />
      <motion.path
        d="M4.24 14.5a5 5 0 0 0 6.88 6"
        variants={variants}
        animate={isAnimating ? 'animate' : 'normal'}
        
          custom={3}
      />
      <motion.path
        d="M13.76 17.5a5 5 0 0 0-6.88-6"
        variants={variants}
        animate={isAnimating ? 'animate' : 'normal'}
        
          custom={4}
      />
      </svg>
    </div>
  )
}

export { AccessibilityIcon }
