import React from 'react';
import banner1 from "../assets/banner1.jpeg";
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import "../styles/Home.css";

const Home = () => {
  return (
    <div className='home' style={{backgroundImage: `url(${banner1})`}}>
        <div className="headerContainer">
            <h1>Food Corner</h1>
            <p>INDIAN FOOD AT A CLICK</p>
            <Link to="/menu">
            <Button>Order Now</Button>
            </Link>
        </div>
    </div>
  )
}

export default Home;
