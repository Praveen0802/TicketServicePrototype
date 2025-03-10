import { useEffect, useRef, useState } from "react";

const CustomizedSelect = ({
  options = [],
  value = "",
  onChange,
  placeholder = "Select an option",
  label = "",
  disabled = false,
  required = false,
  error = "",
  prefix = null,
  suffix = null,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isFocused, setIsFocused] = useState(false);
  const selectRef = useRef(null);
  const optionsRef = useRef(null);

  // Find the selected option on mount or when value changes
  useEffect(() => {
    const selected = options.find(
      (option) => (typeof option === "object" ? option.value : option) === value
    );
    setSelectedOption(selected);

    // If there's a value, consider it as focused for floating label
    if (value) {
      setIsFocused(true);
    }
  }, [value, options]);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);

        // If nothing is selected, remove focus state
        if (!selectedOption) {
          setIsFocused(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedOption]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        setIsOpen(false);
      } else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();

        if (optionsRef.current && optionsRef.current.children.length > 0) {
          const items = [...optionsRef.current.children];
          const currentIndex = items.findIndex((item) =>
            item.classList.contains("bg-blue-100")
          );

          let nextIndex;
          if (e.key === "ArrowDown") {
            nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
          } else {
            nextIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
          }

          items[nextIndex].scrollIntoView({ block: "nearest" });
          const nextOption = options[nextIndex];

          // Don't select on arrow navigation, just highlight
          items.forEach((item, i) => {
            if (i === nextIndex) {
              item.classList.add("bg-blue-100", "text-blue-800");
              item.classList.remove("hover:bg-gray-100", "text-gray-900");
            } else {
              item.classList.remove("bg-blue-100", "text-blue-800");
              if (!item.classList.contains("text-gray-900")) {
                item.classList.add("text-gray-900", "hover:bg-gray-100");
              }
            }
          });
        }
      } else if (e.key === "Enter") {
        if (optionsRef.current && optionsRef.current.children.length > 0) {
          const selectedItem = Array.from(optionsRef.current.children).find(
            (item) => item.classList.contains("bg-blue-100")
          );

          if (selectedItem) {
            selectedItem.click();
          }
        }
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, options]);

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
      setIsFocused(true);
    }
  };

  const handleSelect = (option) => {
    const optionValue = typeof option === "object" ? option.value : option;

    onChange({
      target: {
        value: optionValue,
      },
    });

    setSelectedOption(option);
    setIsOpen(false);
    setIsFocused(true);
  };

  // Handle display text based on selected option
  const getDisplayText = () => {
    if (!selectedOption) return "";

    return typeof selectedOption === "object"
      ? selectedOption.label
      : selectedOption;
  };

  return (
    <div className={`relative w-full ${className}`}>
      <div
        ref={selectRef}
        className={`relative ${
          disabled ? "opacity-70 cursor-not-allowed" : ""
        }`}
      >
        {label && (
          <label
            className={`
                absolute transition-all duration-200 pointer-events-none
                ${
                  isFocused || isOpen
                    ? "-top-2 left-2 bg-white px-1 text-xs font-medium text-[#808082] z-10"
                    : "top-2 left-3 text-gray-500 text-sm"
                }
              `}
          >
            {label}
            {required && <span className="text-red-500 ml-0.5">*</span>}
          </label>
        )}
        <div
          className={`{}
              relative flex items-center w-full px-3 py-2 border rounded 
              transition-all duration-200 cursor-pointer
              ${
                isOpen
                  ? "border-blue-500 ring-1 ring-blue-500 shadow-sm"
                  : error
                  ? "border-red-500"
                  : "border-gray-300 hover:border-gray-400"
              }
              ${disabled ? "bg-gray-100" : "bg-white"}
            `}
          onClick={toggleDropdown}
          onFocus={() => setIsFocused(true)}
        >
          {prefix && (
            <span className="flex items-center mr-2 text-gray-500">
              {prefix}
            </span>
          )}
          <div className="flex-grow">
            <div
              className={`
                  block w-full appearance-none focus:outline-none text-[12px] bg-transparent
                  ${selectedOption ? "text-gray-900" : "text-gray-500"}
                `}
            >
              {getDisplayText() || (isFocused ? "" : placeholder)}
            </div>
          </div>

          <div className="flex items-center ml-2">
            {suffix ? (
              <span className="text-gray-500">{suffix}</span>
            ) : (
              <svg
                className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                  isOpen ? "transform rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
        </div>

        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}

        {isOpen && !disabled && (
          <div
            ref={optionsRef}
            className="
                absolute z-30 w-full mt-1 overflow-auto bg-white border border-gray-200 
                rounded-md shadow-lg max-h-60 animate-fade-in
              "
            style={{
              animationDuration: "150ms",
              transformOrigin: "top center",
            }}
          >
            {options.length > 0 ? (
              options.map((option, index) => {
                const optionValue =
                  typeof option === "object" ? option.value : option;
                const optionLabel =
                  typeof option === "object" ? option.label : option;
                const isSelected = optionValue === value;

                return (
                  <div
                    key={index}
                    className={`
                        px-3 py-2 text-sm cursor-pointer transition-colors
                        ${
                          isSelected
                            ? "bg-blue-100 text-blue-800"
                            : "text-gray-900 hover:bg-gray-100"
                        }
                      `}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelect(option);
                    }}
                  >
                    {optionLabel}
                  </div>
                );
              })
            ) : (
              <div className="px-3 py-2 text-sm text-gray-500">
                No options available
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default CustomizedSelect;

