import React from 'react'
import Header from "../components/Header";
import Restaurants from '../components/Restaurants';
import MenuComponent from '../components/MenuComponent';
import Details from '../components/Details';
import './Chennai.css'
const Chennai = () => {
  return (
    <div>
    <Header />
    <div id="entire-chennai">
      <div id="heading-about">Toscano Chennai</div>
      
      <div class="flex-container">
        <div class="flex-box">
             <img src="rest_pics/h1.jpg" /> 
             <div className="city-details">
                <div className="city">
                        NUNGAMBAKKAM
                </div>
                <div className="details">
                No. 11, Khader Nawaz Khan Road Nungambakkam <br/>
                : +91 – 7619320570<br/>
                email:rmknk@toscano.co.in<br/>
                opening :11am<br/>
                closing :11pm<br/>
                </div>
                <div class="button sub-b loc"><a href="https://www.google.com/maps/place/Toscano/@13.0606615,80.2483526,17z/data=!3m1!4b1!4m5!3m4!1s0x3a5267fbeced3093:0x1198a7c74ccc485d!8m2!3d13.0606563!4d80.2505413" target="_blank"> <button>Location</button></a></div>
             </div>
        </div>
        <div class="flex-box">
            <img src="rest_pics/h2.jpg" /> 
            <div className="city-details">
                <div className="city">
                        NUNGAMBAKKAM
                </div>
                <div className="details">
                No. 11, Khader Nawaz Khan Road Nungambakkam <br/>
                : +91 – 7619320570<br/>
                email:rmknk@toscano.co.in<br/>
                opening :11am<br/>
                closing :11pm<br/>
                </div>
                <div class="button sub-b loc"><a href="https://www.google.com/maps/place/Toscano/@13.0606615,80.2483526,17z/data=!3m1!4b1!4m5!3m4!1s0x3a5267fbeced3093:0x1198a7c74ccc485d!8m2!3d13.0606563!4d80.2505413" target="_blank"> <button>Location</button></a></div>
             </div>
        </div>
        <div class="flex-box">
        <img src="rest_pics/h3.jpg" /> 
        <div className="city-details">
                <div className="city">
                        NUNGAMBAKKAM
                </div>
                <div className="details">
                No. 11, Khader Nawaz Khan Road Nungambakkam <br/>
                : +91 – 7619320570<br/>
                email:rmknk@toscano.co.in<br/>
                opening :11am<br/>
                closing :11pm<br/>
                </div>
                <div class="button sub-b loc"><a href="https://www.google.com/maps/place/Toscano/@13.0606615,80.2483526,17z/data=!3m1!4b1!4m5!3m4!1s0x3a5267fbeced3093:0x1198a7c74ccc485d!8m2!3d13.0606563!4d80.2505413" target="_blank"> <button>Location</button></a></div>
             </div>
        </div>
      </div>
    </div>
    <Restaurants />
    <MenuComponent />
    <Details />
    </div>
  )
}

export default Chennai