import React from "react";
import { useContext, useState } from "react";
import styles from "./Search.module.scss";
import { debounce } from "lodash";
import { SearchContext } from "../../App";

function Search() {
  const [value, setValue] = useState("");
  const { searchValue, setSearchValue } = useContext(SearchContext);
  const inputRef = React.useRef();

  const onClickClear = () => {
    setSearchValue("");
    setValue("");
    inputRef.current.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 1000),
    []
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <>
      <div>
        <input
          ref={inputRef}
          className={styles.root}
          placeholder="Поиск пиццы"
          type="text"
          value={value}
          onChange={onChangeInput}
        />
        {value && (
          <span className={styles.btnDelete} onClick={onClickClear}>
            x
          </span>
        )}
      </div>
    </>
  );
}
export default Search;
