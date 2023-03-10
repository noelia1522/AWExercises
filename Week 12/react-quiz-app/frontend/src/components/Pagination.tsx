import React from "react";
import _ from "lodash";
import "./Pagination.css";

type PropsType = {
  totalPosts: number;
  postsPerPage: number;
  paginate: any;
};
export default function Pagination({
  totalPosts,
  postsPerPage,
  paginate,
}: PropsType) {
  const pageNumbers = _.range(1, Math.ceil(totalPosts / postsPerPage));

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-number">
            <a href="#top" onClick={(e) => paginate(e, number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
