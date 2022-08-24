import { IMG_BRAND } from './image'

export const SORT_LIST_OPTIONS = [
  {
    label: 'Relevant',
    value: 'order',
  },
  {
    label: 'Donation',
    value: 'donation_received',
  },
  {
    label: 'Day left',
    value: 'days_remaining',
  },
]

const META = {
  image: '',
  rootUrl: 'https://example.com',
  title: 'Kitabisa.com - Fundraising platform',
  description: 'Situs donasi dan menggalang dana (fundraising)',
  keywords: 'Donasi online, Sedekah, Zakat',
}

export const DEFAULT_META_TAGS = {
  ...META,
  metaTags: [
    { name: 'og:title', content: META.title },
    { name: 'og:image', content: IMG_BRAND.META_ICON },
    { name: 'og:description', content: META.description },
    {
      name: 'og:site_name',
      content: 'Kitabisa',
    },
  ],
}
