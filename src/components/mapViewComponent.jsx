import React from "react";
import location from "../../public/location.svg";
import Image from "next/image";
import Cancel from "../../public/Cancel.svg";
import calendar from "../../public/calendar.svg";
import clock from "../../public/clock.svg";

const MapViewComponent = () => {
  const keyValues = [
    {
      name: "Manchester United FC vs AFC Bournemouth",
      date: "Sun, 10 Nov 2024",
      time: "16:30 ",
    },
    {
      name: "Manchester United FC vs AFC Bournemouth",
      date: "Sun, 10 Nov 2024",
      time: "16:30 ",
    },
  ];

  const viewComponent = (src, time) => {
    return (
      <div className="flex gap-[4px] items-center">
        <Image src={src} width={16} height={16} alt="logo" />
        <p className="text-[14px] font-normal text-[#323A70]">{time}</p>
      </div>
    );
  };

  return (
    <div className="px-[24px] py-[20px] flex flex-col gap-[20px] border-t-[1px] border-b-[1px] border-[#E0E1EA]">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Image src={location} width={18} height={18} alt="logo" />
          <p>Stamford Bridge, London, United Kingdom </p>
        </div>
        <p className="text-[#0137D5] text-[14px] font-semibold">View Map</p>
      </div>
      <div className="flex gap-[5px] w-full">
        {keyValues.map((item, index) => {
          return (
            <div
              key={index}
              className="flex gap-[4px] w-full rounded-md items-center border-[1px] border-[#DADBE5] p-[6px]"
            >
              <Image
                src={Cancel}
                width={16}
                height={16}
                alt="cancel"
                className="cursor-pointer"
              />
              <p className="text-[14px] font-medium">{item?.name}</p>
              {viewComponent(calendar, item?.date)}
              {viewComponent(clock, item?.time)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MapViewComponent;
