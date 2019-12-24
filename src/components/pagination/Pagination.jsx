import React from "react";
import { connect } from "react-redux";
import { handlePaginate } from "../../redux/paginate/paginate.actions";
import { selectRepositoryItems } from "../../redux/repositories/repositories.selectors";

const Pagination = ({ postsPerPage, items, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(items.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const mapStateToProps = state => ({
  items: selectRepositoryItems(state),
  postsPerPage: state.paginate.postsPerPage
});

const mapDispatchToProps = dispatch => ({
  paginate: number => dispatch(handlePaginate(number))
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
