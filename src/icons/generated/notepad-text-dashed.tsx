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

const NotepadTextDashedIcon = ({ size = 24, color = 'currentColor', strokeWidth = 2, className }) => {
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
        d="M8 2v4"
        variants={variants}
        animate={isAnimating ? 'animate' : 'normal'}
        onAnimationComplete={handleAnimationComplete}
      />
      <motion.path
        d="M12 2v4"
        variants={variants}
        animate={isAnimating ? 'animate' : 'normal'}
        
          custom={1}
      />
      <motion.path
        d="M16 2v4"
        variants={variants}
        animate={isAnimating ? 'animate' : 'normal'}
        
          custom={2}
      />
      <motion.path
        d="M16 4h2a2 2 0 0 1 2 2v2"
        variants={variants}
        animate={isAnimating ? 'animate' : 'normal'}
        
          custom={3}
      />
      <motion.path
        d="M20 12v2"
        variants={variants}
        animate={isAnimating ? 'animate' : 'normal'}
        
          custom={4}
      />
      <motion.path
        d="M20 18v2a2 2 0 0 1-2 2h-1"
        variants={variants}
        animate={isAnimating ? 'animate' : 'normal'}
        
          custom={5}
      />
      <motion.path
        d="M13 22h-2"
        variants={variants}
        animate={isAnimating ? 'animate' : 'normal'}
        
          custom={6}
      />
      <motion.path
        d="M7 22H6a2 2 0 0 1-2-2v-2"
        variants={variants}
        animate={isAnimating ? 'animate' : 'normal'}
        
          custom={7}
      />
      <motion.path
        d="M4 14v-2"
        variants={variants}
        animate={isAnimating ? 'animate' : 'normal'}
        
          custom={8}
      />
      <motion.path
        d="M4 8V6a2 2 0 0 1 2-2h2"
        variants={variants}
        animate={isAnimating ? 'animate' : 'normal'}
        
          custom={9}
      />
      <motion.path
        d="M8 10h6"
        variants={variants}
        animate={isAnimating ? 'animate' : 'normal'}
        
          custom={10}
      />
      <motion.path
        d="M8 14h8"
        variants={variants}
        animate={isAnimating ? 'animate' : 'normal'}
        
          custom={11}
      />
      <motion.path
        d="M8 18h5"
        variants={variants}
        animate={isAnimating ? 'animate' : 'normal'}
        
          custom={12}
      />
      </svg>
    </div>
  )
}

export { NotepadTextDashedIcon }
