import React from 'react'

const FooterNavMenu = () => {
  return (
    <div className='bg-white w-full fixed bottom-0 left-0 p-4 shadow-lh sm:hidden'>
        <ul className='flex justify-between'>
          <li>Home</li>
          <li>Expenses</li>
          <li>Wallets</li>
          <li>Goals</li>
          <li>Settings</li>
        </ul>
    </div>
  )
}

export default FooterNavMenu