import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { LuSettings2 } from "react-icons/lu";
import FilterDropdown from "./DropDowns/FilterDropdown";
import { FaArrowsUpDown } from "react-icons/fa6";
import LogoFilter from "./LogoFilter";
import { IoClose } from "react-icons/io5";
import Properties from "./Property";
import axios from "axios";

type Property = {
  id: number;
  propertyName: string;
  price: number;
  location: string;
  locationDetails: string;
  unitType: string;
  bedrooms: number;
  carParking: number;
  unitSize: number;
  propertyPhoto: string;
};

interface ApiResponse {
  properties: Property[];
}

const Filter = () => {
  const [openDest, setOpenDest] = useState(false);
  const [openPro, setOpenPro] = useState(false);
  const [openBedrooms, setOpenBedrooms] = useState(false);
  const [openFilterPage, setOpenFilterPage] = useState(false);
  const [properties, setProperties] = useState<Property[]>([]);
  const [selectedUnitType, setSelectedUnitType] = useState("");
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [resultsCount, setResultsCount] = useState(filteredProperties.length);
  const [filterOn, setFilterOn] = useState(false);

  const toggleDestDropdown = () => {
    setOpenDest(!openDest);
    setOpenPro(false);
    setOpenBedrooms(false);
  };

  const toggleProDropdown = () => {
    setOpenPro(!openPro);
    setOpenDest(false);
    setOpenBedrooms(false);
  };

  const toggleBedroomsDropdown = () => {
    setOpenBedrooms(!openBedrooms);
    setOpenPro(false);
    setOpenDest(false);
  };

  useEffect(() => {
    axios
      .get<ApiResponse>("http://127.0.0.1:8000/allProperties/")
      .then((response) => {
        setProperties(response.data.properties);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    const filteredProperties = properties.filter((property) =>
      selectedUnitType ? property.unitType === selectedUnitType : true
    );

    setFilteredProperties(filteredProperties);

    const timeoutId = setTimeout(() => {
      setResultsCount(filteredProperties.length);
    }, 0);

    return () => clearTimeout(timeoutId); // Cleanup function
  }, [properties, selectedUnitType]);

  const handleUnitTypeSelect = (unitType: string) => {
    setSelectedUnitType(unitType);
  };

  const handleBedroomsSelect = (bedrooms: number) => {
    axios
      .get(`http://127.0.0.1:8000/propertiesByBedrooms/${bedrooms}/`)
      .then((response) => {
        const updatedFilteredProperties = response.data.properties.filter(
          (property: Property) =>
            selectedUnitType ? property.unitType === selectedUnitType : true
        );
        setFilteredProperties(updatedFilteredProperties);
        setResultsCount(updatedFilteredProperties.length);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    setFilterOn(false);
  };

  const clearFilters = () => {
    setSelectedUnitType("");
    setFilteredProperties(properties);
    setFilterOn(true);
  };

  useEffect(() => {
    setResultsCount(filteredProperties.length);
  }, [filteredProperties]);

  return (
    <div className={`${openFilterPage ? "h-[100dvh] relative" : "h-full"}`}>
      <div className="flex justify-center">
        <div className="max-w-[1100px] w-[100%] lg:shadow-lg shadow-black/5 flex flex-col relative lg:pl-10 px-0 py-7 space-y-9">
          <LogoFilter onSelect={handleUnitTypeSelect} />
          <div className="lg:flex hidden items-center relative justify-between">
            <div className="flex">
              <FilterDropdown
                label="Destination"
                isOpen={openDest}
                toggleDropdown={toggleDestDropdown}
              />

              <FilterDropdown
                label="Project"
                isOpen={openPro}
                toggleDropdown={toggleProDropdown}
              />

              <FilterDropdown
                label="Bedrooms"
                isOpen={openBedrooms}
                toggleDropdown={toggleBedroomsDropdown}
                onChange={handleBedroomsSelect}
                options={[1, 2, 3, 4, 5]}
                filterOn={filterOn}
              />
            </div>
            <div className="flex items-center pr-10 space-x-2">
              <div
                className={`
         bg-white flex justify-center items-center cursor-pointer`}
                onClick={clearFilters}
              >
                <p
                  className="font-semibold text-black text-[15px] select-none 
                hover:bg-gray-100 transition-all p-5"
                >
                  Clear Filters
                </p>
              </div>
              <div className="flex w-fit bg-gray-900 mr-10 justify-center items-center">
                <p className="p-5 font-RobotoBold text-white ">
                  Show ({resultsCount}) Results
                </p>
              </div>
            </div>
          </div>

          {/* Mobile */}
          <div className="flex lg:hidden w-full">
            <div
              className="w-full"
              onClick={() => setOpenFilterPage(!openFilterPage)}
            >
              <FilterDropdown
                label="Filters"
                isOpen={openDest}
                icon={<LuSettings2 className="text-gray-500" size={25} />}
              />
            </div>

            <FilterDropdown
              label="Title (A-Z)"
              isOpen={openDest}
              toggleDropdown={toggleDestDropdown}
              icon={<FaArrowsUpDown className="text-gray-500" size={25} />}
            />
          </div>
        </div>
      </div>
      {openFilterPage && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50 overflow-auto flex flex-col">
          <button
            className="fixed left-[20px] top-[54px] flex items-center font-RobotoBold text-gray-700"
            onClick={() => setOpenFilterPage(!openFilterPage)}
          >
            <IoClose size={25} /> Close
          </button>
          <div className="flex flex-col w-full overflow-y-scroll -z-10">
            <div
              className="flex w-full justify-center fixed top-0 pt-14 pb-4 border-b-[1px] border-gray-200
             bg-white z-10"
            >
              <p className="font-RobotoBold">Filters</p>
            </div>

            <div className="space-y-7 pt-[125px] h-[100dvh]">
              <FilterDropdown
                label="Destination"
                isOpen={openDest}
                toggleDropdown={toggleDestDropdown}
              />

              <FilterDropdown
                label="Project"
                isOpen={openPro}
                toggleDropdown={toggleProDropdown}
              />

              <FilterDropdown
                label="Bedrooms"
                isOpen={openBedrooms}
                toggleDropdown={toggleBedroomsDropdown}
                onChange={handleBedroomsSelect}
                options={[1, 2, 3, 4, 5]}
              />
            </div>
          </div>
        </div>
      )}
      <div className="w-full flex flex-col justify-center py-20 2xl:max-w-[1200px] lg:max-w-[1000px] md:max-w-[700px] mx-auto space-y-10 overflow-hidden">
        <h1 className="text-[35px] font-RobotoBold pb-10 md:pl-0 pl-5">
          {selectedUnitType || "All Properties"}
        </h1>
        {filteredProperties.length === 0 ? (
          <p className="text-center text-gray-500 text-[20px] font-RobotoBold">
            Sorry, no properties match your selected filters.
          </p>
        ) : (
          filteredProperties.map((property) => (
            <Properties key={property.id} property={property} />
          ))
        )}
      </div>
    </div>
  );
};

export default Filter;
