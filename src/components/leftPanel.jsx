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
import ticket from "../../public/ticket.svg";

const LeftPanel = ({ showFullDisplay, setShowFullDisplay }) => {
  const leftPaneValues = [
    { image: arrow, name: "close" },
    { text: "MJ", name: "MJ" },
    { image: category, name: "category" },
    { image: Bulkticket, name: "Bulkticket" },
    { image: firstline, name: "firstline" },
    { image: addSquare, name: "addSquare" },
    { image: diagram, name: "diagram" },
    { image: ticket, name: "ticket" },
    { image: documentupload, name: "document" },
  ];

  const [active, setActive] = useState(5);

  const handleSelectedClick = (index) => {
    if (index == 0) {
      setShowFullDisplay(!showFullDisplay);
      return;
    }
    setActive(index);
  };

  return (
    <div
      className={`bg-[#130061] flex flex-col justify-between transition-all duration-300 ${
        showFullDisplay ? "w-[200px]" : "w-[60px]"
      } h-[100vh]`}
    >
      <div>
        <div className="h-[70px] p-[10px] border-b-[1px] border-[#2C2C2C] flex items-center justify-center">
          <Image src={logo} alt="logo" width={40} height={40} />
        </div>
        <div className="flex flex-col p-[10px] gap-3">
          {leftPaneValues.map((item, index) => (
            <div
              key={index}
              onClick={() => handleSelectedClick(index)}
              className={`cursor-pointer flex gap-3 items-center p-[6px] transition-colors duration-200 ${
                index === active
                  ? "bg-[#00A3ED] rounded-md"
                  : "hover:bg-[#69b1d2] rounded-md"
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
              {showFullDisplay && item?.name && (
                <p className="text-white capitalize text-[13px]">
                  {item?.name}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="p-[10px]">
        <Image
          src={logout}
          alt="logo"
          width={24}
          height={24}
          className="cursor-pointer hover:opacity-80 transition-opacity duration-200"
        />
      </div>
    </div>
  );
};

export default LeftPanel;
