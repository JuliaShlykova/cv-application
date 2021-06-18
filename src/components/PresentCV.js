import React from "react";
import Photo from "../assets/photo.svg";

function PresentCV(props) {
  const { generalInfo, educationalExp, practicalExp } = props.props;
  return (
    <>
    <div className="present-gen-info">
      <h1>{generalInfo[1].value} {generalInfo[0].value}</h1>
      <div  className="contact-info">
      <ul>
        <li>{generalInfo[2].value}</li>
        <li>{generalInfo[3].value}</li>
      </ul>
      <img src={Photo} alt="person" />
      </div>
    </div>

    <div className="present-educ-info">
      <h2>Education</h2>
      <ul>
        <li>{educationalExp[0].value}</li>
        <li>{educationalExp[1].value}</li>
        <li>{educationalExp[2].value} : {educationalExp[3].value}</li>
      </ul>
      
    </div>
    
    <div className="present-work-info">
      <h2>Work experience</h2>
      <ul>
        <li>{practicalExp[0].value}</li>
        <li>{practicalExp[1].value}</li>
        <li>{practicalExp[2].value}</li>
        <li>{practicalExp[3].value} : {practicalExp[4].value}</li>
      </ul>
      
    </div>

    </>
  );
}

export default PresentCV;