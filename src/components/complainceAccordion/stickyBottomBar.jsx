import React from 'react';

const StickyBottomBar = ({ onSelectAll, onDeselectAll, onClone, onEdit, onDelete, onCancel, onPublish }) => {
  return (
    <div className="fixed bottom-0 left-0 w-[96%] ml-[60px] bg-white border-t border-gray-200 py-3 px-4 flex justify-between items-center shadow-md z-50">
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
          className="inline-flex items-center px-3 py-1 border border-gray-300 bg-[#F0F1F5] text-sm leading-5 font-medium rounded-md text-gray-700 hover:bg-gray-50"
        >
          <svg className="mr-2 h-4 w-4 stroke-[#0137D5]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          Deselect all
        </button>
        
        <button 
          onClick={onClone}
          className="inline-flex items-center px-3 py-1 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-[#F0F1F5]"
        >
          <svg className="mr-2 h-4 w-4 stroke-[#0137D5]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" />
            <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" />
          </svg>
          Clone
        </button>
        
        <button 
          onClick={onEdit}
          className="inline-flex items-center px-3 py-1 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-[#F0F1F5]"
        >
          <svg className="mr-2 h-4 w-4 stroke-[#0137D5]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-10 10a2 2 0 01-1.414.586H3a1 1 0 01-1-1v-2a2 2 0 01.586-1.414l10-10z" />
          </svg>
          Edit
        </button>
        
        <button 
          onClick={onDelete}
          className="inline-flex items-center px-3 py-1 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-[#F0F1F5]"
        >
          <svg className="mr-2 h-4 w-4 stroke-[#0137D5]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          Delete
        </button>
      </div>
      
      <div className="flex items-center space-x-2">
        <button 
          onClick={onCancel}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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