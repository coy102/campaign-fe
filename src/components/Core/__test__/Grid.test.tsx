import { render, within } from '@testing-library/react'
import React from 'react'

import Grid from '../Grid'

describe('<Grid />', () => {
  const testChildren = <div data-testid="child">Hello Me</div>

  it('should default render', () => {
    const { getByTestId } = render(
      <Grid data-testid="Grid">{testChildren}</Grid>
    )

    const childTestId = getByTestId('Grid')

    expect(childTestId).toBeTruthy()
    expect(within(childTestId).getByText('Hello Me')).toBeTruthy()

    expect(childTestId).toHaveStyle(`
      display: grid;
      height: auto;
      grid-auto-flow: row;
      grid-auto-rows: minmax(20px, auto);
      grid-template-columns: repeat(12, 1fr);
    `)
  })

  it('should render using all prop', () => {
    const { getByTestId } = render(
      <Grid
        data-testid="Grid"
        minRowHeight="30px"
        flow="column"
        columns={3}
        gap={10}
      >
        {testChildren}
      </Grid>
    )

    const childTestId = getByTestId('Grid')

    expect(childTestId).toBeTruthy()
    expect(within(childTestId).getByText('Hello Me')).toBeTruthy()

    expect(childTestId).toHaveStyle(`
      display: grid;
      height: auto;
      grid-auto-flow: column;
      grid-auto-rows: minmax(30px, auto);
      grid-template-columns: repeat(3, 1fr)
    `)
  })
})
