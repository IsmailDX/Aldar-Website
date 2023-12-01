"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "../public/websiteImages/logo.png";
import { RxDividerVertical } from "react-icons/rx";
import { IoIosGlobe } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import Dropdown from "@/components/Dropdown";

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

  return (
    <div className="w-full h-full">
      <div className="w-full bg-black flex">
        <div className="flex items-center w-full justify-between px-14">
          <div className="flex items-center w-auto h-full">
            <Image src={Logo} alt="Logo" height={110} width={110} />
            <ul className="text-white list-none flex pl-4 h-full">
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

          <div
            className="flex items-center w-auto h-full"
            onMouseEnter={() => setIsDropdownHovered(true)}
            onMouseLeave={handleDropdownLeave}
          >
            <ul className="text-white list-none flex items-center h-full">
              <div className="flex items-center h-full">
                <li className="text-sm relative group h-full flex items-center">
                  <a href="/" className="hover:font-RobotoBold transition nav">
                    BUY
                  </a>
                </li>
                <div className="px-2">
                  <RxDividerVertical size={30} />
                </div>

                <li className="text-sm relative group h-full flex items-center">
                  <a href="/" className="hover:font-RobotoBold transition nav">
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
        </div>
      </div>
      <Dropdown
        options={hoveredOptions}
        isVisible={!!hoveredLink || isDropdownHovered}
        onDropdownLeave={handleDropdownLeave}
      />
    </div>
  );
};

export default NavBar;
