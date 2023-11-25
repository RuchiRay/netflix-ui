"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Menu } from "@headlessui/react";
export const Navbar = () => {
  const [bgBlack, setBgBlack] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  const handleLogOut = () => {
    router.push("/login");
  };
  const pathname = usePathname();
  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 50) setBgBlack(true);
      else setBgBlack(false);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  if (pathname === "/") return;
  return (
    <div
      className={`${
        bgBlack && "bg-black"
      } fade-top transition-colors ease-linear items-center  flex fixed w-full justify-between py-3 px-6 md:px-12 left-0 top-0 z-[1]`}
    >
      <div className="flex items-center">
        <div className="w-28">
          <Image
            src="/logo.png"
            alt="red netflix logo text png"
            width={80}
            height={10}
          />
        </div>
        <div className="text-white hidden md:flex gap-8 text-sm ml-12">
          <Link
            href="/"
            // className={({ isActive }) => (isActive ? 'font-bold' : "")}
          >
            Home
          </Link>
          <Link href="/tv">Tv Series</Link>
          <Link href="/movies">Movies</Link>
          <Link href="/popular">New and popular</Link>
          <Link href="/mylist">My List</Link>
        </div>
        <div className="md:hidden pl-4">
          <NavMenu />
        </div>
      </div>
      <div className="cursor-pointer relative">
        <Image
          src="/Netflix-avatar.png"
          alt=""
          width={30}
          height={30}
          className="rounded"
          onClick={() => setShowMenu(!showMenu)}
        />
        <div
          className={`${
            showMenu ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          } flex border absolute w-28 p-2 flex-col bg-black transition duration-300 ease-in-out right-0 top-16 border-white/50`}
        >
          <button className="text-left">My Profile</button>
          <button className="text-left" onClick={handleLogOut}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

const NavMenu = () => {
  return (
    <div className="relative">
      <Menu as="div">
        <Menu.Button>
          <div className="flex items-center">
            <p>Browse</p>
            <MdOutlineArrowDropDown className="text-2xl" />
          </div>
        </Menu.Button>
        <div className="absolute top-8 ">
          <Menu.Items>
            <div className="flex flex-col gap-3  bg-black/90 p-3 border-t-2 border-t-white w-48">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    className={`${active ? "text-white" : "text-white/50"} `}
                    href="/home"
                  >
                    Home
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    className={`${active ? "text-white" : "text-white/50"} `}
                    href="/tv"
                  >
                    Tv Series
                  </Link>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </div>
      </Menu>
    </div>
  );
};
