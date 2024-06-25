import { vars } from "@/app/globals.css";
import { style } from "@vanilla-extract/css";

export const searchBar = style({
  width: '1000px',
  height: '56px',
  border: `2px solid ${vars.slate900}`,
  WebkitAppearance: "none",
  MozAppearance: 'none',
  appearance: 'none',
  WebkitBoxSizing: 'content-box',
  MozBoxSizing: 'content-box',
  boxSizing:'border-box',
  outline: "none",
  
  borderRadius: '24px',
  padding: '17px 24px',
  backgroundColor: `${vars.slate100}`,
  color: `${vars.slate900}`,
  fontFamily: 'NanumSquareR',
  '::placeholder': {
    color: `${vars.slate500}`,
  },
})

