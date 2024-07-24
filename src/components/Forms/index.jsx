import React from "react";
import SearchForm from "../SearchForm";
import FilterBox from "../FilterBox";
const Forms = ({ value, change, regionChange, select }) => {
  return (
    <div className="container my-5">
      <div className="row justify-content-lg-between justify-content-center my-4">
        <div className="col-lg-6 col-10 my-4">
          <SearchForm value={value} change={change} />
        </div>
        <div className="col-lg-2 col-10 my-4">
          <FilterBox select={select} regionChange={regionChange} />
        </div>
      </div>
    </div>
  );
};

export default Forms;
