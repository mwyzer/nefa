import React from 'react';
import logo from '../../images/logo.svg';

export const Navbar = () => {
  return (
    <div className='py-4 flex'>
      <div className='flex mr-6'>
        <img src={logo} alt='Neva' />
      </div>
      <div></div>
    </div>
  );
};
