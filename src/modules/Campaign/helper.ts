import { Campaign } from '~/services/types'

export const constructSortedList = (campaigns: Campaign[] = [], sortBy) =>
  campaigns.sort((a, b) => a[sortBy] - b[sortBy])
