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

const MessageSquareDashedIcon = ({ size = 24, color = 'currentColor', strokeWidth = 2, className }) => {
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
      <motion.path
        d="M14 3h2"
        variants={variants}
        animate={isAnimating ? 'animate' : 'normal'}
        onAnimationComplete={handleAnimationComplete}
      />
      <motion.path
        d="M16 19h-2"
        variants={variants}
        animate={isAnimating ? 'animate' : 'normal'}
        
          custom={1}
      />
      <motion.path
        d="M2 12v-2"
        variants={variants}
        animate={isAnimating ? 'animate' : 'normal'}
        
          custom={2}
      />
      <motion.path
        d="M2 16v5.286a.71.71 0 0 0 1.212.502l1.149-1.149"
        variants={variants}
        animate={isAnimating ? 'animate' : 'normal'}
        
          custom={3}
      />
      <motion.path
        d="M20 19a2 2 0 0 0 2-2v-1"
        variants={variants}
        animate={isAnimating ? 'animate' : 'normal'}
        
          custom={4}
      />
      <motion.path
        d="M22 10v2"
        variants={variants}
        animate={isAnimating ? 'animate' : 'normal'}
        
          custom={5}
      />
      <motion.path
        d="M22 6V5a2 2 0 0 0-2-2"
        variants={variants}
        animate={isAnimating ? 'animate' : 'normal'}
        
          custom={6}
      />
      <motion.path
        d="M4 3a2 2 0 0 0-2 2v1"
        variants={variants}
        animate={isAnimating ? 'animate' : 'normal'}
        
          custom={7}
      />
      <motion.path
        d="M8 19h2"
        variants={variants}
        animate={isAnimating ? 'animate' : 'normal'}
        
          custom={8}
      />
      <motion.path
        d="M8 3h2"
        variants={variants}
        animate={isAnimating ? 'animate' : 'normal'}
        
          custom={9}
      />
      </svg>
    </div>
  )
}

export { MessageSquareDashedIcon }
