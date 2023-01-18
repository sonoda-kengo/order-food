import { Box, Grid, Typography } from '@mui/material';
import { IRestaurantObject } from 'App';
import DropDownMenu from 'components/dropDownMenu';
import React from 'react';

interface ISecondStep {
  availableRestaurant: IRestaurantObject[];
  restaurant: string | undefined;
  setRestaurant: (value: string) => void;
}

function SecondStep({
  availableRestaurant,
  restaurant,
  setRestaurant,
}: ISecondStep) {
  return (
    <Box>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Grid item mb={5}>
          <Typography>Please Select a Restaurant</Typography>
          <DropDownMenu
            inputLabel="restaurant"
            value={restaurant}
            setValue={setRestaurant}
            restaurantObjects={availableRestaurant}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default SecondStep;
