import React from "react";
import { MdWindow, MdHelpCenter} from "react-icons/md";
import { RiBillFill } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { ImLocation } from "react-icons/im";
import Link from "next/link";

const Sidebar = () => {
    let categories = ['Electronics', 'Home and Garden', 'Fashion', 'Health and Beauty', 'Automotive', 'Sports and Tourism', 'Film and Music', 'Games', 'Gift Cards']
  return (
    <div className="w-[500px] h-[88vh] transition-all xl:flex items-center justify-center hidden z-[999]">
      <div className="w-[95%] bg-white h-[80vh] shadow-md rounded-xl ml-10 space-y-1 relative">
        <div className="mt-5 flex items-center">
          <span className="w-1 h-10 rounded-r-xl block bg-[#ff9900]"></span>
          <span className="uppercase w-full mx-4 space-x-2 text-center p-1 rounded-xl bg-[#ff99003e] tracking-widest flex items-center px-5 py-2">
            <span className="text-xl"><MdWindow /></span>
            <span>Categories</span>
          </span>
        </div>
        <div className="ml-16 font-light tracking-widest">
            {categories.map(category => <button key={categories.indexOf(category)} className="block p-2 hover:text-[#ff9900]">{category}</button>)}
        </div>
        <div className="mx-9">
            <Link href={"/address"}>
              <button className="w-full flex space-x-2 items-center uppercase tracking-widest hover:bg-[#ff99003e] transition-colors px-3 py-2 rounded-xl">
                  <span className="text-2xl"><ImLocation /></span>
                  <span>Your Address</span>
              </button>
            </Link>
        </div>
        <div className="mx-9">
            <Link href={"/orders"}>
              <button className="w-full flex space-x-2 items-center uppercase tracking-widest hover:bg-[#ff99003e] transition-colors px-3 py-2 rounded-xl">
                  <span className="text-2xl"><RiBillFill /></span>
                  <span>Your Orders</span>
              </button>
            </Link>
        </div>
        <div className="mx-9">
            <button className="w-full flex space-x-2 items-center uppercase tracking-widest hover:bg-[#ff99003e] transition-colors px-3 py-2 rounded-xl">
                <span className="text-2xl"><MdHelpCenter /></span>
                <span>Help</span>
            </button>
        </div>
        <div className="w-full px-10 absolute bottom-5">
            <button className="w-full bg-[#000] flex space-x-2 items-center justify-center uppercase tracking-widest text-white transition-colors px-3 py-2 rounded-xl">
                <span className="text-2xl"><FiLogOut /></span>
                <span>Logout</span>
            </button>
        </div>
        
      </div>
    </div>
  );
};

export default Sidebar;