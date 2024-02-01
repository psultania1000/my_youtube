import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5  shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png"
          alt="hamburger"
        />
        <img
          className="h-8 mx-3"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
          alt="YT-logo"
        />
      </div>
      <div className="col-span-10 px-10 flex">
        <input
          className="w-1/2  border border-gray-400 p-2 rounded-l-full"
          type="text"
        />
        <button>
          <div className="border border-gray-400 p-2 rounded-r-full bg-gray-100">
            <img
              className=" px-2 h-6"
              alt="search-icon"
              src="https://static-00.iconduck.com/assets.00/magnifying-glass-icon-2048x2048-hm9qywq7.png"
            />
          </div>
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-10"
          alt="user-logo"
          src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
        />
      </div>
    </div>
  );
};

export default Head;
