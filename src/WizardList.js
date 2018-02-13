import React from "react";
import Wizard from "./Wizard";

const WizardList = props => {
  //display all yer wizards, or filter by house
  const students = props.students.map( student => {
    return <Wizard key={student.name} name={student.name} house={student.house}/>
  })
  return <div className="WizardList">{students}</div>;
};

export default WizardList;
