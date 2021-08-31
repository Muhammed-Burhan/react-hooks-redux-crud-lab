import React from "react";
import RestaurantInput from "./RestaurantInput";
import Restaurants from "./Restaurants";
import { useSelector } from "react-redux";

function RestaurantsContainer() {
  const resturants = useSelector((state) => state.restaurants.entities);

  return (
    <div>
      <RestaurantInput />
      <Restaurants resturants={resturants} />
    </div>
  );
}

export default RestaurantsContainer;
