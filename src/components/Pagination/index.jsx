import React from "react";
import ReactPaginate from "react-paginate";

import styles from "./Pagination.module.scss";
export default function Pagination() {
  return (
    <div className="container">
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        previousLabel="<"
        onPageChange={(event) => console.log(event)}
        pageRangeDisplayed={8}
        nextLabel=">"
        pageCount={3}
        renderOnZeroPageCount={null}
      />
    </div>
  );
}
