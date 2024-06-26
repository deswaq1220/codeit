import { vars } from "@/app/globals.css";
import { style } from "@vanilla-extract/css";

export const checkListTodoContainer = style({
  width: '100%',
  height: '50px',
  border: `2px solid ${vars.slate900}`,
  borderRadius: '27px',
  backgroundColor: 'white',
  padding: '9px 12px',
  marginBottom:'16px',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center'
})

export const checkBoxTodoImage = style({
  width: '32px',
  height:'32px',
  backgroundImage: 'url(/icons/checkbox_none.svg)',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  marginRight: '16px',
  cursor:'pointer'
})