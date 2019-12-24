import React from "react";
import { connect } from "react-redux";

const RepositoryItems = ({ id, repotitle, owner, stars, created, userId }) => {
  return (
    <tbody>
      <tr className={`${id === userId ? "bg-danger" : ""}`}>
        <td>{id}</td>
        <td>{repotitle}</td>
        <td>{owner}</td>
        <td>{stars}</td>
        <td>{created}</td>
      </tr>
    </tbody>
  );
};

const mapStateToProps = ({ github: { userId } }) => ({
  userId
});

export default connect(mapStateToProps)(RepositoryItems);
