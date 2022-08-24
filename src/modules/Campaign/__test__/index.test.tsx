import { fireEvent, render, within } from '@testing-library/react'
import React from 'react'

import { mockedAxiosCallback, mockedUseAxios } from '~/mocks/services/useAxios'
import Campaign from '~/modules/Campaign'
import {
  loadingResponseData,
  responseData,
} from '~/services/hooks/__test__/campaign.data'

jest.mock('~/services/useAxios', () => mockedUseAxios)

describe('<Campaign />', () => {
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
  })

  it('should render when campaign is not empty', () => {
    mockedUseAxios.mockImplementation(() => ({
      axiosCallback: mockedAxiosCallback,
      data: responseData,
    }))

    const campaignContainer = render(<Campaign />)

    const cardContainer = campaignContainer.queryByTestId('campaign-card-list')
    const cardItemList = campaignContainer.getAllByRole('listitem')

    expect(cardContainer).toBeInTheDocument()
    expect(cardItemList).toHaveLength(2)

    expect(cardContainer).toBeInTheDocument()
    expect(cardContainer.children.item(0).textContent).toContain(
      'Bantu Korban Gempa dan Tsunami Palu-Donggala'
    )
    expect(cardContainer.children.item(1).textContent).toContain(
      '#BisaBangkit Bersama Kitabisa'
    )

    cardItemList.forEach((item, i) => {
      const { queryByTestId } = within(item)

      if (responseData.response.data[i].campaigner_is_verified) {
        expect(queryByTestId('verified-icon')).toBeInTheDocument()
      } else {
        expect(queryByTestId('verified-icon')).not.toBeInTheDocument()
      }
    })

    expect(campaignContainer.queryByTestId('loading')).not.toBeInTheDocument()
  })

  it('should render sorted by Days Left', () => {
    const campaignContainer = render(<Campaign />)

    const selectInput = campaignContainer.getByTestId('select-sort-by')
    fireEvent.change(selectInput, { target: { value: 'days_remaining' } })
    expect((selectInput as any).value).toBe('days_remaining')

    const cardContainer = campaignContainer.queryByTestId('campaign-card-list')
    const cardItemList = campaignContainer.getAllByRole('listitem')

    expect(cardContainer).toBeInTheDocument()

    expect(cardContainer.children.item(0).textContent).toContain(
      '#BisaBangkit Bersama Kitabisa'
    )
    expect(cardContainer.children.item(1).textContent).toContain(
      'Bantu Korban Gempa dan Tsunami Palu-Donggala'
    )

    expect(cardItemList).toHaveLength(2)

    expect(campaignContainer.queryByTestId('loading')).not.toBeInTheDocument()
  })
})
