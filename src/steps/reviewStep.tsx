import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

interface IReviewStep {
  meal: string;
  people: number;
  restaurant: string;
  dishes: string;
  servings: number;
}

function ReviewStep({
  meal,
  people,
  restaurant,
  dishes,
  servings,
}: IReviewStep) {
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
              <Typography>{meal}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item mb={5}>
          <Grid container direction="row" spacing={4}>
            <Grid item>
              <Typography>No. of. People</Typography>
            </Grid>
            <Grid item>
              <Typography>{people}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item mb={5}>
          <Grid container direction="row" spacing={4}>
            <Grid item>
              <Typography>Restaurant</Typography>
            </Grid>
            <Grid item>
              <Typography>{restaurant}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item mb={5}>
          <Grid container direction="row" spacing={4}>
            <Grid item>
              <Typography>Dishes</Typography>
            </Grid>
            <Grid item>
              <Typography>
                {dishes} {servings}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ReviewStep;
