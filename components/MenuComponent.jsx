import React from 'react'
import './MenuComponent.css'
import { Link } from 'react-router-dom';
const MenuComponent = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div id="branch" class="menu">
        <div class="head" id="meghana">
          <div class="heading our menu-heading">Our Menu</div>
          <div id="sub" class="sub-menu">
          We believe in the age-old tradition where immense care was taken to collect the freshest ingredients to create dishes that reflected the labour of love invested in the food.</div>
        </div>
        <div id="blocks-container" class="menu-block-container">
          
          <div class="block menu-block">
            <div class="image-container">
              <img  class="pic" src="rest_pics/blore.jpg"/>
            </div>
            <div class="name-container">Food Menu</div>
            <div class="button sub-b green-b"><Link to="/food" className="page button" onClick={scrollToTop}><button>Explore</button></Link></div>
          </div>

          <div class="block menu-block">
            <div class="image-container">
              <img class="pic"  src="rest_pics/imag4.jpg"/>
            </div>
            <div class="name-container">Beverage Menu</div>
            <div class="button sub-b green-b"><Link to="/about" className="page button"><button>Explore</button></Link></div>
          </div>

          <div class="block menu-block">
            <div class="image-container">
              <img  class="pic" src="rest_pics/image5.png"/>
            </div>
            <div class="name-container">Wine Menu</div>
            <div class="button sub-b green-b"><Link to="/about" className="page button"><button>Explore</button></Link></div>
          </div>
          

        </div>
      </div>
  )
}

export default MenuComponent