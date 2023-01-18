import { Box, Grid, Typography } from '@mui/material';
import { IDishesObject, InputFormType } from 'App';
import React from 'react';
import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form';

interface IThirdStep {
  availavleDishes: IDishesObject[];
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

function ThirdStep({ availavleDishes, register, errors }: IThirdStep) {
  return (
    <Box>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Grid item mb={5}>
          <Typography>Please Select a Dish</Typography>
          <select {...register('dishes', { required: 'required' })}>
            {availavleDishes.map((val, id) => (
              <option key={val.id} value={val.name}>
                {val.name}
              </option>
            ))}
          </select>
        </Grid>
        <Grid item mb={5}>
          <Typography>Please Enter Number of seivings</Typography>
          <input
            type="number"
            {...register('servings', {
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
        </Grid>
      </Grid>
    </Box>
  );
}

export default ThirdStep;
