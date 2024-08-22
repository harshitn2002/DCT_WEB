"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/Navbarmenu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function NavbarDemo() {
  return (
    <div className="relative w-4/5 flex items-center justify-center">
      <div className="w-full inset-x-0 max-w-2xl mx-auto z-50 mq750:[display:none] relative w-4/5 flex items-center justify-center op-2 pt-4">
        <Menu>
          <Link href="/about" className="text-sm hover:text-gray-400">
            About Us
          </Link>
          <Link href="/services" className="text-sm hover:text-gray-400">
            Services
          </Link>
          <Link href="/whoWeAre" className="text-sm hover:text-gray-400">
            Who We Are
          </Link>
          <Link href="/contact" className="text-sm hover:text-gray-400">
            Contact Us
          </Link>
        </Menu>
      </div>
    </div>
  );
}

// function NavbarContent({ className }) {
//   // const [active, setActive] = useState(null);

//   return (
//     <div className={cn("w-full inset-x-0 max-w-2xl mx-auto z-50 mq750:[display:none] relative w-4/5 flex items-center justify-center", className)}>
//       <Menu>
//         <Link href="/about" className="text-sm hover:text-gray-400">About Us</Link>
//         <Link href="/services" className="text-sm hover:text-gray-400">Services</Link>
//         <Link href="/whoWeAre" className="text-sm hover:text-gray-400">Who We Are</Link>
//         <Link href="/contact" className="text-sm hover:text-gray-400">Contact Us</Link>
//      </Menu>
//     </div>
//   );
// }
