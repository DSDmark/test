'use client'

// base
import * as React from 'react'

// @mui
import { Avatar, Container, Grid, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const BannerContainer = styled(Grid)(({ theme }) => ({
  color: theme.palette.text.primary,
  justifyContent: 'space-between',
  textAlign: 'center',
  padding: '10px',
  fontSize: '1.2rem',
  width: '100%',
  zIndex: 1,
}))

const Banner: React.FC = () => {
  return (
    <Container sx={{ mt: 0 }}>
      <BannerContainer container spacing={2}>
        <Grid item>
          <Stack alignItems="center" direction="row" spacing={1}>
            <Avatar variant="square" src="/images/logo2.png" alt="logo" />
            <Typography>
              helogsdf
              <br /> helogsdf
            </Typography>
          </Stack>
        </Grid>
        <Grid item>
          <Stack alignItems="center" direction="row" spacing={1}>
            <Avatar variant="square" src="/images/logo.png" alt="logo" />
          </Stack>
        </Grid>
        <Grid item>
          <Stack alignItems="center" direction="row" spacing={1}>
            <Typography>
              helogsdf
              <br /> helogsdf
            </Typography>
            <Avatar variant="square" src="/images/logo3.png" alt="logo" />
          </Stack>
        </Grid>
      </BannerContainer>
    </Container>
  )
}

export default Banner
