import React from "react";
import { useParams } from "react-router-dom";
import "./DetailsPage.css";

const DetailsPage = () => {
  const { type } = useParams();

  return (
    <div className="details-page">
      <h1>{type} Details</h1>
      <p>Show more details about {type} here.</p>
    </div>
  );
};

export default DetailsPage;
