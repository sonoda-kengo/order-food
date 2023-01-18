import {
  Button,
  Container,
  Grid,
  Step,
  StepLabel,
  Stepper,
} from '@mui/material';
import { Box } from '@mui/system';
import { GetDishesData } from 'features/getDishesData';
import { GetRestaurantsData } from 'features/getRestaurantsData';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import FirstStep from 'steps/firstStep';
import ReviewStep from 'steps/reviewStep';
import SecondStep from 'steps/secondStep';
import ThirdStep from 'steps/thirdStep';
import { FieldErrorsImpl } from 'react-hook-form';

export interface IDish {
  dishName: string;
  survingNum: number;
}
export type typeDishes = IDish[];

export interface IDishesObject {
  id?: number;
  name: string;
  restaurant?: string;
  availableMeals?: string[];
}

export interface IRestaurantObject {
  restaurant: string;
}

export type InputFormType = {
  meal: string;
  people: number;
  restaurant: string;
  dishes: string;
  servings: number;
};

export type FormErrorsType = Partial<FieldErrorsImpl<InputFormType>>;

function App() {
  const [step, setStep] = React.useState(1);
  const [availavleRestaurant, setAvailableRestaurant] = React.useState<
    IRestaurantObject[] | undefined
  >();
  const [availavleDishes, setAvailableDishes] = React.useState<
    IDishesObject[] | undefined
  >();
  const [showSecondStep, setShowSecondStep] = React.useState(false);
  const [showThirdStep, setShowThirdStep] = React.useState(false);
  const [showFourthStep, setShowFourthStep] = React.useState(false);
  const [showNextButton, setShowNextButton] = React.useState(false);

  const steps = [
    'Select a meal and set people',
    'Select a restaurant',
    'Select a No. of servings',
    'Submit',
  ];

  const showPages = () => {
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm<InputFormType>({
      mode: 'all',
      defaultValues: {
        servings: 1,
      },
    });

    const onSubmit = handleSubmit((data) => {
      console.log(data);
    });

    const incStep = () => {
      if (step === 1 && watch('meal')) {
        const getRestaurants = GetRestaurantsData(watch('meal'));
        setAvailableRestaurant(getRestaurants);
      } else if (step === 2 && availavleRestaurant && watch('restaurant')) {
        const getDishes = GetDishesData(watch('meal'), watch('restaurant'));
        setAvailableDishes(getDishes);
      }
      setStep(step + 1);
    };

    const decStep = () => {
      setStep(step - 1);
    };

    // showSecondStep
    useEffect(() => {
      if (watch('meal')) {
        if (0 < watch('people') && watch('people') < 11) {
          setShowSecondStep(true);
        } else {
          setShowSecondStep(false);
        }
      } else {
        setShowSecondStep(false);
      }
    }, [watch('meal'), watch('people')]);

    // showThirdStep
    useEffect(() => {
      if (watch('restaurant')) {
        setShowThirdStep(true);
      } else {
        setShowThirdStep(false);
      }
    }, [watch('restaurant')]);

    // showFourthStep
    useEffect(() => {
      if (watch('dishes')) {
        if (
          0 < watch('servings') &&
          watch('servings') <= 10 * watch('people')
        ) {
          setShowFourthStep(true);
        } else {
          setShowFourthStep(false);
        }
      } else {
        setShowFourthStep(false);
      }
    }, [watch('dishes'), watch('servings')]);

    // showNextStep
    useEffect(() => {
      if (step === 1 && showSecondStep) {
        setShowNextButton(true);
      } else if (step === 2 && showThirdStep) {
        setShowNextButton(true);
      } else if (step === 3 && showFourthStep) {
        setShowNextButton(true);
      } else {
        setShowNextButton(false);
      }
    }, [showSecondStep, showThirdStep, showFourthStep, step]);

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

        {step === 1 && <FirstStep register={register} errors={errors} />}
        {step === 2 && availavleRestaurant && (
          <SecondStep
            availableRestaurant={availavleRestaurant}
            register={register}
            errors={errors}
          />
        )}
        {step === 3 && availavleDishes && (
          <ThirdStep
            setPeople={watch('people')}
            availavleDishes={availavleDishes}
            register={register}
            errors={errors}
          />
        )}
        {step === 4 && (
          <ReviewStep
            meal={watch('meal')}
            people={watch('people')}
            restaurant={watch('restaurant')}
            dishes={watch('dishes')}
            servings={watch('servings')}
          />
        )}

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
              <Button
                variant="contained"
                onClick={incStep}
                disabled={!showNextButton}
              >
                Next
              </Button>
            </Grid>
          )}
          {step === 4 && (
            <Grid item ml="auto">
              <Button variant="contained" onClick={onSubmit} type="submit">
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
