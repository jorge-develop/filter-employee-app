import React from "react";
import { formatDate } from "../utils/handleSearchUtils";
import "../styles/PropertyListing.css";
const color_p = {
  color: "#00ff6f",
  textShadow: "2px 2px 4px #000000",
};

const PropertyListing = ({ employee }) => {
  return (
    <div className={`propertylisting_card`}>
      <div className="propertylisting_container">
        <div className="propertylisting">
          <img
            src={employee.image}
            alt="Avatar"
            style={{
              height: "200px",
              width: "150px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          />
          <div className="propertylisting-group">
            <h3 className="propertylisting_title">
              {employee.firstName} {employee.lastName}
            </h3>

            <p className="propertylisting_price">Gender: {employee.gender}</p>
            <p className="propertylisting_location">Email: {employee.email}</p>
          </div>
        </div>
        <div className="flip-card-back">
          <h1>
            {employee.firstName} {employee.maidenName} {employee.lastName}
          </h1>
          <div>
            <p>
              <span style={color_p}>Company Title: </span>
              <strong>{employee.company.title}</strong>
            </p>
            <p>
              <span style={color_p}>Office Number: </span>
              <b>{employee.phone}</b>
            </p>
            <p>
              <span style={color_p}>DOB: </span>

              <b>{formatDate(employee.birthDate)}</b>
            </p>
            <p>
              <span style={color_p}>Work ID: </span> <b>{employee.ein}</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyListing;
