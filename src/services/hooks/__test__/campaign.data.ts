import { FamilyRestroomRounded } from '@mui/icons-material'

export const defaultConfig = {
  method: 'GET',
  url: '/campaign.json',
}

export const errorResponseData = {
  data: {
    response: undefined,
    error: new Error('Network Error'),
    loading: false,
  },
}

export const loadingResponseData = {
  response: undefined,
  error: '',
  loading: true,
}

export const responseData = {
  response: {
    data: [
      {
        id: 78942,
        order: 1,
        parent_project_id: 0,
        title: 'Bantu Korban Gempa dan Tsunami Palu-Donggala',
        expired: 1609433999,
        image:
          'https://kitabisa-userupload-01.s3-ap-southeast-1.amazonaws.com/_production/campaign/78942/31_78942_1545049253_878259_f.jpg',
        days_remaining: 85,
        donation_received: 17024031016,
        campaigner: 'Dany',
        campaigner_type: 'PERSONAL',
        campaigner_badge:
          'https://assets.kitabisa.com/images/icon__verified-user.svg',
        campaigner_is_verified: FamilyRestroomRounded,
        category_name: 'Bencana Alam',
        is_forever_running: false,
        is_open_goal: false,
        request_userdata: false,
        donation_target: 30000000000,
        donation_percentage: 0.567468,
        short_url: 'peduligempadonggala',
        is_featured: 0,
        custom_fb_pixel: '',
      },
      {
        id: 94597,
        order: 2,
        parent_project_id: 0,
        title: '#BisaBangkit Bersama Kitabisa',
        expired: 2147483647,
        image:
          'https://img.staging.kitabisa.cc/size/664x357/0f9a7205-79ef-49c9-a95a-49347fbd00a6.jpg',
        days_remaining: 0,
        donation_received: 178613497,
        campaigner: 'Kitabisa.com',
        campaigner_type: 'PERSONAL',
        campaigner_badge:
          'https://assets.kitabisa.com/images/icon__verified-user.svg',
        campaigner_is_verified: true,
        category_name: 'Bencana Alam',
        is_forever_running: true,
        is_open_goal: false,
        request_userdata: false,
        donation_target: 500000000,
        donation_percentage: 0.357227,
        short_url: 'bisabangkit',
        is_featured: 0,
        custom_fb_pixel: '',
      },
    ],
  },
  error: '',
  loading: false,
}
