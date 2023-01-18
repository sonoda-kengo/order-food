import { Box, Grid, Button, Typography } from '@mui/material';
import DropDownMenu from 'components/dropDownMenu';
import NumTextField from 'components/numTextField';
import React from 'react';

interface IReviewStep {
  meal?: string;
}

function ReviewStep({ meal }: IReviewStep) {
  return (
    <Box>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Grid item mb={5}>
          <Grid container direction="row" spacing={4}>
            <Grid item>
              <Typography>Meal</Typography>
            </Grid>
            <Grid item>
              <Typography>Lunch</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item mb={5}>
          <Grid container direction="row" spacing={4}>
            <Grid item>
              <Typography>No. of. People</Typography>
            </Grid>
            <Grid item>
              <Typography>3</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item mb={5}>
          <Grid container direction="row" spacing={4}>
            <Grid item>
              <Typography>Restaurant</Typography>
            </Grid>
            <Grid item>
              <Typography>Restaurant A</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item mb={5}>
          <Grid container direction="row" spacing={4}>
            <Grid item>
              <Typography>Dishes</Typography>
            </Grid>
            <Grid item>
              <Typography>aaa 1</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ReviewStep;
