import React from "react";

import PizzaItem from "../PizzaItem";
import Skeleton from "../Skeleton";

export default function PizzaList({ isLoading, pizzas, searchValue }) {
  const pizzaElem = pizzas.map((item) => <PizzaItem key={item.id} {...item} />);
  const skeleton = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));
  return (
    <>
      <div className="pizza">
        <div className="container">
          <h2 className="pizza__title">Все пиццы</h2>
          <ul className="pizza__list">{isLoading ? skeleton : pizzaElem}</ul>
        </div>
      </div>
    </>
  );
}

// .filter((obj) => {
//   if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
//     return true;
//   }
//   return false;
// })
