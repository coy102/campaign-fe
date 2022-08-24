import React, { memo } from 'react'

import { Box, Typography } from '@mui/material'
import { fontSize } from '@mui/system'

import StyledImage from '../StyledImage'

interface Props {
  coverSrc: string
  title: string
}

const CardItem = ({ coverSrc, title }: Props) => (
  <Box mb={5} display="flex" flexDirection="column">
    <StyledImage
      loader={() => coverSrc}
      src={coverSrc}
      width="100%"
      height={200}
      unoptimized
    />
    <Typography my={2} fontSize={fontSize[12]}>
      {title}
    </Typography>
  </Box>
)
export default memo(CardItem)
