import { useState, useCallback } from 'react'

import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const DEFAULT_CONFIG: AxiosRequestConfig = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
  baseURL: `https://cors-anywhere.herokuapp.com/${process.env.NEXT_PUBLIC_BASE_URL_API}`,
  // ... others config
}

const useAxios = <T>(baseConfig: AxiosRequestConfig) => {
  const [response, setResponse] = useState<T>(undefined)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const axiosCallback = useCallback(async () => {
    try {
      setLoading(true)
      const result = await axios.request<T, AxiosResponse<T>>({
        ...DEFAULT_CONFIG,
        ...baseConfig,
      })

      setResponse(result.data)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }, [baseConfig])

  return { axiosCallback, data: { response, error, loading } }
}

export default useAxios
