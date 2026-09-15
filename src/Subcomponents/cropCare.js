import React from "react";
import Fertilizer from "../Images/Fertilizer.webp";
import Herbicide from "../Images/Herbicide.webp";
import fertStep1 from "../Images/fertStep1.webp";
import fertStep2 from "../Images/fertStep2.webp";
import fertStep3 from "../Images/fertStep3.webp";
import fertStep4 from "../Images/fertStep4.webp";
import fertStep5 from "../Images/fertStep5.webp";
import fertStep6 from "../Images/fertStep6.webp";
import fertStep7 from "../Images/fertStep7.webp";
import herbStep1 from "../Images/herbStep1.webp";
import herbStep2 from "../Images/herbStep2.webp";
import herbStep3 from "../Images/herbStep3.webp";
import herbStep4 from "../Images/herbStep4.webp";
import herbStep5 from "../Images/herbStep5.webp";
import herbStep6 from "../Images/herbStep6.webp";
import herbStep7 from "../Images/herbStep7.webp";

const CropCare = () => {
    return (
      <>
      <section className="crop-care" id="crop-treatment-info">
        <h3>Additional information on Fertilizing and Herbicide:</h3>
        <p className="intro">Fertilizers and herbicides are crucial components of modern agriculture, playing a significant role in crop production and management. Here’s an overview of each:</p>
        <ul className="info-list">
          <li>
            <img src={Fertilizer} alt="Fertilizer" className="crop-care-img" loading="lazy" />
            <p>
              <strong>Fertilizer</strong>

              Fertilizers supply essential nutrients that crops need for healthy growth and good yields. They can be **organic**, such as compost and manure, or **inorganic/mineral**, which provide specific nutrient concentrations.

              The main nutrients are **nitrogen (N), phosphorus (P), and potassium (K)**, along with smaller amounts of micronutrients such as iron, zinc, and copper. Fertilizers can be applied directly to the soil or to plant leaves. Proper application is important to avoid nutrient loss, water pollution, and soil degradation.
            </p>
          </li>
          <li>
            <img src={Herbicide} alt="Herbicide" className="crop-care-img" loading="lazy" />
            <p>
              <strong>Herbicide</strong>

              Herbicides are used to control unwanted plants and weeds that compete with crops for nutrients, water, and sunlight. **Selective herbicides** target specific weeds, while **non-selective herbicides** affect a wider range of vegetation.

              They may be applied before planting, before crops emerge, or after crops and weeds have emerged. Herbicides can work through contact with plant tissue or by being absorbed and moved throughout the plant. Responsible use is important because overuse can contribute to weed resistance, environmental harm, and potential health risks.
            </p>
          </li>
        </ul>
      </section>
      <section className="crop-care-steps" id="crop-treatment-steps">
        <h3>Fertilizing steps:</h3>
        <p className="intro">Here is a step-by-step guide to applying fertilizer:</p>
        <ul className="info-list">
          <li>
            <img src={fertStep1} alt="Step 1" className="crop-care-img" loading="lazy" />
            <p>
              <strong>Step 1. Assess Your Field:</strong>
	            •	Soil Testing: Begin by taking a soil sample to determine nutrient levels. This helps you decide which type of fertilizer and application rate is best for your crops.
	            •	Field Evaluation: Look at the field’s layout, moisture levels, and any previous treatments to plan the most effective approach.
            </p>
          </li>
          <li>
            <img src={fertStep2} alt="Step 2" className="crop-care-img" loading="lazy" />
            <p>
              <strong> Step 2. Choose the Right Fertilizer:</strong>
             	•	Based on Soil Test: Use the test results to select a fertilizer that provides the nutrients your soil lacks (e.g., nitrogen, phosphorus, potassium).
            	•	Form & Delivery Method: Decide whether you’ll use granular, liquid, or another form, as this influences how you’ll apply it.
            </p>
          </li>
          <li>
            <img src={fertStep3} alt="Step 3" className="crop-care-img" loading="lazy" />
            <p>
              <strong>Step 3. Prepare Equipment and Machinery:</strong>
	            •	Manual Application: For smaller fields or precision work, have tools like a spreader or hand-held applicator ready.
	            •	Machinery Setup: For larger areas, use a tractor fitted with a calibrated fertilizer spreader. Calibration is essential to ensure the correct application rate.
	            •	Maintenance Check: Make sure all machinery parts (e.g., spreader discs, nozzles) are clean and functioning properly.
            </p>
          </li>
          <li>
            <img src={fertStep4} alt="Step 4" className="crop-care-img" loading="lazy" />
            <p>
              <strong>Step 4. Calibrate Your Equipment:</strong>
	            •	Determine Application Rate: Based on the fertilizer package instructions and soil test recommendations, calculate the precise amount needed per acre or hectare.
	            •	Calibration Process: Run a small test section with your machinery to ensure the spreader or sprayer is delivering the fertilizer evenly. Adjust settings as necessary.
            </p>
          </li>
          <li>
            <img src={fertStep5} alt="Step 5" className="crop-care-img" loading="lazy" />
            <p>
              <strong>Step 5. Application Process:</strong>
	            •	Manual Application: If applying by hand, evenly distribute the fertilizer using a spreader or by walking systematically through the field. Work in rows or sections to avoid overlaps.
	            •	Machinery Application:
	            •	Start at the Field Edge: Begin at one end of the field and move in a systematic pattern (usually in rows) to cover the entire area.
	            •	Monitor Speed: Keep a consistent speed to ensure uniform distribution.
	            •	Overlap Control: Ensure minimal overlap between passes to avoid over-application in some spots.
            </p>
          </li>
          <li>
            <img src={fertStep6} alt="Step 6" className="crop-care-img" loading="lazy" />
            <p>
              <strong>Step 6. Post-Application Steps:</strong>
	            •	Incorporation: Depending on the crop and soil type, you might need to lightly till the field after application to help the fertilizer mix with the soil. This step is crucial if you’re using a granular fertilizer.
	            •	Irrigation: In many cases, a light irrigation helps dissolve the fertilizer and moves nutrients into the root zone.
	            •	Clean Up: Clean any manual tools and check machinery for any leftover fertilizer buildup, which can affect future applications.
            </p>
          </li>
          <li>
            <img src={fertStep7} alt="Step 7" className="crop-care-img" loading="lazy" />
            <p>
              <strong>Step 7. Safety and Environmental Considerations:</strong>
	            •	Personal Protection: Always wear protective gear—gloves, goggles, and a mask—especially if you’re handling chemicals manually.
	            •	Environmental Awareness: Be mindful of weather conditions; avoid application before heavy rain to prevent runoff into waterways.
            </p>
          </li>
        </ul>
        <h3 className="top-space">Herbicide steps:</h3>
        <p className="intro">Here is a step-by-step guide to applying herbicides:</p>
        <ul className="info-list">
          <li>
            <img src={herbStep1} alt="Step 1" className="crop-care-img" loading="lazy" />
            <p>
              <strong>Step 1. Pre-Application Planning:</strong>
	            •	Identify the Weed Problem: Determine which weed species are present and select an herbicide that targets them.
	            •	Read the Label: Carefully review the herbicide’s instructions, including the recommended dosage, timing (pre-emergent vs. post-emergent), and any specific restrictions.
            </p>
          </li>
          <li>
            <img src={herbStep2} alt="Step 2" className="crop-care-img" loading="lazy" />
            <p>
              <strong>Step 2.	Equipment Preparation:</strong>
	            •	Select the Right Machinery: Ensure your sprayer or application equipment is suitable for the herbicide type and field size.
	            •	Calibration: Calibrate your machinery to deliver the correct amount of herbicide per acre or hectare. This involves testing the flow rate, checking nozzle performance, and confirming uniform coverage.
            </p>
          </li>
          <li>
            <img src={herbStep3} alt="Step 3" className="crop-care-img" loading="lazy" />
            <p>
              <strong>Step 3.	Mixing the Herbicide:</strong>
	            •	Follow Safety Protocols: Wear appropriate personal protective equipment (PPE) like gloves, goggles, and coveralls.
	            •	Mix Accurately: Use clean water in the correct ratio as directed on the herbicide label. Add the herbicide to the water—never the reverse—to ensure even distribution.
            </p>
          </li>
          <li>
            <img src={herbStep4} alt="Step 4" className="crop-care-img" loading="lazy" />
            <p>
              <strong>Step 4.	Weather Check:</strong>
	            •	Optimal Conditions: Verify that weather conditions are suitable—avoid application during high winds, heavy rain, or extreme temperatures to minimize drift and ensure proper absorption.
            </p>
          </li>
          <li>
            <img src={herbStep5} alt="Step 5" className="crop-care-img" loading="lazy" />
            <p>
              <strong>Step 5.	Application Process:</strong>
	            •	Uniform Application: Begin spraying with consistent speed and overlap, ensuring even distribution across the field.
	            •	Monitor Equipment: Regularly check that the machinery is maintaining the correct pressure and that no clogs or malfunctions occur during application.
            </p>
          </li>
          <li>
            <img src={herbStep6} alt="Step 6" className="crop-care-img" loading="lazy" />
            <p>
              <strong>Step 6.	Post-Application Procedures:</strong>
	            •	Equipment Cleaning: Thoroughly clean all machinery and nozzles to avoid residue build-up, which can lead to corrosion or affect future applications.
	            •	Record Keeping: Document the herbicide application details—date, field location, dosage, weather conditions, and any observations—to help inform future management decisions.
            </p>
          </li>
          <li>
            <img src={herbStep7} alt="Step 7" className="crop-care-img" loading="lazy" />
            <p>
              <strong>Step  7.	Follow-Up:</strong>
	            •	Evaluate Effectiveness: After the recommended period, inspect the field to assess the herbicide’s performance.
	            •	Plan for Reapplication: If weeds persist, consult the label and consider whether a follow-up application or alternative strategy is needed.
            </p>
          </li>
        </ul>
      </section>
      </>
    )
};

export default CropCare;