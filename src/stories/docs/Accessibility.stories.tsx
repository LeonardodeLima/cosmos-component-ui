import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Eye, Keyboard, Brain, Wrench, AlertTriangle, PartyPopper } from 'lucide-react'

const C = {
  bg:       '#f7f8fa',
  surface:  '#ffffff',
  border:   '#eef0f4',
  text:     '#242d3a',
  muted:    '#5e6b7d',
  faint:    '#a0aabb',
  accent:   '#6c3fff',
  accentSoft:'rgba(108,63,255,0.08)',
  green:    '#16a34a',
  greenSoft:'rgba(22,163,74,0.08)',
  red:      '#dc2626',
  redSoft:  'rgba(220,38,38,0.08)',
  amber:    '#d97706',
  amberSoft:'rgba(217,119,6,0.08)',
  blue:     '#2563eb',
  blueSoft: 'rgba(37,99,235,0.08)',
  mono:     "'JetBrains Mono', 'Fira Code', monospace",
  sans:     "'Inter', system-ui, sans-serif",
}

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p style={{
    fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em',
    textTransform: 'uppercase', color: C.faint,
    marginBottom: '16px', paddingBottom: '8px',
    borderBottom: `1px solid ${C.border}`,
    margin: '0 0 20px',
  }}>
    {children}
  </p>
)

const Tag = ({ label, color, bg }: { label: string; color: string; bg: string }) => (
  <span style={{
    display: 'inline-flex', alignItems: 'center', gap: '4px',
    padding: '2px 8px', borderRadius: '99px',
    fontSize: '11px', fontWeight: 600,
    color, background: bg,
  }}>
    {label}
  </span>
)

const Card = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => (
  <div style={{
    background: C.surface, borderRadius: '12px',
    border: `1px solid ${C.border}`,
    padding: '24px',
    boxShadow: '0 1px 4px rgba(6,8,16,0.06)',
    ...style,
  }}>
    {children}
  </div>
)

const CodeBlock = ({ children }: { children: React.ReactNode }) => (
  <pre style={{
    background: '#131820', borderRadius: '8px',
    padding: '16px', margin: '12px 0 0',
    fontFamily: C.mono, fontSize: '12px', lineHeight: 1.7,
    color: '#eef0f4', overflowX: 'auto',
    whiteSpace: 'pre',
  }}>
    {children}
  </pre>
)

const DoCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{
    background: C.greenSoft, border: `1px solid ${C.green}22`,
    borderLeft: `3px solid ${C.green}`, borderRadius: '8px',
    padding: '16px',
  }}>
    <p style={{ margin: '0 0 8px', fontWeight: 700, fontSize: '12px', color: C.green }}>
      ✓ {title}
    </p>
    {children}
  </div>
)

const DontCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{
    background: C.redSoft, border: `1px solid ${C.red}22`,
    borderLeft: `3px solid ${C.red}`, borderRadius: '8px',
    padding: '16px',
  }}>
    <p style={{ margin: '0 0 8px', fontWeight: 700, fontSize: '12px', color: C.red }}>
      ✕ {title}
    </p>
    {children}
  </div>
)

