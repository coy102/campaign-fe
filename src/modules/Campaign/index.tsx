import React, { memo } from 'react'

import { Box, Grid } from '@mui/material'

import CardItem from '~/components/CardItem'
import FilterBox from '~/components/FilterBox'
import Loading from '~/components/Loading'

import useCustom from './hooks'

const Campaign = () => {
  const { data, methods } = useCustom()

  if (data.loading) return <Loading />

  return (
    <Box>
      <FilterBox
        handleChangeSortBy={methods.handleChangeSort}
        sortBy={data.sortBy}
      />
      <Grid mt={5} data-testid="campaign-card-list" spacing={5} container>
        {data.memoCampaign.map(
          ({
            campaigner,
            days_remaining,
            donation_received,
            donation_target,
            id,
            image,
            is_forever_running,
            title,
            campaigner_is_verified,
          }) => (
            <Grid lg={4} md={4} xs={12} sm={12} key={id} item>
              <CardItem
                campaigner={campaigner}
                donation={donation_received}
                donationPercentage={(100 * donation_received) / donation_target}
                coverSrc={image}
                isForever={is_forever_running}
                title={title}
                dayLeft={days_remaining}
                verified={campaigner_is_verified}
              />
            </Grid>
          )
        )}
      </Grid>
    </Box>
  )
}
export default memo(Campaign)
