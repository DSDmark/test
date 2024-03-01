import { rubik, anton, exo2, incon } from './fonts'
import { primary, neutral } from './color'
import { text } from './shadows'
import { TypographyVariantsOptions } from '@mui/material'
import { TextTransform } from '@/types'
import { getFontStyle } from '@/utils'

const headingStyle = {
  textTransform: 'uppercase' as TextTransform,
  letterSpacing: '0.1rem',
  ...getFontStyle(exo2),
  color: primary.dark,
  textShadow: text,
}

const subTitleStyle = {
  textTransform: 'uppercase' as TextTransform,
  letterSpacing: '0.1rem',
  ...getFontStyle(anton),
  textShadow: text,
}

const bodyStyle = {
  letterSpacing: '0.1rem',
  ...getFontStyle(incon),
  textShadow: text,
}

const typography: TypographyVariantsOptions = {
  body1: { ...bodyStyle, ...getFontStyle(rubik) },
  body2: bodyStyle,
  h1: headingStyle,
  h2: headingStyle,
  h3: headingStyle,
  h4: headingStyle,
  h5: headingStyle,
  h6: headingStyle,
  subtitle1: subTitleStyle,
  subtitle2: subTitleStyle,
}

export default typography
