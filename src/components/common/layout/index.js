import React from "react";
import Aside from "./Aside";
import Header from "./Header";

import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <>
      <main className="min-h-full flex">
        <Aside />
        <section className="flex-1 bg-gray-50">
          <Header />
          <section className="px-36 py-6">
            <Outlet />
          </section>
        </section>
      </main>
    </>
  );
}

export default DashboardLayout;
