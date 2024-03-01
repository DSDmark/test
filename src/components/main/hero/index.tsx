import React from 'react'
import { CarouselCpt, SearchCpt, StackCpt } from '@/components'
import { Box, Button, Container, Typography } from '@mui/material'

const Hero = () => {
  const data = [
    {
      id: 1,
      title: 'loreum ipsum',
      alt: 'loerum ipsum',
      src: '/images/test2.webp',
    },
    {
      id: 2,

      title: 'youyoyyuoy ipsum 2',
      alt: 'loreum ipsum 2',
      src: '/images/test1.webp',
    },
    {
      id: 3,
      title: 'loreum ipsum 3',
      alt: 'sdfd',
      src: '/images/test2.webp',
    },
    {
      id: 4,
      title: 'l ipsum 5',
      alt: 'sdfd',
      src: '/images/test1.webp',
    },
  ]

  return (
    <>
      <CarouselCpt carouselItems={data} hgt="500px" />
      <Container sx={{ mt: 4 }}>
        <Box textAlign="center">
          <Typography variant="h4" mb={4}>
            hello
          </Typography>
          <StackCpt>
            <SearchCpt label="Search by city" />
            <SearchCpt label="Search by country" />
            <SearchCpt label="Search by gods" />
            <Button variant="contained">Search</Button>
          </StackCpt>
        </Box>
      </Container>
    </>
  )
}

export default Hero
