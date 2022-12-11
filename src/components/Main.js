import React from "react";
import prettylady from "../assets/prettylady.jpg";
import egyptianking from "../assets/egyptianking.jpg";
import egyptians from "../assets/egyptians.jpg";

function Main() {
  return (
    <div className=" grid max-w-[70%] m-auto py-1">
      <h2 className="text-4xl font-base my-4 ">Featured Products</h2>
      <div className="flex justify-between items-center border-t border-gray-500">
        <img className="w-[450px] h-[300px] p-8" src={prettylady} alt="babe" />
        <div className="p-5">
          <h2 className="font-bold text-3xl py-5">The Boolean Egyptian</h2>
          <p className="break-words max-w-[70%] py-5">
            Lorep Ipsum dolor sit amet, consectetur anticipating the bala blu of
            whatever frog was born in port harcourt but Peter Obi is the right
            one.
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center border-t border-gray-500">
        <div className="p-5 justify-start">
          <h2 className="font-bold text-3xl py-5">The Boolean Egyptian</h2>
          <p className="break-words max-w-[70%] py-5">
            Lorep Ipsum dolor sit amet, consectetur anticipating the bala blu of
            whatever frog was born in port harcourt but Peter Obi is the right
            one.
          </p>
        </div>
        <img className="w-[450px] h-[300px] p-8" src={egyptians} alt="babe" />
      </div>

      <div className="flex justify-between items-center border-t border-gray-500">
        <img
          className="w-[450px] h-[300px] p-8"
          src={egyptianking}
          alt="babe"
        />
        <div className="">
          <h2 className="font-bold text-3xl py-5">The Boolean Egyptian</h2>
          <p className="break-words max-w-[70%] py-5">
            Lorep Ipsum dolor sit amet, consectetur anticipating the bala blu of
            whatever frog was born in port harcourt but Peter Obi is the right
            one.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
