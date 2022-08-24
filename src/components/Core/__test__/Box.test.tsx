import { render, within } from '@testing-library/react'
import React from 'react'

import Box from '../Box'

describe('<Box />', () => {
  const testChildren = <div data-testid="child">Hello</div>

  it('should first render', () => {
    const { getByTestId } = render(<Box id="some-id">{testChildren}</Box>)

    expect(getByTestId('child')).toBeTruthy()
    expect(within(getByTestId('child')).getByText('Hello')).toBeTruthy()
  })

  it('combines using spacing prop', () => {
    const { container } = render(
      <Box data-testid="spacing-box" mt={10} mr={5} />
    )

    expect(container.firstChild).toHaveStyle({
      marginTop: '10px',
      marginRight: '5px',
    })
  })
})
