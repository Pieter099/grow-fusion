import React from "react";
import CropTable from "../Subcomponents/Table";
import SubNavbar from "../Subcomponents/SubNavbar";
import SoilPrep from "../Subcomponents/soilPrep";
import CropCare from "../Subcomponents/cropCare";
import CropInfo from "../Subcomponents/cropInfo";
import Weather from "../Subcomponents/weather";
import "../Styles/farmingInfo.css";

const FarmInfo = () => {
  return (
    <main className="info-section">
      <h2>Farming Information</h2>
      <SubNavbar />
      <section className="farm-state" id="farm-condition">
        <h3>Farm Conditions</h3>
        <p className="intro">Here is a table that outlines the current conditions of your farm:</p>
        <Weather />
      </section>
      <CropInfo />
      <section className="cropSeason" id="crop-calender">
        <h3>Crop Seasons:</h3>
        <p className="intro">Here is a table that outlines the planting and harvesting seasons for various crops:</p>
        <CropTable />
      </section>
      <SoilPrep />
      <CropCare />
    </main>
  );
};

export default FarmInfo;
