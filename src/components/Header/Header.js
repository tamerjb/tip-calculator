import React from 'react'
import logo from '../../images/logo.svg'
import './Header.css'

export const Header = () => {
  return (
     <>
    <header className="header">
      <img src={logo} className='header__logo' />
    </header>  
    </>)
}
