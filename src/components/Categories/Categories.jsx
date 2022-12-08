import React, { useState } from "react";

export default function Categories({ value, onClickCategory }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = [
    "Все",
    "Мясные",
    "Острые",
    "Вегетарианская",
    "Острые",
    "Закрытые",
  ];

  const activeClick = (index) => {
    setActiveIndex(index);
  };

  const categElems = categories.map((item, index) => {
    return (
      <li
        onClick={() => onClickCategory(index)}
        className={value === index ? "active" : ""}
      >
        {item}
      </li>
    );
  });

  return (
    <>
      <div className="categories">
        <ul className="categories__list">{categElems}</ul>
      </div>
    </>
  );
}
