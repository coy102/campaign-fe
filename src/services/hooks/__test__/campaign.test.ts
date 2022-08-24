import { renderHook } from '@testing-library/react-hooks'

import { mockedAxiosCallback, mockedUseAxios } from '~/mocks/services/useAxios'

import { useGetCampaignList } from '../campaign'

import { defaultConfig, errorResponseData, responseData } from './campaign.data'

jest.mock('~/services/useAxios', () => mockedUseAxios)

describe('Hooks services campaign - useGetCampaignList', () => {
  afterEach(jest.clearAllMocks)

  it('should return success response', () => {
    mockedUseAxios.mockImplementation(() => ({
      axiosCallback: mockedAxiosCallback,
      data: responseData,
    }))

    const { result } = renderHook(() => useGetCampaignList())

    expect(mockedUseAxios).toHaveBeenCalledWith(defaultConfig)

    expect(mockedAxiosCallback).toHaveBeenCalled()
    expect(result.current.data).toEqual(responseData)
  })

  it('should return error response', () => {
    mockedUseAxios.mockImplementation(() => ({
      axiosCallback: mockedAxiosCallback,
      data: errorResponseData,
    }))

    const { result } = renderHook(() => useGetCampaignList())

    expect(mockedUseAxios).toHaveBeenCalledWith(defaultConfig)

    expect(mockedAxiosCallback).toHaveBeenCalled()
    expect(result.current.data).toEqual(errorResponseData)
  })
})
