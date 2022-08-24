import React, { memo } from 'react'

import { Box, CircularProgress } from '@mui/material'

const Loading = () => (
  <Box data-testid="loading" textAlign="center">
    <CircularProgress color="primary" size={20} />
  </Box>
)

export default memo(Loading)
