import React, { useState } from "react";
import Lucide from "../../lucide";
import { linkTo } from "./index";
import { useNavigate } from "react-router-dom";

function SideMenu({ openSidebar }) {
  const [dropDown, setDropDown] = useState(false);

  const navigate = useNavigate();

  const sideMenuArray = [
    {
      sectionName: "PAGES",
      menu: [
        {
          icon: "LayoutDashboard",
          pathName: "/",
          title: "Dashboard",
          subMenu: [
            {
              pathName: "/",
              title: "Main",
            },
            {
              pathName: "/",
              title: "Main",
            },
            {
              pathName: "/Main",
              title: "Main",
            },
            {
              pathName: "/Main",
              title: "Main",
            },
          ],
        },
        {
          icon: "LayoutDashboard",
          pathName: "Inbox",
          title: "Inbox",
        },
      ],
    },
    "divider",
    {
      sectionName: "MORE",
      menu: [
        {
          icon: "LayoutDashboard",
          pathName: "/components",
          title: "Components",
        },
        {
          icon: "LayoutDashboard",
          pathName: "/inbox",
          title: "Inbox",
        },
      ],
    },
  ];

  //   TODO : Add Style for Divider
  //   TODO : Add Style for menu items
  //   TODO : Add Style for Active menu item

  return (
    <>
      <div>
        {sideMenuArray.map((menu, index) => {
          if (menu === "divider") {
            return (
              <span
                key={index}
                className="my-3 border-dashed border-b block border-gray-300 opacity-40"
              ></span>
            );
          }
          return (
            <div key={index}>
              <span
                className={`inline-block mb-5 text-gray-300 text-opacity-50 text-xs duration-500`}
              >
                {openSidebar ? menu.sectionName : "..."}
              </span>
              <ul>
                {menu.menu.map((item, index) => {
                  return (
                    <li
                      onClick={() => linkTo(item, navigate)}
                      className=" py-1 px-0"
                      key={index}
                    >
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
                        <ul
                          className={`pl-8 ease-in duration-300 ${
                            !dropDown && "hidden"
                          }`}
                        >
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
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default SideMenu;
