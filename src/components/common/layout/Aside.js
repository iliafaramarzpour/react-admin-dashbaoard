import React from "react";
import { ReactComponent as Logo } from "./../../../assets/images/logo.svg";
import SideMenu from "./sideMenu/SideMenu";

function Aside() {
  return (
    <>
      <nav className="col-span-2 bg-slate-800 py-5 px-10">
        <Logo className="mb-10" />
        <SideMenu />
      </nav>
    </>
  );
}

export default Aside;
