import { style } from "@vanilla-extract/css";

export const homeContainer = style({
  width: "100%",
  display: 'flex',
  justifyContent: "center",
  alignItems:"center",
  flexDirection: "column",
  padding: '0 360px',
  boxSizing:"border-box"
})

export const todoList = style({
  width: "100%",
  marginTop:'36px'
})