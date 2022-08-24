import { useEffect } from 'react'

import { CampaignResponse } from '../types'
import useAxios from '../useAxios'

export const useGetCampaignList = () => {
  const { axiosCallback, data } = useAxios<CampaignResponse>({
    method: 'GET',
    url: '/campaign.json',
  })

  useEffect(() => {
    axiosCallback()
  }, [])

  return {
    data,
  }
}
