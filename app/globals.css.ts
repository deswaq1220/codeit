import { globalFontFace, globalStyle } from '@vanilla-extract/css';

const nanumSquareFont = {
  src: `local('NanumSquareR'), url('/fonts/NanumSquareR.otf') format('opentype')`,
  fontWeight: 'normal',
  fontStyle: 'normal',
};

globalFontFace('NanumSquare', nanumSquareFont);


export const vars = {
  slate900: '#0F172A',
  slate800: '#1E293B',
  slate500: '#64748B',
  slate400: '#94A3B8',
  slate300: '#CBD5E1',
  slate200: '#E2E8F0',
  slate100: '#F1F5F9',
  violet600: '#7C3AED',
  violet100: '#EDE9FE',
  rose500: '#F43F5E',
  lime300: '#BEFF264',
  amber800: '#92400E',
};



globalStyle('html, body', {
  margin: 0,
  fontFamily: 'NanumSquare, Arial, sans-serif', // 나눔스퀘어 폰트 적용
});

