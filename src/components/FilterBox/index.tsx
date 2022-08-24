import { memo } from 'react'

import { Box } from '@mui/system'

import { IMG_BRAND } from '~/config/image'
import { fontSize } from '~/styles/theme'

import StyledImage from '../StyledImage'

const FilterBox = () => (
  <Box my={5} data-testid="filter-box" display="flex" alignItems="center">
    <Box>
      <StyledImage
        loader={() => IMG_BRAND.BRAND_LOGO}
        src={IMG_BRAND.BRAND_LOGO}
        width={100}
        height="100%"
        rounded
      />
    </Box>
    <Box fontSize={fontSize[32]} ml={5} fontWeight="bold">
      Kitabisa
    </Box>
  </Box>
)

export default memo(FilterBox)
