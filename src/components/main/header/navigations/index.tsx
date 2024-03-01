'use client'

// base
import React, { useState, MouseEvent, useEffect } from 'react'
import Link from 'next/link'

// @mui
import { Box, IconButton, Tooltip, Avatar, Button, PaletteMode } from '@mui/material'
import { Menu as MenuIcon, ColorLens } from '@mui/icons-material'

// components
import { MenuCpt } from '@/components'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { setErrorToast, setThemeMode } from '@/states'

// constants
import { PAGES, SETTING_OPTIONS, THEME_MODES } from '@/constants'

const Navigation = () => {
  const { preferredThemeMode } = useAppSelector(({ themeMode }) => themeMode)
  const dispatch = useAppDispatch()
  const [anchorEl, setAnchorEl] = useState({
    nav: null,
    user: null,
    themeMode: null,
  })

  const handleOpenMenu = (menuName: string, e: MouseEvent<HTMLElement>) => {
    setAnchorEl({ ...anchorEl, [menuName]: e.currentTarget })
  }

  const handleCloseMenu = (menuName: string) => {
    setAnchorEl({ ...anchorEl, [menuName]: null })
  }

  const handleSelectTheme = (selectedTheme: PaletteMode) => {
    dispatch(setThemeMode(selectedTheme))
    dispatch(setErrorToast('Welcome to the app!'))
  }

  return (
    <>
      <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={e => handleOpenMenu('nav', e)}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <MenuCpt id="menu-appbar" anchorEl={anchorEl.nav} onClose={() => handleCloseMenu('nav')} items={PAGES} />
      </Box>
      <Box ml={3} sx={{ display: { xs: 'none', sm: 'flex' } }}>
        {PAGES.map(page => (
          <Button LinkComponent={Link} href={page.href} key={page.id} variant="text">
            {page.title}
          </Button>
        ))}
      </Box>
      <Box ml="auto">
        <Tooltip title="Theme Modes">
          <IconButton onClick={e => handleOpenMenu('themeMode', e)} sx={{ p: 0 }}>
            <ColorLens fontSize="large" />
          </IconButton>
        </Tooltip>
        <MenuCpt
          id="menu-appbar"
          selectedItem={preferredThemeMode}
          anchorEl={anchorEl.themeMode}
          handleItemClick={(val: any) => handleSelectTheme(val)}
          onClose={() => handleCloseMenu('themeMode')}
          items={THEME_MODES}
        />
      </Box>
      <Box ml={2}>
        <Tooltip title="Open settings">
          <IconButton onClick={e => handleOpenMenu('user', e)} sx={{ p: 0 }}>
            <Avatar />
          </IconButton>
        </Tooltip>
        <MenuCpt
          id="menu-appbar"
          anchorEl={anchorEl.user}
          onClose={() => handleCloseMenu('user')}
          items={SETTING_OPTIONS}
        />
      </Box>
    </>
  )
}

export default Navigation
