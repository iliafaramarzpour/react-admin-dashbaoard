import React, { useState } from "react";
import SideMenu from "./sideMenu/SideMenu";
import Lucide from "../lucide";
import { ReactComponent as Logo } from "./../../../assets/images/logo.svg";

function Aside() {
  const [openSidebar, setOpenSidebar] = useState(true);
  return (
    <>
      <nav
        className={`${
          openSidebar ? "w-64" : "w-20"
        } bg-slate-800 py-4 px-6 relative duration-500`}
      >
        <div
          className="absolute -right-3 top-5 bg-slate-800 rounded-lg shadow-sm p-1 cursor-pointer duration-500"
          onClick={() => setOpenSidebar(!openSidebar)}
        >
          <Lucide
            className="text-gray-300 h-5 hover:text-gray-50 duration-300"
            icon={`${openSidebar ? "ArrowLeft" : "ArrowRight"}`}
          />
        </div>
        <Logo className="mb-10" />
        <SideMenu openSidebar={openSidebar} />
      </nav>
    </>
  );
}

export default Aside;
