import React from "react";
import thumbNail from "../Images/thumbNail.webp";
import soilStep1 from "../Images/soilStep1.webp";
import soilStep2 from "../Images/soilStep2.webp";
import soilStep3 from "../Images/soilStep3.webp";
import soilStep4 from "../Images/soilStep4.webp";
import soilStep5 from "../Images/soilStep5.webp";
import soilStep6 from "../Images/soilStep6.webp";
import soilStep7 from "../Images/soilStep7.webp";
import soilStep8 from "../Images/soilStep8.webp";
import soilStep9 from "../Images/soilStep9.webp";

const SoilPrep = () => {
  return (
    <>
      <section className="soilPrep" id="soil-prep">
        <h3>Preparing your soil:</h3>
        <p className="intro">Preparing soil for crop planting using farming machinery involves several key steps to ensure optimal soil conditions for seed germination and plant growth. Here’s a step-by-step guide:</p>
        <ul className="info-list">
          <li>
            <img src={soilStep1} alt="Step 1" />
            <p>
              <strong>Step 1. Clear the Field:</strong> 
              Begin by removing any debris, rocks, or vegetation from the field. This step creates a clean slate for soil preparation and prevents interference with planting equipment.
            </p>
          </li>
          <li>
            <img src={soilStep2} alt="Step 2" />
            <p>
              <strong>Step 2. Test the Soil:</strong>
              Conduct a soil test to determine nutrient content, pH levels, and organic matter composition. This information is crucial for understanding the specific needs of your soil and planning appropriate amendments. Soil testing kits are available, or you can send samples to a local agricultural extension service for analysis.
            </p>
          </li>
          <li>
            <img src={soilStep3} alt="Step 3" />
            <p>
              <strong>Step 3. Apply Soil Amendments:</strong> 
              Based on the soil test results, add necessary amendments to correct nutrient deficiencies or pH imbalances. Common amendments include lime to raise pH, sulfur to lower pH, and various fertilizers to supply essential nutrients.
            </p>
          </li>
          <li>
            <img src={soilStep4} alt="Step 4" />
            <p>
              <strong>Step 4. Primary Tillage:</strong> 
              Use primary tillage equipment, such as moldboard plows or chisel plows, to break up compacted soil and incorporate amendments. This process loosens the soil to a depth of about 8-12 inches, improving aeration and drainage.
            </p>
          </li>
          <li>
            <img src={soilStep5} alt="Step 5" />
            <p>
              <strong>Step 5. Secondary Tillage:</strong> 
              Follow up with secondary tillage using implements like disc harrows or rotary tillers to further refine the soil texture, break up clumps, and create a smooth seedbed. This step also helps in weed control by uprooting young weed seedlings.
            </p>
          </li>
          <li>
            <img src={soilStep6} alt="Step 6" />
            <p>
              <strong>Step 6. Level the Field:</strong> 
              Use leveling equipment, such as land planes or drags, to ensure a uniform surface. A level field promotes even water distribution and consistent planting depth.
            </p>
          </li>
          <li>
            <img src={soilStep7} alt="Step 7" />
            <p>
              <strong>Step 7. Firm the Seedbed:</strong> 
              After tillage, use a roller or cultipacker to firm the seedbed. This step ensures good seed-to-soil contact, which is vital for uniform germination.
            </p>
          </li>
          <li>
            <img src={soilStep8} alt="Step 8" />
            <p>
              <strong>Step 8. Install Irrigation Systems:</strong> 
              If applicable, set up irrigation infrastructure to provide consistent water supply during the growing season. This may involve installing drip lines, sprinklers, or other irrigation equipment.
            </p>
          </li>
          <li>
            <img src={soilStep9} alt="Step 9" />
            <p>
              <strong>Step 9. Final Inspection:</strong> 
              Walk the field to inspect for any remaining debris, uneven areas, or issues that might hinder planting. Address any problems before proceeding to sowing seeds.
            </p>
          </li>
          <li className="video-link">
            <p>If you want to see farmers implementing these steps on a field, watch the video below to see how they do it.</p>
            <a href="https://youtu.be/jqa2ywtDwJc" target="_blank" rel="noopener noreferrer">
              <img src={thumbNail} alt="thumb-nail" />
            </a>
          </li>
        </ul>
        <p>For a more in-depth explanation of soil preparation techniques and considerations, <a href="https://www.fao.org/4/y4360e/y4360e0a.htm?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">Visit</a></p>
      </section>
    </>
  )
};

export default SoilPrep;