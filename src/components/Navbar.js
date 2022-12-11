import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiNotification2Line } from "react-icons/ri";

function Navbar() {
  return (
    <div className="flex items-center justify-between p-9 mx-auto m-2">
      <div className="font-bold text-3xl">ARTSY.</div>
      <div className="justify-between">
        <ul className="flex items-center justify-between font-base text-xl space-x-12 mr-10">
          <li className="cursor-pointer hover:underline p-1">Home</li>
          <li className="cursor-pointer hover:underline p-1">Marketplace</li>
          <li className="cursor-pointer hover:underline p-1">Auctions</li>
          <li className="cursor-pointer hover:underline p-1">Drop</li>
        </ul>
      </div>
      <div className="flex justify-between items-center space-x-5">
        <AiOutlineSearch className="w-10 h-8 cursor-pointer" />
        <MdOutlineShoppingCart className="w-10 h-8 cursor-pointer" />
        <RiNotification2Line className="w-10 h-8 cursor-pointer" />
      </div>
    </div>
  );
}

export default Navbar;
