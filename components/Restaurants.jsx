import React from 'react';
import { Link } from 'react-router-dom';
import './Restaurants.css';

const Restaurants = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div id="branch">
      <div className="head">
        <div className="heading our">Our Restaurants</div>
        <div id="sub">Authentic Italian Food in its True Sense</div>
      </div>
      <div id="blocks-container">
        <div id="open"> 
          <img src="rest_pics/open.png" alt="Open" />
        </div>
        <div className="block">
          <div className="image-container">
            <img className="pic" src="rest_pics/blore.jpg" alt="Toscano Bangalore" />
          </div>
          <div className="name-container">Toscano Bangalore</div>
          <Link to="/bangalore" onClick={scrollToTop} className="button sub-b" >
            <button>Explore</button>
          </Link>
        </div>

        <div className="block">
          <div className="image-container">
            <img className="pic" src="rest_pics/chennai.jpg" alt="Toscano Chennai" />
          </div>
          <div className="name-container">Toscano Chennai</div>
          <Link to="/chennai" className="button sub-b" onClick={scrollToTop}>
            <button>Explore</button>
          </Link>
        </div>

        <div className="block">
          <div className="image-container">
            <img className="pic" src="rest_pics/pune.jpg" alt="Toscano Pune" />
          </div>
          <div className="name-container">Toscano Pune</div>
          <Link to="/pune" className="button sub-b">
            <button>Explore</button>
          </Link>
        </div>
        <div id="close"> 
          <img src="rest_pics/close.png" alt="Close" />
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
