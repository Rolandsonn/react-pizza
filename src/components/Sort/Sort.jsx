import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSort } from "../../redux/slices/filterSlice";

export const sorts = [
  { name: "популярности (DESC)", sortProperty: "rating" },
  { name: "популярности (ASC)", sortProperty: "-rating" },
  { name: "цене (DESC)", sortProperty: "price" },
  { name: "цене (ASC)", sortProperty: "-price" },
  { name: "алфавиту (DESC)", sortProperty: "title" },
  { name: "алфавиту (ASC)", sortProperty: "-title" },
];

export default function Sort() {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.filter.sort);
  const sortRef = React.useRef();

  const [open, setOpen] = useState(false);

  const selectedClick = (index) => {
    dispatch(setSort(index));
    setOpen(false);
  };

  const sortElem = sorts.map((item, index) => (
    <li
      onClick={() => {
        selectedClick(item);
      }}
      className={sort.sortProperty === item.sortProperty ? "active" : ""}
      key={item.name}
    >
      {item.name}
    </li>
  ));

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.path.includes(sortRef.current)) {
        setOpen(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div ref={sortRef} className="sort">
        <div className="sort__title">
          <b>Сортировка по: </b>
          <span
            onClick={() => {
              setOpen(!open);
            }}
            className="sort__popular"
          >
            {sort.name}
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
