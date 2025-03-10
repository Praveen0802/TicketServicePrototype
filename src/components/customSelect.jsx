import { useEffect, useRef, useState } from "react";
import FloatingPlaceholder from "./floatingPlaceholder";
import { Calendar } from "lucide-react";
import Image from "next/image";
import upload from "../../public/upload.svg";
import hand from "../../public/hand.svg";
import exclamation from "../../public/exclamation.svg";
import CustomizedSelect from "./customizedSelect";

const CustomSelect = (props) => {
  const {
    variation,
    label,
    value,
    onChange,
    type = "text",
    options = [],
    placeholder = "",
    prefix = "",
    suffix = "",
    disabled = false,
    required = false,
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const valueRef = useRef(null);

  const hideFloatingPlaceHolder = ["checkbox", "file"];

  useEffect(() => {
    setIsFocused(value ? true : false);
  }, [value]);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (!value) {
      setIsFocused(false);
    } else {
      setIsFocused(true);
    }
    if (type === "date") {
      setTimeout(() => {
        setShowDatePicker(false);
      }, 200);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };
  const isRequired = required;
  const renderInput = () => {
    const baseClasses = `block w-full p-2 text-[14px] shadow-sm rounded border-[1px] focus:outline-none focus:border-[#022B50] hover:border-[#022B50] placeholder-shown:border-[#caced1] text-[#231F20] caret-[#022B50] ${
      isFocused ? "border-[#DADBE5]" : "border-[#DADBE5]"
    } ${disabled ? "bg-gray-100 cursor-not-allowed" : ""}`;

    switch (type) {
      case "text":
        return (
          <div className="relative">
            {prefix && (
              <span className="absolute border-[1px] border-[#DADBE5] left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                {prefix}
              </span>
            )}
            <input
              type="text"
              className={`${baseClasses} ${prefix ? "pl-6" : ""} ${
                suffix ? "pr-6" : ""
              }`}
              value={value || ""}
              onChange={onChange}
              autoComplete="off"
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder={placeholder}
              disabled={disabled}
            />
            {suffix && (
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                {suffix}
              </span>
            )}
          </div>
        );

      case "number":
        return (
          <div
            className={`shadow-sm rounded border-[#DADBE5]  border-[1px] focus:outline-none focus:border-[#022B50] hover:border-[#022B50] placeholder-shown:border-[#caced1] text-[#231F20] caret-[#022B50]  flex gap-2 items-center`}
          >
            {prefix && (
              <div
                style={{ borderRight: "1px solid #DADBE5" }}
                className="p-2 "
              >
                {prefix}
              </div>
            )}
            <input
              type="text"
              className={` p-2 outline-none border-none ${
                suffix ? "pr-6" : ""
              } no-arrow`}
              value={value || ""}
              onChange={onChange}
              autoComplete="off"
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder={placeholder}
              disabled={disabled}
            />
            {suffix && (
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                {suffix}
              </span>
            )}
          </div>
        );

      case "select":
        return (
         

          <CustomizedSelect
          label={label}
          options={options}
          value={value}
          onChange={(e) => onChange(e)}
        
          required={true}
        />
        );

      case "date":
        return (
          <div className="relative">
            <div
              style={{ margin: 0 }}
              className={`${baseClasses} w-full flex  justify-between mt-1 p-2 bg-white shadow-lg rounded-md border border-gray-200 z-10`}
            >
              <input
                type="date"
                className="w-full"
                onChange={(e) => {
                  onChange({
                    target: { value: e.target.value },
                  });
                  setShowDatePicker(false);
                }}
                value={value || ""}
              />
            </div>
          </div>
        );

      case "checkbox":
        return (
          <div className="shadow-sm rounded border-[#DADBE5]  border-[1px] focus:outline-none focus:border-[#022B50] hover:border-[#022B50] placeholder-shown:border-[#caced1] text-[#231F20] caret-[#022B50]  flex gap-2 items-center">
            <div
              style={{ borderRight: "1px solid #DADBE5" }}
              className="p-[10px]"
            >
              <Image src={hand} width={16} height={18} alt="hand" />
            </div>
            <input
              type="checkbox"
              className="h-4 w-4 text-blue-600  p-[10px] rounded focus:ring-blue-500"
              checked={value === true}
              onChange={(e) =>
                onChange({ target: { value: e.target.checked } })
              }
              disabled={disabled}
            />
            <label className="ml-2 text-[12px] text-gray-700">{label}</label>
          </div>
        );

      case "file":
        return (
          <div
            onClick={() => {
              valueRef.current.click();
            }}
            className={` text-[12px] bg-[#DADBE526]  shadow-sm rounded border-[1px] focus:outline-none  placeholder-shown:border-[#caced1] text-[#231F20] border-[#DADBE5B2]  flex gap-2 items-center`}
          >
            <div
              className=" p-[8px]"
              style={{ borderRight: "1px solid #DADBE5" }}
            >
              <Image
                src={upload}
                width={12}
                className=" "
                height={12}
                alt="logo"
              />
            </div>
            <input
              ref={valueRef}
              type="file"
              className={`hidden`}
              onChange={onChange}
              onFocus={handleFocus}
              placeholder={label}
              onBlur={handleBlur}
              disabled={disabled}
            />
            <p className="text-[12px]  p-[8px]">{label}</p>
          </div>
        );

      default:
        return (
          <input
            type="text"
            className={baseClasses}
            value={value || ""}
            onChange={onChange}
            autoComplete="off"
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={placeholder}
            disabled={disabled}
          />
        );
    }
  };

  return (
    <div className="relative">
      {!hideFloatingPlaceHolder?.includes(type) && (
        <FloatingPlaceholder
          className={prefix ? "ml-[30px]" : ""}
          isFocused={isFocused}
          variation={variation}
        >
          <span
            style={{ fontSize: isFocused ? "11px" : "13px" }}
            className={` text-[#808082] "`}
          >
            {label}
            {isRequired && <span className="text-red-500 ml-0.5">*</span>}
          </span>
        </FloatingPlaceholder>
      )}

      {renderInput()}
    </div>
  );
};

export default CustomSelect;


