import { useState } from "react";
import FloatingPlaceholder from "./floatingPlaceholder";

const CustomSelect = (props) => {
  const { variation, label } = props;
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="relative">
      <FloatingPlaceholder isFocused={isFocused} variation={variation}>
        <span>{label}</span>
      </FloatingPlaceholder>

      <input
        type="text"
        className={`${
          variation === 2
            ? "text-sm bg-[#F0F1F3] border-[#F0F1F3]"
            : variation == 3
            ? "bg-[#FDF9F5]"
            : ""
        } block w-full p-3 shadow-sm rounded border-[1px] focus:outline-none focus:border-[#022B50] hover:border-[#022B50] placeholder-shown:border-[#caced1] text-[#231F20] caret-[#022B50]
          } ${isFocused ? "border-[#022B50]" : "border-[#caced1]"}`}
        placeholder={label}
        autoComplete="off"
        onFocus={() => setIsFocused(true)}
      />
    </div>
  );
};

export default CustomSelect;
