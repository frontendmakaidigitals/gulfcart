export const c = {
  bg: '#08090C',
  bgAlt: '#0B0D12',
  surface: '#0D0F14',
  surfaceRaised: '#0F1218',
  input: '#0B0D12',
  line: 'rgba(255,255,255,.08)',
  lineSoft: 'rgba(255,255,255,.06)',
  text: '#EDEFF3',
  textSoft: '#C3C9D6',
  muted: '#9AA2B2',
  dim: '#8A92A3',
  faint: '#7C8493',
  fainter: '#6B7280',
  ghost: '#5D6472',
  accent: '#4EA8FF',
  accentLight: '#8FCBFF',
  accentDeep: '#1668C7',
  accentA: (a: number) => `rgba(78,168,255,${a})`,
  good: '#4ADE80',
  bad: '#FF7A6B',
} as const;

export const font = {
  display: "'Space Grotesk', system-ui, sans-serif",
  body: "Manrope, system-ui, sans-serif",
} as const;

export const shell = {
  maxWidth: 1200,
  margin: '0 auto',
} as const;

export const eyebrow: React.CSSProperties = {
  fontSize: 11.5,
  letterSpacing: '.18em',
  fontWeight: 700,
  color: c.accent,
};

export const h2: React.CSSProperties = {
  margin: '16px 0 0',
  fontFamily: font.display,
  fontSize: 46,
  lineHeight: 1.1,
  letterSpacing: '-.032em',
  fontWeight: 700,
};

export const lede: React.CSSProperties = {
  margin: '18px 0 0',
  fontSize: 17.5,
  lineHeight: 1.65,
  color: c.muted,
};
