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

const GitPullRequestIcon = ({ size = 24, color = 'currentColor', strokeWidth = 2, className }) => {
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
        cx="18" cy="18" r="3"
        variants={variants}
        animate={isAnimating ? 'animate' : 'normal'}
        onAnimationComplete={handleAnimationComplete}
      />
      <motion.circle
        cx="6" cy="6" r="3"
        variants={variants}
        animate={isAnimating ? 'animate' : 'normal'}
        
          custom={1}
      />
      <motion.path
        d="M13 6h3a2 2 0 0 1 2 2v7"
        variants={variants}
        animate={isAnimating ? 'animate' : 'normal'}
        
          custom={2}
      />
      <motion.line
        x1="6" x2="6" y1="9" y2="21"
        variants={variants}
        animate={isAnimating ? 'animate' : 'normal'}
        
          custom={3}
      />
      </svg>
    </div>
  )
}

export { GitPullRequestIcon }
