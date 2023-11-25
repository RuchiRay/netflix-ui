import React from "react";
import { FiPlus } from "react-icons/fi";

export const Add = () => {
  return (
    <div className="w-10 flex cursor-pointer h-10 items-center border border-neutral-500 justify-center rounded-full">
      <FiPlus className="text-2xl" />
    </div>
  );
};
