import { useState } from "react";
import FloatingPlaceholder from "./floatingPlaceholder";

const CustomSelect = (props) => {
  const { variation, label,values } = props;
  const [isFocused, setIsFocused] = useState(true);
  return (
    <div className="relative">
      <FloatingPlaceholder isFocused={isFocused} variation={variation}>
        <span className="text-[#808082]">{label}</span>
      </FloatingPlaceholder>

      <input
        type="text"
        className={`${
          variation === 2
            ? "text-sm bg-[#F0F1F3] border-[#DADBE5]"
            : variation == 3
            ? "bg-[#FDF9F5]"
            : ""
        } block w-full p-1 shadow-sm rounded border-[1px] focus:outline-none focus:border-[#022B50] hover:border-[#022B50] placeholder-shown:border-[#caced1] text-[#231F20] caret-[#022B50]
          } ${isFocused ? "border-[#DADBE5]" : "border-[#caced1]"}`}
        // placeholder={label}
        value={values}
        autoComplete="off"
        onFocus={() => setIsFocused(true)}
      />
    </div>
  );
};

export default CustomSelect;
