import React from "react";
import { Dropdown, Avatar } from "flowbite-react";

function UserMenu() {
  return (
    <Dropdown
      arrowIcon={true}
      inline={true}
      label={
        <Avatar
          alt="User settings"
          img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          rounded={true}
          size="sm"
          className="space-x-1"
        >
          <p className="text-sm">Jese Leos</p>
        </Avatar>
      }
      className="w-44"
    >
      <Dropdown.Header>
        <span className="block text-sm">Bonnie Green</span>
        <span className="block truncate text-sm font-medium italic">
          Administrator
        </span>
      </Dropdown.Header>
      <Dropdown.Item className="text-violet-400 hover:bg-transparent font-bold hover:text-violet-600 duration-500">
        Dashboard
      </Dropdown.Item>
      <Dropdown.Item className="text-violet-400 hover:bg-transparent font-bold hover:text-violet-600 duration-500">
        Sign out
      </Dropdown.Item>
    </Dropdown>
  );
}

export default UserMenu;
