import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

// The overall navbar object
export const Nav = styled.nav`
    background: rgb(1, 61, 0);
    height: 12vh;
    display: flex;
    color: white;
    justify-content: space-between;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
`;

// The actual text in the navbar
export const NavLink = styled(Link)`
    color: white;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    text-decoration: none;
    padding: 0 1.5vw;
    height: 100%;
    cursor: pointer;
    &.active {
        color: green;
    }
`;
// These are the hamburger bars for mobile
export const Bars = styled(FaBars)`
    display: none;
    color: white;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 70%;
        transform: translate(-100%, 75%);
        font-size: 3rem;
        cursor: pointer;
    }
`;
// The components in the navbar
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: 2vw;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;
