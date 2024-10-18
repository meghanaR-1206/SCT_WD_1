import React from 'react'
import Header from "../components/Header";
import Restaurants from '../components/Restaurants';
import MenuComponent from '../components/MenuComponent';
import Details from '../components/Details';
import './Gift.css'
const Gift = () => {
  return (
    <div>
    <Header />
    <div id="entire-gift">
      <div id="heading-about">GIFT</div>
      <img src="rest_pics/gift.jpg"/>
      <div class="heading our discover"> Discover Our Restaurants</div>

      <div class="side-heading">DESCRIPTION :</div>
      <div class="info">Special moments deserve special gifts, and the finest gifts often come in the form of experiences. Give the gift of unforgettable dining experiences with the Toscano Gift Card. It’s the perfect way to share your good wishes and love. Our gift card can be redeemed at any of our outlets, whether for a gourmet meal, a cozy dining experience, or a culinary adventure. Discover a range of exquisite dishes and wine collection, immerse yourself in the authentic flavors of Italy. Whatever the occasion, we guarantee you memorable moments and a sensory feast. Elevate the joy of gifting with our gift card, your solution for all your special occasions. </div>

      <div class="side-heading">TERMS & CONDITIONS</div>

      <div class="info"> 
        <li>The Gift-Card is applicable for Dine-in only.</li>
        <li>Valid for 12 months from the date of purchase / activation</li>
        <li>Valid for one time redemption only</li>
        <li>No refunds allowed.</li>

        <li>Valid at all Toscano Restaurants.</li>
        <li>Government Taxes and Services Charge as applicable.</li>
        <li>All disputes are subject to Bangalore jurisdiction only.</li>
        <li>To check balance and expiration date of the card please visit: https://www.woohoo.in/balenq</li>
        <li>The guest should present the Gift-Card to the restaurant concierge, at the time of entry, for a seamless experience.</li>
        <li>This Gift-Card does not imply confirmation of booking. Prior booking over Toscano’s outlets contact numbers is recommended.</li>
        <li>The guest is advised to retain the Gift-Card details safely and share the redemption code responsibly.</li>

        <li>The bearer of the Gift-Card shall be considered as the owner of the voucher.</li>
        <li>It is not valid for payment of events, wine dinners, chef college or outdoor catering</li>
        <li>If the bill exceeds the Gift-Card value, an additional amount needs to be paid by the guest</li>

        <li>Toscano Management reserves the right to identify the authenticity of the Gift-Card. In case of any dispute, the restaurant reserves Right to Admission.</li>
        <li>In case a restaurant is non-operational due to government restrictions, political unrest, structural safety precautions etc. the guest is requested to make alternate bookings.</li>
        <li>For any issues please contact us at contact@toscano.co.in – Mob: +91-7619407979</li>
        <li>E-Gift cards are normally delivered instantly. But sometimes due to system issues, the delivery can be delayed up-to 24 hours..</li>
        <li>No returns and no refunds on gift cards, e-gift cards and gift vouchers shipped by woohoo.in. Please check the refund policy at http://www.woohoo.in/faq for further details.</li>
      </div>
      <div class="side-heading">HOW TO REDEEM</div>
      <div class="info">
      <li>Visit the nearest Toscano outlet.</li>
      <li>Inform the cashier about the Gift Card before ordering food.</li>
      <li>Show the Gift Card details to the cashier at the time of billing & pay any balance amount by card or cash.</li>
      <li>No returns and no refunds on gift cards, e-gift cards and gift vouchers shipped by woohoo.in. Please check the refund policy at http://www.woohoo.in/faq for further details.</li>
      </div>
    </div>
    <Restaurants />
    <MenuComponent />
    <Details />
    </div>
  )
}

export default Gift