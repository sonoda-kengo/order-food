import { Box, Grid, Typography } from '@mui/material';
import { typeMeal } from 'App';
import DropDownMenu from 'components/dropDownMenu';
import NumTextField from 'components/numTextField';
import React from 'react';

interface IFirstStep {
  meal: typeMeal | undefined;
  setMeal: (value: typeMeal) => void;
  people: number;
  setPeople: (value: number) => void;
}

const mealObjects = [
  { name: 'breakfast' },
  { name: 'lunch' },
  { name: 'dinner' },
];

console.log(mealObjects);

function FirstStep({ meal, setMeal, people, setPeople }: IFirstStep) {
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
          <DropDownMenu
            inputLabel="meal"
            value={meal}
            setValue={setMeal}
            dropDownMenuObjects={mealObjects}
          />
        </Grid>
        <Grid item mb={5}>
          <Typography>Please Enter Number of people</Typography>
          <NumTextField numValue={people} setNumValue={setPeople} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default FirstStep;
