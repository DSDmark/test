'use client'

import { Grid, styled } from '@mui/material'

export const StyledFooter = styled('footer')(({ theme }) => ({
  width: '100%',
  background: theme.palette.primary.main,
  color: theme.palette.primary.light,
}))

export const StyledGrid = styled(Grid)(({ theme }) => ({
  placeItems: 'center',
  justifyContent: 'space-evenly',
  paddingTop: theme.spacing(15),
}))
