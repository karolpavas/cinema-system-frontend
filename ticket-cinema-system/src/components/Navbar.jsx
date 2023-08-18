import React from 'react';

const Navbar = () => {
  return (
      <nav className='nav'>
          <a href='#' className='nav__brand'>Cinema System</a>
          <ul className='nav__menu'>
            <li className='nav__item'><a href='#' className='nav__link'>Inicio</a></li>
            <li className='nav__item'><a href='#' className='nav__link'>Usuarios</a></li>
          </ul>
          <div className='nav__toggler'>
            <div className='line1'></div>            
            <div className='line2'></div>
            <div className='line3'></div>
          </div>
      </nav>
  );
};

export default Navbar;