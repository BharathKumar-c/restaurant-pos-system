import React from 'react';
import {FaHome} from 'react-icons/fa';
import {MdReceiptLong, MdTableBar} from 'react-icons/md';
import {CiCircleMore} from 'react-icons/ci';
import {BiSolidDish} from 'react-icons/bi';

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 right-0 left-0 bg-[#262626] p-2 h-16 flex justify-around">
      <button className="flex items-center justify-center w-[200px] text-[#ababab] bg-[#3a3a3a] rounded-[20px]">
        <FaHome className="inline mr-2" size={20} />
        <p>Home</p>
      </button>
      <button className="flex items-center justify-center w-[200px] text-[#ababab]">
        <MdReceiptLong className="inline mr-2" size={20} /> <p>Orders</p>
      </button>
      <button className="flex items-center justify-center w-[200px] text-[#ababab]">
        <MdTableBar className="inline mr-2" size={20} /> <p>Table</p>
      </button>
      <button className="flex items-center justify-center w-[200px] text-[#ababab]">
        <CiCircleMore className="inline mr-2" size={20} /> <p>More</p>
      </button>

      <button className="absolute bottom-6 bg-[#F6B100] text-[#1a1a1a] rounded-full p-3 items-center">
        <BiSolidDish size={30} />
      </button>
    </div>
  );
};

export default BottomNav;
