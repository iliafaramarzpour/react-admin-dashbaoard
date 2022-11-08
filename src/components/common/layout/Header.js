import React from "react";
import { Dropdown } from "flowbite-react";

function Header() {
  return (
    <>
      <header className="bg-white p-5 flex justify-start flex-row-reverse">
        <Dropdown label="Dropdown">
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block text-sm font-medium truncate">
              bonnie@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        -
      </header>
    </>
  );
}

export default Header;
