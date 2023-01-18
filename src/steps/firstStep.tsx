import { Box, Grid, Typography } from '@mui/material';
import { FormErrorsType, InputFormType } from 'App';
import React from 'react';
import { UseFormRegister } from 'react-hook-form';

interface IFirstStep {
  register: UseFormRegister<InputFormType>;
  errors: FormErrorsType;
}

const numberRegExp = /^[0-9]+$/;

function FirstStep({ register, errors }: IFirstStep) {
  return (
    <Box>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Grid item mb={5}>
          <Typography>Please Select a meal</Typography>
          <select {...register('meal', { required: 'Meal is required' })}>
            <option value="breakfast">breakfast</option>
            <option value="lunch">lunch</option>
            <option value="dinner">dinner</option>
          </select>
          <Typography color="warning.main">{errors.meal?.message}</Typography>
        </Grid>
        <Grid item mb={5}>
          <Typography>Please Enter Number of people</Typography>
          <input
            type="number"
            {...register('people', {
              valueAsNumber: true,
              required: 'Number of people is required',
              pattern: {
                value: numberRegExp,
                message: 'Enter an integer',
              },
              min: {
                value: 1,
                message: 'Numbers must be greater than 0',
              },
              max: {
                value: 10,
                message: 'Numbers must be less than 10',
              },
            })}
          />
        </Grid>
        <Typography color="warning.main">{errors.people?.message}</Typography>
      </Grid>
    </Box>
  );
}

export default FirstStep;
