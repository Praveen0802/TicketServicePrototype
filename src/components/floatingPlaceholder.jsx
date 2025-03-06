
const FloatingPlaceholder = (props) => {
  const { isFocused, variation } = props;

  return (
    <div
      className={`absolute pointer-events-none translate-y-[-50%] transition-all duration-[0.1s] ease-linear z-10 ${
        isFocused
          ? "top-[-2%] left-3 text-[12px] px-1"
          : "text-[16px] top-[50%] left-4"
      } ${isFocused ? "text-[#022B50]" : "text-[#606162]"} ${
        variation == 3 ? "bg-[#FDF9F5]" : "bg-white"
      }`}
    >
      {props.children}
    </div>
  );
};

export default FloatingPlaceholder;
