'use client'

// base
import React from 'react'

// @mui
import { Container, Grid, Stack, Typography, alpha } from '@mui/material'

// constants
import { META_DATA, SOCIAL_LINKS, LEGAL_LINKS, CONTACT_INFO } from '@/constants'

// styles
import { StyledFooter, StyledGrid } from './style'

// components
import { LinkCpt } from '@/components'

const Footer = () => {
  const re = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta ipsum eaque iste necessitatibus recusandae
              vitae unde tenetur at odit minus quae magni dolores, quod reiciendis eum excepturi voluptatem quos? Nulla
              dolore rerum, sapiente nobis a incidunt harum consectetur consequatur deserunt, temporibus voluptate
              quaerat nemo impedit repudiandae esse tempore sequi vero molestiae tempora magni molestias alias illo`

  const DATA = [LEGAL_LINKS, CONTACT_INFO]
  const currentYear = new Date().getFullYear()
  return (
    <StyledFooter className="border-t">
      <Container>
        <StyledGrid container gap={{ xs: 3 }}>
          <Grid item xs={12} sm={5}>
            <Typography variant="h4" color={theme => theme.palette.text.secondary}>
              New post
            </Typography>
            <Typography variant="body1" component={LinkCpt} href="#">
              {re.substring(0, 400)}...
            </Typography>
          </Grid>
          {DATA.map((itm, idx) => (
            <Grid item key={idx} xs={12} sm={3}>
              <Typography mb={1} variant="h4" color={theme => theme.palette.text.secondary}>
                {itm.title}
              </Typography>
              {itm.data.map((i, idx) => (
                <Stack spacing={2} key={idx} direction="column">
                  <LinkCpt
                    sx={{
                      color: 'text.secondary',
                      '&:hover': {
                        color: 'text.primary',
                      },
                    }}
                    key={i.SubTitle}
                    href={i.href}
                    trg="_blank"
                  >
                    <i.icon /> {i.SubTitle}
                  </LinkCpt>
                </Stack>
              ))}
            </Grid>
          ))}
          <Grid
            item
            xs={12}
            gap={2}
            my={2}
            display="flex"
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent={{ xs: 'center', sm: 'space-between' }}
            alignItems={{ xs: 'center', sm: 'space-between' }}
          >
            <Typography variant="body2">
              © {META_DATA.name} {currentYear}. All Rights reserved.
            </Typography>
            <Stack gap={2} direction="row">
              {SOCIAL_LINKS.map(social => (
                <LinkCpt
                  key={social.title}
                  sx={{ display: 'flex', bgcolor: alpha('#000', 0.4), borderRadius: '50%', padding: 0.5 }}
                  href={social.href}
                  trg="_blank"
                >
                  <social.icon />
                </LinkCpt>
              ))}
            </Stack>
          </Grid>
        </StyledGrid>
      </Container>
    </StyledFooter>
  )
}

export default Footer
