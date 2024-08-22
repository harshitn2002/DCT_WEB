"use client";

import React from "react";
import Navbar2 from "../navbar/Page";
import Footer2 from "../footer/Page";
import BackgroundBoxesDemo from "../home/About_DCT";

export default function About() {
  return (
    <div className="bg-black">
      <Navbar2 />
      <div className="my-48 text-white">
        <BackgroundBoxesDemo />
      </div>
      <Footer2 />
    </div>
  );
}
