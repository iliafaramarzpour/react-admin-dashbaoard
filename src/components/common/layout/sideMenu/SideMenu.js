import React from "react";
import MenuItem from "./Item";

function SideMenu({ openSidebar }) {
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
                    <MenuItem
                      key={index}
                      item={item}
                      openSidebar={openSidebar}
                    />
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
