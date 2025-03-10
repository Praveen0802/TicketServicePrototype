import { useState, useRef } from "react";
import { ChevronUp, ChevronDown, Edit, Download, Move } from "lucide-react";
import greenHand from "../../../public/greenHand.svg";
import Hand from "../../../public/hand.svg";
import Image from "next/image";
import chevronRight from "../../../public/chevronRight.svg";
import chevronleft from "../../../public/chevronleft.svg";

const ComplianceAccordion = () => {
  const [activePanel, setActivePanel] = useState(0);
  const [selectedRows, setSelectedRows] = useState([false, true, false]);
  // Create refs for each panel's table container
  const tableContainerRefs = useRef([]);

  const togglePanel = (index) => {
    setActivePanel(activePanel === index ? null : index);
  };

  const toggleRow = (index) => {
    const updatedRows = [...selectedRows];
    updatedRows[index] = !updatedRows[index];
    setSelectedRows(updatedRows);
  };

  // Function to handle scroll left
  const scrollLeft = (e) => {
    e.stopPropagation();
    const tableContainer = tableContainerRefs.current[activePanel];
    if (tableContainer) {
      tableContainer.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  // Function to handle scroll right
  const scrollRight = (e) => {
    e.stopPropagation();
    const tableContainer = tableContainerRefs.current[activePanel];
    if (tableContainer) {
      tableContainer.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  const ticketData = [
    {
      match: "Chelsea vs Arsenal - Premier League",
      date: "Sun, 10 Nov 2024",
      time: "16:30",
      location: "Stamford Bridge, London, United Kingdom",
      rows: [
        {
          ticketType: "E-ticket",
          greenHand: true,
          quantity: 5,
          splitType: "Split Type",
          maxDisplay: 5,
          category: "Longside Lower Tier Central",
          block: "Block 1",
          row: 5,
          firstSeat: 3,
          faceValue: "£90,000.00",
          payoutPrice: "£90,000.00",
          seating: "No preference",
        },
        {
          ticketType: "E-ticket",
          quantity: 5,
          splitType: "Split Type",
          maxDisplay: 5,
          category: "Longside Lower Tier Central",
          block: "Block 1",
          row: 5,
          firstSeat: 3,
          faceValue: "£90,000.00",
          payoutPrice: "£90,000.00",
          seating: "No preference",
        },
        {
          ticketType: "E-ticket",
          quantity: 5,
          splitType: "Split Type",
          maxDisplay: 5,
          category: "Longside Lower Tier Central",
          block: "Block 1",
          row: 5,
          firstSeat: 3,
          faceValue: "£90,000.00",
          payoutPrice: "£90,000.00",
          seating: "No preference",
        },
      ],
    },
    {
      match: "Manchester United FC vs AFC Bournemouth",
      date: "Sun, 10 Nov 2024",
      time: "16:30",
      location: "Stamford Bridge, London, United Kingdom",
      rows: [
        {
          ticketType: "E-ticket",
          quantity: 5,
          splitType: "Split Type",
          maxDisplay: 5,
          category: "Longside Lower Tier Central",
          block: "Block 1",
          row: 5,
          firstSeat: 3,
          faceValue: "£90,000.00",
          payoutPrice: "£90,000.00",
          seating: "No preference",
        },
        {
          ticketType: "E-ticket",
          quantity: 5,
          splitType: "Split Type",
          maxDisplay: 5,
          category: "Longside Lower Tier Central",
          block: "Block 1",
          row: 5,
          firstSeat: 3,
          faceValue: "£90,000.00",
          payoutPrice: "£90,000.00",
          seating: "No preference",
        },
        {
          ticketType: "E-ticket",
          quantity: 5,
          splitType: "Split Type",
          maxDisplay: 5,
          category: "Longside Lower Tier Central",
          block: "Block 1",
          row: 5,
          firstSeat: 3,
          faceValue: "£90,000.00",
          payoutPrice: "£90,000.00",
          seating: "No preference",
        },
      ],
    },
    {
      match: "Arsenal vs AFC Bournemouth",
      date: "Sun, 10 Nov 2024",
      time: "16:30",
      location: "Stamford Bridge, London, United Kingdom",
      rows: [
        {
          ticketType: "E-ticket",
          quantity: 5,
          splitType: "Split Type",
          maxDisplay: 5,
          category: "Longside Lower Tier Central",
          block: "Block 1",
          row: 5,
          firstSeat: 3,
          faceValue: "£90,000.00",
          payoutPrice: "£90,000.00",
          seating: "No preference",
        },
        {
          ticketType: "E-ticket",
          quantity: 5,
          splitType: "Split Type",
          maxDisplay: 5,
          category: "Longside Lower Tier Central",
          block: "Block 1",
          row: 5,
          firstSeat: 3,
          faceValue: "£90,000.00",
          payoutPrice: "£90,000.00",
          seating: "No preference",
        },
        {
          ticketType: "E-ticket",
          quantity: 5,
          splitType: "Split Type",
          maxDisplay: 5,
          category: "Longside Lower Tier Central",
          block: "Block 1",
          row: 5,
          firstSeat: 3,
          faceValue: "£90,000.00",
          payoutPrice: "£90,000.00",
          seating: "No preference",
        },
      ],
    },
  ];

  const borderStyle = "border-[1px] border-[#ECEDF2]";

  return (
    <div className="bg-[#e8ebfc] pb-[100px]">
      <div className="mx-4 my-4 max-w-full ">
        {ticketData.map((item, panelIndex) => (
          <div
            key={panelIndex}
            className="mb-4 rounded-lg overflow-hidden border border-gray-200"
          >
            <div
              className={`flex items-center justify-between p-4 cursor-pointer bg-[#130061] text-white`}
              onClick={() => togglePanel(panelIndex)}
            >
              <div className="flex items-center space-x-4 overflow-auto">
                <div className="flex items-center justify-center w-6 h-6">
                  <input
                    type="radio"
                    name="ticket"
                    checked={activePanel === panelIndex}
                    readOnly
                    className="w-5 h-5 accent-white "
                  />
                </div>

                <div className="flex text-[14px] items-center space-x-6 overflow-x-auto">
                  <div className="font-medium whitespace-nowrap">
                    {item.match}
                  </div>

                  <div className="flex items-center space-x-2 whitespace-nowrap">
                    <svg
                      className="w-5 h-5 flex-shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="18"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                      <path
                        d="M3 10H21"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path d="M16 2V6" stroke="currentColor" strokeWidth="2" />
                      <path d="M8 2V6" stroke="currentColor" strokeWidth="2" />
                    </svg>
                    <span className=" text-[14px]">{item.date}</span>
                  </div>

                  <div className="flex items-center space-x-2 whitespace-nowrap">
                    <svg
                      className="w-5 h-5 flex-shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="9"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                      <path
                        d="M12 7V12L15 15"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                    <span className=" text-[14px]">{item.time}</span>
                  </div>

                  <div className="flex items-center space-x-2 whitespace-nowrap">
                    <svg
                      className="w-5 h-5 flex-shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M19 10C19 13.866 15.866 17 12 17C8.13401 17 5 13.866 5 10C5 6.13401 8.13401 3 12 3C15.866 3 19 6.13401 19 10Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M12 17V21"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M7 21H17"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                    <span className=" text-[14px]">{item.location}</span>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 ml-2">
                {activePanel === panelIndex ? (
                  <ChevronUp className="w-6 h-6" />
                ) : (
                  <ChevronDown className="w-6 h-6" />
                )}
              </div>
            </div>

            {activePanel === panelIndex && item.rows && (
              <div className="bg-white relative">
                <div 
                  className="overflow-x-auto" 
                  style={{ maxWidth: "100%" }}
                  ref={(el) => (tableContainerRefs.current[panelIndex] = el)}
                >
                  <div style={{ width: "max-content", minWidth: "100%" }}>
                    <table className="w-full">
                      <thead>
                        <tr className=" border-b border-gray-200">
                          <th className={` ${borderStyle}  p-2 text-left`}>
                            <input type="checkbox" className="w-4 h-4" />
                          </th>
                          <th
                            className={`p-2 text-[12px] text-[#7D82A4]  text-center text-sm font-medium  ${borderStyle}`}
                          >
                            Ticket Type
                          </th>
                          <th className="p-2 text-[12px] text-[#7D82A4] text-center border-[1px] border-[#ECEDF2] text-sm font-medium">
                            Quantity
                          </th>
                          <th className="p-2 text-[12px] text-[#7D82A4] text-center border-[1px] border-[#ECEDF2]  text-sm font-medium">
                            Split Type
                          </th>
                          <th className="p-2 text-[12px] text-[#7D82A4] text-center border-[1px] border-[#ECEDF2] text-sm font-medium">
                            Max Display
                          </th>
                          <th className="p-2 text-[12px] text-[#7D82A4] text-center border-[1px] border-[#ECEDF2] text-sm font-medium">
                            Category
                          </th>
                          <th className="p-2 text-[12px] text-[#7D82A4] text-center border-[1px] border-[#ECEDF2] text-sm font-medium">
                            Section/Block
                          </th>
                          <th className="p-2 text-[12px] text-[#7D82A4] text-center border-[1px] border-[#ECEDF2] text-sm font-medium">
                            Row
                          </th>
                          <th className="p-2 text-[12px] text-[#7D82A4] text-center border-[1px] border-[#ECEDF2] text-sm font-medium">
                            First Seat
                          </th>
                          <th className="p-2 text-[12px] text-[#7D82A4] text-center border-[1px] border-[#ECEDF2] text-sm font-medium">
                            Face Value
                          </th>
                          <th className="p-2 text-[12px] text-[#7D82A4] text-center border-[1px] border-[#ECEDF2] text-sm font-medium">
                            Payout Price
                          </th>
                          <th className="p-2 text-[12px] text-[#7D82A4] text-center border-[1px] border-[#ECEDF2] text-sm font-medium">
                            Seating
                          </th>
                          <th className="p-2 h-[52px] w-full flex gap-2 items-center justify-center text-[12px] text-[#7D82A4] text-center border-[1px] border-[#ECEDF2] text-sm font-medium sticky right-0 bg-white shadow-lg">
                            <div 
                              className="cursor-pointer"
                              onClick={scrollLeft}
                            >
                              <Image
                                src={chevronleft}
                                alt="chevronleft"
                                width={12}
                                height={12}
                              />
                            </div>
                            <div 
                              className="cursor-pointer"
                              onClick={scrollRight}
                            >
                              <Image
                                src={chevronRight}
                                alt="chevronRight"
                                width={12}
                                height={12}
                              />
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {item.rows.map((row, rowIndex) => (
                          <tr
                            key={rowIndex}
                            className={`border-b border-gray-200 ${
                              selectedRows[rowIndex] ? "bg-blue-50" : ""
                            }`}
                          >
                            <td className="p-2 border-[1px] border-[#ECEDF2]">
                              <input
                                type="checkbox"
                                checked={selectedRows[rowIndex]}
                                onChange={() => toggleRow(rowIndex)}
                                className="w-4 h-4"
                              />
                            </td>
                            <td className="p-2 border-[1px] text-[12px] border-[#ECEDF2] text-[12px]">
                              <select className="w-full border border-gray-300 rounded p-2">
                                <option>{row.ticketType}</option>
                              </select>
                            </td>
                            <td className="p-2 border-[1px] border-[#ECEDF2] text-[12px]">
                              <input
                                type="text"
                                className="w-16 border border-gray-300 rounded p-2"
                                value={row.quantity}
                              />
                            </td>
                            <td className="p-2 border-[1px] border-[#ECEDF2] text-[12px]">
                              <select className="w-full border border-gray-300 rounded p-2">
                                <option>{row.splitType}</option>
                              </select>
                            </td>
                            <td className="p-2 border-[1px] border-[#ECEDF2] text-[12px]">
                              <input
                                type="number"
                                className="w-16 border border-gray-300 rounded p-2"
                                value={row.maxDisplay}
                              />
                            </td>
                            <td className="p-2 border-[1px] border-[#ECEDF2] text-[12px]">
                              <select className="w-full border border-gray-300 rounded p-2">
                                <option>{row.category}</option>
                              </select>
                            </td>
                            <td className="p-2 border-[1px] border-[#ECEDF2] text-[12px]">
                              <select className="w-full border border-gray-300 rounded p-2">
                                <option>{row.block}</option>
                              </select>
                            </td>
                            <td className="p-2 border-[1px] border-[#ECEDF2] text-[12px]">
                              <input
                                type="number"
                                className="w-16 border border-gray-300 rounded p-2"
                                value={row.row}
                              />
                            </td>
                            <td className="p-2 border-[1px] border-[#ECEDF2] text-[12px]">
                              <input
                                type="number"
                                className="w-16 border border-gray-300 rounded p-2"
                                value={row.firstSeat}
                              />
                            </td>
                            <td className="p-2 border-[1px] border-[#ECEDF2] text-[12px]">
                              <div className="flex border border-gray-300 rounded-md items-center">
                                <span style={{borderRight:'1px solid #ECEDF2'}} className="p-2">£</span>
                                <input
                                  type="text"
                                  className="w-24 b rounded p-2"
                                  value={row.faceValue.replace("£", "")}
                                />
                              </div>
                            </td>
                            <td className="p-2 border-[1px] border-[#ECEDF2] text-[12px]">
                              <div className="flex items-center">
                                <span className="mr-2">£</span>
                                <input
                                  type="text"
                                  className="w-24 border border-gray-300 rounded p-2"
                                  value={row.payoutPrice.replace("£", "")}
                                />
                              </div>
                            </td>
                            <td className="p-2 border-[1px] border-[#ECEDF2] text-[12px]">
                              <select className="w-full border border-gray-300 rounded p-2">
                                <option>{row.seating}</option>
                              </select>
                            </td>
                            <td className="p-2 border-[1px] border-[#ECEDF2] text-[12px] text-center sticky right-0 bg-white shadow-lg">
                              <div className="flex justify-center space-x-2">
                                <button className="p-2 text-gray-600 hover:text-blue-600">
                                  <Image
                                    src={row.greenHand ? greenHand : Hand}
                                    alt="greenHand"
                                    width={20}
                                    height={20}
                                  />
                                </button>
                                <button className="p-2 text-gray-600 hover:text-blue-600">
                                  <Download className="w-5 h-5 cursor-pointer" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComplianceAccordion;