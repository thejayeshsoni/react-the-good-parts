import React, { useRef } from "react";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const handleSearchBtn = () => {
    console.log(searchText.current.value);
    // api call to show recommendations
  };
  return (
    <div>
      <form className="max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            ref={searchText}
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#B20710] focus:border-[#B20710] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#B20710] dark:focus:border-[#B20710]"
            placeholder="What would you like to watch today...?"
            required
          />
          <button
            onClick={handleSearchBtn}
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-[#B20710] hover:bg-[#E50914] focus:ring-4 focus:outline-none focus:ring-[#B20710] font-medium rounded-lg text-sm px-4 py-2 dark:bg-[#B20710] dark:hover:bg-[#E50914] dark:focus:ring-[#E50914]"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default GptSearchBar;
