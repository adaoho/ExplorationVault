import React from "react";
import { useParams } from "react-router-dom";

const Build = () => {
  const { bID } = useParams();
  return (
    <>
      <div>
        <h1>Build</h1>
      </div>
    </>
  );
};

export default Build;
