import { useState } from "react";
import LeftPanel from "../leftPanel";
import Header from "../header";
import MapViewComponent from "../mapViewComponent";
import CustomInputFields from "../customInputFields";
import ComplainceAccordion from "@/components/complainceAccordion";
import StickyBottomBar from "../complainceAccordion/stickyBottomBar";

const HomePage = () => {
  const [showFullDisplay, setShowFullDisplay] = useState(false);
  return (
    <div className="flex ">
      <LeftPanel
        showFullDisplay={showFullDisplay}
        setShowFullDisplay={setShowFullDisplay}
      />{" "}
      <div className="w-full h-[100vh] overflow-scroll">
        <Header />
        <MapViewComponent />
        <CustomInputFields />

        <ComplainceAccordion />
        <StickyBottomBar
          showFullDisplay={showFullDisplay}
          setShowFullDisplay={setShowFullDisplay}
        />
      </div>
    </div>
    // <CircleApp />
  );
};

export default HomePage;
