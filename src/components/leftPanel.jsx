import React from "react";
import Image from "next/image";
import { useState } from "react";
import logo from "../../public/logo.svg";
import addSquare from "../../public/add-square.svg";
import arrow from "../../public/arrow.svg";
import Bulkticket from "../../public/Bulkticket.svg";
import category from "../../public/category.svg";
import diagram from "../../public/diagram.svg";
import documentupload from "../../public/document-upload.svg";
import firstline from "../../public/firstline.svg";
import logout from "../../public/logout.svg";
// import shopping from "../.../public/shopping.svg";
import ticket from "../../public/ticket.svg";

const LeftPanel = () => {
  const leftPaneValues = [
    { image: arrow },
    { text: "MJ" },
    { image: category },
    { image: Bulkticket },
    { image: firstline },
    { image: addSquare },
    { image: diagram },
    { image: ticket },
    { image: documentupload },
  ];

  const [active, setActive] = useState(5);
  return (
    <div className="bg-[#51428E] flex flex-col justify-between  w-[60px] h-[100vh]">
      <div>
        <div className="h-[70px] p-[10px] border-b-[1px] ">
          <Image src={logo} alt="logo" width={40} height={40} />
        </div>
        <div className="flex flex-col  p-[10px] gap-3">
          {leftPaneValues.map((item, index) => {
            return (
              <div
                onClick={() => setActive(index)}
                className={`cursor-pointer  p-[6px] ${
                  index == active && "bg-[#00A3ED] rounded-md"
                }`}
              >
                {item?.image && (
                  <Image src={item?.image} alt="logo" width={24} height={24} />
                )}
                {item?.text && (
                  <p className="text-[18px] font-medium text-[#FFFFFF]">
                    {item?.text}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <Image
        src={logout}
        alt="logo"
        width={24}
        height={24}
        className="p-[10px] w-[80%]"
      />
    </div>
  );
};

export default LeftPanel;
