import {React , useState } from 'react';
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';
import { Button } from '@mui/material';


const Navbar = () => {
  const [showLinks , setShowLinks]= useState(false);
  function click (){
     setShowLinks(!showLinks);
  }
  return (
    <div className='navbar'> 
        <div className="leftSide" id={showLinks ? "open" : "close"}>
           <img src={logo} alt='Logo'/>
           <div className="hiddenLinks">
           <Link to="/">Home</Link>
           <Link to="/menu">Menu</Link>
           <Link to="/about">About</Link>
           <Link to="/contact">Contact</Link>
           </div>
        </div>
        <div className="rightSide">
           <Link to="/">Home</Link>
           <Link to="/menu">Menu</Link>
           <Link to="/about">About</Link>
           <Link to="/contact">Contact</Link>
           <Button onClick={click}>
           <ReorderIcon/>
           </Button>
        </div>
    </div>
  );
}

export default Navbar;