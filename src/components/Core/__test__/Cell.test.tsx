import { render, within } from '@testing-library/react'
import React from 'react'

import Cell from '../Cell'

describe('<Cell />', () => {
  const testChildren = <div data-testid="child">Hello Me</div>

  it('should default render', () => {
    const { getByTestId } = render(
      <Cell data-testid="cell">{testChildren}</Cell>
    )

    const childTestId = getByTestId('cell')

    expect(childTestId).toBeTruthy()
    expect(within(childTestId).getByText('Hello Me')).toBeTruthy()
    expect(childTestId).toHaveStyle(`
      height: 100%;
      min-width: 0;
      grid-column-end: span 1;
      grid-row-end: span 1;
    `)
  })

  it('should render using width and height prop', () => {
    const { getByTestId } = render(
      <Cell data-testid="cell" height={2} width={6}>
        {testChildren}
      </Cell>
    )

    const childTestId = getByTestId('cell')

    expect(childTestId).toBeTruthy()
    expect(within(childTestId).getByText('Hello Me')).toBeTruthy()
    expect(childTestId).toHaveStyle(`
      height: 100%;
      min-width: 0;
      grid-column-end: span 6;
      grid-row-end: span 2;
    `)
  })

  it('should render using middle prop', () => {
    const { getByTestId } = render(
      <Cell data-testid="cell" height={2} width={6} middle>
        {testChildren}
      </Cell>
    )

    const childTestId = getByTestId('cell')

    expect(childTestId).toBeTruthy()
    expect(within(childTestId).getByText('Hello Me')).toBeTruthy()
    expect(childTestId).toHaveStyle(`
      height: 100%;
      min-width: 0;
      grid-column-end: span 6;
      grid-row-end: span 2;
      display: inline-flex;
      flex-flow: column wrap;
      justify-content: center;
      justify-self: stretch;
    `)
  })
})
