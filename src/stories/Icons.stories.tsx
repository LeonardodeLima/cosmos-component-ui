import React, { useState, useMemo } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import * as Icons from '../icons'

interface IconEntry {
  name: string
  Component: React.FC<any>
  hint?: string
}

const ALL_ICONS: IconEntry[] = Object.entries(Icons)
  .filter(([name]) => name.endsWith('Icon'))
  .map(([name, Component]) => ({
    name: name.replace('Icon', ''),
    Component: Component as React.FC<any>,
    hint: 'hover',
  }))
  .sort((a, b) => a.name.localeCompare(b.name))

interface CatalogueProps {
  size: number
  color: string
  strokeWidth: number
}

const Catalogue = ({ size, color, strokeWidth }: CatalogueProps) => {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredIcons = useMemo(() => {
    return ALL_ICONS.filter(icon =>
      icon.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [searchTerm])

  return (
  <div
    style={{
      fontFamily: "'Inter', system-ui, sans-serif",
      padding: '40px',
      background: '#f7f8fa',
      minHeight: '100vh',
    }}
  >
    <div style={{ marginBottom: '40px' }}>
      <h1 style={{ fontSize: '22px', fontWeight: 700, color: '#131820', margin: '0 0 6px' }}>
        Cosmos Icons
      </h1>
      <p style={{ fontSize: '14px', color: '#5e6b7d', margin: 0 }}>
        Animados com <strong>Motion</strong> · Ícones do <strong>Lucide</strong> · <strong>{ALL_ICONS.length}</strong> ícones
      </p>
    </div>

    <div style={{ marginBottom: '24px' }}>
      <input
        type="text"
        placeholder="Buscar ícones..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: '100%',
          maxWidth: '400px',
          padding: '12px 16px',
          borderRadius: '8px',
          border: '1px solid #eef0f4',
          fontSize: '14px',
          outline: 'none',
          boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
        }}
      />
    </div>

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
        gap: '12px',
      }}
    >
      {filteredIcons.map(({ name, Component, hint }) => (
        <div
          key={name}
          style={{
            background: '#ffffff',
            borderRadius: '12px',
            border: '1px solid #eef0f4',
            padding: '28px 16px 18px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '14px',
            boxShadow: '0 1px 4px rgba(6,8,16,0.06)',
            transition: 'box-shadow 0.2s, transform 0.2s',
            cursor: 'default',
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLDivElement
            el.style.boxShadow = '0 4px 16px rgba(108,63,255,0.12)'
            el.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLDivElement
            el.style.boxShadow = '0 1px 4px rgba(6,8,16,0.06)'
            el.style.transform = 'translateY(0)'
          }}
        >
          <Component size={size} color={color} strokeWidth={strokeWidth} />

          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '12px', fontWeight: 600, color: '#242d3a' }}>
              {name}
            </div>
            <div
              style={{
                fontSize: '10px',
                color: '#a0aabb',
                marginTop: '2px',
                fontFamily: 'monospace',
              }}
            >
              {hint}
            </div>
          </div>
        </div>
      ))}
    </div>

    <div
      style={{
        marginTop: '48px',
        background: '#131820',
        borderRadius: '12px',
        padding: '24px',
        color: '#eef0f4',
        fontSize: '13px',
        fontFamily: "'JetBrains Mono', monospace",
        lineHeight: 1.7,
      }}
    >
      <div style={{ color: '#7a8699', marginBottom: '8px', fontSize: '11px', fontFamily: 'sans-serif', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
        Como usar
      </div>
      <div><span style={{ color: '#8b6aff' }}>import</span>{' {'} <span style={{ color: '#5cf5fc' }}>CheckIcon, HeartIcon, MenuIcon</span>{' }'} <span style={{ color: '#8b6aff' }}>from</span> <span style={{ color: '#6de6af' }}>'@cosmos/icons'</span></div>
      <br />
      <div>{'<'}<span style={{ color: '#5cf5fc' }}>CheckIcon</span> <span style={{ color: '#ffdf47' }}>size</span>={'{24}'} <span style={{ color: '#ffdf47' }}>color</span>=<span style={{ color: '#6de6af' }}>"#6c3fff"</span> {'/>'}</div>
      <div>{'<'}<span style={{ color: '#5cf5fc' }}>MenuIcon</span> {'/>'} <span style={{ color: '#7a8699' }}>{'// clique para toggle'}</span></div>
      <div>{'<'}<span style={{ color: '#5cf5fc' }}>LoaderIcon</span> <span style={{ color: '#ffdf47' }}>spinning</span> {'/>'} <span style={{ color: '#7a8699' }}>{'// gira continuamente'}</span></div>
    </div>
  </div>
)
}

const meta: Meta<typeof Catalogue> = {
  title: 'Components/Icons',
  component: Catalogue,
  parameters: {
    layout: 'fullscreen',
    docs: { page: null },
  },
  argTypes: {
    size:        { control: { type: 'range', min: 16, max: 48, step: 4 } },
    color:       { control: 'color' },
    strokeWidth: { control: { type: 'range', min: 1, max: 3, step: 0.5 } },
  },
  args: {
    size: 28,
    color: '#242d3a',
    strokeWidth: 2,
  },
}

export default meta
type Story = StoryObj<typeof Catalogue>

export const Catalogo: Story = {}
