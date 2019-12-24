import React from "react";
import {
  debouncedActionCreator,
  handleRepositoryName
} from "../../redux/repositories/repositories.actions";
import { selectRepositoryName } from "../../redux/repositories/repositories.selectors";
import { connect } from "react-redux";

const SearchField = ({ handleChange, name, fetchUsers }) => {
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
            placeholder="Search for repositories by name"
            className="form-control text-capitalize "
            value={name}
            onChange={event => {
              handleChange(event);
              fetchUsers(name);
            }}
          />
        </div>
      </div>
    </React.Fragment>
  );
};
const mapStateToProps = state => ({
  name: selectRepositoryName(state)
});
const mapDispatchToProps = dispatch => ({
  handleChange: event => dispatch(handleRepositoryName(event.target.value)),
  fetchUsers: name => dispatch(debouncedActionCreator(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchField);
