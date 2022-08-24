import React, { memo } from 'react'

import { Box, Grid } from '@mui/material'

import CardItem from '~/components/CardItem'
import FilterBox from '~/components/FilterBox'
import Loading from '~/components/Loading'

import useCustom from './hooks'

const Campaign = () => {
  const { data } = useCustom()

  if (data.loading) return <Loading />

  return (
    <Box>
      <FilterBox />
      <Grid mt={5} data-testid="campaign-card-list" spacing={5} container>
        {data.memoCampaign.map(({ id, image, title }) => (
          <Grid
            data-testid={`item-${id}`}
            lg={4}
            md={4}
            xs={12}
            sm={12}
            key={id}
            item
          >
            <CardItem coverSrc={image} title={title} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
export default memo(Campaign)
