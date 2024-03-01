// base
import React from 'react'

// @mui
import { AppBar, Toolbar, Container } from '@mui/material'

// components
import Navigation from './navigations'

const Header = () => {
  return (
    <AppBar position="static">
      <Container sx={{ mt: 0 }}>
        <Toolbar disableGutters>
          <Navigation />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
