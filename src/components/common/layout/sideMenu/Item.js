import React, { useState } from "react";
import Lucide from "../../lucide";
import { linkTo } from "./index";
import { useNavigate } from "react-router-dom";

function MenuItem({ item, openSidebar }) {
  const [dropDown, setDropDown] = useState(false);
  const navigate = useNavigate();

  return (
    <li onClick={() => linkTo(item, navigate)} className=" py-1 px-0">
      <div
        className="flex items-center justify-between cursor-pointer text-white opacity-50 hover:opacity-100 duration-300 text-sm pb-3 ease-in transition "
        onClick={() => setDropDown(!dropDown)}
      >
        <div className="flex items-center ">
          <Lucide
            icon={item.icon}
            className="w-5 h-5 mr-3 text-gray-200 duration-300"
          />
          {openSidebar && item.title}
        </div>
        {item.subMenu && openSidebar && (
          <Lucide
            icon={`${!dropDown ? "ChevronDown" : "ChevronUp"}`}
            className="w-5 h-5 text-gray-200 duration-600 "
          />
        )}
      </div>
      {item.subMenu && openSidebar && (
        <ul className={`pl-8 ease-in duration-300 ${!dropDown && "hidden"}`}>
          {item.subMenu.map((item, index) => {
            return (
              <li
                onClick={() => linkTo(item, navigate)}
                key={index}
                className="text-white opacity-50 hover:opacity-100 duration-300 cursor-pointer text-sm pb-2"
              >
                {item.title}
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
}

export default MenuItem;
