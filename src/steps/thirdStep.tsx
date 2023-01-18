import { Box, Grid, Typography } from '@mui/material';
import DropDownMenu from 'components/dropDownMenu';
import NumTextField from 'components/numTextField';
import React from 'react';

interface IThirdStep {
  dishes: string | undefined;
  setDishes: (value: string) => void;
  dishesNum: number;
  setDishesNum: (value: number) => void;
}

function ThirdStep({ dishes, setDishes, dishesNum, setDishesNum }: IThirdStep) {
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
          <DropDownMenu inputLabel="dish" value={dishes} setValue={setDishes} />
        </Grid>
        <Grid item mb={5}>
          <Typography>Please Enter Number of seivings</Typography>
          <NumTextField numValue={dishesNum} setNumValue={setDishesNum} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default ThirdStep;
