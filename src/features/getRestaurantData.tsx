import { typeMeal } from 'App';
import data from '../data/dishes.json';

export const GetRestaurantData = (meal: typeMeal) => {
  console.log('GetRestaurantData');
  const allDishesData = data.dishes;
  const availableRestaurant = allDishesData.filter(function (value) {
    if (value.availableMeals.includes(meal)) {
      return value;
    }
  });
  return availableRestaurant;
};
