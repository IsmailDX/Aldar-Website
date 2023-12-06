"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "../public/websiteImages/logo.png";
import { RxDividerVertical } from "react-icons/rx";
import { IoIosGlobe } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import Dropdown from "@/components/DropDowns/NavDropdown";
import BuyDropdown from "./DropDowns/BuyDropDown";
import RentDropdown from "./DropDowns/RentDropdown";
import Hamburger from "hamburger-react";
import { IoHomeOutline } from "react-icons/io5";
import { RiContactsBook2Line } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";

const links = [
  {
    text: "EXPLORE ABU DHABI",
    link: "/",
    options: [
      { optionText: "Market Overview", optionLink: "#" },
      { optionText: "Golden Visa", optionLink: "#" },
      { optionText: "Dari", optionLink: "#" },
    ],
  },
  {
    text: "EXPLORE ALDAR",
    link: "/",
    options: [
      { optionText: "About Aldar", optionLink: "#" },
      { optionText: "Businesses", optionLink: "#" },
      { optionText: "Corporate Governance", optionLink: "#" },
      { optionText: "Sustainability", optionLink: "#" },
      { optionText: "Aldar Brand", optionLink: "#" },
      { optionText: "Live Aldar", optionLink: "#" },
      { optionText: "Art", optionLink: "#" },
      { optionText: "Innovation", optionLink: "#" },
    ],
  },
  {
    text: "MEDIA",
    link: "/",
    options: [
      { optionText: "News", optionLink: "#" },
      { optionText: "Gallery", optionLink: "#" },
      { optionText: "Blog", optionLink: "#" },
    ],
  },
  {
    text: "INVESTOR RELATIONS",
    link: "/",
    options: [
      { optionText: "About Aldar", optionLink: "#" },
      { optionText: "Businesses", optionLink: "#" },
      { optionText: "Corporate Governance", optionLink: "#" },
      { optionText: "Sustainability", optionLink: "#" },
      { optionText: "Aldar Brand", optionLink: "#" },
      { optionText: "Live Aldar", optionLink: "#" },
      { optionText: "Art", optionLink: "#" },
      { optionText: "Innovation", optionLink: "#" },
    ],
  },
  {
    text: "CAREERS",
    link: "/",
    options: [
      { optionText: "Work with us", optionLink: "#" },
      { optionText: "Graduate Programme", optionLink: "#" },
    ],
  },
];

const NavBar = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [hoveredOptions, setHoveredOptions] = useState<
    { optionText: string; optionLink: string }[]
  >([]);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);
  const [isBuyDropdownVisible, setIsBuyDropdownVisible] = useState(false);
  const [isRentDropdownVisible, setIsRentDropdownVisible] = useState(false);
  const [nav, setNav] = useState(false);

  const handleDropdownLeave = () => {
    setIsDropdownHovered(false);
    if (!isDropdownHovered) {
      setHoveredLink(null);
    }
  };

  useEffect(() => {
    const updateHoveredOptions = () => {
      const link = links.find((link) => link.text === hoveredLink);
      if (link) {
        setHoveredOptions(link.options);
      } else {
        setHoveredOptions([]);
      }
    };

    updateHoveredOptions();
  }, [hoveredLink]);

  const handleBuyMouseEnter = () => {
    setIsBuyDropdownVisible(true);
    setHoveredLink(null);
  };

  const handleBuyMouseLeave = () => {
    setIsBuyDropdownVisible(false);
  };

  const handleRentMouseEnter = () => {
    setIsRentDropdownVisible(true);
    setHoveredLink(null);
  };

  const handleRentMouseLeave = () => {
    setIsRentDropdownVisible(false);
  };

  return (
    <div className="w-full h-fit fixed z-20">
      <div className="w-full bg-black flex justify-center select-none">
        <div className="flex items-center w-full justify-between lg:px-14 px-1 max-w-[1600px]">
          <div className="flex items-center w-auto h-full">
            <Image
              src={Logo}
              alt="Logo"
              className="lg:w-[110px] lg:h-[110px] w-[80px] h-[80px]"
            />
            <ul className="text-white list-none lg:flex hidden pl-4 h-full">
              {links.map((link) => (
                <li
                  key={link.text}
                  className="nav mx-5 relative group"
                  onMouseEnter={() => setHoveredLink(link.text)}
                >
                  <a
                    href={link.link}
                    className="hover:font-RobotoBold transition"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="items-center w-auto h-full lg:flex hidden">
            <ul className="text-white list-none flex items-center h-full">
              <div className="flex items-center h-full">
                <li className="text-sm relative group h-full flex items-center">
                  <a
                    href="/"
                    className="hover:font-RobotoBold transition nav"
                    onMouseEnter={handleBuyMouseEnter}
                    onMouseLeave={handleBuyMouseLeave}
                  >
                    BUY
                  </a>
                  <BuyDropdown isVisible={isBuyDropdownVisible} />
                  <RentDropdown isVisible={isRentDropdownVisible} />
                </li>
                <div className="px-2">
                  <RxDividerVertical size={30} />
                </div>

                <li className="text-sm relative group h-full flex items-center">
                  <a
                    href="/"
                    className="hover:font-RobotoBold transition nav "
                    onMouseEnter={handleRentMouseEnter}
                    onMouseLeave={handleRentMouseLeave}
                  >
                    RENT
                  </a>
                </li>
              </div>
              <div className="px-14 flex justify-between">
                <div className="px-7">
                  <IoIosGlobe size={22} className="" />
                </div>
                <div>
                  <IoIosSearch size={22} className=" " />
                </div>
              </div>
            </ul>
          </div>
          <div className="lg:hidden flex">
            <Hamburger
              color="white"
              onToggle={(toggled) => {
                if (toggled) {
                  setNav(true);
                } else {
                  setNav(false);
                }
              }}
            />
          </div>
        </div>
      </div>
      <Dropdown
        options={hoveredOptions}
        isVisible={!!hoveredLink || isDropdownHovered}
        onDropdownLeave={handleDropdownLeave}
      />
      <div
        className={`fixed left-0 w-full h-full bg-black text-white py-7 flex flex-col lg:hidden
          transition-all ease-in-out duration-300 -z-20 ${
            nav ? "top-[11%]" : "-top-[100%]"
          }`}
      >
        <div className="flex space-x-1 w-full justify-center pb-6">
          <div className="bg-gray-700/20 flex flex-col items-center w-[100%] py-2">
            <IoHomeOutline size={22} />
            <p>Home</p>
          </div>
          <div className="bg-gray-700/20 flex flex-col items-center w-[100%] py-2">
            <RiContactsBook2Line size={22} />
            <p>Contact us</p>
          </div>
          <div className="bg-gray-700/20 flex flex-col items-center w-[100%] py-2">
            <IoIosGlobe size={22} />
            <p>Language</p>
          </div>
        </div>
        <ul>
          <li className="bg-gray-700/20 font-RobotoLight text-[17px] flex items-center justify-between py-4 border-b-2 border-black px-5">
            BUY <IoIosArrowForward />
          </li>
          <li className="bg-gray-700/20 font-RobotoLight text-[17px] flex items-center justify-between py-4 border-b-2 border-black px-5">
            RENT <IoIosArrowForward />
          </li>
          {links.map((link) => (
            <li
              key={link.text}
              className="bg-gray-700/20 font-RobotoLight text-[17px] flex items-center justify-between py-4 border-b-2 border-black px-5"
            >
              {link.text}
              <IoIosArrowForward />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
