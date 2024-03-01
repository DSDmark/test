import React from 'react'
import Link from 'next/link'

import { IChildrenProps } from '@/types'
import { Box } from '@mui/material'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Something is wrong',
  description: 'Something is wrong',
}

export default function ErrorLayout({ children }: IChildrenProps) {
  return (
    <Box>
      {children}
      <Link href="/">Go back to home</Link>
    </Box>
  )
}
