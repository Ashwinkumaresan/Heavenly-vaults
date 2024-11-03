import React from 'react'

export const Sidebar = () => {
  return (
    <div className='sidenav active'>
      <center>

      <img src="logo.jpg" alt="Logo" className='logo' />
      </center>
        <ul>
            <li>
                <a href="#">Profile</a>
            </li>
            <li>
                <a href="#">Dashboard</a>
            </li>
            <li>
                <a href="#">Messages</a>
            </li>
            <li>
                <a href="#">Setting</a>
            </li>
            <li>
                <a href="#">Help</a>
            </li>
        </ul>
    </div>
  )
}
