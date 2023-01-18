import { Box, Grid, Typography } from '@mui/material';
import { IRestaurantObject, InputFormType } from 'App';
import React from 'react';
import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form';

interface ISecondStep {
  availableRestaurant: IRestaurantObject[];
  register: UseFormRegister<InputFormType>;
  errors: Partial<
    FieldErrorsImpl<{
      meal: string;
      people: number;
      restaurant: string;
      dishes: object;
    }>
  >;
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
          <select {...register('restaurant', { required: 'required' })}>
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
