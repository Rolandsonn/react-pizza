import React from "react";
import { useState } from "react";

export default function Sort({ value, onClickSortType }) {
  const [open, setOpen] = useState(false);

  const sort = [
    { name: "популярности (DESC)", sortProperty: "rating" },
    { name: "популярности (ASC)", sortProperty: "-rating" },
    { name: "цене (DESC)", sortProperty: "price" },
    { name: "цене (ASC)", sortProperty: "-price" },
    { name: "алфавиту (DESC)", sortProperty: "title" },
    { name: "алфавиту (ASC)", sortProperty: "-title" },
  ];

  const selectedClick = (index) => {
    onClickSortType(index);
    setOpen(false);
  };

  const sortElem = sort.map((item, index) => (
    <li
      onClick={() => {
        selectedClick(item);
      }}
      className={value.sortProperty === item.sortProperty ? "active" : ""}
      key={item.name}
    >
      {item.name}
    </li>
  ));

  return (
    <>
      <div className="sort">
        <div className="sort__title">
          <b>Сортировка по: </b>
          <span
            onClick={() => {
              setOpen(!open);
            }}
            className="sort__popular"
          >
            {value.name}
          </span>
        </div>
        {open && (
          <div className="sort__popup">
            <ul className="sort__list">{sortElem}</ul>
          </div>
        )}
      </div>
    </>
  );
}
