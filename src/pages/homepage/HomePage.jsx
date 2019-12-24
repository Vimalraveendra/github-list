import React from "react";
import Repositories from "../../components/repositories/Repositories";

const HomePage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-7 my-2">
          <Repositories />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
