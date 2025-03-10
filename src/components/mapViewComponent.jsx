import React, { useState, useRef, useEffect, useCallback } from "react";
import location from "../../public/location.svg";
import Image from "next/image";
import Cancel from "../../public/Cancel.svg";
import calendar from "../../public/calendar.svg";
import clock from "../../public/clock.svg";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { incrementFunction } from "@/utils/redux/event/action";
import ToggleComponent from "./toggleComponent";

const MapViewComponent = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [keyValues, setKeyValues] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const { dropDownValues } = useSelector((state) => state.event);
  const dispatch = useDispatch();

  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const fetchDropDownValues = async () => {
      try {
        const response = await axios.get("/api/dropdown-values");
        console.log("response", response);
        dispatch(incrementFunction(response.data?.data?.dropDownValues));
        // setDropDownValues(response.data?.data?.dropDownValues);
      } catch (error) {
        console.error("Error fetching dropdown values:", error);
      }
    };

    fetchDropDownValues();
  }, []);

  const searchByAPI = async (searchValue) => {
    try {
      const response = await axios.get(`/api/search?search=${searchValue}`);

      dispatch(incrementFunction(response.data?.data));
      // setDropDownValues(response.data?.data);
    } catch (error) {
      console.error("Error fetching dropdown values:", error);
    }
  };

  const filteredDropDownValues = dropDownValues?.reduce((acc, item) => {
    if (keyValues?.some((value) => value?.key === item?.key)) {
      return acc;
    }
    return [...acc, item];
  }, []);

  const viewComponent = (src, time) => {
    return (
      <div className="flex gap-[4px] items-center">
        <Image src={src} width={16} height={16} alt="logo" />
        <p className="md:text-[12px] text-[10px] font-normal text-[#323A70]">
          {time}
        </p>
      </div>
    );
  };

  const displayViewComponent = (children, text) => {
    return (
      <div
        style={{ borderRight: "1px solid #E0E1EA" }}
        className="flex p-1 gap-1 w-fit items-center "
      >
        {children}
        <p className="text-[10px] font-semibold">{text}</p>
      </div>
    );
  };

  const handleOnclick = (event) => {
    setKeyValues([...keyValues, event]);
    setIsFocused(false);
  };

  const handleDelete = (item) => {
    const filtered = keyValues.filter((value) => value?.key !== item?.key);
    setKeyValues(filtered);
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    searchByAPI(e.target.value);
  };

  return (
    <div className="px-[24px] py-[20px] flex flex-col gap-[20px] border-t-[1px] border-b-[1px] border-[#E0E1EA]">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Image src={location} width={18} height={18} alt="logo" />
          <p className="text-[12px]">
            Stamford Bridge, London, United Kingdom{" "}
          </p>
        </div>
        <p className="text-[#0137D5] text-[12px] md:text-[14px] font-semibold">
          View Map
        </p>
      </div>
      <div className="p-1 relative w-[40%] rounded-md border-[1px] flex justify-between border-[#130061]">
        <div ref={inputRef} className="flex gap-2 items-center w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#51428E"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            type="text"
            placeholder="search events"
            className="text-[12px] w-full outline-none"
            value={searchValue}
            onChange={(e) => handleSearchChange(e)}
            onFocus={() => setIsFocused(true)}
          />
        </div>
        <ToggleComponent />
        {isFocused && (
          <div
            ref={dropdownRef}
            className="absolute top-[30px] border-[1px] z-[9999] border-gray-300 p-2 rounded-md left-0 w-full bg-white"
          >
            <div className="flex flex-col gap-2">
              {filteredDropDownValues?.length > 0 ? (
                <>
                  {filteredDropDownValues.map((item, index) => {
                    return (
                      <div
                        key={index}
                        onClick={() => handleOnclick(item)}
                        className="border-[1px] rounded-sm border-gray-300 cursor-pointer"
                      >
                        <p className="text-[12px] border-b-[1px] border-gray-300 p-1 font-medium">
                          {item?.name}
                        </p>
                        <div className="flex items-center">
                          {displayViewComponent(
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="black"
                              className="size-3"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                              />
                            </svg>,
                            item?.date
                          )}
                          {displayViewComponent(
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="black"
                              className="size-3"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                              />
                            </svg>,
                            item?.time
                          )}
                          {displayViewComponent(
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="black"
                              className="size-3"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                              />
                            </svg>,
                            item?.location
                          )}
                        </div>
                      </div>
                    );
                  })}
                </>
              ) : (
                <p className="text-[12px] text-[#51428E]">No results found</p>
              )}
            </div>
          </div>
        )}
      </div>
      {keyValues?.length > 0 && (
        <div className="max-md:flex md:grid md:grid-cols-3  max-md:flex-col gap-[5px] w-full">
          {keyValues.map((item, index) => {
            return (
              <div
                key={index}
                className="flex gap-[4px] w-full max-md:flex-col rounded-md md:items-center border-[1px] border-[#DADBE5] p-[6px]"
              >
                <div className="flex gap-[4px] items-center">
                  <Image
                    src={Cancel}
                    width={14}
                    onClick={() => {
                      handleDelete(item);
                    }}
                    height={14}
                    alt="cancel"
                    className="cursor-pointer w-[12px] h-[12px] md:w-[16px] md:h-[16px]"
                  />
                  <p className="md:text-[12px] text-[10px] font-medium">
                    {item?.name}
                  </p>
                </div>
                {viewComponent(calendar, item?.date)}
                {viewComponent(clock, item?.time)}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MapViewComponent;
