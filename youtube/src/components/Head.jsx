import React, { useEffect, useState } from "react";
import { CONSTANTS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/store/appSlice";
import { cachedSearchResults } from "../utils/store/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const cachedYoutubeSearchResults = useSelector((store) => store.search);
  const dispatch = useDispatch();

  {
    /**
     * debouncing-logic
     */
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      if (cachedYoutubeSearchResults[searchQuery]) {
        setSuggestions(cachedYoutubeSearchResults[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(
      CONSTANTS.YOUTUBE_AUTOCOMPLETE_API_URL.concat(searchQuery)
    );
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);

    dispatch(cachedSearchResults({ [searchQuery]: json[1] }));
  };

  const toggleMenuHanlder = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col shadow-lg p-2 m-1">
      <div className="flex col-span-1">
        <img
          className="h-8 cursor-pointer"
          alt="menu-icon"
          src={CONSTANTS.ICONS.HEMBURGER_MENU}
          draggable={false}
          onClick={() => toggleMenuHanlder()}
        />

        <img
          className="h-8 mx-2"
          alt="youtube-logo"
          src={CONSTANTS.ICONS.YOUTUBE_LOGO}
          draggable={false}
        />
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            className="px-5 w-1/2 border border-gray-500 p-2 rounded-l-full"
            placeholder="Search"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-500 px-5 py-2 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white py-2 px-2 w-[34rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  className="py-2 px-3 shadow-sm hover:bg-gray-100"
                >
                  🔍 {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8 cursor-pointer"
          alt="user-icon"
          src={CONSTANTS.ICONS.USER_ICON}
          draggable={false}
        />
      </div>
    </div>
  );
};

export default Head;
