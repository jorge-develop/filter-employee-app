import React from "react";
import PropertyListing from "./PropertyListing";

const PropertyList = ({ employees }) => {
  const renderEmployeeList = () => {
    if (employees.length === 0) {
      return (
        <div className="propertylisting_card">
          <div className="propertylisting_container ">
            <h2 className="propertylisting_title">
              Sorry no one has that name.
            </h2>
            <p className="propertylisting_price">please try again.</p>
            <div className="flip-card-back">
              <h2 className="propertylisting_price">is not back here either</h2>
              <p className="propertylisting_title">please try again.</p>
            </div>
          </div>
        </div>
      );
    } else {
      return employees.map((employee, i) => (
        <PropertyListing key={i} employee={employee} />
      ));
    }
  };

  return <div className="propertyList">{renderEmployeeList()}</div>;
};

export default PropertyList;
