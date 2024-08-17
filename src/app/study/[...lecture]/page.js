"use client";
import React from "react";

function Lectures({ params }) {
  console.log(params);
  return (
    <div>
      <h1>Find the Lectures</h1>
      <h3>College Day: {params.lecture[0]}</h3>
      <h3>Lectures:{params.lecture[1]} </h3>
    </div>
  );
}

export default Lectures;
