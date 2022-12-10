import React from "react";
import { useContext } from "react";
import styles from "./Search.module.scss";
import { SearchContext } from "../../App";
function Search() {
  const { searchValue, setSearchValue } = useContext(SearchContext);
  return (
    <>
      <div>
        <input
          className={styles.root}
          placeholder="Поиск пиццы"
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        {searchValue && (
          <span
            className={styles.btnDelete}
            onClick={() => {
              setSearchValue("");
            }}
          >
            x
          </span>
        )}
      </div>
    </>
  );
}
export default Search;
