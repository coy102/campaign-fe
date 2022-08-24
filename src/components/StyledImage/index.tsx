import styled from '@emotion/styled'
import Image from 'next/image'

interface Props {
  rounded?: boolean
}

const StyledImage = styled(Image)<Props>(
  {
    objectFit: 'cover',
  },
  ({ rounded = false }) => ({
    borderRadius: rounded ? 10 : 0,
  })
)

export default StyledImage
