import { IChildrenProps } from '@/types'
import { Stack, SxProps } from '@mui/material'

interface IStack extends IChildrenProps {
  sx?: SxProps
}

const StackCpt = ({ children, sx, ...rest }: IStack) => {
  return (
    <Stack sx={sx} gap={2} direction={{ sx: 'column', sm: 'row' }} justifyContent="space-between" {...rest}>
      {children}
    </Stack>
  )
}

export default StackCpt
