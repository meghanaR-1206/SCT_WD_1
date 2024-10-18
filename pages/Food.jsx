import React from 'react'
import Header from "../components/Header";
import Options from "../components/Options";
import MenuComponent  from "../components/MenuComponent"
import Restaurants from "../components/Restaurants";
import Details from "../components/Details";
const Food = () => {
  return (
    <div>
      <Header />

      <div id="heading-image-text">
        <img src="rest_pics/food.jpg"/>

        <div id="text">
          <div id="menu-heading"> FOOD MENU</div>
          <div id="menu-sub-heading"> Experience the finest beverages at Toscano, whether it be bespoke cocktails or finest wine</div>
        </div>
      </div>

      <div id="ourStory" class="parts">
      <div class="right">
        <div className="heading">OUR FOOD</div>
        <div className="info"> Our mission is to deliver exquisite and artistically crafted drinks that meet the highest standards of quality, freshness, and seasonality, combining both modern-creative and traditional styles. We are committed to sourcing the finest ingredients, ensuring every beverage is a perfect balance of flavor and presentation. Through constant innovation and a deep respect for timeless techniques, we aim to provide an exceptional experience that delights the senses and elevates the art of drinking. At the heart of our mission is a passion for sustainability and a dedication to creating memorable moments for our guests with every sip.
</div>
        
      </div>
      <div class="left">
          <img src="rest_pics/imag4.jpg"/>
          
      </div>
    </div>

    <div class="menu-pics">
      <img src="rest_pics/men1.jpg" />
      <img src="rest_pics/men2.jpg" />
      <img src="rest_pics/men3.jpg" />
      <img src="rest_pics/men4.jpg" />
       </div>
      <Options></Options>
      <Restaurants/>
      <MenuComponent/>
      <Details/>
    </div>
  )
}

export default Food