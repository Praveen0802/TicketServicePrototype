"use client";
import ComplainceAccordion from "@/components/complainceAccordion";
import StickyBottomBar from "@/components/complainceAccordion/stickyBottomBar";
import CustomInputFields from "@/components/customInputFields";
import CustomSelect from "@/components/customSelect";
import Header from "@/components/header";
import LeftPanel from "@/components/leftPanel";
import MapViewComponent from "@/components/mapViewComponent";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex ">
      <LeftPanel />{" "}
      <div className="w-full h-[100vh] overflow-scroll">
        <Header />
        <MapViewComponent />
        <CustomInputFields />
        <div className="border-t-[1px] border-b-[1px] border-[#E0E1EA] flex justify-end items-center py-[12px] px-4">
          <button className="bg-[#0137D5] text-[14px] text-white rounded-md font-semibold py-1 px-3">+ Add Listing</button>
        </div>
        <ComplainceAccordion />
        <StickyBottomBar />
      </div>
    </div>
  );
}
