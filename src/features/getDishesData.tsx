import { IDishesObject } from 'App';
import data from '../data/dishes.json';

export const GetDishesData = (meal: string, restaurant: string) => {
  const allDishesData = data.dishes;

  // get data with meal
  const availableRestaurantList = allDishesData.filter((value) => {
    if (value.availableMeals.includes(meal)) {
      return value;
    }
  });

  // get data with restaurant
  const availableDishesList: IDishesObject[] = [];
  availableRestaurantList.forEach((val) => {
    if (val.restaurant == restaurant) {
      availableDishesList.push(val);
    }
  });

  console.log('availableRestaurantList', availableRestaurantList);
  console.log('availableDishesList', availableDishesList);

  return availableDishesList;
};
