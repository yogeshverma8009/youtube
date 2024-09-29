import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImYoutube2 } from "react-icons/im";
import { FiSearch } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { SEARCH_API } from "../utils/constant";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  useEffect(() => {
    // console.log(searchQuery);
    //make an api call after ever key press
    //but if the difference between 2 API calls is <200ms
    //decline the API call
    const timer = setTimeout(() => getSearchSuggestion(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  /**
   * debouncing in react using useEffect hooks
   *key - i
   * -render the componenet
   * -useEffect();
   * -start timer => make api call after 200 ms
   * -suppose when i am click next key before 200ms i.e ip then it will be
   *
   * key - ip
   * -when run before 200ms destory the component(useEffct return method)
   * -re-render the component
   * -useEffect()
   * -start timer => make api call after 200ms once time also but it is new timer start
   *
   *
   ***/

  const getSearchSuggestion = async () => {
    console.log(searchQuery);
    const data = await fetch(SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);
  };
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-cols-12 gap-4 p-4 shadow-lg items-center bg-white rounded-lg top-0 sticky">
      {/* Left section: Hamburger menu and YouTube logo */}
      <div className="flex items-center col-span-2">
        <GiHamburgerMenu
          onClick={toggleMenuHandler}
          className="h-6 w-6 text-gray-500 cursor-pointer"
          aria-label="Toggle menu"
        />
        <a href="/">
          <ImYoutube2
            className="h-10 w-36 text-red-600 ml-4"
            aria-label="YouTube logo"
          />
        </a>
      </div>

      {/* Middle section: Search bar */}
      <div className="col-span-8 flex justify-center relative">
        <input
          className="w-[40rem] border-2 border-gray-300 rounded-l-full p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          type="text"
          placeholder="Search..."
          aria-label="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestion(true)}
          onBlur={() => setShowSuggestion(false)}
        />
        <button
          className="px-4 py-2 bg-gray-400 text-white font-bold rounded-r-full hover:bg-gray-700 transition-all flex items-center"
          aria-label="Search button"
        >
          <FiSearch className="h-[27px] w-5" />
        </button>

        {/* Search suggestions dropdown */}
        {showSuggestion && (
          <div className=" fixed top-[70px] bg-white mr-11 py-2 px-[6px] w-[40rem] rounded-lg  shadow-lg">
            <ul>
              {suggestions.map((s)=> (
                <li key={s} className="py-2 px-3 hover:bg-gray-100 cursor-pointer rounded-lg flex items-center  hover:shadow-lg transition-shadow duration-300">
                <FiSearch className="mr-2" /> {s}
              </li>
              ))}
              
            </ul>
          </div>
        )}
      </div>

      {/* Right section: User icon */}
      <div className="col-span-2 flex justify-end">
        <FaUser
          className="h-8 w-8 text-gray-500 cursor-pointer"
          aria-label="User icon"
        />
      </div>
    </div>
  );
};

export default Head;
