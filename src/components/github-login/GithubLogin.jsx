import React from "react";
import { connect } from "react-redux";
import { userNameChange, requestUser } from "../../redux/github/github.actions";

const GithubLogin = ({ getUser, userName, handleUserName }) => {
  return (
    <React.Fragment>
      <div className="card card-body my-3">
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text bg-primary text-white">
              <i className="fas fa-book"></i>
            </div>
          </div>
          <input
            type="text"
            placeholder="enter the github owner name"
            className="form-control text-capitalize"
            value={userName}
            onChange={handleUserName}
          />
        </div>
        <button
          type="submit"
          className="btn btn-block btn-success text-uppercase mt-3"
          onClick={() => getUser(userName)}
        >
          Github Login
        </button>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = ({ github: { userName } }) => ({
  userName
});

const mapDispatchToProps = dispatch => ({
  handleUserName: event => dispatch(userNameChange(event.target.value)),
  getUser: userName => dispatch(requestUser(userName))
});

export default connect(mapStateToProps, mapDispatchToProps)(GithubLogin);
