import React, { useState } from "react";

export default function PizzaItem({
  imageUrl,
  title,
  types,
  sizes,
  price,
  category,
  rating,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeSizeIndex, setActiveSizeIndex] = useState(0);
  const [pizzaCount, setPizzaCount] = useState(0);
  const type = ["тонкое", "традиционное"];

  //!
  //!
  //!

  //!
  //!
  //!

  const activeClick = (index) => {
    setActiveIndex(index);
  };

  const activeSizeClick = (index) => {
    setActiveSizeIndex(index);
  };

  const pizzaAdd = () => {
    setPizzaCount(pizzaCount + 1);
  };

  const typesElem = type.map((item, index) => (
    <li
      onClick={() => {
        activeClick(index);
      }}
      className={`${activeIndex === index ? "active" : ""} pizza__item-size`}
      key={item}
    >
      {item}
    </li>
  ));

  const sizesElem = sizes.map((item, index) => (
    <li
      onClick={() => {
        activeSizeClick(index);
      }}
      className={`${
        activeSizeIndex === index ? "active" : ""
      } pizza__item-size`}
      key={item}
    >
      {item} см
    </li>
  ));

  return (
    <li className="pizza__item">
      <img className="pizza__img" src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <div className="pizza__wrapper">
        <div className="pizza__bckg">
          <ul className="pizza__list-size">{typesElem}</ul>
          <ul className="pizza__list-size"> {sizesElem}</ul>
        </div>
        <div className="pizza__inner">
          <p>от {price} ₽</p>
          <button onClick={pizzaAdd} className="pizza__btn">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="#EB5A1E"
              />
            </svg>
            <span>Добавить</span>
            {pizzaCount ? <i className="pizza__count">{pizzaCount}</i> : ""}
          </button>
        </div>
      </div>
    </li>
  );
}
