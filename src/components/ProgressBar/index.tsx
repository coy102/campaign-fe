import styled from '@emotion/styled'
import { LinearProgress } from '@mui/material'
import { grey, pink } from '@mui/material/colors'

const ProgressBar = styled(LinearProgress)({}, ({ value }) => ({
  '& .MuiLinearProgress-barColorPrimary': {
    backgroundColor: value >= 100 ? pink[400] : grey[500],
  },
  '& .MuiLinearProgress-barColorSecondary': {
    backgroundColor: grey[500],
  },
}))

export default ProgressBar
