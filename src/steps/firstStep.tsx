import { Box, Grid, Typography } from '@mui/material';
import { InputFormType } from 'App';
import React from 'react';
import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form';

interface IFirstStep {
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
          <select {...register('meal', { required: 'required' })}>
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
              required: '必須項目です',
              pattern: {
                value: numberRegExp,
                message: '整数で入力してください',
              },
              min: {
                value: 1,
                message: '1以上の数字を入力してください',
              },
              max: {
                value: 10,
                message: '10以下の数字を入力してください',
              },
            })}
          />
          <Typography color="warning.main">{errors.people?.message}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default FirstStep;
