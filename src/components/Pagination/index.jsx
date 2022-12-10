import React from "react";
import ReactPaginate from "react-paginate";

import styles from "./Pagination.module.scss";
export default function Pagination({ onChangePage }) {
  return (
    <div className="container">
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        previousLabel="<"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={9}
        nextLabel=">"
        pageCount={3}
        renderOnZeroPageCount={null}
      />
    </div>
  );
}
