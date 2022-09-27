import React from "react";

const Paginate = ({ usersPerPage, totalUser, paginate }) => {
  const pagesNumber = [];
  for (let i = 1; i <= Math.ceil(totalUser / usersPerPage); i++) {
    pagesNumber.push(i);
  }
  return (
    <div>
      <ul className="pagination">
        {pagesNumber.map((page) => (
          <li
            className={"page-item" + (page === usersPerPage ? " -active" : "")}
            key={page}
          >
            <a className="page-link" onClick={() => paginate(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Paginate;
