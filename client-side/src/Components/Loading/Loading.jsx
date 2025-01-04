// components/Loading.js
import React from "react";
import "./Loading.css"; // Style for the loading screen

function Loading() {
  return (
    <div className="loading-screen">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
}

export default Loading;
