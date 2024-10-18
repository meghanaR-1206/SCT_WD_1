import React from 'react'
import Header from "../components/Header";
import MenuComponent  from "../components/MenuComponent"
import Restaurants from "../components/Restaurants";
import Details from "../components/Details";
import './About.css'
const About = () => {
  return (
    <div>
    <Header />
    <div id="about-container">
      <div id="heading-about"> LEGACY OF TASTE</div>
      <div class="about-img"><img src="rest_pics/image11.jpg" /></div>
      <div class="about-img"><img src="rest_pics/image22.jpg" /></div>
      <div class="about-img"><img src="rest_pics/image33.jpg" /></div>
      <div id="heading-about"> OUR FOUNDERS 
      <p id="second">THEIR DRIVE & VERVE ARE THE ETHE BEHIND EVERYTHING WE DO</p>
      <p id="third">True Chefs Toughened Through their Fair Struggles and Experiences</p>
      </div>
      <div class="person">
        <div class="textual">
             
            <div class="name">CHEF JEAN MICHEL JASSERAND
            </div> 
            <div class="info person-info">
            Having spent over 20 years in Bengaluru, imbibing its culture and being an integral part of it, Chef Jean Michel Jasserand started an Italian revolution in the city.  Armed with what he does best, he began his culinary coup to reach the hearts of Bengalureans.

For over 30 years now, jean has served as Executive French Chef in prestigious hotels (the Leela Palace Pan India) and has been part of many successful restaurants and hotel ventures across the world (Australia, Japan, Korea, Hawai, UK & Egypt)- Fabulous food meets a fine dining experience – this is his gift, and he continues to give it away every night!
            </div> 
          </div>
        <div class="image-person"><img src="rest_pics/person1.jpg" /></div>
      </div>

      <div class="person">
      <div class="image-person"><img src="rest_pics/person2.jpg" /></div>
        <div class="textual">
             
            <div class="name">CHEF GOUTHAM BALASUBRAMANIAN
            </div> 
            
            <div class="info person-info">
            Chef Goutham is young & raring to go, someone who loves pushing his own limits. Challenging the odds is what he does best. A self-made- entrepreneur with very strong basics who has climbed up the ladders of success slowly & steadily, knowing well what goes into every rung. Goutham believes in giving his team the freedom to innovate and create, delivering memorable experiences for all customers.

He began his career with a reputed 5-star hotel in his hometown -Chennai. Working his way up the ranks, Goutham won not just accolades & awards but also the hearts of his colleagues & guests throughout. He was associated with other reputed hospitality brands before turning into an entrepreneur and launching Toscano in Bangalore
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

export default About