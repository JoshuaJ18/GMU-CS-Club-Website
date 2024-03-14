
import { useState } from "react";
import Hamburger from "./hamburger.js";

function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleNavBar = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <>
      <div classname="navbar-container">
        <div className="navbar">
          <div className="hamburger" onClick={toggleNavBar}>
            <Hamburger />
          </div>
          <ul id="links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/join">Join the Club</a></li>
            <li><a href="/photos">Photos</a></li>
          </ul>
        </div>
      </div>
      <style jsx>{`
        .navbar {
          display: inline-block;
          position: fixed;
          text-align: right;
          top: 0;
          height: 6vw;
          width: 100%;
          z-index: 10;
          background-color: rgb(7, 101, 0);
        }
        
        .navbar li {
          display: inline-block;
          margin-right: 10vw;
          padding-top: 1vw;
        }
        
        .navbar a {
          text-decoration: none;
          font-size: 1.25rem;
          font-weight: bold;
          color: white;
        }
        
        .navbar a:hover {
          color: gray;
        }
        
        .navbar a:after {
          text-decoration: none;
        }
        
        .hamburger {
          display: none;
        }
        
        @Media screen and (max-width: 768px) {
          .hamburger {
            display: block;
            position: fixed;
            left: 0;
            margin-left: 20px;
            padding-top: 10px;
            z-index: 10;
          }
          .navbar {
            display: flex;
            align-text: center;
            justify-content: center;
            height: ${hamburgerOpen ? '180vw' : '20vw'};
            transition-duration: 1s;
          }

          .navbar li {
            display: ${hamburgerOpen ? 'flex' : 'none'};
            align-items: center;
            text-align: center;
            padding-top: 60px;
            animation: fadeInOut 1s ease-in-out; 
          }

          .navbar ul {
            display: inline-block;
            padding-top: 40px;
          }

          .navbar a {
            font-size: 2.2rem;
          }

          @keyframes fadeInOut { 
            0% { 
              opacity: 0; 
              display: none; 
            } 
          
            40% { 
              opacity: 0; 
              display: flex; 
            } 
          
            100% { 
              opacity: 1; 
              display: flex; 
            }
        }
      `}</style>
    </>
  );
}

export default Navbar;