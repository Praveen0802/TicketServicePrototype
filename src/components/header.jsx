import React from "react";
import messages from "../../public/messages.svg";
import Image from "next/image";

const Header = () => {
  return (
    <div className="py-[10px] px-[24px] flex justify-between items-center border-[1px] border-[#E0E1EA]">
      <p className="text-[24px] font-semibold">Add Inventory</p>
      <div className="flex items-center gap-3">
        <button className="px-[14px] py-[8px] text-[12px] text-[#0137D5] border-[1px] rounded-md">
          Request Event
        </button>
        <Image src={messages} width={48} height={48} alt="logo" />
      </div>
    </div>
  );
};

export default Header;
