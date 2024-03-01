import React, { useMemo } from 'react'

// @mui
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  responsiveFontSizes,
  StyledEngineProvider,
  CssBaseline,
  ThemeOptions,
} from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'

// base overrides
import { createPalette, breakpoints, shadows, typography } from './base'
import ComponentOverrides from './overrides'
import { IThemeProvider } from './type'
import { useAppSelector } from '../hooks/useRtk'

const ThemeProvider = ({ children }: IThemeProvider) => {
  const { preferredThemeMode } = useAppSelector(({ themeMode }) => themeMode)
  const refTheme = createPalette(preferredThemeMode)
  const { palette } = refTheme
  const customShadows = useMemo(() => shadows(refTheme), [refTheme])

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      breakpoints,
      palette,
      customShadows,
      typography,
    }),
    [palette, customShadows],
  )

  const theme = responsiveFontSizes(createTheme(themeOptions))
  theme.components = ComponentOverrides(theme)
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <StyledEngineProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </MuiThemeProvider>
      </StyledEngineProvider>
    </AppRouterCacheProvider>
  )
}

export default ThemeProvider
