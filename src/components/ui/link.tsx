// base
import Link from 'next/link'

// @mui
import { Link as MuiLink, SxProps } from '@mui/material'

// types
import { IChildrenProps } from '@/types'

interface IImageProps extends IChildrenProps {
  href: string
  sx?: SxProps
  trg?: string
}

const LinkCpt = ({ children, trg = '_blank', href, sx, ...rest }: IImageProps) => {
  return (
    <MuiLink sx={sx} target={trg} component={Link} href={href} {...rest}>
      {children}
    </MuiLink>
  )
}

export default LinkCpt
