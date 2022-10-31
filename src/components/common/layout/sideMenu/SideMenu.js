import React from "react";
import Lucide from "../../lucide";
import { linkTo } from "./index";
import { useNavigate } from "react-router-dom";

function SideMenu() {
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
              <span key={index} className="my-5 bg-red-500">
                divider
              </span>
            );
          }
          return (
            <div key={index}>
              <span className="inline-block mb-5 text-gray-300 text-opacity-50 text-xs">
                {menu.sectionName}
              </span>
              <ul>
                {menu.menu.map((item, index) => {
                  return (
                    <li
                      onClick={() => linkTo(item, navigate)}
                      className="mb-2 p-3"
                      key={index}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Lucide
                            icon={item.icon}
                            className="w-5 h-5 mr-5 text-gray-200"
                          />
                          {item.title}
                        </div>
                        {item.subMenu && (
                          <Lucide
                            icon="ChevronDown"
                            className="w-5 h-5 mr-5 text-gray-200"
                          />
                        )}
                      </div>
                      {item.subMenu && (
                        <ul>
                          {item.subMenu.map((item, index) => {
                            return (
                              <li
                                onClick={() => linkTo(item, navigate)}
                                key={index}
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
