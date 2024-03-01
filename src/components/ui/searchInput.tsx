import React from 'react'
import { SxProps, TextField } from '@mui/material'

interface ITextFieldProps {
  sx?: SxProps
  label?: string
}

const SearchCpt = ({ sx, label, ...rest }: ITextFieldProps) => {
  return <TextField sx={sx} id="outlined-search" label={label || ''} type="search" variant="outlined" {...rest} />
}

export default SearchCpt
