import React, { useState, useRef } from 'react';
import './navbar.css';

import logo_dark from '../../rsrcs/Logo.png';
import { RiHome6Line, RiStoreLine } from 'react-icons/ri';
import { HiOutlineCubeTransparent, HiOutlinePaperAirplane } from 'react-icons/hi';
import { HashLink as Link } from 'react-router-hash-link';

const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
};  

const Menu = () => (
  <>
    <Link to = '/' onClick = {scrollToTop} >
      <RiHome6Line />
    </Link>
    <p>
      <Link to = '/' onClick = {scrollToTop} >
        Inicio
      </Link>
    </p>
    <Link to = '/muebles'>
      <RiStoreLine />
    </Link>
    <p>
      <Link to = '/muebles' onClick = {scrollToTop}>
        Muebles
      </Link>
    </p>
    <Link to = '/nosotros'>
      < HiOutlineCubeTransparent />
    </Link>
    <p>
      <Link to = '/nosotros' onClick = {scrollToTop}>
        Nosotros
      </Link>
    </p>
    <Link to = '/contacto'>
      < HiOutlinePaperAirplane />
    </Link>
    <p>
      <Link to = '/contacto' onClick = {scrollToTop}>
        Contacto
      </Link>
    </p>
  </>
);

const Navbar = () => {

  const [ open, setOpen ] = useState(false);
  let menuRef = useRef();

  return (
    <div className = 'dedalo__navbar'>
      <div className = 'dedalo__navbar-logo'>
        <Link to = '/' onClick = {scrollToTop} >
          <img 
            src = {logo_dark} 
            alt = 'logo img for dedalo web' 
            id = 'logo_dark' 
          />
        </Link>
      </div>
      <div className = 'dedalo__navbar-links'>
        <Menu />
      </div>
      <div className = 'dedalo__navbar-links2' ref = {menuRef}>
        <button className = ''>

        </button>
      </div>
    </div>
  )
}

export default Navbar