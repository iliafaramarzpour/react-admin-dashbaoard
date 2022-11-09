import React from "react";
import { Dropdown, Avatar } from "flowbite-react";
import NotificationsImages from "../../../../assets/images/icons/notifications.svg";

function Notifications() {
  return (
    <div className="bg-gray-100 rounded-full h-8 w-8 p-2 flex items-center justify-center hover:bg-gray-300 duration-500 mx-1 relative">
      <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-rose-500 border-2 border-white rounded-full"></div>
      <Dropdown
        arrowIcon={false}
        inline={true}
        label={
          <Avatar alt="Notifications" img={NotificationsImages} size="xs" />
        }
        className="w-80"
      >
        <div className="text-xs font-semibold text-slate-400 uppercase pt-1.5 pb-2 px-4">
          Notifications
        </div>

        <Dropdown.Item className="border-b border-slate-200 last:border-0 flex flex-col hover:bg-slate-50">
          <span className="block text-sm mb-2">
            📣
            <span className="font-medium text-slate-800 pl-2">
              Edit your information in a swipe
            </span>
            Sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim.
          </span>
          <span className="inline-block text-xs font-medium text-slate-400 self-baseline">
            Feb 12, 2021
          </span>
        </Dropdown.Item>

        <Dropdown.Item className="border-b border-slate-200 last:border-0 flex flex-col hover:bg-slate-50">
          <span className="block text-sm mb-2">
            📣
            <span className="font-medium text-slate-800 pl-2">
              Edit your information in a swipe
            </span>
            Sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim.
          </span>
          <span className="block text-xs font-medium text-slate-400 self-baseline">
            Feb 9, 2021
          </span>
        </Dropdown.Item>

        <Dropdown.Item className="border-b border-slate-200 last:border-0 flex flex-col hover:bg-slate-50">
          <span className="block text-sm mb-2">
            🚀
            <span className="font-medium text-slate-800 pl-2">
              Say goodbye to paper receipts!
            </span>{" "}
            Sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim.
          </span>
          <span className="block text-xs font-medium text-slate-400 self-baseline">
            Jan 24, 2020
          </span>
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
}

export default Notifications;
