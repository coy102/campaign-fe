import React, { memo } from 'react'

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircle'
import { Box, Tooltip, Typography } from '@mui/material'

import { fontSize } from '~/styles/theme'

import StyledImage from '../StyledImage'

interface Props {
  campaigner: string
  coverSrc: string
  dayLeft: number
  donation: number
  verified: boolean
  title: string
}

const CardItem = ({
  campaigner,
  coverSrc,
  dayLeft,
  donation,
  title,
  verified,
}: Props) => (
  <Box role="listitem" mb={5} display="flex" flexDirection="column">
    <StyledImage
      loader={() => coverSrc}
      src={coverSrc}
      width="100%"
      height={200}
      unoptimized
    />
    <Tooltip title={title}>
      <Typography
        className="textWrap"
        mt={2}
        fontSize={fontSize[16]}
        fontWeight="bold"
      >
        {title}
      </Typography>
    </Tooltip>
    <Box display="flex">
      <Typography mr={1} mb={1} fontSize={fontSize[12]}>
        {campaigner}
      </Typography>
      {verified && (
        <CheckCircleOutlineIcon
          data-testid="verified-icon"
          color="primary"
          fontSize="inherit"
        />
      )}
    </Box>

    <Box mt={2} display="flex" justifyContent="space-between">
      <Box>
        <Typography mb={1} fontSize={fontSize[12]}>
          Terkumpul
        </Typography>
        <Typography fontSize={fontSize[12]} fontWeight="bold">
          Rp {Number(donation).toLocaleString()}
        </Typography>
      </Box>
      <Box>
        <Typography mb={1} fontSize={fontSize[12]}>
          Sisa Hari
        </Typography>
        <Typography fontSize={fontSize[12]} fontWeight="bold">
          {dayLeft}
        </Typography>
      </Box>
    </Box>
  </Box>
)
export default memo(CardItem)
