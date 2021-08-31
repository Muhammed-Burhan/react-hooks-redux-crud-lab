import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { restaurantAdded } from "./restaurantsSlice";
function RestaurantInput({ onSubmitButton }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  function changeHandler(e) {
    setName(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(restaurantAdded(name));
    setName("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={changeHandler} />
        </label>
        <input type="submit" value="Add Restaurant" />
      </form>
    </div>
  );
}

export default RestaurantInput;
