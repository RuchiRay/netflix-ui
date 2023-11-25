import React from "react";
import { FaChevronDown } from "react-icons/fa";

type DownArrow = {
  setOpen: (value: boolean) => void;
};

const DownArrow = ({ setOpen }: DownArrow) => {
  return (
    <div
      onClick={() => setOpen(true)}
      className="w-10 flex   h-10 items-center border border-neutral-500 justify-center rounded-full"
    >
      <FaChevronDown className="text-xl" />
    </div>
  );
};

export default DownArrow;
