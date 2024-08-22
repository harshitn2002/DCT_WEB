"use client"

import React from 'react'
import Navbar2 from '../navbar/Page';
import Footer2 from '../footer/Page';
import ServicesPage from '../home/Services';

export default function Services(){
  return (
    <div className='bg-black'>
      <Navbar2 />
      <div className='my-40 text-white'>
        <ServicesPage />
      </div>
      <Footer2 />
    </div>
    
  )
}
