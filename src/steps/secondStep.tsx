import { Box, Grid, Typography } from '@mui/material';
import DropDownMenu from 'components/dropDownMenu';
import React from 'react';

interface ISecondStep {
  restaurant: string | undefined;
  setRestaurant: (value: string) => void;
}

function SecondStep({ restaurant, setRestaurant }: ISecondStep) {
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
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default SecondStep;
