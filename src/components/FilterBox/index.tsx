import React, { memo } from 'react'

import { MenuItem, styled, TextField } from '@mui/material'
import { Box } from '@mui/system'
import uniqid from 'uniqid'

import { SORT_LIST_OPTIONS } from '~/config/constants'
import { IMG_BRAND } from '~/config/image'

import StyledImage from '../StyledImage'

interface Props {
  sortBy: string
  handleChangeSortBy: (e) => void
}

const WrapperBox = styled(Box)(
  {
    display: 'flex',
  },
  ({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  })
)

const FilterBox = ({ sortBy, handleChangeSortBy }: Props) => (
  <WrapperBox my={5} data-testid="filter-box">
    <Box flexGrow={1} mb={2}>
      <StyledImage
        loader={() => IMG_BRAND.BRAND_LOGO}
        src={IMG_BRAND.BRAND_LOGO}
        width={80}
        height={80}
      />
    </Box>

    <Box>
      <TextField
        label="Sort by"
        variant="outlined"
        value={sortBy}
        onChange={handleChangeSortBy}
        inputProps={{
          'data-testid': 'select-sort-by',
        }}
        select
        fullWidth
      >
        {SORT_LIST_OPTIONS.map((opt) => (
          <MenuItem key={uniqid()} value={opt.value}>
            {opt.label}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  </WrapperBox>
)

export default memo(FilterBox)
