import React from 'react';
import {FaSearch} from 'react-icons/fa';
import {FaUserCircle} from 'react-icons/fa';
import {FaBell} from 'react-icons/fa';
import logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-4 bg-[#1a1a1a]">
      {/* LOGO */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="resto logo" className="w-8 h-8 mr-2" />
        <h1 className="text-lg font-semibold text-[#f5f5f5]">Resto</h1>
      </div>

      {/* SEARCH BAR */}
      <div className="flex items-center gap-4 bg-slate-800 rounded-[15px] px-5 py-2 w-2/6">
        <FaSearch className="text-[#f5f5f5]" />
        <input
          type="text"
          placeholder="Search"
          className="p-2 rounded-md bg-slate-800 text-[#f5f5f5] outline-none"
        />
      </div>

      {/* LOGGED USER DETAILS */}
      <div className="flex items-center gap-4">
        <div className="bg-slate-800 p-3 rounded-full !cursor-pointer">
          <FaBell className="text-[#f5f5f5] text-2xl" />
        </div>
        <div className="flex items-center gap-3 !cursor-pointer">
          <FaUserCircle className="text-[#f5f5f5] text-4xl" />
          <div className="flex flex-col items-start">
            <h1 className="text-md text-[#f5f5f5] font-semibold">
              Bharath kumar
            </h1>
            <p className="text-xs text-[#ababab] font-medium">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
