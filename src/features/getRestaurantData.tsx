import { typeMeal, IRestaurantObject } from 'App';
import data from '../data/dishes.json';

export const GetRestaurantData = (meal: typeMeal) => {
  const allDishesData = data.dishes;

  // get data with meal
  const availableRestaurantList = allDishesData.filter((value) => {
    if (value.availableMeals.includes(meal)) {
      return value;
    }
  });

  // cast(data -> IRestaurantObjectType)
  const restaurantList: IRestaurantObject[] = [];
  availableRestaurantList.forEach((data) => {
    const obj: IRestaurantObject = { restaurant: data.restaurant };
    restaurantList.push(obj);
  });

  // delete dupulicates
  const uniqueRestaurant = Array.from(
    new Map(restaurantList.map((data) => [data.restaurant, data])).values(),
  );

  return uniqueRestaurant;
};
