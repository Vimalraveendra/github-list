import React from "react";
import SearchField from "../../components/searchfield/SearchField";
import RepositoryList from "../repositorylist/RepositoryList";
import Pagination from "../pagination/Pagination";
import GithubLogin from "../github-login/GithubLogin";

const Repositories = () => {
  return (
    <React.Fragment>
      <SearchField />
      <RepositoryList />
      <Pagination />
      <GithubLogin />
    </React.Fragment>
  );
};

export default Repositories;
