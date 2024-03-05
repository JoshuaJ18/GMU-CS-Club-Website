import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu
} from "./navbarElements";
 
function Navbar() {
    return (
        <Nav>
          <Bars />

          <NavMenu>
            <NavLink to="/" >
              Home
            </NavLink>
            <NavLink to="/events" activeStyle>
              Events
            </NavLink>
            <NavLink to="/join" activeStyle>
              Join the Club
            </NavLink>
            <NavLink to="/about" activeStyle>
              About
            </NavLink>
            <NavLink to="/photos" activeStyle>
              Photos
            </NavLink>
          </NavMenu>
        </Nav>
    );
};
 
export default Navbar;