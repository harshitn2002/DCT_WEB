"use client"
import React from 'react';
import Navbar2 from './navbar/Page';
import HomePage from './home/Page';
import Footer2 from './footer/Page';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar2 />
      <HomePage />
      <Footer2 />
    </div>
  );
}
