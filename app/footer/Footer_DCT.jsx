"use client";
import React from "react";
import ShootingStars from "@/components/ui/ShootingStars";
import StarsBackground from "@/components/ui/StarsBg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="min-h-[300px] text-white flex flex-col justify-between p-6 relative w-full ">
      <div className="flex justify-between items-start pt-0 mq750:flex mq750:flex-col">
        <div className="flex flex-col">
          <div className="flex items-center gap-4 mb-8">
            <a href="https://www.linkedin.com/company/data-culture-technolgies/">
              <Image
                src="/images/dct_logo.svg"
                alt="DCT Logo"
                width={100}
                height={100}
              />
            </a>
            <p className="text-3xl font-bold mb-2 mq750:text-[20px]">
              Pioneering Innovation <br /> with Smart Technology Solutions
            </p>{" "}
          </div>
          <div className="address">
            <p>
              <b> ADDRESS:</b> Sector 1 , Greater Noida West<br />
              Gautam Buddha Nagar, </br> Uttar Pradesh, India </br>  Pin : 201306
            </p>
          </div>
          <div className="flex items-center gap-2 mt-[4px]">
            <p className="text-md">
              FIND US ON
              <br />
            </p>
            <a href="https://www.linkedin.com/company/data-culture-technolgies/">
              <Image src="/linked.svg" alt="LinkedIn" width={20} height={20} />
            </a>
          </div>
        </div>
        <div className="text-left mq750:mt-[3vh]">
          <h3 className="text-3xl font-semibold mb-2">Our Services</h3>
          <ul className="text-xl flex flex-col gap-[4px]">
            <li>AI In Health</li>
            <li>Fintech</li>
            <li>Digital Marketing</li>
            <li>AI & ML Ops</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between text-xs mt-4 border-t-2 border-white ">
        <p className="mt-3">© 2024 DCT All rights reserved.</p>
        <p className="mt-3">Made with ❤️ In India</p>
      </div>
      {/* <ShootingStars />
      <StarsBackground /> */}
    </div>
  );
};

export default Footer;
