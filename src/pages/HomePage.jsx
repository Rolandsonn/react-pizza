import React from "react";
import PizzaList from "../components/pizza";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import axios from "axios";
import Pagination from "../components/Pagination";
import { useEffect, useState } from "react";
export default function HomePage({ searchValue }) {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: "популярности",
    sortProperty: "rating",
  });

  const order = sortType.sortProperty.includes("-") ? "asc" : "desc";
  const sortBy = sortType.sortProperty.replace("-", "");
  const category = categoryId > 0 ? `category=${categoryId}` : "";
  const search = searchValue ? `&search=${searchValue}` : "";

  useEffect(() => {
    fetch(
      `https://638c9fead2fc4a058a5be365.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}${search}`
    )
      .then((res) => res.json())
      .then((arr) => {
        setPizzas(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, search]);

  return (
    <>
      <div className="container home">
        <Categories
          value={categoryId}
          onClickCategory={(index) => setCategoryId(index)}
        />
        <Sort
          value={sortType}
          onClickSortType={(index) => setSortType(index)}
        />
      </div>
      <PizzaList
        pizzas={pizzas}
        isLoading={isLoading}
        searchValue={searchValue}
      />
      <Pagination />
    </>
  );
}
