import React from "react";
import CropTable from "../Components/Table";
import SubNavbar from "./SubNavbar";
import barley from "../Utils/barley.jpg";
import corn from "../Utils/corn.jpg";
import cotton from "../Utils/cotton.jpg";
import canola from "../Utils/canola.jpg";
import oats from "../Utils/oats.jpg";
import wheat from "../Utils/wheat.jpg";
import step1 from "../Utils/step1.jpg";
import step2 from "../Utils/step2.jpg";
import step3 from "../Utils/step3.jpg";
import step4 from "../Utils/step4.jpg";
import step5 from "../Utils/step5.jpg";
import step6 from "../Utils/step6.jpg";
import step7 from "../Utils/step7.JPG";
import step8 from "../Utils/step8.jpg";
import step9 from "../Utils/step9.jpg";
import fertilizer from "../Utils/fertilizer.jpg";
import herbicide from "../Utils/herbicide.jpg";
import "../Styles/farmingInfo.css";

const FarmInfo = () => {
  return (
    <main className="main-section">
      <h2>Farming Information</h2>
      <section className="cropPrices" id="crop-price">
        <h3>Prices of crops:</h3>
      </section>
      <section className="cropProperties" id="crop-info">
        <h3>Additional Crop information:</h3>
        <p>Here is an overview of each crop type, highlighting key factual properties and points that you might consider:</p>
        <ul className="crop-properties-list">
          <li>
            <img src={barley} alt="Barley" />
            <p>
              <strong>Barley</strong>
              •	Growth & Adaptability: Barley is a hardy cereal crop that grows well in cooler climates and is tolerant of less-than-ideal soil conditions, making it a good choice for marginal lands.
	            •	Uses: It is widely used in the brewing industry for beer production, as well as in animal feed and health food products.
	            •	Agronomic Aspects: Barley has a relatively short growing season and can be an excellent rotation crop to improve soil health and break pest cycles in cereal-based systems.
            </p>
          </li>
          <li>
            <img src={canola} alt="Canola" />
            <p>
              <strong>Canola</strong>
              •	Growth & Climate: Canola is an oilseed crop that is best grown in temperate climates with well-drained soils. It’s often cultivated in regions with cooler growing seasons.
	            •	Uses: The seeds are pressed to produce canola oil, which is prized for its low saturated fat content and high levels of heart-healthy fats. The by-products are also used as animal feed.
	            •	Agronomic Aspects: Modern canola varieties have been bred for disease resistance and improved oil quality. Crop rotation and integrated pest management are essential for maintaining productivity.
            </p>
          </li>
          <li>
            <img src={corn} alt="Corn" />
            <p>
              <strong>Corn</strong>
              •	Growth & Climate: Corn is a warm-season annual that requires a long frost-free period and well-drained, fertile soils. It is typically grown in temperate to subtropical regions.
	            •	Uses: This versatile crop serves as a staple food, animal feed, and is a primary source for biofuel production. It’s also processed into a variety of food products and industrial materials.
	            •	Agronomic Aspects: High-yielding under optimal conditions, corn benefits from ample sunlight and regular water supply, though it is also responsive to modern farming inputs like hybrid varieties and precision agriculture.
            </p>
          </li>
          <li>
            <img src={cotton} alt="Cotton" />
            <p>
              <strong>Cotton</strong>
              •	Growth & Climate: Cotton is a warm-season perennial (grown as an annual) that requires a long frost-free period, abundant sunshine, and well-drained, fertile soils.
	            •	Uses: It is primarily grown for its fiber, which is used extensively in the textile industry. Cottonseed is also processed to extract oil and meal for animal feed.
	            •	Agronomic Aspects: Cotton is sensitive to water availability and pest pressures, making irrigation management and integrated pest control practices crucial. Advances in breeding, including genetically modified varieties, have improved yields and resistance to pests and diseases.
            </p>
          </li>
          <li>
            <img src={oats} alt="Oats" />
            <p>
              <strong>Oats</strong>
              •	Growth & Climate: Oats thrive in cooler, moist climates and are often grown in regions where other grains might struggle. They prefer well-drained soils.
	            •	Uses: Commonly used as livestock feed, oats also have significant human consumption value—think oatmeal, oat flour, and other health food products known for their high fiber and nutritional content.
	            •	Agronomic Aspects: Oats are known for their soil-building properties and are often used as a cover crop or in rotation systems to improve soil structure and fertility.
            </p>
          </li>
          <li>
            <img src={wheat} alt="Wheat" />
            <p>
              <strong>Wheat</strong>
              •	Varieties & Climate: Wheat comes in different types (e.g., winter and spring wheat) that are adapted to various climates. Winter wheat is usually planted in the fall and harvested in the summer, while spring wheat is planted in the spring.
	            •	Uses: Primarily used for making flour, wheat is a key ingredient in breads, pastas, and pastries. It also plays an important role in animal feed in some regions.
	            •	Agronomic Aspects: Wheat is valued for its adaptability and relatively low input requirements. Crop rotation and soil fertility management are critical to sustaining high yields and quality grain.
            </p>
          </li>
        </ul>
      </section>
      <section className="cropSeason" id="crop-calender">
        <h3>Crop Seasons:</h3>
        <p>Here is a table that outlines the planting and harvesting seasons for various crops:</p>
        <CropTable />
      </section>
      <section className="soilPrep" id="soil-prep">
        <h3>Preparing your soil:</h3>
        <p>Preparing soil for crop planting using farming machinery involves several key steps to ensure optimal soil conditions for seed germination and plant growth. Here’s a step-by-step guide:</p>
        <ul className="soil-prep-steps">
          <li>
            <img src={step1} alt="Step 1" />
            <p>
              <strong>Step 1. Clear the Field:</strong> 
              Begin by removing any debris, rocks, or vegetation from the field. This step creates a clean slate for soil preparation and prevents interference with planting equipment.
            </p>
          </li>
          <li>
            <img src={step2} alt="Step 2" />
            <p>
              <strong>Step 2. Test the Soil:</strong>
              Conduct a soil test to determine nutrient content, pH levels, and organic matter composition. This information is crucial for understanding the specific needs of your soil and planning appropriate amendments. Soil testing kits are available, or you can send samples to a local agricultural extension service for analysis.
            </p>
          </li>
          <li>
            <img src={step3} alt="Step 3" />
            <p>
              <strong>Step 3. Apply Soil Amendments:</strong> 
              Based on the soil test results, add necessary amendments to correct nutrient deficiencies or pH imbalances. Common amendments include lime to raise pH, sulfur to lower pH, and various fertilizers to supply essential nutrients.
            </p>
          </li>
          <li>
            <img src={step4} alt="Step 4" />
            <p>
              <strong>Step 4. Primary Tillage:</strong> 
              Use primary tillage equipment, such as moldboard plows or chisel plows, to break up compacted soil and incorporate amendments. This process loosens the soil to a depth of about 8-12 inches, improving aeration and drainage.
            </p>
          </li>
          <li>
            <img src={step5} alt="Step 5" />
            <p>
              <strong>Step 5. Secondary Tillage:</strong> 
              Follow up with secondary tillage using implements like disc harrows or rotary tillers to further refine the soil texture, break up clumps, and create a smooth seedbed. This step also helps in weed control by uprooting young weed seedlings.
            </p>
          </li>
          <li>
            <img src={step6} alt="Step 6" />
            <p>
              <strong>Step 6. Level the Field:</strong> 
              Use leveling equipment, such as land planes or drags, to ensure a uniform surface. A level field promotes even water distribution and consistent planting depth.
            </p>
          </li>
          <li>
            <img src={step7} alt="Step 7" />
            <p>
              <strong>Step 7. Firm the Seedbed:</strong> 
              After tillage, use a roller or cultipacker to firm the seedbed. This step ensures good seed-to-soil contact, which is vital for uniform germination.
            </p>
          </li>
          <li>
            <img src={step8} alt="Step 8" />
            <p>
              <strong>Step 8. Install Irrigation Systems:</strong> 
              If applicable, set up irrigation infrastructure to provide consistent water supply during the growing season. This may involve installing drip lines, sprinklers, or other irrigation equipment.
            </p>
          </li>
          <li>
            <img src={step9} alt="Step 9" />
            <p>
              <strong>Step 9. Final Inspection:</strong> 
              Walk the field to inspect for any remaining debris, uneven areas, or issues that might hinder planting. Address any problems before proceeding to sowing seeds.
            </p>
          </li>
        </ul>
        <p>For a more in-depth explanation of soil preparation techniques and considerations, <a href="https://www.fao.org/4/y4360e/y4360e0a.htm?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">Visit</a></p>
      </section>
      <section className="crop-care" id="crop-treatment-info">
        <h3>Additional information on Fertilizing and Herbicide:</h3>
        <p>Fertilizers and herbicides are crucial components of modern agriculture, playing a significant role in crop production and management. Here’s an overview of each:</p>
        <ul className="crop-care-info-list">
          <li>
            <img src={fertilizer} alt="Fertilizer" />
            <p>
              <strong>Fertilizer</strong>
              1.	Purpose: Fertilizers replenish essential nutrients in the soil, promoting healthy plant growth and enhancing crop yields.
	            2.	Types of Fertilizers:
	              •	Organic: Derived from natural sources like compost and manure, they improve soil structure and fertility.
	              •	Inorganic (Mineral): Manufactured chemically, providing precise nutrient concentrations for targeted plant needs. ￼
	            3.	Essential Nutrients:
	              •	Macronutrients: Required in large amounts; include nitrogen (N), phosphorus (P), and potassium (K).
	              •	Micronutrients: Needed in smaller quantities; include elements like iron, zinc, and copper.
	            4.	Application Methods:
	              •	Soil Application: Direct incorporation into the soil near plant roots.
	              •	Foliar Application: Spraying nutrient solutions directly onto plant leaves for quick absorption.
	            5.	Environmental Considerations: Proper use of fertilizers is crucial to prevent issues like water pollution and soil degradation. Responsible application ensures sustainable agriculture and environmental protection.
            </p>
          </li>
          <li>
            <img src={herbicide} alt="Herbicide" />
            <p>
              <strong>Herbicide</strong>
              1.	Purpose: Herbicides are chemical agents designed to control or eliminate unwanted vegetation, such as weeds, that compete with crops for nutrients, water, and sunlight.  ￼
	            2.	Types of Herbicides:
	              •	Selective Herbicides: Target specific plant species while leaving desired crops unharmed. For example, certain herbicides control broadleaf weeds in cereal crops without affecting the cereals.  ￼
	              •	Non-Selective Herbicides: Affect a wide range of plant species and are typically used to clear land of all vegetation. Glyphosate is a widely known non-selective herbicide.
	            3.	Application Methods:
	              •	Pre-Planting: Applied before crops are planted to eliminate existing weeds. ￼
	              •	Pre-Emergence: Applied after planting but before crop seedlings emerge, targeting germinating weed seeds. ￼
	              •	Post-Emergence: Applied after both crops and weeds have emerged, focusing on actively growing weeds.  ￼
	            4.	Modes of Action:
	              •	Contact Herbicides: Kill only the plant parts they come into direct contact with, requiring thorough coverage for effectiveness. ￼
	              •	Systemic Herbicides: Absorbed by foliage or roots and translocated throughout the plant, affecting growth processes. Glyphosate, for instance, inhibits an enzyme involved in amino acid synthesis.  ￼
	            5.	Environmental and Health Considerations:
	              •	Persistence: Some herbicides degrade quickly in the environment, while others persist longer, potentially affecting non-target organisms.
	              •	Resistance: Over-reliance on specific herbicides can lead to the development of resistant weed species, complicating management strategies. For example, glyphosate-resistant Italian ryegrass has been identified in the UK.  ￼
	              •	Health Impacts: Certain herbicides have been scrutinized for potential health risks. For instance, paraquat has been under review due to possible links to Parkinson’s disease.  ￼
            </p>
          </li>
        </ul>
      </section>
      <section className="crop-care-steps" id="crop-treatment-steps">
        <h3>Fertilizing steps:</h3>
        <p>Here is a step-by-step guide to applying fertilizer:</p>
        <ul className="crop-care-steps-list">
          <li>
            <img />
            <p>
              <strong>Step 1. Assess Your Field:</strong>
	            •	Soil Testing: Begin by taking a soil sample to determine nutrient levels. This helps you decide which type of fertilizer and application rate is best for your crops.
	            •	Field Evaluation: Look at the field’s layout, moisture levels, and any previous treatments to plan the most effective approach.
            </p>
          </li>
          <li>
            <img />
            <p>
              <strong> Step 2. Choose the Right Fertilizer:</strong>
             	•	Based on Soil Test: Use the test results to select a fertilizer that provides the nutrients your soil lacks (e.g., nitrogen, phosphorus, potassium).
            	•	Form & Delivery Method: Decide whether you’ll use granular, liquid, or another form, as this influences how you’ll apply it.
            </p>
          </li>
          <li>
            <img />
            <p>
              <strong>Step 3. Prepare Equipment and Machinery:</strong>
	            •	Manual Application: For smaller fields or precision work, have tools like a spreader or hand-held applicator ready.
	            •	Machinery Setup: For larger areas, use a tractor fitted with a calibrated fertilizer spreader. Calibration is essential to ensure the correct application rate.
	            •	Maintenance Check: Make sure all machinery parts (e.g., spreader discs, nozzles) are clean and functioning properly.
            </p>
          </li>
          <li>
            <img />
            <p>
              <strong>Step 4. Calibrate Your Equipment:</strong>
	            •	Determine Application Rate: Based on the fertilizer package instructions and soil test recommendations, calculate the precise amount needed per acre or hectare.
	            •	Calibration Process: Run a small test section with your machinery to ensure the spreader or sprayer is delivering the fertilizer evenly. Adjust settings as necessary.
            </p>
          </li>
          <li>
            <img />
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
            <img />
            <p>
              <strong>Step 6. Post-Application Steps:</strong>
	            •	Incorporation: Depending on the crop and soil type, you might need to lightly till the field after application to help the fertilizer mix with the soil. This step is crucial if you’re using a granular fertilizer.
	            •	Irrigation: In many cases, a light irrigation helps dissolve the fertilizer and moves nutrients into the root zone.
	            •	Clean Up: Clean any manual tools and check machinery for any leftover fertilizer buildup, which can affect future applications.
            </p>
          </li>
          <li>
            <img />
            <p>
              <strong>Step 7. Safety and Environmental Considerations:</strong>
	            •	Personal Protection: Always wear protective gear—gloves, goggles, and a mask—especially if you’re handling chemicals manually.
	            •	Environmental Awareness: Be mindful of weather conditions; avoid application before heavy rain to prevent runoff into waterways.
            </p>
          </li>
        </ul>
        <h3>Herbicide steps:</h3>
        <p>Here is a step-by-step guide to applying herbicides:</p>
        <ul className="crop-care-steps-list">
          <li>
            <img />
            <p>
              <strong>Step 1. Pre-Application Planning:</strong>
	            •	Identify the Weed Problem: Determine which weed species are present and select an herbicide that targets them.
	            •	Read the Label: Carefully review the herbicide’s instructions, including the recommended dosage, timing (pre-emergent vs. post-emergent), and any specific restrictions.
            </p>
          </li>
          <li>
            <img />
            <p>
              <strong>Step 2.	Equipment Preparation:</strong>
	            •	Select the Right Machinery: Ensure your sprayer or application equipment is suitable for the herbicide type and field size.
	            •	Calibration: Calibrate your machinery to deliver the correct amount of herbicide per acre or hectare. This involves testing the flow rate, checking nozzle performance, and confirming uniform coverage.
            </p>
          </li>
          <li>
            <img />
            <p>
              <strong>Step 3.	Mixing the Herbicide:</strong>
	            •	Follow Safety Protocols: Wear appropriate personal protective equipment (PPE) like gloves, goggles, and coveralls.
	            •	Mix Accurately: Use clean water in the correct ratio as directed on the herbicide label. Add the herbicide to the water—never the reverse—to ensure even distribution.
            </p>
          </li>
          <li>
            <img />
            <p>
              <strong>Step 4.	Weather Check:</strong>
	            •	Optimal Conditions: Verify that weather conditions are suitable—avoid application during high winds, heavy rain, or extreme temperatures to minimize drift and ensure proper absorption.
            </p>
          </li>
          <li>
            <img />
            <p>
              <strong>Step 5.	Application Process:</strong>
	            •	Uniform Application: Begin spraying with consistent speed and overlap, ensuring even distribution across the field.
	            •	Monitor Equipment: Regularly check that the machinery is maintaining the correct pressure and that no clogs or malfunctions occur during application.
            </p>
          </li>
          <li>
            <img />
            <p>
              <strong>Step 6.	Post-Application Procedures:</strong>
	            •	Equipment Cleaning: Thoroughly clean all machinery and nozzles to avoid residue build-up, which can lead to corrosion or affect future applications.
	            •	Record Keeping: Document the herbicide application details—date, field location, dosage, weather conditions, and any observations—to help inform future management decisions.
            </p>
          </li>
          <li>
            <img />
            <p>
              <strong>Step  7.	Follow-Up:</strong>
	            •	Evaluate Effectiveness: After the recommended period, inspect the field to assess the herbicide’s performance.
	            •	Plan for Reapplication: If weeds persist, consult the label and consider whether a follow-up application or alternative strategy is needed.
            </p>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default FarmInfo;