import React from "react";
import Image from "next/image";
import Logo from "../Images/logo.png";

const Header = () => {
  return (
    <div className="flex justify-center items-start py-6">
      <Image src={Logo} width={130} height={60} alt="Company Logo" />
    </div>
  );
};

export default Header;
