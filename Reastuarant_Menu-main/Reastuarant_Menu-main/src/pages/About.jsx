import React from 'react';
import about from "../assets/about.jpeg";
import "../styles/About.css";

const About = () => {
  return (
      <div className="about">
        <div className="aboutTop" style={{backgroundImage : `url(${about})` }}>

        </div>
        <div className="aboutBottom">
          <h1>About us</h1>
          <p>Welcome to <strong>Food Corner</strong>, where culinary delight meets technological innovation. We are not just a food app; we are your gastronomic companion, dedicated to transforming your dining experience into a seamless and delightful journey.
      <br/>
At <strong>Food Corner</strong>, we believe that food is not just a necessity but a celebration of flavors, cultures, and memories. Our mission is to bring the world of delectable cuisines to your fingertips, making every meal an adventure.
     <br/>


Our Story:
Founded with a passion for good food and a vision for a more connected culinary world,<strong>Food Corner</strong>  emerged as a platform to bridge the gap between food enthusiasts and exceptional dining experiences. Whether you're a seasoned foodie or just exploring the vast world of flavors, we are here to simplify your culinary exploration.</p>
        </div>
      </div>
  )
}

export default About;