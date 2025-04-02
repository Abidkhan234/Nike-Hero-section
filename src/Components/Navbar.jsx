import React, { useRef } from "react";
import { FaBars } from "react-icons/fa6";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const sideMenu = useRef();

  const handleSideMenuOpen = () => {
    sideMenu.current.classList.remove("hidden");
  };

  const handleSideMenuClose = () => {
    sideMenu.current.classList.add("hidden");
  };

  return (
    <div>
      <nav className="flex justify-between items-center p-3 sticky top-0 left-0 right-0">
        <div className="logo">
          <img
            src="../public/Images/brand_logo.png"
            className="w-full h-full object-cover"
            alt="nav-logo"
          />
        </div>
        <div className="nav-menu max-[992px]:hidden">
          <ul className="flex gap-8 items-center">
            <li className="font-semibold text-lg cursor-pointer text-[#2E2E2E]">
              Menu
            </li>
            <li className="font-semibold text-lg cursor-pointer text-[#2E2E2E]">
              Location
            </li>
            <li className="font-semibold text-lg cursor-pointer text-[#2E2E2E]">
              About
            </li>
            <li className="font-semibold text-lg cursor-pointer text-[#2E2E2E]">
              Contact
            </li>
          </ul>
        </div>
        <div className="nav-btn max-[992px]:hidden">
          <button className="bg-[#D01C28] px-3 py-1 font-semibold text-lg rounded-sm text-white cursor-pointer">
            Login
          </button>
        </div>
        <div className="side-menu-btn min-[992px]:hidden">
          <button
            onClick={handleSideMenuOpen}
            className="font-bold text-2xl cursor-pointer"
          >
            <FaBars />
          </button>
        </div>
        <div
          ref={sideMenu}
          className="side-menu fixed top-0 right-0 h-full w-full min-[425px]:max-w-[250px] hidden bg-[#D01C28] pt-2 text-white"
        >
          <div className="flex flex-col max-[425px]:justify-center h-full gap-10">
            <div className="cross flex justify-center">
              <button
                onClick={handleSideMenuClose}
                className="font-bold text-2xl px-2 py-1 rounded-sm border text-white cursor-pointer"
              >
                <MdClose />
              </button>
            </div>
            <ul className="flex flex-col gap-8 items-center">
              <li className="font-semibold text-xl cursor-pointer">Menu</li>
              <li className="font-semibold text-xl cursor-pointer">Location</li>
              <li className="font-semibold text-xl cursor-pointer">About</li>
              <li className="font-semibold text-xl cursor-pointer">Contact</li>
              <li>
                <button className="bg-white px-3 py-1 font-semibold text-xl rounded-sm text-[#000] cursor-pointer">
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
