import React from "react";
import MenuProfile from "../components/ModalProfile";
import { BellIcon, GiftIcon } from "@heroicons/react/outline";

const Config = () => {
  return (
    <div className="hidden md:block">
      <div className="ml-4 flex items-center md:ml-6">
        <button
          type="button"
          className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        >
          <span className="sr-only">View notifications</span>
          <BellIcon className="h-6 w-6" aria-hidden="true" />
        </button>

        <button
          type="button"
          className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white m-2"
        >
          <GiftIcon className="h-6 w-6" aria-hidden="true" />
        </button>

        <MenuProfile />
      </div>
    </div>
  );
};

export default Config;
