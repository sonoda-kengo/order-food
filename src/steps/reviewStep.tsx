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
        <Grid item mb={5} width="300px">
          <Grid container direction="row" spacing={4}>
            <Grid item xs={6}>
              <Typography color="text.secondary">Meal</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>{meal}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item mb={5} width="300px">
          <Grid container direction="row" spacing={4}>
            <Grid item xs={6}>
              <Typography color="text.secondary">No. of. People</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>{people}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item mb={5} width="300px">
          <Grid container direction="row" spacing={4}>
            <Grid item xs={6}>
              <Typography color="text.secondary">Restaurant</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>{restaurant}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item mb={5} width="300px">
          <Grid container direction="row" spacing={4}>
            <Grid item xs={6}>
              <Typography color="text.secondary">Dish</Typography>
            </Grid>
            <Grid item xs={6}>
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
