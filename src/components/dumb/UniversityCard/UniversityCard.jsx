import React from "react";
import "./UniversityCard.scss";
export default function UniversityCard(props) {
  const { data } = props;

  return (
    <div className="university pointer">
      <p className="weight-500">{data.name}</p>
      <p className="weight-300">{data.country}</p>
      <p>
        <a href={data.web_page} target="_blank" className="link" >
          {data.domain}
        </a>
      </p>
    </div>
  );
}
