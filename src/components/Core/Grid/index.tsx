import styled from '@emotion/styled'

const autoRows = ({ minRowHeight = '20px' }) => `minmax(${minRowHeight}, auto)`

const gridColumns = ({ columns = 12 }) => `repeat(${columns}, 1fr)`

const gridGap = ({ gap = 8 }) => `${gap}px`

const gridFlow = ({ flow = 'row' }) => flow

type GridProps = {
  columns?: number
  gap?: number
  minRowHeight?: string
  flow?: string
}

const Grid = styled.div<GridProps>`
  display: grid;
  height: auto;
  grid-auto-flow: ${gridFlow};
  grid-auto-rows: ${autoRows};
  grid-template-columns: ${gridColumns};
  grid-gap: ${gridGap};
`

export default Grid
