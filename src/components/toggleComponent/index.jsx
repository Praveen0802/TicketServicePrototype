import React, { useState } from "react";

const ToggleComponent = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="flex gap-1 items-center">
      <button
        className={`text-[10px] rounded-sm px-[4px] cursor-pointer py-[2px] transition-colors duration-300 ${
          isToggled ? "bg-[#51428E] text-white" : " text-[#51428E]"
        } `}
        onClick={handleToggle}
      >
        Event
      </button>
      <p onClick={handleToggle} className={`text-[10px] px-[4px] py-[2px] cursor-pointer ${
          !isToggled ? "bg-[#51428E] text-white  rounded-md" : " text-[#51428E]"
        } `}>
        Performer/Venue
      </p>
    </div>
  );
};

export default ToggleComponent;
