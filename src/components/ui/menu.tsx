// base
import React from 'react'
import Link from 'next/link'

// @mui
import { Typography, Menu, MenuItem, Link as MuiLink } from '@mui/material'

interface IMenuComponentProps {
  id: string
  anchorEl?: null | HTMLElement
  onClose?: () => void
  items: any
  handleItemClick?: (val: string) => void
  onChange?: () => void
  selectedItem?: string
}

const MenuCpt = ({
  id,
  anchorEl,
  onClose,
  items,
  handleItemClick,
  onChange,
  selectedItem,
  ...rest
}: IMenuComponentProps) => (
  <>
    <Menu id={id} anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={onClose}>
      {items.map((item: any) => (
        <>
          {item.href ? (
            <MuiLink key={item.id} component={Link} href={item.href}>
              <MenuItem
                onClick={() => handleItemClick && handleItemClick(item.id)}
                selected={selectedItem === item.id}
                onChange={onChange}
                {...rest}
              >
                <Typography textAlign="center">{item.title}</Typography>
              </MenuItem>
            </MuiLink>
          ) : (
            <MenuItem
              key={item.id}
              onClick={() => handleItemClick && handleItemClick(item.id)}
              selected={selectedItem === item.id}
              onChange={onChange}
              {...rest}
            >
              <Typography textAlign="center">{item.title}</Typography>
            </MenuItem>
          )}
        </>
      ))}
    </Menu>
  </>
)

export default MenuCpt
