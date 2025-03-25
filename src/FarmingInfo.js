import React from "react";
import "./farmingInfo.css";

const FarmInfo = () => {
  return (
    <main className="main-section" >
      <h2>Farming Information</h2>
      <section className="cropProperties">
        <h3>Additional Crop information:</h3>
      </section>
      <section className="cropSeason">
        <h3>Crop Seasons:</h3>
      </section>
      <section className="soilPrep">
        <h3>Preparing your soil:</h3>
      </section>
      <section className="spray-types">
        <h3>Additional information on Fertilizing and Herbicide:</h3>
      </section>
      <section className="spray-steps">
        <h3>Fertilizing steps:</h3>
        <h3>Herbicide steps:</h3>
      </section>
      <section className="harvest">
        <h3>Harvesting and after:</h3>
      </section>
    </main>
  );
};

export default FarmInfo;