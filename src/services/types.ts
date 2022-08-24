export type Campaign = {
  id: number
  order: number
  parent_project_id: number
  title: string
  expired: any
  image: string
  days_remaining: number
  donation_received: any
  campaigner: string
  campaigner_type: string
  campaigner_badge: string
  campaigner_is_verified: boolean
  category_name: string
  is_forever_running: boolean
  is_open_goal: boolean
  request_userdata: boolean
  donation_target: any
  donation_percentage: number
  short_url: string
  is_featured: number
  custom_fb_pixel: string
}

export type CampaignResponse = {
  data: Campaign[]
}
