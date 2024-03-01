import { Theme } from '@mui/material'
import CssBaseLine from './cssbaseline'
import Tooltip from './tooltip'
import Link from './link'
import Popover from './popover'
import Button from './button'
import SvgIcon from './svgIcon'
import Icon from './icon'
import Typography from './typography'
import Container from './container'

export default function ComponentOverrides(theme: Theme) {
  return Object.assign(
    Link(theme),
    Container(theme),
    Popover(theme),
    SvgIcon(theme),
    CssBaseLine(theme),
    Typography(theme),
    Button(theme),
    Tooltip(theme),
    Icon(theme),
  )
}
