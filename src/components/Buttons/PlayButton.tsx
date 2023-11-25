import React from "react";
import { BsFillPlayFill } from "react-icons/bs";

export const PlayButton = () => {
  return (
    <button className="h-12 w-32 focus:outline-none rounded-md  bg-white flex justify-center items-center">
      <BsFillPlayFill className="text-4xl text-black mr-2" />{" "}
      <span className="text-black font-semibold">Play</span>
    </button>
  );
};
