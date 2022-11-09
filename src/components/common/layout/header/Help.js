import React from "react";
import { Dropdown, Avatar } from "flowbite-react";
import InfoImages from "../../../../assets/images/icons/info.svg";

function Help() {
  return (
    <div className="bg-gray-100 rounded-full h-8 w-8 p-2 flex items-center justify-center hover:bg-gray-300 duration-500 mx-1">
      <Dropdown
        arrowIcon={false}
        inline={true}
        label={<Avatar alt="Info" img={InfoImages} size="xs" />}
        className="w-44"
      >
        <div className="text-xs text-slate-400 uppercase pt-1.5 pb-2 px-4 hover:bg-transparent cursor-default">
          NEED HELP?
        </div>
        <Dropdown.Item className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3">
          <svg
            className="w-3 h-3 fill-current text-indigo-300 shrink-0 mr-2"
            viewBox="0 0 12 12"
          >
            <rect y="3" width="12" height="9" rx="1" />
            <path d="M2 0h8v2H2z" />
          </svg>
          <span>Documentation</span>
        </Dropdown.Item>
        <Dropdown.Item className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3">
          <svg
            className="w-3 h-3 fill-current text-indigo-300 shrink-0 mr-2"
            viewBox="0 0 12 12"
          >
            <path d="M10.5 0h-9A1.5 1.5 0 000 1.5v9A1.5 1.5 0 001.5 12h9a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 0zM10 7L8.207 5.207l-3 3-1.414-1.414 3-3L5 2h5v5z" />
          </svg>
          <span>Support Site</span>
        </Dropdown.Item>
        <Dropdown.Item className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3">
          <svg
            className="w-3 h-3 fill-current text-indigo-300 shrink-0 mr-2"
            viewBox="0 0 12 12"
          >
            <path d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z" />
          </svg>
          <span>Contact us</span>
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
}

export default Help;
