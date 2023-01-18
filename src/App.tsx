import {
  Button,
  Container,
  Grid,
  Step,
  StepLabel,
  Stepper,
} from '@mui/material';
import FirstStep from 'steps/firstStep';
import React, { useEffect } from 'react';
import SecondStep from 'steps/secondStep';
import ReviewStep from 'steps/reviewStep';
import ThirdStep from 'steps/thirdStep';
import { Box } from '@mui/system';
import { GetRestaurantData } from 'features/getRestaurantData';

export type typeMeal = 'breakfast' | 'lunch' | 'dinner';

export interface IDish {
  dishName: string;
  survingNum: number;
}
export type typeDishes = IDish[];

export interface IDishesaObject {
  id?: number;
  name: string;
  restaurant?: string;
  availableMeals?: string[];
}

function App() {
  const [step, setStep] = React.useState(1);
  const [meal, setMeal] = React.useState<typeMeal>();
  const [people, setPeople] = React.useState(1);
  const [availavleRestaurant, setAvailableRestaurant] = React.useState<
    IDishesaObject[] | undefined
  >();
  const [restaurant, setRestaurant] = React.useState<string>();
  const [dishes, setDishes] = React.useState<string>();
  const [dishesNum, setDishesNum] = React.useState(1);

  useEffect(() => {
    if (meal) {
      const restaurants = GetRestaurantData(meal);
      console.log(restaurants);
      setAvailableRestaurant(restaurants);
    }
  }, [meal]);

  const incStep = () => {
    setStep(step + 1);
  };

  const decStep = () => {
    setStep(step - 1);
  };

  const submitForm = () => {
    console.log('meal', meal);
    console.log('people', people);
    console.log('restaurant', restaurant);
    console.log('dishes', dishes);
  };

  const steps = [
    'Select a meal and set people',
    'Select a restaurant',
    'Select a No. of servings',
    'Submit',
  ];

  const showPages = () => {
    return (
      <div>
        <Box sx={{ width: '100%' }} my={5}>
          <Stepper activeStep={step - 1} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        {step === 1 && (
          <FirstStep
            meal={meal}
            setMeal={setMeal}
            people={people}
            setPeople={setPeople}
          />
        )}
        {step === 2 && availavleRestaurant && (
          <SecondStep
            availableRestaurant={availavleRestaurant}
            restaurant={restaurant}
            setRestaurant={setRestaurant}
          />
        )}
        {step === 3 && (
          <ThirdStep
            dishes={dishes}
            setDishes={setDishes}
            dishesNum={dishesNum}
            setDishesNum={setDishesNum}
          />
        )}
        {step === 4 && <ReviewStep />}

        <Grid container>
          {step !== 1 && (
            <Grid item mr="auto">
              <Button variant="contained" onClick={decStep}>
                Previous
              </Button>
            </Grid>
          )}
          {step !== 4 && (
            <Grid item ml="auto">
              <Button variant="contained" onClick={incStep}>
                Next
              </Button>
            </Grid>
          )}
          {step === 4 && (
            <Grid item ml="auto">
              <Button variant="contained" onClick={submitForm}>
                Submit
              </Button>
            </Grid>
          )}
        </Grid>
      </div>
    );
  };

  return <Container>{showPages()}</Container>;
}

export default App;
