import { act, renderHook } from '@testing-library/react-hooks'

import mockAxios from 'jest-mock-axios'

import useAxios from '../useAxios'

const responseData = {
  name: 'Any Name',
}

const expectedResultHook = {
  data: {
    response: responseData,
    error: '',
    loading: false,
  },
}

const expectedEmptyResultHook = {
  data: {
    response: undefined,
    error: new Error('Network Error'),
    loading: false,
  },
}

const config = {
  baseURL: 'https://any-host-api.com/',
  url: 'api/',
}

const axiosCallback = expect.any(Function)

describe('test useAxios', () => {
  afterEach(() => {
    mockAxios.reset()
    jest.clearAllMocks()
  })

  test('should return success response', async () => {
    mockAxios.request.mockResolvedValueOnce({
      data: responseData,
    })

    const { result } = renderHook(() => useAxios(config))

    await act(async () => {
      await result.current.axiosCallback()
    })

    expect(result.current).toEqual({
      axiosCallback,
      ...expectedResultHook,
    })
  })

  test('should return error response', async () => {
    mockAxios.request.mockRejectedValue(new Error('Network Error'))

    const { result } = renderHook(() => useAxios(config))

    await act(async () => {
      await result.current.axiosCallback()
    })

    expect(result.current).toEqual({
      axiosCallback,
      ...expectedEmptyResultHook,
    })
  })
})
