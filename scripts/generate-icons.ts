/**
 * Cosmos Design System — Icon Generator
 *
 * Output: src/icons/generated/
 */

const fs = require('fs')
const path = require('path')


const iconNodes = require('lucide-static/icon-nodes.json')
const OUTPUT_DIR = path.resolve(__dirname, '../src/icons/generated')


const ANIMATION_MAP = {
  // Draw
  'check': 'draw', 'check-check': 'draw', 'circle-check': 'draw',
  'file-check': 'draw', 'folder-check': 'draw', 'user-check': 'draw',
  'x': 'draw', 'ban': 'draw', 'minus': 'draw', 'plus': 'draw',
  'slash': 'draw', 'link': 'draw',

  // Spin
  'loader': 'spin', 'loader-2': 'spin', 'loader-pinwheel': 'spin',
  'refresh-cw': 'spin', 'refresh-ccw': 'spin', 'settings': 'spin',
  'cog': 'spin', 'rotate-cw': 'spin', 'rotate-ccw': 'spin',
  'refresh-cw-off': 'spin', 'refresh-ccw-dot': 'spin',

  // Shake
  'bell': 'shake', 'bell-ring': 'shake', 'bell-electric': 'shake',
  'phone': 'shake', 'phone-call': 'shake', 'zap': 'shake',
  'wifi': 'shake', 'radio': 'shake', 'radio-tower': 'shake',

  // Fill
  'heart': 'fill', 'star': 'fill', 'bookmark': 'fill',
  'thumbs-up': 'fill', 'thumbs-down': 'fill',

  // Pulse
  'smile': 'pulse', 'laugh': 'pulse', 'angry': 'pulse',
  'frown': 'pulse', 'meh': 'pulse', 'search': 'pulse',
  'eye': 'pulse', 'eye-off': 'pulse', 'scan-face': 'pulse',

  // Bounce
  'download': 'bounce', 'upload': 'bounce',
  'arrow-down': 'bounce', 'arrow-up': 'bounce',
  'arrow-left': 'bounce', 'arrow-right': 'bounce',
  'arrow-big-down': 'bounce', 'arrow-big-up': 'bounce',
  'chevron-down': 'bounce', 'chevron-up': 'bounce',
  'chevron-left': 'bounce', 'chevron-right': 'bounce',
  'move-down': 'bounce', 'move-up': 'bounce',
}

function getAnimationType(iconName) {
  if (ANIMATION_MAP[iconName]) return ANIMATION_MAP[iconName]
  if (iconName.startsWith('arrow-')) return 'bounce'
  if (iconName.startsWith('chevron-')) return 'bounce'
  if (iconName.includes('loader')) return 'spin'
  if (iconName.includes('refresh')) return 'spin'
  if (iconName.includes('rotate')) return 'spin'
  if (iconName.includes('check')) return 'draw'
  if (iconName.includes('bell')) return 'shake'
  if (iconName.includes('heart')) return 'fill'
  if (iconName.includes('star')) return 'fill'
  return 'draw'
}

function getVariants(type) {
  switch (type) {
    case 'draw': return `
const variants = {
  normal: { pathLength: 1, opacity: 1 },
  animate: {
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}`
    case 'spin': return `
const variants = {
  normal: { rotate: 0 },
  animate: { rotate: 90, transition: { duration: 0.4, ease: 'easeInOut' } },
}`
    case 'shake': return `
const variants = {
  normal: { rotate: 0 },
  animate: {
    rotate: [0, -15, 15, -10, 10, -6, 6, 0],
    transition: { duration: 0.6, ease: 'easeInOut' },
  },
}`
    case 'pulse': return `
const variants = {
  normal: { scale: 1 },
  animate: {
    scale: [1, 1.2, 0.9, 1.1, 1],
    transition: { duration: 0.4, ease: 'easeInOut' },
  },
}`
    case 'bounce': return `
const variants = {
  normal: { y: 0 },
  animate: {
    y: [0, 4, -2, 2, 0],
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
}`
    case 'fill': return `
const variants = {
  normal: { scale: 1, fill: 'none' },
  animate: {
    scale: [1, 1.2, 0.9, 1.1, 1],
    fill: ['none', 'currentColor', 'currentColor', 'currentColor', 'currentColor'],
    transition: { duration: 0.4, ease: 'easeInOut' },
  },
}`
  }
}


function attrsToString(attrs) {
  return Object.entries(attrs)
    .filter(([k]) => k !== 'key')
    .map(([k, v]) => `${k}="${v}"`)
    .join(' ')
}


function getSvgContent(nodes, type) {
  const useGroup = ['spin', 'shake', 'bounce', 'pulse'].includes(type)

  if (useGroup) {
    const originStyle = type === 'shake'
      ? `style={{ originX: '12px', originY: '4px' }}`
      : `style={{ originX: '12px', originY: '12px' }}`

    const children = nodes.map(([el, attrs]) =>
      `        <${el} ${attrsToString(attrs)} />`
    ).join('\n')

    return `      <motion.g
        variants={variants}
        animate={isAnimating ? 'animate' : 'normal'}
        ${originStyle}
        onAnimationComplete={handleAnimationComplete}
      >
${children}
      </motion.g>`
  }

  return nodes.map(([el, attrs], i) => {
    const delay = i > 0 ? `\n          custom={${i}}` : ''
    return `      <motion.${el}
        ${attrsToString(attrs)}
        variants={variants}
        animate={isAnimating ? 'animate' : 'normal'}
        ${i === 0 ? 'onAnimationComplete={handleAnimationComplete}' : ''}${delay}
      />`
  }).join('\n')
}

function toPascalCase(str) {
  const cleanStr = str
    .replace('distribute-', '')
    .replace('-distribute', '')
    .replace('horizontal', 'h')
    .replace('vertical', 'v')
  return cleanStr.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')
}

function generateComponent(iconName, nodes) {
  const componentName = `${toPascalCase(iconName)}Icon`
  const type = getAnimationType(iconName)
  const variantsCode = getVariants(type)
  const svgContent = getSvgContent(nodes, type)

  return `'use client'

import { motion } from 'framer-motion'
import { useCallback, useState } from 'react'
${variantsCode}

const ${componentName} = ({ size = 24, color = 'currentColor', strokeWidth = 2, className }) => {
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
${svgContent}
      </svg>
    </div>
  )
}

export { ${componentName} }
`
}

function main() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true })
  }

  const iconNames = Object.keys(iconNodes)
  console.log(`\n Gerando ${iconNames.length} ícones...\n`)

  const exports = []

  iconNames.forEach((iconName, i) => {
    const nodes = iconNodes[iconName]
    const componentName = `${toPascalCase(iconName)}Icon`
    const filePath = path.join(OUTPUT_DIR, `${iconName}.tsx`)

    fs.writeFileSync(filePath, generateComponent(iconName, nodes), 'utf-8')
    exports.push(`export { ${componentName} } from './${iconName}'`)

    if ((i + 1) % 100 === 0) {
      console.log(`  ✓ ${i + 1}/${iconNames.length}`)
    }
  })

  const indexContent = `/**
 * Cosmos Design System — Generated Icons
 * Auto-gerado por scripts/generate-icons.js
 * NÃO edite manualmente — rode o script novamente para atualizar
 * Total: ${iconNames.length} ícones
 */

${exports.join('\n')}
`
  fs.writeFileSync(path.join(OUTPUT_DIR, 'index.ts'), indexContent, 'utf-8')

  console.log(`\n${iconNames.length} ícones gerados em src/icons/generated/`)
  console.log(`index.ts com ${iconNames.length} exports\n`)
}

main()