import { useMemo } from 'react'

import { useGetCampaignList } from '~/services/hooks/campaign'

const useCustom = () => {
  const { data } = useGetCampaignList()

  const memoCampaign = useMemo(() => data?.response?.data || [], [data])

  return {
    loading: data.loading,
    memoCampaign,
  }
}

export default useCustom
