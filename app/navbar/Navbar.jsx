import "./css/Navbar.css";

import Image from "next/image";

export default function Navbar() {
  return (
    <div className="navbar  top-0 left-0 w-full flex flex-wrap items-center h-fit">
      <div className="logo-container">
        <a
          href="https://www.linkedin.com/company/data-culture-technolgies/"
          className="mt-3"
        >
          <Image
            src="/images/dct_logo.svg" // Use the static path directly
            alt="DCT Logo" // Provide a meaningful alt text
            width={85}
            height={45}
            className="ml-8 pt-2 mt-2 "
          />
        </a>
      </div>
    </div>
  );
}
