import React from "react";
import barley from "../Utils/barley.jpg";
import corn from "../Utils/corn.jpg";
import cotton from "../Utils/cotton.jpg";
import canola from "../Utils/canola.jpg";
import oats from "../Utils/oats.jpg";
import wheat from "../Utils/wheat.jpg";

const CropInfo = () => {
    return (
        <section className="cropProperties" id="crop-info">
            <h3>Additional Crop information:</h3>
            <p className="intro">Here is an overview of each crop type, highlighting key factual properties and points that you might consider:</p>
            <ul className="info-list">
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
    )
}

export default CropInfo;