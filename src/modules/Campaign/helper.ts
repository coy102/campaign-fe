import { Campaign } from '~/services/types'

export const constructSortedList = (campaigns: Campaign[] = [], sortBy) => {
  if (!sortBy) return campaigns
  return campaigns.sort((a, b) => a[sortBy] - b[sortBy])
}
