import React from 'react'
import { Box } from '@mui/material'
import Image from 'next/image'

interface IImageProps {
  alt: string
  src: string
  hgt?: number | string
}

const ImgCpt = ({ alt, src, hgt = '400px', ...rest }: IImageProps) => {
  return (
    <Box sx={{ position: 'relative', height: hgt }}>
      <Image
        src={src}
        sizes="100vw"
        fill={true}
        loading="lazy"
        style={{ objectFit: 'cover', width: '100%' }}
        alt={alt}
        {...rest}
      />
    </Box>
  )
}

export default ImgCpt
