import React, { useState } from 'react'
import "./Dashboard.css"
import {BiMenu} from "react-icons/bi"
import { FaHamburger  } from "react-icons/fa";
import { Sidebar } from './Sidebar'
import { Elements_dashboars } from './Elements_dashboars';

export const Dashboard = () => {

  const [showsidebar, setShowSideBar] = useState(false);

  function Scroll() {
    window.scrollTo(0, 0);
  }


  if(showsidebar)
    {
      document.body.classList.add('active_modal');
    }
    else
    {
      document.body.classList.remove('active_modal');
    }


  return (
    <div className='dashboard'>
        <header> <FaHamburger  className='sidemenu'onClick={() => [setShowSideBar(!showsidebar), Scroll()]} /> </header>
        { showsidebar && <Sidebar/>}

        <Elements_dashboars />
    </div>
  )
}
