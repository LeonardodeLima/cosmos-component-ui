import type { Meta, StoryObj } from '@storybook/react'
import { primitive } from '../tokens/primitive'
import { colors } from '../tokens/colors'
import { spacing } from '../tokens/spacing'
import { typography } from '../tokens/typography'
import { radius } from '../tokens/radius'
import { shadow } from '../tokens/shadow'
import { motion } from '../tokens/motion'


const styles = {
  page: {
    fontFamily: "'Inter', system-ui, sans-serif",
    padding: '40px',
    background: '#f7f8fa',
    minHeight: '100vh',
    color: '#242d3a',
  } as React.CSSProperties,
  section: {
    marginBottom: '56px',
  } as React.CSSProperties,


  sectionTitle: {
    fontSize: '11px',
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    color: '#7a8699',
    marginBottom: '16px',
    paddingBottom: '8px',
    borderBottom: '1px solid #dde1e9',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
    gap: '12px',
  } as React.CSSProperties,
  label: {
    fontSize: '12px',
    color: '#5e6b7d',
    marginTop: '6px',
  },
  value: {
    fontSize: '11px',
    color: '#a0aabb',
    fontFamily: "'JetBrains Mono', monospace",
  },
}

const ColorsDoc = () => {
  const groups = Object.entries(colors) as [string, Record<string, string>][]

  return (
    <div style={styles.page}>
      <div style={styles.section}>
        <p style={styles.sectionTitle}>Paleta Primitiva</p>
        {Object.entries(primitive).map(([name, scale]) => (
          <div key={name} style={{ marginBottom: '24px' }}>
            <p style={{ fontSize: '13px', fontWeight: 600, marginBottom: '8px', textTransform: 'capitalize' }}>
              {name}
            </p>
            <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
              {Object.entries(scale).map(([step, hex]) => (
                <div key={step} style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '6px',
                      background: hex,
                      border: '1px solid rgba(0,0,0,0.06)',
                    }}
                  />
                  <div style={{ fontSize: '10px', color: '#7a8699', marginTop: '4px' }}>{step}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={styles.section}>
        <p style={styles.sectionTitle}>Tokens Semânticos</p>
        {groups.map(([groupName, tokens]) => (
          <div key={groupName} style={{ marginBottom: '24px' }}>
            <p style={{ fontSize: '13px', fontWeight: 600, marginBottom: '8px', textTransform: 'capitalize' }}>
              {groupName}
            </p>
            <div style={styles.grid}>
              {Object.entries(tokens).map(([tokenName, value]) => (
                <div key={tokenName}>
                  <div
                    style={{
                      height: '52px',
                      borderRadius: '8px',
                      background: value,
                      border: '1px solid rgba(0,0,0,0.06)',
                    }}
                  />
                  <div style={styles.label}>{tokenName}</div>
                  <div style={styles.value}>{value}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const SpacingDoc = () => (
  <div style={styles.page}>
    <div style={styles.section}>
      <p style={styles.sectionTitle}>Spacing</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {Object.entries(spacing).map(([name, value]) => (
          <div key={name} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '48px', fontSize: '13px', fontWeight: 600 }}>{name}</div>
            <div
              style={{
                height: '24px',
                width: value,
                background: 'linear-gradient(90deg, #6c3fff, #00c8e0)',
                borderRadius: '4px',
                minWidth: '4px',
              }}
            />
            <div style={styles.value}>{value}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

const TypographyDoc = () => (
  <div style={styles.page}>
    <div style={styles.section}>
      <p style={styles.sectionTitle}>Font Size</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {Object.entries(typography.fontSize).map(([name, value]) => (
          <div key={name} style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}>
            <div style={{ width: '40px', ...styles.value }}>{name}</div>
            <span style={{ fontSize: value, lineHeight: 1.3, color: '#242d3a' }}>
              Cosmos Design System
            </span>
            <div style={styles.value}>{value}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Font weights */}
    <div style={styles.section}>
      <p style={styles.sectionTitle}>Font Weight</p>
      <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
        {Object.entries(typography.fontWeight).map(([name, value]) => (
          <div key={name}>
            <div style={{ fontSize: '24px', fontWeight: value, color: '#242d3a' }}>Aa</div>
            <div style={styles.label}>{name}</div>
            <div style={styles.value}>{value}</div>
          </div>
        ))}
      </div>
    </div>

    <div style={styles.section}>
      <p style={styles.sectionTitle}>Line Height</p>
      <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
        {Object.entries(typography.lineHeight).map(([name, value]) => (
          <div key={name} style={{ maxWidth: '180px' }}>
            <div
              style={{
                fontSize: '14px',
                lineHeight: value,
                color: '#242d3a',
                background: '#eef0f4',
                padding: '8px',
                borderRadius: '6px',
              }}
            >
              O cosmos está dentro de nós. Somos feitos de poeira estelar.
            </div>
            <div style={styles.label}>{name}</div>
            <div style={styles.value}>{value}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

const RadiusDoc = () => (
  <div style={styles.page}>
    <div style={styles.section}>
      <p style={styles.sectionTitle}>Border Radius</p>
      <div style={styles.grid}>
        {Object.entries(radius).map(([name, value]) => (
          <div key={name}>
            <div
              style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #6c3fff22, #6c3fff44)',
                border: '2px solid #6c3fff',
                borderRadius: value,
              }}
            />
            <div style={styles.label}>{name}</div>
            <div style={styles.value}>{value}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

const ShadowDoc = () => (
  <div style={styles.page}>
    <div style={styles.section}>
      <p style={styles.sectionTitle}>Shadow</p>
      <div style={styles.grid}>
        {Object.entries(shadow).map(([name, value]) => (
          <div key={name}>
            <div
              style={{
                width: '100%',
                height: '80px',
                background: '#fff',
                borderRadius: '10px',
                boxShadow: value,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '13px',
                color: '#5e6b7d',
              }}
            >
              {name}
            </div>
            <div style={styles.value} title={value}>
              {value.length > 40 ? value.slice(0, 40) + '…' : value}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

const MotionDoc = () => (
  <div style={styles.page}>
    <div style={styles.section}>
      <p style={styles.sectionTitle}>Duration</p>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        {Object.entries(motion.duration).map(([name, value]) => (
          <div key={name} style={{ textAlign: 'center' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #6c3fff, #00c8e0)',
                cursor: 'pointer',
                transition: `transform ${value} cubic-bezier(0.4,0,0.2,1)`,
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.3)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
            />
            <div style={styles.label}>{name}</div>
            <div style={styles.value}>{value}</div>
          </div>
        ))}
      </div>
      <p style={{ fontSize: '12px', color: '#a0aabb', marginTop: '16px' }}>
        ↑ Passe o mouse sobre os círculos para ver cada duração
      </p>
    </div>

    <div style={styles.section}>
      <p style={styles.sectionTitle}>Easing</p>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        {Object.entries(motion.easing).map(([name, value]) => (
          <div key={name} style={{ textAlign: 'center' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #6c3fff, #00c8e0)',
                cursor: 'pointer',
                transition: `transform 400ms ${value}`,
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.3) rotate(8deg)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1) rotate(0deg)')}
            />
            <div style={styles.label}>{name}</div>
          </div>
        ))}
      </div>
      <p style={{ fontSize: '12px', color: '#a0aabb', marginTop: '16px' }}>
        ↑ Passe o mouse para comparar os easings
      </p>
    </div>
  </div>
)

const meta: Meta = {
  title: 'Tokens',
  parameters: {
    layout: 'fullscreen',
    docs: { page: null },
  },
}

export default meta
type Story = StoryObj

export const Cores: Story        = { render: () => <ColorsDoc /> }
export const Espacamento: Story  = { render: () => <SpacingDoc /> }
export const Tipografia: Story   = { render: () => <TypographyDoc /> }
export const Bordas: Story       = { render: () => <RadiusDoc /> }
export const Sombras: Story      = { render: () => <ShadowDoc /> }
export const Movimento: Story    = { render: () => <MotionDoc /> }
