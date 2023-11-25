import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
export const Footer = () => {
  return (
    <div className="p-12">
      <div className="flex text-2xl gap-6">
        <FaFacebookF />
        <FaInstagram />
        <FaTwitter />
        <FaYoutube />
      </div>
      <div className="flex"></div>
    </div>
  );
};
