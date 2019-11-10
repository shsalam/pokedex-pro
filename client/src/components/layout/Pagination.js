import React from "react";

function Pagination(props) {
  const pageLinks = [];
  for (let i = 0; i < 150; i += 15) {
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
  return (
    <div classname="container">
      <div className="pagination">{pageLinks}</div>
    </div>
  );
}

export default Pagination;
