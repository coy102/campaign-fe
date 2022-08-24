import styled from '@emotion/styled'

export type CellProps = {
  width?: number
  height?: number
  top?: number | string
  left?: number | string
  middle?: boolean
  center?: boolean
}

const Cell = styled.div<CellProps>`
  height: 100%;
  min-width: 0;
  grid-column-end: ${({ width = 1 }) => `span ${width}`};
  grid-row-end: ${({ height = 1 }) => `span ${height}`};
  ${
    /* prettier-ignore */
    ({ middle }) => middle && `
    display: inline-flex;
    flex-flow: column wrap;
    justify-content: center;
    justify-self: stretch;
  `
  };
`

export default Cell
