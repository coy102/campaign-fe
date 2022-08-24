import { render } from '@testing-library/react'
import React from 'react'

import { mockedAxiosCallback, mockedUseAxios } from '~/mocks/services/useAxios'
import Campaign from '~/modules/Campaign'
import {
  loadingResponseData,
  responseData,
} from '~/services/hooks/__test__/campaign.data'

jest.mock('~/services/useAxios', () => mockedUseAxios)

describe('<Campaign />', () => {
  afterEach(jest.clearAllMocks)

  it('should render loading at the firstime', () => {
    mockedUseAxios.mockImplementationOnce(() => ({
      axiosCallback: mockedAxiosCallback,
      data: loadingResponseData,
    }))

    const campaignContainer = render(<Campaign />)

    expect(campaignContainer.queryByTestId('loading')).toBeInTheDocument()
    expect(
      campaignContainer.queryByTestId('campaign-card-list')
    ).not.toBeInTheDocument()
    expect(
      campaignContainer.queryByTestId('item-94597')
    ).not.toBeInTheDocument()
  })

  it('should render when campaign is not empty', () => {
    mockedUseAxios.mockImplementation(() => ({
      axiosCallback: mockedAxiosCallback,
      data: responseData,
    }))

    const campaignContainer = render(<Campaign />)

    expect(
      campaignContainer.queryByTestId('campaign-card-list')
    ).toBeInTheDocument()
    expect(campaignContainer.queryByTestId('loading')).not.toBeInTheDocument()
    expect(campaignContainer.queryByTestId('item-94597')).toBeInTheDocument()
  })
})
