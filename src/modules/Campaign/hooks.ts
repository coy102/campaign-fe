import { useCallback, useMemo, useState } from 'react'

import { SORT_LIST_OPTIONS } from '~/config/constants'
import { useGetCampaignList } from '~/services/hooks/campaign'

import { constructSortedList } from './helper'

const useCustom = () => {
  const { data } = useGetCampaignList()

  const [sortBy, setSortBy] = useState(SORT_LIST_OPTIONS[0].value)

  // Memo campaign list
  const memoCampaign = useMemo(
    () => constructSortedList(data?.response?.data, sortBy) || [],
    [data, sortBy]
  )

  // Handle change sort option
  const handleChangeSort = useCallback((e) => {
    setSortBy(e.target.value)
  }, [])

  return {
    data: {
      loading: data.loading,
      memoCampaign,
      sortBy,
    },
    methods: {
      handleChangeSort,
    },
  }
}

export default useCustom
