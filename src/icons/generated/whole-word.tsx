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

const WholeWordIcon = ({ size = 24, color = 'currentColor', strokeWidth = 2, className }) => {
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
        cx="7" cy="12" r="3"
        variants={variants}
        animate={isAnimating ? 'animate' : 'normal'}
        onAnimationComplete={handleAnimationComplete}
      />
      <motion.path
        d="M10 9v6"
        variants={variants}
        animate={isAnimating ? 'animate' : 'normal'}
        
          custom={1}
      />
      <motion.circle
        cx="17" cy="12" r="3"
        variants={variants}
        animate={isAnimating ? 'animate' : 'normal'}
        
          custom={2}
      />
      <motion.path
        d="M14 7v8"
        variants={variants}
        animate={isAnimating ? 'animate' : 'normal'}
        
          custom={3}
      />
      <motion.path
        d="M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"
        variants={variants}
        animate={isAnimating ? 'animate' : 'normal'}
        
          custom={4}
      />
      </svg>
    </div>
  )
}

export { WholeWordIcon }
