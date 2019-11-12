import React from "react";

function Pagination(props) {
  console.log(props);
  const pageLinks = [];
  for (let i = 1; i <= Math.ceil(0 / props.pokePerPage); i++) {
    pageLinks.push(
      <li
        className={`page-item mb-3 mt-3`}
        key={i}
        onClick={() => props.nextPage(i)}
      >
        <a href="#">{i / 15 + 1}</a>
      </li>
    );
  }
  return <div className="pagination">{pageLinks}</div>;
}

export default Pagination;
