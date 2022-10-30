import "./navbar.css"
import SearchBar from "../SearchBar";
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import { Link } from 'react-router-dom'
import { useState } from "react";


export const Navbar = () => {


    // const [Mobile, setMobile] = useState(false);

  return (
    <div className="navbar">
        <div className="container">
            <div className="left">
                <a href="/">
                     <img src="./images/logo.png" alt=""/>
                </a>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/movieStars'>Movie Stars</Link>
                </nav>
                {/* <button className="ToggleBtn">
                    <ClearIcon />
                    <MenuIcon />
                </button> */}
            </div>
            <div className="right">
                <SearchBar placeholder='Search a movie series...'/>
                <div className='socialMedia'>
                    <a href="#"><InstagramIcon /></a>
                    <a href="#"><GitHubIcon /></a>
                    <a href="#"><TwitterIcon /></a>
                </div>
            </div>
        </div>
    </div>
  )
}





// import React, { Component } from 'react';
// import "./navbar.css"
// import SearchBar from "../SearchBar";
// import InstagramIcon from '@material-ui/icons/Instagram';
// import GitHubIcon from '@material-ui/icons/GitHub';
// import TwitterIcon from '@material-ui/icons/Twitter';
// import MenuIcon from '@material-ui/icons/Menu';
// import ClearIcon from '@material-ui/icons/Clear';
// import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
// import { useState } from "react";
// import { Button } from '@material-ui/core';


// class Navbar extends Component {
    
// state = { clicked:false };
// handleClick = () => {
//     this.setState({clicked: 
//     !this.state.clicked})
// }


//     render() {
//         return (
//             <div className="navbar">
//         <div className="container">
//             <div className="left">
//                 <a href="/">
//                      <img src="./images/logo.png" alt=""/>
//                 </a>
//                 <nav>
//                     <Link to='/'>Home</Link>
//                     <Link to='/about'>About</Link>
//                     <Link to='/movieStars'>Movie Stars</Link>
//                 </nav>
//                 <button className="ToggleBtn" onClick={this.handleClick}>
//                     <div className={this.state.clicked ? <ClearIcon /> : <MenuIcon />}></div>
                    
//                 </button>
//             </div>
//             <div className="right">
//                 <SearchBar placeholder='Search a movie series...'/>
//                 <div className='socialMedia'>
//                     <a href="#"><InstagramIcon /></a>
//                     <a href="#"><GitHubIcon /></a>
//                     <a href="#"><TwitterIcon /></a>
//                 </div>
//             </div>
//         </div>
//     </div>
//         );
//     }
// }


// export default Navbar;