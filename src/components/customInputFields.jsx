import React, { useState } from "react";
import CustomSelect from "./customSelect";
import CustomModal from "./customModal";

const CustomInputFields = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [formValues, setFormValues] = useState({
    0: "Local Delivery",
    1: "5",
    2: "None",
    3: "Not Seated Together",
    4: "30",
    5: "Home",
    6: "Away Fans Section",
    7: "Longside Lower Tier",
    8: "5",
    9: "3",
    10: "90000.00",
    11: "90000.00",
    12: "None",
    13: "None",
    14: "2025-03-19",
    15: false,
    16: "",
  });

  const [fields, setFields] = useState([
    { label: "Ticket Type", type: "select", mandatory: true, key: 0, options: ["Local Delivery", "Print at Home", "Mobile Entry"] },
    { label: "Quantity", type: "select", mandatory: true, key: 1, options: ["1", "2", "3", "4", "5", "6"] },
    { label: "Split Type", type: "select", mandatory: false, key: 2, options: ["None", "Pairs", "Groups"] },
    { label: "Seating", type: "select", mandatory: true, key: 3, options: ["Not Seated Together", "Seated Together"] },
    { label: "Max Display", type: "select", mandatory: false, key: 4, options: ["10", "20", "30", "40", "50"] },
    { label: "Fan Area", type: "select", mandatory: false, key: 5, options: ["Home", "Away", "Neutral"] },
    { label: "Category", type: "select", mandatory: true, key: 6, options: ["Away Fans Section", "Home Section", "VIP"] },
    { label: "Section/Block", type: "select", mandatory: false, key: 7, options: ["Longside Lower Tier", "Longside Upper Tier", "Behind Goal"] },
    { label: "Row", type: "text", mandatory: false, key: 8 },
    { label: "First Seat", type: "text", mandatory: false, key: 9 },
    { label: "Face Value", type: "number", mandatory: false, key: 10, prefix: "£" },
    { label: "Payout Price", type: "number", mandatory: true, key: 11, prefix: "£" },
    { label: "Benefits", type: "select", mandatory: false, key: 12, options: ["None", "Food Included", "Parking"] },
    { label: "Restrictions", type: "select", mandatory: false, key: 13, options: ["None", "Age Restricted", "Members Only"] },
    { label: "Date to Ship", type: "date", mandatory: true, key: 14 },
    { label: "Tickets in hand", type: "checkbox", mandatory: false, key: 15 },
    { label: "Upload Tickets", type: "file", mandatory: false, key: 16 },
  ]);

  const [newField, setNewField] = useState({
    label: "",
    type: "text",
    mandatory: false,
    options: []
  });
  
  const fieldTypes = ["text", "number", "date", "select", "checkbox", "file"];
  
  const handleButtonClick = () => {
    setShowAddModal(true);
  };
  
  const handleAddField = () => {
    if (!newField.label.trim()) {
      alert("Please enter a field label");
      return;
    }

    const nextKey = fields.length > 0 ? Math.max(...fields.map(item => item.key)) + 1 : 0;
    
    const newFieldData = { 
      label: newField.label , 
      type: newField.type, 
      mandatory: newField.mandatory,
      key: nextKey 
    };
    
    if (newField.type === "select" && newField.options.length > 0) {
      newFieldData.options = newField.options;
    }

    const updatedFields = [...fields, newFieldData];
    const updatedFormValues = {
      ...formValues,
      [nextKey]: newField.type === "checkbox" ? false : ""
    };
    
    setFields(updatedFields);
    setFormValues(updatedFormValues);
    setNewField({ label: "", type: "text", mandatory: false, options: [] });
    setShowAddModal(false);
  };


  const [optionInput, setOptionInput] = useState("");
  
  const addOption = () => {
    if (optionInput.trim()) {
      setNewField({
        ...newField,
        options: [...(newField.options || []), optionInput.trim()]
      });
      setOptionInput("");
    }
  };

  const removeOption = (index) => {
    const updatedOptions = [...newField.options];
    updatedOptions.splice(index, 1);
    setNewField({
      ...newField,
      options: updatedOptions
    });
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 m-6">
        {fields.map((field, index) => {
          return (
            <CustomSelect
              key={index}
              label={field.label}
              type={field.type}
              onChange={(e) =>{
                setFormValues({ 
                  ...formValues, 
                  [field.key]: field.type === "checkbox" 
                    ? !formValues[field.key] 
                    : e.target.value 
                })
              }
              }
              value={formValues[field.key]}
              options={field.options}
              required={field.mandatory}
              placeholder={field.placeholder}
              prefix={field.prefix}
              suffix={field.suffix}
            />
          );
        })}
      </div>
      
      <div className="border-t-[1px] border-b-[1px] border-[#E0E1EA] flex justify-end items-center py-[12px] px-4">
        <button
          onClick={handleButtonClick}
          className="bg-[#0137D5] text-[14px] text-white rounded-md font-semibold py-1 px-3"
        >
          + Add Field
        </button>
      </div>
      
      {showAddModal && (
        <CustomModal
          show={showAddModal}
          onClose={() => setShowAddModal(false)}
          outsideClickClose={true}
        >
          <div className="flex justify-center items-center">
            <div className="bg-white w-[350px] p-4 rounded-xl">
              <div className="mb-4">
                <p className="text-lg font-semibold">Add New Field</p>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Field Label
                  </label>
                  <input
                    type="text"
                    value={newField.label}
                    onChange={(e) => setNewField({...newField, label: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Enter field label"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Field Type
                  </label>
                  <select
                    value={newField.type}
                    onChange={(e) => setNewField({...newField, type: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    {fieldTypes.map((type) => (
                      <option key={type} value={type}>
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="mandatoryField"
                    checked={newField.mandatory}
                    onChange={(e) => setNewField({...newField, mandatory: e.target.checked})}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                  <label htmlFor="mandatoryField" className="ml-2 text-sm text-gray-700">
                    Mark as required field
                  </label>
                </div>
                
                {newField.type === "select" && (
                  <div className="border-t pt-4 mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Options
                    </label>
                    
                    <div className="space-y-2 mb-3">
                      {(newField.options || []).map((option, idx) => (
                        <div key={idx} className="flex items-center">
                          <span className="flex-grow px-3 py-1.5 bg-gray-100 rounded-md">
                            {option}
                          </span>
                          <button
                            type="button"
                            onClick={() => removeOption(idx)}
                            className="ml-2 text-red-500 hover:text-red-700"
                          >
                            &times;
                          </button>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex">
                      <input
                        type="text"
                        value={optionInput}
                        onChange={(e) => setOptionInput(e.target.value)}
                        className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md"
                        placeholder="Add an option"
                      />
                      <button
                        type="button"
                        onClick={addOption}
                        className="px-3 py-2 bg-gray-200 rounded-r-md hover:bg-gray-300"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                )}
                
                <div className="flex justify-end space-x-2 pt-4 border-t">
                  <button
                    onClick={() => setShowAddModal(false)}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddField}
                    className="px-4 py-2 text-sm font-medium text-white bg-[#0137D5] rounded-md hover:bg-blue-600"
                  >
                    Add Field
                  </button>
                </div>
              </div>
            </div>
          </div>
        </CustomModal>
      )}
    </>
  );
};

export default CustomInputFields;