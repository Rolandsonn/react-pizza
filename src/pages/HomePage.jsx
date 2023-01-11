import React from "react";

import PizzaList from "../components/pizza";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Pagination from "../components/Pagination";

import axios from "axios";
import qs from "qs";

import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { SearchContext } from "../App";
import {
  setCategoryId,
  setPageCurrent,
  setFilters,
} from "../redux/slices/filterSlice";
import { useSelector, useDispatch } from "react-redux";
import { sorts } from "../components/Sort/Sort";
import { useRef } from "react";

export default function HomePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const { categoryId, currentPage } = useSelector((state) => state.filter);

  const sortType = useSelector((state) => state.filter.sort.sortProperty);

  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { searchValue } = useContext(SearchContext);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (number) => {
    dispatch(setPageCurrent(number));
  };

  const fetchPizzas = async () => {
    setIsLoading(true);

    const order = sortType.includes("-") ? "asc" : "desc";
    const sortBy = sortType.replace("-", "");
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    try {
      const res = await axios.get(
        `https://638c9fead2fc4a058a5be365.mockapi.io/items?page=${currentPage}&limit=6&${category}&sortBy=${sortBy}&order=${order}${search}`
      );
      setPizzas(res.data);
    } catch (error) {
      alert("Ошибка при получении пицц");
    } finally {
      setIsLoading(false);
    }
  };

  //* Если изменили параметры и был первый рендер

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sortType,
        categoryId,
        currentPage,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [sortType, categoryId, currentPage, navigate]);

  //* Если был первый рендер, то проверяем URL-парметры и сохраняем в редуксе

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = sorts.find(
        (obj) => obj.sortProperty === params.sortProperty
      );
      dispatch(setFilters({ ...params, sort }));
      isSearch.current = true;
    }
  }, []);

  //* Если был первый рендер, то запрашиваем пиццы
  useEffect(() => {
    if (!isSearch.current) {
      fetchPizzas();
    }

    isSearch.current = false;
  }, [categoryId, sortType, searchValue, currentPage]);
  return (
    <>
      <div className="container home">
        <Categories
          value={categoryId}
          onClickCategory={(index) => onChangeCategory(index)}
        />
        <Sort />
      </div>
      <PizzaList
        pizzas={pizzas}
        isLoading={isLoading}
        searchValue={searchValue}
      />
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </>
  );
}
