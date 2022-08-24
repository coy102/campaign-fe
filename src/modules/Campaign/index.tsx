import React, { memo } from 'react'

import { Box } from '@mui/material'

import FilterBox from '~/components/FilterBox'

const Campaign = () => (
  <Box>
    <FilterBox />
  </Box>
)

export default memo(Campaign)
