import React from "react";
import { BiInfoCircle } from "react-icons/bi";

export const InfoButton = () => {
  return (
    <button className="h-12 w-40 rounded-md bg-neutral-600  flex justify-center items-center">
      <BiInfoCircle className="text-2xl mr-2" /> <span>More Info</span>
    </button>
  );
};
