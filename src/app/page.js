"use client";
import CustomInputFields from "@/components/customInputFields";
import CustomSelect from "@/components/customSelect";
import Header from "@/components/header";
import LeftPanel from "@/components/leftPanel";
import MapViewComponent from "@/components/mapViewComponent";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex">
      <LeftPanel />{" "}
      <div className="w-full">
        <Header />
        <MapViewComponent />
        <CustomInputFields />
      </div>
    </div>
  );
}
