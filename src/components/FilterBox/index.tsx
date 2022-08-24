import React, { memo } from 'react'

import { MenuItem, TextField } from '@mui/material'
import { Box } from '@mui/system'
import uniqid from 'uniqid'

import { SORT_LIST_OPTIONS } from '~/config/constants'
import { IMG_BRAND } from '~/config/image'
import { fontSize } from '~/styles/theme'

import StyledImage from '../StyledImage'

interface Props {
  sortBy: string
  handleChangeSortBy: (e) => void
}

const FilterBox = ({ sortBy, handleChangeSortBy }: Props) => (
  <Box my={5} data-testid="filter-box" display="flex" alignItems="center">
    <Box>
      <StyledImage
        loader={() => IMG_BRAND.BRAND_LOGO}
        src={IMG_BRAND.BRAND_LOGO}
        width={100}
        height="100%"
        unoptimized
      />
    </Box>
    <Box fontSize={fontSize[32]} ml={5} fontWeight="bold">
      Kitabisa
    </Box>
    <Box flexGrow={1} textAlign="right">
      <TextField
        label="Sort by"
        variant="outlined"
        value={sortBy}
        onChange={handleChangeSortBy}
        inputProps={{
          'data-testid': 'select-sort-by',
        }}
        select
      >
        {SORT_LIST_OPTIONS.map((opt) => (
          <MenuItem key={uniqid()} value={opt.value}>
            {opt.label}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  </Box>
)

export default memo(FilterBox)
