import { Box, Grid, Typography } from '@mui/material';
import { FormErrorsType, IDishesObject, InputFormType } from 'App';
import React from 'react';
import { UseFormRegister } from 'react-hook-form';

interface IThirdStep {
  setPeople: number;
  availavleDishes: IDishesObject[];
  register: UseFormRegister<InputFormType>;
  errors: FormErrorsType;
}

const numberRegExp = /^[0-9]+$/;

function ThirdStep({
  setPeople,
  availavleDishes,
  register,
  errors,
}: IThirdStep) {
  // TODO: add menu butoon
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
          <select
            {...register('dishes', { required: 'Dish is required' })}
            style={{
              width: '180px',
              height: '40px',
              fontSize: '18px',
              border: '2px solid #bdbdbd',
              borderRadius: '10px',
            }}
          >
            {availavleDishes.map((val) => (
              <option key={val.id} value={val.name}>
                {val.name}
              </option>
            ))}
          </select>
          <Typography color="warning.main">{errors.dishes?.message}</Typography>
        </Grid>
        <Grid item mb={5}>
          <Grid container direction="column" alignItems="center">
            <Grid item>
              <Typography>Please Enter Number of seivings</Typography>
            </Grid>
            <Grid item>
              <input
                type="number"
                {...register('servings', {
                  valueAsNumber: true,
                  required: 'Servings is required',
                  pattern: {
                    value: numberRegExp,
                    message: 'Enter an integer',
                  },
                  min: {
                    value: 1,
                    message: 'Numbers must be greater than 0',
                  },
                  max: {
                    value: 10 * setPeople,
                    message: `Numbers must be less than ${
                      10 * setPeople
                    } (you can set up to 10 per No. of people)`,
                  },
                })}
                style={{
                  width: '50px',
                  height: '30px',
                  fontSize: '18px',
                  border: '2px solid #bdbdbd',
                  borderRadius: '10px',
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Typography color="warning.main">{errors.servings?.message}</Typography>
      </Grid>
    </Box>
  );
}

export default ThirdStep;