const IntroDoc = () => (
  <div style={{ fontFamily: C.sans, padding: '40px', background: C.bg, minHeight: '100vh', color: C.text }}>

    <div style={{ marginBottom: '48px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 800, margin: 0, color: C.text }}>
          Guia Prático de Acessibilidade Web
        </h1>
      </div>
      <p style={{ fontSize: '14px', color: C.muted, maxWidth: '680px', lineHeight: 1.8, margin: '0 0 20px' }}>
        Acessibilidade web significa garantir que <strong>todos os usuários</strong> — incluindo pessoas com deficiências visuais, motoras, auditivas ou cognitivas — consigam usar sua interface de forma eficiente e autônoma.
      </p>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <Tag label="WCAG 2.2" color={C.accent} bg={C.accentSoft} />
        <Tag label="ARIA 1.2" color={C.blue} bg={C.blueSoft} />
        <Tag label="Level AA" color={C.green} bg={C.greenSoft} />
      </div>
    </div>

    <div style={{ marginBottom: '48px' }}>
      <SectionLabel>Os 4 Princípios WCAG — POUR</SectionLabel>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px' }}>
        {[
          {
            icon: <Eye size={20} />, sigla: 'P', title: 'Perceptível',
            desc: 'Conteúdo e UI devem ser apresentados de formas que os usuários possam perceber — não apenas visualmente.',
            accent: C.accent,
          },
          {
            icon: <Keyboard size={20} />, sigla: 'O', title: 'Operável',
            desc: 'Componentes de interface e navegação devem ser operáveis por teclado, voz ou outros dispositivos de entrada.',
            accent: C.blue,
          },
          {
            icon: <Brain size={20} />, sigla: 'U', title: 'Compreensível',
            desc: 'Informações e operações devem ser claras. Evite jargões e forneça instruções e erros legíveis.',
            accent: C.amber,
          },
          {
            icon: <Wrench size={20} />, sigla: 'R', title: 'Robusto',
            desc: 'Conteúdo deve ser interpretado por tecnologias assistivas atuais e futuras, incluindo leitores de tela.',
            accent: C.green,
          },
        ].map(({ icon, sigla, title, desc, accent }) => (
          <Card key={sigla}>
            <div style={{
              width: '40px', height: '40px', borderRadius: '10px',
              background: `${accent}18`, display: 'flex', alignItems: 'center',
              justifyContent: 'center', color: accent, marginBottom: '12px',
            }}>
              {icon}
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '6px' }}>
              <span style={{ fontSize: '11px', fontWeight: 800, color: accent, fontFamily: C.mono }}>{sigla}</span>
              <h3 style={{ margin: 0, fontSize: '15px', fontWeight: 700 }}>{title}</h3>
            </div>
            <p style={{ margin: 0, fontSize: '13px', color: C.muted, lineHeight: 1.7 }}>{desc}</p>
          </Card>
        ))}
      </div>
    </div>

    <div>
      <SectionLabel>Níveis de Conformidade WCAG</SectionLabel>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '680px' }}>
        {[
          { level: 'A', label: 'Mínimo', color: C.amber, desc: 'Requisitos essenciais. Sem eles, alguns usuários não conseguem acessar o conteúdo.' },
          { level: 'AA', label: 'Recomendado ✓', color: C.green, desc: 'Padrão adotado pela maioria das legislações (LGPD, Section 508, EN 301 549). Meta do Cosmos.' },
          { level: 'AAA', label: 'Avançado', color: C.blue, desc: 'Máxima acessibilidade. Difícil de atingir em 100% do conteúdo, mas desejável onde possível.' },
        ].map(({ level, label, color, desc }) => (
          <div key={level} style={{
            display: 'flex', gap: '16px', alignItems: 'flex-start',
            padding: '16px', background: C.surface, borderRadius: '10px',
            border: `1px solid ${C.border}`,
          }}>
            <div style={{
              minWidth: '40px', height: '40px', borderRadius: '8px',
              background: `${color}18`, display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontWeight: 800, fontSize: '14px',
              color, fontFamily: C.mono,
            }}>
              {level}
            </div>
            <div>
              <p style={{ margin: '0 0 4px', fontWeight: 700, fontSize: '14px' }}>
                Nível {level} — <span style={{ color }}>{label}</span>
              </p>
              <p style={{ margin: 0, fontSize: '13px', color: C.muted, lineHeight: 1.6 }}>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

const ContrastDoc = () => {
  const pairs = [
    { label: 'Texto normal', fg: '#242d3a', bg: '#ffffff', ratio: '14.2:1', level: 'AAA', ok: true },
    { label: 'Accent sobre branco', fg: '#6c3fff', bg: '#ffffff', ratio: '6.1:1', level: 'AA', ok: true },
    { label: 'Texto secundário', fg: '#5e6b7d', bg: '#ffffff', ratio: '5.4:1', level: 'AA', ok: true },
    { label: 'Placeholder cinza claro', fg: '#a0aabb', bg: '#ffffff', ratio: '2.4:1', level: 'Falha', ok: false },
    { label: 'Branco sobre accent', fg: '#ffffff', bg: '#6c3fff', ratio: '6.1:1', level: 'AA', ok: true },
    { label: 'Cinza claro sobre bg', fg: '#c0c8d4', bg: '#f7f8fa', ratio: '1.8:1', level: 'Falha', ok: false },
  ]

  return (
    <div style={{ fontFamily: C.sans, padding: '40px', background: C.bg, minHeight: '100vh', color: C.text }}>
      <h1 style={{ fontSize: '22px', fontWeight: 800, margin: '0 0 6px' }}>Contraste de Cores</h1>
      <p style={{ fontSize: '14px', color: C.muted, maxWidth: '640px', lineHeight: 1.8, margin: '0 0 36px' }}>
        WCAG exige razão mínima de contraste de <strong>4.5:1</strong> para texto normal e <strong>3:1</strong> para texto grande (≥ 18pt ou 14pt bold) entre foreground e background.
      </p>

      <div style={{ marginBottom: '40px' }}>
        <SectionLabel>Exemplos de Contraste — Tokens Cosmos</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px' }}>
          {pairs.map(({ label, fg, bg, ratio, level, ok }) => (
            <div key={label} style={{
              borderRadius: '10px', overflow: 'hidden',
              border: `1px solid ${ok ? C.green + '33' : C.red + '33'}`,
            }}>
              <div style={{ background: bg, padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <p style={{ margin: 0, color: fg, fontSize: '16px', fontWeight: 600 }}>
                  Texto de Exemplo Aa
                </p>
              </div>
              <div style={{
                padding: '10px 14px',
                background: ok ? C.greenSoft : C.redSoft,
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                <span style={{ fontSize: '12px', color: C.muted }}>{label}</span>
                <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                  <span style={{ fontSize: '11px', fontFamily: C.mono, color: C.text }}>{ratio}</span>
                  <Tag
                    label={level}
                    color={ok ? C.green : C.red}
                    bg={ok ? C.greenSoft : C.redSoft}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <SectionLabel>Regras Práticas</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', maxWidth: '720px' }}>
          <DoCard title="Use contraste suficiente">
            <p style={{ margin: 0, fontSize: '13px', color: C.muted, lineHeight: 1.7 }}>
              Valide todas as combinações fg/bg com ferramentas como <em>Colour Contrast Analyser</em> ou extensão axe DevTools.
            </p>
          </DoCard>
          <DontCard title="Não confie só na cor">
            <p style={{ margin: 0, fontSize: '13px', color: C.muted, lineHeight: 1.7 }}>
              Nunca use somente cor para transmitir estado (erro, sucesso). Combine com ícone ou texto descritivo.
            </p>
          </DontCard>
          <DoCard title="Texto sobre imagens">
            <p style={{ margin: 0, fontSize: '13px', color: C.muted, lineHeight: 1.7 }}>
              Adicione overlay semitransparente escuro antes de colocar texto sobre fotos ou gradientes.
            </p>
          </DoCard>
          <DontCard title="Evite texto muito pequeno">
            <p style={{ margin: 0, fontSize: '13px', color: C.muted, lineHeight: 1.7 }}>
              Abaixo de 12px, até alto contraste se torna difícil de ler. Use mínimo 14px para corpo de texto.
            </p>
          </DontCard>
        </div>
      </div>

      <div>
        <SectionLabel>Ferramentas Recomendadas</SectionLabel>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {[
            { name: 'axe DevTools', desc: 'Extensão de browser para auditorias automáticas' },
            { name: 'Colour Contrast Analyser', desc: 'App desktop para medir qualquer pixel da tela' },
            { name: 'Figma A11y Annotation Kit', desc: 'Plugin para marcar acessibilidade nos designs' },
            { name: 'WAVE', desc: 'Avaliação visual inline de erros WCAG' },
          ].map(({ name, desc }) => (
            <div key={name} style={{
              padding: '12px 16px', background: C.surface,
              borderRadius: '8px', border: `1px solid ${C.border}`,
              minWidth: '180px', flex: '1',
            }}>
              <p style={{ margin: '0 0 4px', fontWeight: 700, fontSize: '13px' }}>{name}</p>
              <p style={{ margin: 0, fontSize: '12px', color: C.muted }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Seção 3 – Navegação por Teclado ───────────────────────────────────────
const KeyboardDoc = () => {
  const [focused, setFocused] = useState<string | null>(null)

  return (
    <div style={{ fontFamily: C.sans, padding: '40px', background: C.bg, minHeight: '100vh', color: C.text }}>
      <h1 style={{ fontSize: '22px', fontWeight: 800, margin: '0 0 6px' }}>Navegação por Teclado</h1>
      <p style={{ fontSize: '14px', color: C.muted, maxWidth: '640px', lineHeight: 1.8, margin: '0 0 36px' }}>
        Toda funcionalidade disponível via mouse deve ser acessível pelo teclado. Usuários com deficiências motoras, e usuários avançados, dependem disso.
      </p>

      <div style={{ marginBottom: '40px' }}>
        <SectionLabel>Teclas Essenciais</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '12px' }}>
          {[
            { key: 'Tab', desc: 'Avança ao próximo elemento focável' },
            { key: 'Shift + Tab', desc: 'Volta ao elemento focável anterior' },
            { key: 'Enter / Space', desc: 'Ativa botões, links e controles' },
            { key: 'Escape', desc: 'Fecha modais, menus e popovers' },
            { key: '↑ ↓ ← →', desc: 'Navega em listas, menus e sliders' },
            { key: 'Home / End', desc: 'Vai ao primeiro/último item da lista' },
          ].map(({ key, desc }) => (
            <Card key={key} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <code style={{
                display: 'inline-block', padding: '4px 10px',
                background: '#131820', color: '#b39dff',
                borderRadius: '6px', fontSize: '12px', fontFamily: C.mono,
                width: 'fit-content',
              }}>
                {key}
              </code>
              <p style={{ margin: 0, fontSize: '13px', color: C.muted }}>{desc}</p>
            </Card>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <SectionLabel>Focus Ring — Demonstração Interativa</SectionLabel>
        <p style={{ fontSize: '13px', color: C.muted, marginBottom: '16px' }}>
          Pressione Tab para navegar entre os elementos abaixo e observe o foco visível.
        </p>
        <Card>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
            {['Botão Primário', 'Botão Secundário', 'Link de texto', 'Checkbox'].map((label, i) => {
              const id = `demo-${i}`
              const isFocused = focused === id
              if (i === 2) {
                return (
                  <a
                    key={id}
                    href="#"
                    id={id}
                    onClick={e => e.preventDefault()}
                    onFocus={() => setFocused(id)}
                    onBlur={() => setFocused(null)}
                    style={{
                      fontSize: '14px', color: C.accent, textDecoration: 'underline',
                      outline: isFocused ? `2px solid ${C.accent}` : 'none',
                      outlineOffset: '2px', borderRadius: '2px',
                    }}
                  >
                    {label}
                  </a>
                )
              }
              if (i === 3) {
                return (
                  <label key={id} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '14px' }}>
                    <input
                      type="checkbox"
                      id={id}
                      onFocus={() => setFocused(id)}
                      onBlur={() => setFocused(null)}
                      style={{ width: '16px', height: '16px', accentColor: C.accent }}
                    />
                    {label}
                  </label>
                )
              }
              return (
                <button
                  key={id}
                  id={id}
                  onFocus={() => setFocused(id)}
                  onBlur={() => setFocused(null)}
                  style={{
                    padding: '8px 16px', borderRadius: '8px',
                    border: i === 0 ? 'none' : `1px solid ${C.accent}`,
                    background: i === 0 ? C.accent : 'transparent',
                    color: i === 0 ? '#fff' : C.accent,
                    fontSize: '14px', cursor: 'pointer', fontWeight: 600,
                    outline: isFocused ? `2px solid ${C.accent}` : 'none',
                    outlineOffset: '2px',
                  }}
                >
                  {label}
                </button>
              )
            })}
          </div>
          {focused && (
            <p style={{
              marginTop: '12px', fontSize: '12px', color: C.accent,
              fontFamily: C.mono, background: C.accentSoft,
              padding: '6px 10px', borderRadius: '6px', display: 'inline-block',
            }}>
              Elemento com foco: #{focused}
            </p>
          )}
        </Card>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <SectionLabel>Boas Práticas de Foco</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', maxWidth: '720px' }}>
          <DoCard title="Foco sempre visível">
            <CodeBlock>{`:focus-visible {
  outline: 2px solid #6c3fff;
  outline-offset: 2px;
  border-radius: 4px;
}`}</CodeBlock>
          </DoCard>
          <DontCard title="Nunca remova o foco sem alternativa">
            <CodeBlock>{`/* ✕ Proibido sem substituto */
* { outline: none; }
button:focus { outline: 0; }`}</CodeBlock>
          </DontCard>
          <DoCard title="Ordem lógica de tab">
            <p style={{ margin: 0, fontSize: '13px', color: C.muted, lineHeight: 1.7 }}>
              A ordem de tabulação deve seguir a ordem visual do layout. Use <code>tabindex="0"</code> em elementos não nativos que precisem de foco.
            </p>
          </DoCard>
          <DontCard title="Não use tabindex positivo">
            <p style={{ margin: 0, fontSize: '13px', color: C.muted, lineHeight: 1.7 }}>
              <code>tabindex="1"</code> ou maiores alteram a ordem de forma imprevisível. Use <code>tabindex="0"</code> ou <code>tabindex="-1"</code> apenas.
            </p>
          </DontCard>
        </div>
      </div>

      <div>
        <SectionLabel>Gerenciamento de Foco em Modais</SectionLabel>
        <Card style={{ maxWidth: '680px' }}>
          <p style={{ margin: '0 0 12px', fontSize: '14px', lineHeight: 1.8 }}>
            Ao abrir um modal, o foco deve ser movido para dentro dele. Ao fechar, deve retornar ao elemento que o abriu. Use <strong>focus trap</strong> para impedir que o foco saia do modal com Tab.
          </p>
          <CodeBlock>{`// Exemplo com useEffect
useEffect(() => {
  if (isOpen) {
    const firstFocusable = modalRef.current
      ?.querySelector<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
    firstFocusable?.focus();
  }
}, [isOpen]);`}</CodeBlock>
        </Card>
      </div>
    </div>
  )
}

const AriaDoc = () => (
  <div style={{ fontFamily: C.sans, padding: '40px', background: C.bg, minHeight: '100vh', color: C.text }}>
    <h1 style={{ fontSize: '22px', fontWeight: 800, margin: '0 0 6px' }}>ARIA & HTML Semântico</h1>
    <p style={{ fontSize: '14px', color: C.muted, maxWidth: '640px', lineHeight: 1.8, margin: '0 0 12px' }}>
      A primeira regra do ARIA é: <strong>se um elemento HTML nativo resolve, use-o.</strong> ARIA só deve ser usado quando não há semântica HTML suficiente.
    </p>
    <div style={{
      display: 'inline-block', padding: '8px 14px',
      background: C.amberSoft, border: `1px solid ${C.amber}44`,
      borderRadius: '8px', fontSize: '13px', color: C.amber,
      marginBottom: '36px', fontWeight: 600,
    }}>
      <AlertTriangle size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} />
      "No ARIA is better than bad ARIA" — W3C
    </div>

    <div style={{ marginBottom: '40px' }}>
      <SectionLabel>Atributos ARIA Mais Usados</SectionLabel>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '720px' }}>
        {[
          {
            attr: 'aria-label', uso: 'Fornece nome acessível quando não há texto visível',
            exemplo: '<button aria-label="Fechar modal">×</button>',
          },
          {
            attr: 'aria-labelledby', uso: 'Associa um elemento ao texto de outro elemento como seu nome',
            exemplo: '<section aria-labelledby="sec-title">\n  <h2 id="sec-title">Configurações</h2>\n</section>',
          },
          {
            attr: 'aria-describedby', uso: 'Associa descrição adicional a um elemento',
            exemplo: '<input aria-describedby="hint-email" />\n<p id="hint-email">Use seu email corporativo</p>',
          },
          {
            attr: 'aria-hidden="true"', uso: 'Oculta elemento decorativo dos leitores de tela',
            exemplo: '<svg aria-hidden="true" focusable="false">…</svg>',
          },
          {
            attr: 'aria-live', uso: 'Anuncia atualizações dinâmicas para leitores de tela',
            exemplo: '<div aria-live="polite" aria-atomic="true">\n  {mensagemDeSucesso}\n</div>',
          },
          {
            attr: 'aria-expanded', uso: 'Indica se um accordion, menu ou dropdown está aberto',
            exemplo: '<button aria-expanded={isOpen} aria-controls="menu">\n  Menu\n</button>',
          },
          {
            attr: 'role', uso: 'Define o papel semântico de um elemento não nativo',
            exemplo: '<div role="dialog" aria-modal="true" aria-labelledby="modal-title">\n  …\n</div>',
          },
        ].map(({ attr, uso, exemplo }) => (
          <Card key={attr}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <code style={{
                minWidth: '160px', padding: '4px 10px',
                background: '#131820', color: '#5cf5fc',
                borderRadius: '6px', fontSize: '11px', fontFamily: C.mono,
                display: 'inline-block', whiteSpace: 'nowrap',
              }}>
                {attr}
              </code>
              <div style={{ flex: 1 }}>
                <p style={{ margin: '0 0 8px', fontSize: '13px', color: C.muted, lineHeight: 1.6 }}>{uso}</p>
                <CodeBlock>{exemplo}</CodeBlock>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>

    <div style={{ marginBottom: '40px' }}>
      <SectionLabel>HTML Semântico vs Divs</SectionLabel>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', maxWidth: '720px' }}>
        <DoCard title="Use elementos semânticos">
          <CodeBlock>{`<nav aria-label="Principal">
  <ul>
    <li><a href="/home">Início</a></li>
    <li><a href="/about">Sobre</a></li>
  </ul>
</nav>

<main>
  <article>
    <h1>Título</h1>
    <p>Conteúdo…</p>
  </article>
</main>

<footer>© 2025 Cosmos</footer>`}</CodeBlock>
        </DoCard>
        <DontCard title="Evite div-soup">
          <CodeBlock>{`<div class="nav">
  <div class="nav-list">
    <div onclick="…">Início</div>
    <div onclick="…">Sobre</div>
  </div>
</div>

<div class="main">
  <div class="article">
    <div class="title">Título</div>
    <div>Conteúdo…</div>
  </div>
</div>`}</CodeBlock>
        </DontCard>
      </div>
    </div>

    <div>
      <SectionLabel>Landmarks Semânticos</SectionLabel>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '12px', maxWidth: '720px' }}>
        {[
          { tag: '<header>', role: 'banner', desc: 'Cabeçalho da página ou seção' },
          { tag: '<nav>', role: 'navigation', desc: 'Bloco de links de navegação' },
          { tag: '<main>', role: 'main', desc: 'Conteúdo principal único da página' },
          { tag: '<aside>', role: 'complementary', desc: 'Conteúdo complementar/sidebar' },
          { tag: '<footer>', role: 'contentinfo', desc: 'Rodapé da página' },
          { tag: '<section>', role: 'region*', desc: 'Seção temática com aria-labelledby' },
        ].map(({ tag, role, desc }) => (
          <Card key={tag} style={{ padding: '16px' }}>
            <code style={{ fontSize: '12px', fontFamily: C.mono, color: C.accent, display: 'block', marginBottom: '4px' }}>{tag}</code>
            <code style={{ fontSize: '11px', fontFamily: C.mono, color: C.faint, display: 'block', marginBottom: '8px' }}>role="{role}"</code>
            <p style={{ margin: 0, fontSize: '12px', color: C.muted, lineHeight: 1.6 }}>{desc}</p>
          </Card>
        ))}
      </div>
    </div>
  </div>
)

const FormsDoc = () => (
  <div style={{ fontFamily: C.sans, padding: '40px', background: C.bg, minHeight: '100vh', color: C.text }}>
    <h1 style={{ fontSize: '22px', fontWeight: 800, margin: '0 0 6px' }}>Formulários Acessíveis</h1>
    <p style={{ fontSize: '14px', color: C.muted, maxWidth: '640px', lineHeight: 1.8, margin: '0 0 36px' }}>
      Formulários mal implementados são uma das principais barreiras de acessibilidade. Rótulos claros, mensagens de erro associadas e feedback imediato fazem toda a diferença.
    </p>

    <div style={{ marginBottom: '40px' }}>
      <SectionLabel>Exemplos — Certo vs Errado</SectionLabel>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', maxWidth: '760px' }}>
        <DoCard title="Label associado via htmlFor / id">
          <CodeBlock>{`<label htmlFor="email">
  E-mail <span aria-hidden="true">*</span>
  <span className="sr-only">(obrigatório)</span>
</label>
<input
  id="email"
  type="email"
  aria-required="true"
  aria-describedby="email-error"
  autoComplete="email"
/>
{error && (
  <span id="email-error" role="alert">
    {error}
  </span>
)}`}</CodeBlock>
        </DoCard>
        <DontCard title="Placeholder como único rótulo">
          <CodeBlock>{`/* ✕ Placeholder some ao digitar */
<input
  type="email"
  placeholder="Digite seu e-mail"
/>

/* ✕ Label não associado */
<p>E-mail</p>
<input type="email" />`}</CodeBlock>
        </DontCard>
      </div>
    </div>

    <div style={{ marginBottom: '40px' }}>
      <SectionLabel>Mensagens de Erro</SectionLabel>
      <Card style={{ maxWidth: '680px' }}>
        <p style={{ margin: '0 0 4px', fontWeight: 700, fontSize: '14px' }}>Regras para erros acessíveis</p>
        <ul style={{ margin: '8px 0 0', paddingLeft: '20px', fontSize: '13px', color: C.muted, lineHeight: 2 }}>
          <li>Associe o erro ao campo com <code>aria-describedby</code> ou <code>aria-errormessage</code></li>
          <li>Use <code>aria-invalid="true"</code> no campo com erro</li>
          <li>Anuncie erros dinamicamente com <code>role="alert"</code> ou <code>aria-live="assertive"</code></li>
          <li>Explique o erro em texto claro — nunca use só cor ou ícone</li>
          <li>Mostre o erro próximo ao campo, não apenas no topo do formulário</li>
        </ul>
        <CodeBlock>{`<input
  id="cpf"
  aria-invalid={hasError}
  aria-describedby="cpf-hint cpf-error"
/>
<span id="cpf-hint">Formato: 000.000.000-00</span>
{hasError && (
  <span id="cpf-error" role="alert" style={{ color: 'red' }}>
    CPF inválido. Verifique os dígitos.
  </span>
)}`}</CodeBlock>
      </Card>
    </div>

    <div style={{ marginBottom: '40px' }}>
      <SectionLabel>Checklist de Formulário</SectionLabel>
      <div style={{ maxWidth: '600px' }}>
        {[
          { ok: true,  item: 'Todo campo tem um <label> associado por htmlFor/id' },
          { ok: true,  item: 'Campos obrigatórios marcados com aria-required="true"' },
          { ok: true,  item: 'Campos com erro têm aria-invalid e mensagem descritiva' },
          { ok: true,  item: 'autocomplete configurado para campos comuns (name, email, etc.)' },
          { ok: true,  item: 'Inputs de senha têm botão "mostrar senha" com aria-label' },
          { ok: false, item: 'Usar apenas asterisco (*) sem explicar o que ele significa' },
          { ok: false, item: 'Desabilitar o botão Enviar sem indicar por que está inativo' },
          { ok: false, item: 'Usar placeholder como substituto ao label' },
        ].map(({ ok, item }) => (
          <div key={item} style={{
            display: 'flex', alignItems: 'flex-start', gap: '12px',
            padding: '10px 0', borderBottom: `1px solid ${C.border}`,
          }}>
            <span style={{ color: ok ? C.green : C.red, fontWeight: 700, fontSize: '16px', minWidth: '16px' }}>
              {ok ? '✓' : '✕'}
            </span>
            <span style={{ fontSize: '13px', color: C.text, lineHeight: 1.6 }}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
)

const MediaDoc = () => (
  <div style={{ fontFamily: C.sans, padding: '40px', background: C.bg, minHeight: '100vh', color: C.text }}>
    <h1 style={{ fontSize: '22px', fontWeight: 800, margin: '0 0 6px' }}>Imagens & Mídia</h1>
    <p style={{ fontSize: '14px', color: C.muted, maxWidth: '640px', lineHeight: 1.8, margin: '0 0 36px' }}>
      Todo conteúdo não-textual deve ter equivalente textual para que leitores de tela possam comunicar o significado ao usuário.
    </p>

    <div style={{ marginBottom: '40px' }}>
      <SectionLabel>Texto Alternativo — Regras por Tipo de Imagem</SectionLabel>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '720px' }}>
        {[
          {
            type: 'Imagem informativa',
            rule: 'Descreva o conteúdo e o propósito da imagem de forma concisa.',
            code: '<img src="grafico.png"\n  alt="Gráfico de barras mostrando crescimento de 40% em Q3" />',
          },
          {
            type: 'Imagem decorativa',
            rule: 'Use alt vazio (""). Nunca omita o atributo.',
            code: '<img src="decoracao.svg" alt="" role="presentation" />',
          },
          {
            type: 'Ícone funcional (sem texto visível)',
            rule: 'Adicione aria-label no elemento clicável ou texto oculto visualmente.',
            code: '<button aria-label="Excluir item">\n  <TrashIcon aria-hidden="true" />\n</button>',
          },
          {
            type: 'Imagem de texto',
            rule: 'Prefira CSS + texto real. Se não for possível, repita o texto no alt.',
            code: '<img src="banner.png" alt="Black Friday — 50% OFF em todos os produtos" />',
          },
          {
            type: 'Infográfico complexo',
            rule: 'Forneça alt curto + descrição longa via aria-describedby ou figura adjacente.',
            code: '<figure>\n  <img src="infografico.png"\n    alt="Ciclo de vida de um componente React"\n    aria-describedby="desc-infografico" />\n  <figcaption id="desc-infografico">\n    [Descrição detalhada do infográfico]\n  </figcaption>\n</figure>',
          },
        ].map(({ type, rule, code }) => (
          <Card key={type}>
            <p style={{ margin: '0 0 4px', fontWeight: 700, fontSize: '14px' }}>{type}</p>
            <p style={{ margin: '0 0 0', fontSize: '13px', color: C.muted, lineHeight: 1.7 }}>{rule}</p>
            <CodeBlock>{code}</CodeBlock>
          </Card>
        ))}
      </div>
    </div>

    <div>
      <SectionLabel>SVG Acessível</SectionLabel>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', maxWidth: '720px' }}>
        <DoCard title="SVG com semântica">
          <CodeBlock>{`<svg
  role="img"
  aria-labelledby="svg-title svg-desc"
>
  <title id="svg-title">
    Ícone de verificação
  </title>
  <desc id="svg-desc">
    Círculo verde com marca de seleção
  </desc>
  <circle …/>
  <path …/>
</svg>`}</CodeBlock>
        </DoCard>
        <DoCard title="SVG decorativo">
          <CodeBlock>{`/* Sempre que o SVG for puramente
   decorativo ou seu contexto já
   fornece o nome */

<svg
  aria-hidden="true"
  focusable="false"
>
  …
</svg>`}</CodeBlock>
        </DoCard>
      </div>
    </div>
  </div>
)

const ChecklistDoc = () => {
  const [checked, setChecked] = useState<Record<string, boolean>>({})

  const groups = [
    {
      title: 'Estrutura & HTML', items: [
        'Usar elementos HTML semânticos (header, nav, main, footer)',
        'Definir lang no elemento <html>',
        'Hierarquia de headings correta (h1 → h2 → h3)',
        'Todos os forms têm labels associados',
        'Links descritivos (nunca "clique aqui" isolado)',
      ],
    },
    {
      title: 'Contraste & Cor', items: [
        'Texto normal: contraste mínimo 4.5:1',
        'Texto grande (≥18pt): contraste mínimo 3:1',
        'Elementos de UI (bordas, ícones): contraste mínimo 3:1',
        'Informação não transmitida apenas por cor',
      ],
    },
    {
      title: 'Teclado & Foco', items: [
        'Toda funcionalidade acessível via teclado',
        'Focus ring visível em todos os elementos interativos',
        'Ordem de tabulação lógica e previsível',
        'Modais implementam focus trap',
        'Foco retorna ao elemento correto ao fechar modal',
        'Nenhum tabindex positivo',
      ],
    },
    {
      title: 'Imagens & Mídia', items: [
        'Todas as imagens têm atributo alt',
        'Imagens decorativas têm alt=""',
        'SVGs funcionais têm role="img" e title/desc',
        'Vídeos têm legendas (captions)',
        'Conteúdo de áudio tem transcrição',
      ],
    },
    {
      title: 'ARIA & Tecnologias Assistivas', items: [
        'aria-label usado onde não há texto visível',
        'Regiões live anunciam atualizações dinâmicas',
        'Estados de componentes comunicados (aria-expanded, aria-selected, etc.)',
        'Roles ARIA corretos em widgets customizados',
        'Testado com leitor de tela (NVDA, VoiceOver, JAWS)',
      ],
    },
  ]

  const totalItems = groups.flatMap(g => g.items).length
  const checkedCount = Object.values(checked).filter(Boolean).length

  return (
    <div style={{ fontFamily: C.sans, padding: '40px', background: C.bg, minHeight: '100vh', color: C.text }}>
      <h1 style={{ fontSize: '22px', fontWeight: 800, margin: '0 0 6px' }}>Checklist de Acessibilidade</h1>
      <p style={{ fontSize: '14px', color: C.muted, maxWidth: '640px', lineHeight: 1.8, margin: '0 0 24px' }}>
        Use esta lista antes de publicar qualquer componente ou tela. Marque os itens conforme você valida.
      </p>

      {/* Barra de progresso */}
      <div style={{ maxWidth: '400px', marginBottom: '36px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
          <span style={{ fontSize: '13px', color: C.muted }}>Progresso</span>
          <span style={{ fontSize: '13px', fontWeight: 700, color: checkedCount === totalItems ? C.green : C.accent }}>
            {checkedCount}/{totalItems}
          </span>
        </div>
        <div style={{ height: '6px', background: C.border, borderRadius: '99px', overflow: 'hidden' }}>
          <div style={{
            height: '100%',
            width: `${(checkedCount / totalItems) * 100}%`,
            background: checkedCount === totalItems
              ? `linear-gradient(90deg, ${C.green}, #22c55e)`
              : `linear-gradient(90deg, ${C.accent}, #00c8e0)`,
            transition: 'width 0.3s ease',
            borderRadius: '99px',
          }} />
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '680px' }}>
        {groups.map(({ title, items }) => (
          <Card key={title}>
            <p style={{
              margin: '0 0 16px', fontWeight: 700, fontSize: '13px',
              textTransform: 'uppercase', letterSpacing: '0.08em',
              color: C.accent,
            }}>
              {title}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {items.map(item => {
                const key = `${title}-${item}`
                const isChecked = !!checked[key]
                return (
                  <label key={key} style={{
                    display: 'flex', alignItems: 'flex-start', gap: '10px',
                    padding: '8px', borderRadius: '6px', cursor: 'pointer',
                    background: isChecked ? C.greenSoft : 'transparent',
                    transition: 'background 0.15s',
                  }}>
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={e => setChecked(prev => ({ ...prev, [key]: e.target.checked }))}
                      style={{ marginTop: '2px', accentColor: C.green, cursor: 'pointer' }}
                    />
                    <span style={{
                      fontSize: '13px', lineHeight: 1.6,
                      color: isChecked ? C.green : C.text,
                      textDecoration: isChecked ? 'line-through' : 'none',
                      transition: 'color 0.15s',
                    }}>
                      {item}
                    </span>
                  </label>
                )
              })}
            </div>
          </Card>
        ))}
      </div>

      {checkedCount === totalItems && (
        <div style={{
          marginTop: '32px', padding: '20px 24px',
          background: C.greenSoft, border: `1px solid ${C.green}44`,
          borderRadius: '12px', maxWidth: '680px',
          display: 'flex', alignItems: 'center', gap: '12px',
        }}>
          <PartyPopper size={28} style={{ color: C.green, flexShrink: 0 }} />
          <div>
            <p style={{ margin: '0 0 2px', fontWeight: 700, color: C.green }}>Parabéns!</p>
            <p style={{ margin: 0, fontSize: '13px', color: C.muted }}>
              Todos os itens foram verificados. Lembre-se de testar também com leitores de tela reais.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

const meta: Meta = {
  title: 'Guias/Acessibilidade',
  parameters: {
    layout: 'fullscreen',
    docs: { page: null },
    options: { showPanel: false },
    controls: { disable: true },
    actions:  { disable: true },
  },
}

export default meta
type Story = StoryObj

export const Introducao: Story = {
  name: 'Introdução & POUR',
  render: () => <IntroDoc />,
}

export const ContrasteCores: Story = {
  name: 'Contraste de Cores',
  render: () => <ContrastDoc />,
}

export const NavegacaoTeclado: Story = {
  name: 'Navegação por Teclado',
  render: () => <KeyboardDoc />,
}

export const AriaSemantica: Story = {
  name: 'ARIA & HTML Semântico',
  render: () => <AriaDoc />,
}

export const FormulariosAcessiveis: Story = {
  name: 'Formulários Acessíveis',
  render: () => <FormsDoc />,
}

export const ImagensMidia: Story = {
  name: 'Imagens & Mídia',
  render: () => <MediaDoc />,
}

export const Checklist: Story = {
  name: 'Checklist Geral',
  render: () => <ChecklistDoc />,
}
