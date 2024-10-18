import Header from "../components/Header";
import Details from "../components/Details";
import React from 'react'
import './Home.css'
import Restaurants from "../components/Restaurants";
import MenuComponent from "../components/MenuComponent";
import { Link } from 'react-router-dom';
const Home = () => {

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (

    
    <div>
    <Header />
    
    <div class="slideshow">
            <img src="rest_pics/image1.jpg" alt="Image 1" class="slide" />
            <img src="rest_pics/image2.jpg" alt="Image 2" class="slide" />
            <img src="rest_pics/image3.jpg" alt="Image 3" class="slide" />
            
    </div> 
    <div id="ourStory" class="parts" onClick={scrollToTop}>
      <div class="right">
        <div className="heading">Our Story</div>
        <div className="info">Toscano Restaurant & Wine Bar is a casual-dining Italian restaurant chain across Bangalore, Chennai, and Pune.
The Brand Objective is to offer a world-class dining experience, superior customer service & high-quality, innovative menu & authentic Italian flavours. Toscano takes inspiration from the Tuscany region of Italy, where vineyards and olive groves flourish. It offers a delectable fare blending the delicate flavours from ingredients procured locally and imported from Italy to present traditional and authentic Italian Taste.The restaurant boasts a premium selection of Italian wines and grappa-120 labels- Sparkling, rose, white and red wine are imported from Chile, South Africa, New Zealand, Italy, France, Argentina, Spain, USA and India are a perfect match to the hand-crafted menu. 

</div>
        
        <div class="button"><Link to="/about" className="page button"><button>Explore More</button></Link></div>
      </div>
      <div class="left">
          <img src="rest_pics/ourstory.jpg"/>
      </div>
    </div>

      <Restaurants />
      <MenuComponent />
      <Details />
      
    </div>
  )
}

export default Home

