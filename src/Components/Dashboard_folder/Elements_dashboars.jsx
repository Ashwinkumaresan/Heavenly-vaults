import React from 'react'
import { VscWorkspaceTrusted } from "react-icons/vsc";


export const Elements_dashboars = () => {
  return (

<div className=" elements_dashboard">
  <div className="row  con">
    <div className="col-xxl-3 col-xl-3 col-md-3 left">
      <div className="element_image text-center mt-5">   
        <img src="logo.jpg" alt="" />
      </div>
      <h3 className='mt-5 mb-1 fs-1'>Kitchen name</h3>
      <p className='fs-4'>owner name</p>
      <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum est officiis pariatur ex officia ipsum recusandae inventore perspiciatis aut unde.</p>
      <p>Opened date: DD/MM/YYYY</p>
      <p>FSSAI No: 0000000000000</p>
      <p className='text-success bg-white d-inline px-3 py-2 rounded mt-2'><VscWorkspaceTrusted/> Trusted</p>
    </div>
    <div className="col-xxl-5 col-xl-5 col-md-5 left">
      
    </div>
    <div className="col-xxl-3 col-xl-3 col-md-3 left">
      
    </div>
  </div>
</div>
  )
}
