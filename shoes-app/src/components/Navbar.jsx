import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className='container'>
        <div className="logo"> 
          <img src='/images/brand_logo.png' alt="brand logo" />
        </div>
        <ul className='menu'>
          <li><a href="#">MENU</a></li>
          <li><a href="#">LOCATION</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
        <button className="login-btn">Login</button>
      </nav>
    </div>
  );
}

export default Navbar;
