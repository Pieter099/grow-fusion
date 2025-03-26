import React from "react";
import step1 from "./step1.jpg";
import step2 from "./step2.jpg";
import step3 from "./step3.jpg";
import step4 from "./step4.jpg";
import step5 from "./step5.jpg";
import step6 from "./step6.jpg";
import step7 from "./step7.JPG";
import step8 from "./step8.jpg";
import step9 from "./step9.jpg";
import "./farmingInfo.css";

const FarmInfo = () => {
  return (
    <main className="main-section">
      <h2>Farming Information</h2>
      <section className="cropPrices">
        <h3>Prices of crops:</h3>
      </section>
      <section className="cropProperties">
        <h3>Additional Crop information:</h3>
      </section>
      <section className="cropSeason">
        <h3>Crop Seasons:</h3>
      </section>
      <section className="soilPrep">
        <h3>Preparing your soil:</h3>
        <p>Preparing soil for crop planting using farming machinery involves several key steps to ensure optimal soil conditions for seed germination and plant growth. Here’s a step-by-step guide:</p>
        <ul className="soil-prep-steps">
          <li>
            <img src={step1} alt="Step 1" />
            Step 1. Clear the Field: Remove any existing vegetation, rocks, and debris from the field. This can be efficiently accomplished using machinery such as mowers, brush cutters, or heavy-duty tractors equipped with appropriate attachments.
          </li>
          <li>
            <img src={step2} alt="Step 2" />
            Step 2. Test the Soil: Conduct a soil test to determine nutrient content, pH levels, and organic matter composition. This information is crucial for understanding the specific needs of your soil and planning appropriate amendments. Soil testing kits are available, or you can send samples to a local agricultural extension service for analysis.
          </li>
          <li>
            <img src={step3} alt="Step 3" />
            Step 3. Apply Soil Amendments: Based on the soil test results, add necessary amendments to correct nutrient deficiencies or pH imbalances. Common amendments include lime to raise pH, sulfur to lower pH, and various fertilizers to supply essential nutrients.
          </li>
          <li>
            <img src={step4} alt="Step 4" />
            Step 4. Primary Tillage: Use primary tillage equipment, such as moldboard plows or chisel plows, to break up compacted soil and incorporate amendments. This process loosens the soil to a depth of about 8-12 inches, improving aeration and drainage.
          </li>
          <li>
            <img src={step5} alt="Step 5" />
            Step 5. Secondary Tillage: Follow up with secondary tillage using implements like disc harrows or rotary tillers to further refine the soil texture, break up clumps, and create a smooth seedbed. This step also helps in weed control by uprooting young weed seedlings.
          </li>
          <li>
            <img src={step6} alt="Step 6" />
            Step 6. Level the Field: Use leveling equipment, such as land planes or drags, to ensure a uniform surface. A level field promotes even water distribution and consistent planting depth.
          </li>
          <li>
            <img src={step7} alt="Step 7" />
            Step 7. Firm the Seedbed: After tillage, use a roller or cultipacker to firm the seedbed. This step ensures good seed-to-soil contact, which is vital for uniform germination.
          </li>
          <li>
            <img src={step8} alt="Step 8" />
            Step 8. Install Irrigation Systems: If applicable, set up irrigation infrastructure to provide consistent water supply during the growing season. This may involve installing drip lines, sprinklers, or other irrigation equipment.
          </li>
          <li>
            <img src={step9} alt="Step 9" />
            Step 9. Final Inspection: Walk the field to inspect for any remaining debris, uneven areas, or issues that might hinder planting. Address any problems before proceeding to sowing seeds.
          </li>
        </ul>
        <p>For a more in-depth explanation of soil preparation techniques and considerations, <a href="https://www.fao.org/4/y4360e/y4360e0a.htm?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">Visit</a></p>
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