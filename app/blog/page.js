"use client";

import React from "react";
import Navbar2 from "../navbar/Page";
import Footer2 from "../footer/Page";
import Cards from "./Cards";

export default function Blog() {
  return (
    <div className="bg-black">
      <Navbar2 />
      <div className="my-20  text-white">
        <Cards />
      </div>
      <Footer2 />
    </div>
  );
}
