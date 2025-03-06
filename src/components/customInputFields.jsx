import React from "react";
import CustomSelect from "./customSelect";

const CustomInputFields = () => {
  const values = [
    { label: "Ticket Type *", values: "Local Delivery" },
    { label: "Ticket Type *", values: "5" },
    { label: "Quantity *", values: "None" },
    { label: "Split Type *", values: "Not Seated Together" },
    { label: "Seating Arrangement *", values: "30" },
    { label: "Ticket Type *", values: "Home" },
    { label: "Ticket Type *", values: "Local Delivery" },
    { label: "Ticket Type *", values: "5" },
    { label: "Quantity *", values: "None" },
    { label: "Split Type *", values: "Not Seated Together" },
    { label: "Seating Arrangement *", values: "30" },
    { label: "Ticket Type *", values: "Home" },
    { label: "Ticket Type *", values: "Local Delivery" },
    { label: "Ticket Type *", values: "5" },
    { label: "Quantity *", values: "None" },
    { label: "Split Type *", values: "Not Seated Together" },
    { label: "Seating Arrangement *", values: "30" },
    { label: "Ticket Type *", values: "Home" },
   
  ];
  return (
    <div className="grid grid-cols-6 gap-6 m-6">
      {values.map((item, index) => {
        return <CustomSelect key={index} label={item?.label} value={item?.values} />;
      })}
    </div>
  );
};

export default CustomInputFields;
