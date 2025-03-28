import React from "react";
import CropTable from "./Table.js"
import barley from "./barley.jpg";
import corn from "./corn.jpg";
import cotton from "./cotton.jpg";
import canola from "./canola.jpg";
import oats from "./oats.jpg";
import wheat from "./wheat.jpg";
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
      <section className="cropSeason">
        <h3>Crop Seasons:</h3>
        <p>Here is a table that outlines the planting and harvesting seasons for various crops:</p>
        <CropTable />
      </section>
      <section className="soilPrep">
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