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

const SunMediumIcon = ({ size = 24, color = 'currentColor', strokeWidth = 2, className }) => {
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
        cx="12" cy="12" r="4"
        variants={variants}
        animate={isAnimating ? 'animate' : 'normal'}
        onAnimationComplete={handleAnimationComplete}
      />
      <motion.path
        d="M12 3v1"
        variants={variants}
        animate={isAnimating ? 'animate' : 'normal'}
        
          custom={1}
      />
      <motion.path
        d="M12 20v1"
        variants={variants}
        animate={isAnimating ? 'animate' : 'normal'}
        
          custom={2}
      />
      <motion.path
        d="M3 12h1"
        variants={variants}
        animate={isAnimating ? 'animate' : 'normal'}
        
          custom={3}
      />
      <motion.path
        d="M20 12h1"
        variants={variants}
        animate={isAnimating ? 'animate' : 'normal'}
        
          custom={4}
      />
      <motion.path
        d="m18.364 5.636-.707.707"
        variants={variants}
        animate={isAnimating ? 'animate' : 'normal'}
        
          custom={5}
      />
      <motion.path
        d="m6.343 17.657-.707.707"
        variants={variants}
        animate={isAnimating ? 'animate' : 'normal'}
        
          custom={6}
      />
      <motion.path
        d="m5.636 5.636.707.707"
        variants={variants}
        animate={isAnimating ? 'animate' : 'normal'}
        
          custom={7}
      />
      <motion.path
        d="m17.657 17.657.707.707"
        variants={variants}
        animate={isAnimating ? 'animate' : 'normal'}
        
          custom={8}
      />
      </svg>
    </div>
  )
}

export { SunMediumIcon }
