import React from "react";
import trash from "../../../public/trash.svg";
import closedSquare from "../../../public/closeSquare.svg";
import clone from "../../../public/edit.svg";
import copy from "../../../public/copy_1.svg";
import Image from "next/image";

const StickyBottomBar = ({
  onSelectAll,
  showFullDisplay,
  onDeselectAll,
  onClone,
  onEdit,
  onDelete,
  onCancel,
  onPublish,
}) => {
  return (
    <div
      className={`fixed bottom-0 left-0  ${
        showFullDisplay ? "ml-[180px] w-[88%]" : " ml-[60px] w-[96%]"
      } bg-white border-t border-gray-200 py-3 px-4 flex justify-between items-center shadow-md z-50`}
    >
      <div className="flex items-center space-x-2">
        <label className="flex items-center mr-4">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-indigo-600"
            onChange={onSelectAll}
          />
          <span className="ml-2 text-sm text-gray-700">Select all</span>
        </label>

        <button
          onClick={onDeselectAll}
          className="flex gap-2 items-center px-3 py-1 border border-gray-300 bg-[#F0F1F5] text-sm leading-5 font-medium rounded-md text-gray-700 hover:bg-gray-50"
        >
         <Image src={closedSquare} alt="logo" width={16} height={16} />
          Deselect all
        </button>

        <button
          onClick={onClone}
          className="flex gap-2  items-center px-3 py-1 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-[#F0F1F5]"
        >
           <Image src={copy} alt="logo" width={16} height={16} />
          Clone
        </button>

        <button
          onClick={onEdit}
          className="flex gap-2  items-center px-3 py-1 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-[#F0F1F5]"
        >
           <Image src={clone} alt="logo" width={16} height={16} />
          Edit
        </button>

        <button
          onClick={onDelete}
          className="flex gap-2  items-center px-3 py-1 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-[#F0F1F5]"
        >
          <Image src={trash} alt="logo" width={16} height={16} />
          Delete
        </button>
      </div>

      <div className="flex items-center space-x-2">
        <button
          onClick={onCancel}
          className="flex gap-2  items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Cancel
        </button>

        <button
          onClick={onPublish}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Publish Live
        </button>
      </div>
    </div>
  );
};

export default StickyBottomBar;
