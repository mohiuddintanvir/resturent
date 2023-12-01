import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const menulist=[
        <li> <Link to="/">Home</Link></li>,
        <li> <Link to="/about">About</Link></li>,
        <li> <Link to="/menu">Menu</Link></li>,
        <li> <Link to="/shop">Shop</Link></li>,
        <li> <Link to="/blog">Blog</Link></li>,
        <li> <Link to="/contact">Contact</Link></li>,
        <li> <Link to="/signin">Signin</Link></li>,
        <li> <Link to="/signup">Signup</Link></li>
    ]
    return (
        <div>
      <ul className='flex'>
        {
            menulist
        }
      </ul>
        </div>
    );
};

export default Header;