import { globalStyle, styleVariants } from '@vanilla-extract/css';

globalStyle('html, body', {
  margin: 0
});

export const background = styleVariants({
  slate900: { background: '#0F172A' },
  slate800: { background: '#1E293B' },
  slate500: { background: '#64748B' },
  slate400: { background: '#94A3B8' },
  slate300: { background: '#CBD5E1' },
  slate200: { background: '#E2E8F0' },
  slate100: { background: '#F1F5F9' },
  violet600: { background: '#7C3AED' },
  violet100: { background: '#EDE9FE' },
  rose500: { background: '#F43F5E' },
  lime300: { background: '#BEFF264' },
  amber800: { background: '#92400E' },
  
})

export const colors = styleVariants({
  slate900: { background: '#0F172A' },
  slate800: { background: '#1E293B' },
  slate500: { background: '#64748B' },
  slate400: { background: '#94A3B8' },
  slate300: { background: '#CBD5E1' },
  slate200: { background: '#E2E8F0' },
  slate100: { background: '#F1F5F9' },
  violet600: { background: '#7C3AED' },
  violet100: { background: '#EDE9FE' },
  rose500: { background: '#F43F5E' },
  lime300: { background: '#BEFF264' },
  amber800: { background: '#92400E' },
})