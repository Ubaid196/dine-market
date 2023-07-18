"use client";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "/public/Logo.webp";
import { CiSearch } from "react-icons/ci";
import { CgShoppingCart } from "react-icons/cg";
import {
  NavbarArray,
  NavbarItemType,
} from "@/components/utils/NavbarArrayAndTypes";
import { HiOutlineChevronDown } from "react-icons/hi";
import DropDown from "@/components/views/subComponents/DropDown";
import Expand from "../subComponents/Expand";

const Navbar = () => {
  const [isNavbarOpen, setNavbarOpen] = useState<boolean>(false);
const [cartItemNumber, setcartItemNumber] = useState<number>(0)
  return (
    <div className="sticky top-0 bg-white md:backdrop-blur-lg md:bg-opacityDownColor z-50">
      <div className=" py-5 flex justify-between items-center space-x-12">
        <Link href={"/"} className="w-36 flex-shrink-0">
          <Image
            width={500}
            height={500}
            src={Logo}
            alt="Dine Market Logo"
          ></Image>
        </Link>
        <div className="hidden lg:flex justify-between items-center w-full">
          <ul className="flex space-x-4">
            {NavbarArray.map((item: NavbarItemType, index: number) => (
              <li key={index} className="flex items-center relative rounded-md px-3 py-1 hover:bg-gray-100 cursor-pointer group">
                <Link className="group-hover:underline" href={item.href}>
                  {item.label}
                </Link>
                {item.IsdropDown ? (
                  <HiOutlineChevronDown
                    size={13}
                    className="mt-1 -rotate-180 group-hover:rotate-0 duration-300"
                  />
                ) : (
                  ""
                )}
                {item.IsdropDown ? (
                  <div
                    className={`invisible group-hover:visible absolute top-7 left-0 py-2 px-4  bg-gray-100 font-light min-w-[7.8rem]`}
                  >
                    <DropDown key={index} item={item} />
                  </div>
                ) : (
                  ""
                )}
              </li>
            ))}
          </ul>
          <div className="rounded-md border flex items-center text-gray-600 px-3">
            <CiSearch />
            <input
              type="text"
              className="pl-1 pr-5 py-1 w-80 focus:outline-none"
              placeholder="What you looking for"
            />
          </div>
          <div className="flex-shrink-0 relative w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center">
            <div className="absolute top-1 right-2  bg-[#F02D34] text-xs text-white font-light rounded-full w-4 h-4 flex justify-center items-center">
              {cartItemNumber}
            </div>
            <CgShoppingCart size={24} />
          </div>
        </div>
        <div onClick={() => setNavbarOpen(!isNavbarOpen)}>
          {isNavbarOpen ? (
            <div className="flex lg:hidden ">
              <IoMdClose size={30} />
            </div>
          ) : (
            <div className="flex lg:hidden ">
              <RiMenu3Fill size={30} />
            </div>
          )}
        </div>
      </div>
      {isNavbarOpen && <MobileNavbar />}
    </div>
  );
};

export default Navbar;

const MobileNavbar = () => {
  return (
    <div className="w-full px-6 py-4 bg-gray-100">
      {NavbarArray.map((item: NavbarItemType, index: number) => {
        return <Expand key={index} item={item} />;
      })}
    </div>
  );
};
