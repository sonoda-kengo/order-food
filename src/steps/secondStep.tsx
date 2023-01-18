import { Box, Grid, Typography } from '@mui/material';
import { FormErrorsType, InputFormType, IRestaurantObject } from 'App';
import React from 'react';
import { UseFormRegister } from 'react-hook-form';

interface ISecondStep {
  availableRestaurant: IRestaurantObject[];
  register: UseFormRegister<InputFormType>;
  errors: FormErrorsType;
}

function SecondStep({ availableRestaurant, register, errors }: ISecondStep) {
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
          <select
            {...register('restaurant', {
              required: 'Restaurant is required',
            })}
          >
            {availableRestaurant.map((res, id) => (
              <option key={id} value={res.restaurant}>
                {res.restaurant}
              </option>
            ))}
          </select>
        </Grid>
        <Typography color="warning.main">
          {errors.restaurant?.message}
        </Typography>
      </Grid>
    </Box>
  );
}

export default SecondStep;
