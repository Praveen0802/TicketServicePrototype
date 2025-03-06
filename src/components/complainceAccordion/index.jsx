import { useState } from "react";
import { ChevronUp, ChevronDown, Edit, Download, Move } from "lucide-react";

const ComplianceAccordion = () => {
  const [activePanel, setActivePanel] = useState(0);
  const [selectedRows, setSelectedRows] = useState([false, true, false]);

  const togglePanel = (index) => {
    setActivePanel(activePanel === index ? null : index);
  };

  const toggleRow = (index) => {
    const updatedRows = [...selectedRows];
    updatedRows[index] = !updatedRows[index];
    setSelectedRows(updatedRows);
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

  return (
    // Container with fixed width and margin on all sides
    <div className="bg-[#e8ebfc] pb-[50px]">
      <div className="mx-4 my-4 max-w-full ">
        {ticketData.map((item, panelIndex) => (
          <div
            key={panelIndex}
            className="mb-4 rounded-lg overflow-hidden border border-gray-200"
          >
            <div
              className={`flex items-center justify-between p-4 cursor-pointer ${
                activePanel === panelIndex ? "bg-indigo-900" : "bg-indigo-900"
              } text-white`}
              onClick={() => togglePanel(panelIndex)}
            >
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-6 h-6">
                  <input
                    type="radio"
                    name="ticket"
                    checked={activePanel === panelIndex}
                    readOnly
                    className="w-5 h-5"
                  />
                </div>

                <div className="flex items-center space-x-6 overflow-x-auto">
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
                    <span>{item.date}</span>
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
                    <span>{item.time}</span>
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
                    <span>{item.location}</span>
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
                <div className="overflow-x-auto" style={{ maxWidth: "100%" }}>
                  <div style={{ width: "max-content", minWidth: "100%" }}>
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-50 border-b border-gray-200">
                          <th className="w-12 p-3 text-left">
                            <input type="checkbox" className="w-4 h-4" />
                          </th>
                          <th className="p-3  text-center text-sm font-medium text-gray-600">
                            Ticket Type
                          </th>
                          <th className="p-3 text-center text-sm font-medium text-gray-600">
                            Quantity
                          </th>
                          <th className="p-3 text-center text-sm font-medium text-gray-600">
                            Split Type
                          </th>
                          <th className="p-3 text-center text-sm font-medium text-gray-600">
                            Max Display
                          </th>
                          <th className="p-3 text-center text-sm font-medium text-gray-600">
                            Category
                          </th>
                          <th className="p-3 text-center text-sm font-medium text-gray-600">
                            Section/Block
                          </th>
                          <th className="p-3 text-center text-sm font-medium text-gray-600">
                            Row
                          </th>
                          <th className="p-3 text-center text-sm font-medium text-gray-600">
                            First Seat
                          </th>
                          <th className="p-3 text-center text-sm font-medium text-gray-600">
                            Face Value
                          </th>
                          <th className="p-3 text-center text-sm font-medium text-gray-600">
                            Payout Price
                          </th>
                          <th className="p-3 text-center text-sm font-medium text-gray-600">
                            Seating
                          </th>
                          <th className="p-3 text-center text-sm font-medium text-gray-600 sticky right-0 bg-white shadow-lg">
                            Actions
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
                            <td className="p-3">
                              <input
                                type="checkbox"
                                checked={selectedRows[rowIndex]}
                                onChange={() => toggleRow(rowIndex)}
                                className="w-4 h-4"
                              />
                            </td>
                            <td className="p-3">
                              <select className="w-full border border-gray-300 rounded p-2">
                                <option>{row.ticketType}</option>
                              </select>
                            </td>
                            <td className="p-3">
                              <input
                                type="number"
                                className="w-16 border border-gray-300 rounded p-2"
                                value={row.quantity}
                              />
                            </td>
                            <td className="p-3">
                              <select className="w-full border border-gray-300 rounded p-2">
                                <option>{row.splitType}</option>
                              </select>
                            </td>
                            <td className="p-3">
                              <input
                                type="number"
                                className="w-16 border border-gray-300 rounded p-2"
                                value={row.maxDisplay}
                              />
                            </td>
                            <td className="p-3">
                              <select className="w-full border border-gray-300 rounded p-2">
                                <option>{row.category}</option>
                              </select>
                            </td>
                            <td className="p-3">
                              <select className="w-full border border-gray-300 rounded p-2">
                                <option>{row.block}</option>
                              </select>
                            </td>
                            <td className="p-3">
                              <input
                                type="number"
                                className="w-16 border border-gray-300 rounded p-2"
                                value={row.row}
                              />
                            </td>
                            <td className="p-3">
                              <input
                                type="number"
                                className="w-16 border border-gray-300 rounded p-2"
                                value={row.firstSeat}
                              />
                            </td>
                            <td className="p-3">
                              <div className="flex items-center">
                                <span className="mr-2">£</span>
                                <input
                                  type="text"
                                  className="w-24 border border-gray-300 rounded p-2"
                                  value={row.faceValue.replace("£", "")}
                                />
                              </div>
                            </td>
                            <td className="p-3">
                              <div className="flex items-center">
                                <span className="mr-2">£</span>
                                <input
                                  type="text"
                                  className="w-24 border border-gray-300 rounded p-2"
                                  value={row.payoutPrice.replace("£", "")}
                                />
                              </div>
                            </td>
                            <td className="p-3">
                              <select className="w-full border border-gray-300 rounded p-2">
                                <option>{row.seating}</option>
                              </select>
                            </td>
                            <td className="p-3 text-center sticky right-0 bg-white shadow-lg">
                              <div className="flex justify-center space-x-2">
                                <button className="p-2 text-gray-600 hover:text-blue-600">
                                  <Move className="w-5 h-5 cursor-pointer" />
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
