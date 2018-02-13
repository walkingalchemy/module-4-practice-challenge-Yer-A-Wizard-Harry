import React from "react";

const Wizard = ({ name, house }) => {
  return (
    <div className="Wizard" >
      <div>{name}</div>
      <div>{house}</div>
    </div>
  );
};

export default Wizard;
