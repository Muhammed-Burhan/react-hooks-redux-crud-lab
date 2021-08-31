import React from "react";
import Restauran from "./Restaurant";
function Restaurants({ resturants }) {
  return (
    <ul>
      {resturants.map((resturant) => {
        return <Restauran key={resturant.id} restaurant={resturant} />;
      })}
    </ul>
  );
}

export default Restaurants;
