import React from "react";
import RepositoryItems from "../repositoryitems/RepositoryItems";
import Table from "react-bootstrap/Table";
import { connect } from "react-redux";
import { selectRepositoryItems } from "../../redux/repositories/repositories.selectors";

const RepositoryList = ({ currentPage, postsPerPage, items }) => {
  // current page caculation
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPage = indexOfLastPost - postsPerPage;
  const currentPost = items.slice(indexOfFirstPage, indexOfLastPost);

  return (
    <div>
      {currentPost.length > 0 ? (
        <Table striped bordered hover responsive="md">
          <thead>
            <tr>
              <th>ID</th>
              <th>Repo Title</th>
              <th>Owner</th>
              <th>Stars</th>
              <th>CreatedAt</th>
            </tr>
          </thead>

          {currentPost.map(item => (
            <RepositoryItems
              key={item.id}
              id={item.owner.id}
              repotitle={item.name}
              owner={item.owner.login}
              stars={item.stargazers_count}
              created={item.created_at.slice(0, 10)}
            />
          ))}
        </Table>
      ) : null}
    </div>
  );
};

const mapStateToProps = state => ({
  items: selectRepositoryItems(state),
  currentPage: state.paginate.currentPage,
  postsPerPage: state.paginate.postsPerPage
});
export default connect(mapStateToProps)(RepositoryList);
