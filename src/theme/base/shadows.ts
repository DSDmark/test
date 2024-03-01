import { Theme, alpha } from '@mui/material'

export const text = `0 -1px 0 rgb(0 0 0 / 40%)`

const shadows = (theme: Theme) => ({
  button: `0 2px #0000000b`,
  text,
  z1: `0px 2px 8px ${alpha(theme.palette.grey[900], 0.15)}`,
})

export default shadows
