import React from "react";
import { Disclosure } from "@headlessui/react";
import Config from "../components/Config";
import Logo from "../assets/images/logo.png"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Pizzas", href: "#", current: false },
  { name: "Bebidas", href: "#", current: false },
  { name: "Sobremesas", href: "#", current: false },
  { name: "Contato", href: "#", current: false },
];

const Menu = () => {
  return (
    <Disclosure as="nav" className="bg-black">
      <>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-16 ">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10"
                  src={Logo}
                  alt="Workflow"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "px-3 py-2 rounded-md text-sm font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <Config />
          </div>
        </div>

        <Disclosure.Panel className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Disclosure.Button
                key={item.name}
                as="a"
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block px-3 py-2 rounded-md text-base font-medium"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </Disclosure.Button>
            ))}
          </div>
        </Disclosure.Panel>
      </>
    </Disclosure>
  );
};

export default Menu;
