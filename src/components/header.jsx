import React from "react";
import messages from "../../public/messages.svg";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {

  return (
    <div className="py-[10px] px-[24px] flex justify-between items-center border-[1px] border-[#E0E1EA]">
      <p className="text-[14px] md:text-[24px] font-semibold">Add Inventory</p>
      <div className="flex items-center gap-3">
        <button  className="md:px-[14px]  px-[8px] py-[6px] text-[10px] md:py-[8px] md:text-[12px] text-[#0137D5] border-[1px] rounded-md">
          Request Event
        </button>
        <Image src={messages} width={48} height={48} alt="logo" />
      </div>
    </div>
  );
};

export default Header;
