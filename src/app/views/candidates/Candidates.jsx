import React, { Fragment } from 'react'
import { Grid } from '@mui/material'
import { styled } from '@mui/system'
import CandidatesTable from './shared/CandidatesTable'

const ContentBox = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: {
    margin: '16px',
  },
}))

const Candidates = () => {
  return (
    <Fragment>
      <ContentBox className='analytics'>
        <Grid container spacing={3}>
          <Grid item lg={12} md={8} sm={12} xs={12}>
            <CandidatesTable />
          </Grid>
        </Grid>
      </ContentBox>
    </Fragment>
  )
}

export default Candidates
