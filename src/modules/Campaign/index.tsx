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
          ({ days_remaining, id, image, title, donation_received }) => (
            <Grid lg={4} md={4} xs={12} sm={12} key={id} item>
              <CardItem
                donation={donation_received}
                coverSrc={image}
                title={title}
                dayLeft={days_remaining}
              />
            </Grid>
          )
        )}
      </Grid>
    </Box>
  )
}
export default memo(Campaign)
