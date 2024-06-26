import { vars } from "@/app/globals.css";
import { style } from "@vanilla-extract/css";

export const checkListNameContainer = style({
  width: '100%',
  height: '64px',
  borderRadius: '24px',
  border: `2px solid ${vars.slate900}`,
  padding: '16px 0',
  marginTop:'24px',
  boxSizing:'border-box',
  display: 'flex',
  justifyContent: "center",
  alignItems: 'center',
  backgroundColor:"white"
})
