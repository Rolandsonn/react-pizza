import React from "react";
import PizzaList from "../components/pizza";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import axios from "axios";
import Pagination from "../components/Pagination";
import { useEffect, useState, useContext } from "react";
import { SearchContext } from "../App";
import { setCategoryId } from "../redux/slices/filterSlice";
import { useSelector, useDispatch } from "react-redux";

export default function HomePage() {
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.sort.sortProperty);

  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [categoryId, setCategoryId] = useState(0);
  const [page, setPage] = useState(1);
  // const [sortType, setSortType] = useState({
  //   name: "популярности",
  //   sortProperty: "rating",
  // });
  const { searchValue } = useContext(SearchContext);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const order = sortType.includes("-") ? "asc" : "desc";
  const sortBy = sortType.replace("-", "");
  const category = categoryId > 0 ? `category=${categoryId}` : "";
  const search = searchValue ? `&search=${searchValue}` : "";
  console.log(categoryId);
  useEffect(() => {
    fetch(
      `https://638c9fead2fc4a058a5be365.mockapi.io/items?page=${page}&limit=6&${category}&sortBy=${sortBy}&order=${order}${search}`
    )
      .then((res) => res.json())
      .then((arr) => {
        setPizzas(arr);
        setIsLoading(false);
      });
    // window.scrollTo(0, 0);
  }, [category, sortBy, search, page, order]);

  return (
    <>
      <div className="container home">
        <Categories
          value={categoryId}
          onClickCategory={(index) => onChangeCategory(index)}
        />
        <Sort
        // value={sortType}
        // onClickSortType={(index) => setSortType(index)}
        />
      </div>
      <PizzaList
        pizzas={pizzas}
        isLoading={isLoading}
        searchValue={searchValue}
      />
      <Pagination onChangePage={(number) => setPage(number)} />
    </>
  );
}
