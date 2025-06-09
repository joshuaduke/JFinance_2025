import React from 'react'
import { NavLink } from 'react-router'

const FooterNavMenu = () => {
  return (
    <nav className='bg-white w-full fixed bottom-0 left-0 p-4 shadow-lh sm:hidden'>
        <ul className='flex justify-between'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/expenses" >Expenses</NavLink>
          <NavLink to="wallets" >Wallets</NavLink>
          <NavLink to="goals" >Goals</NavLink>
          <NavLink to="settings" >Settings</NavLink>
        </ul>
    </nav>
  )
}

export default FooterNavMenu