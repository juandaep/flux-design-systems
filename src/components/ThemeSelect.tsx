"use client";
import { themeOptions } from "@/api/themeOptions";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import { Fragment, useEffect, useState } from "react";

export const ThemeSelect = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center px-3 py-2 self-stretch">
      <Listbox value={theme} onChange={setTheme}>
        <Listbox.Label className="w-full text-base-700 text-base">Switch Theme</Listbox.Label>
        <div className="relative w-full">
        <Listbox.Button className="relative w-full cursor-default py-2.5 px-3 text-left capitalize rounded-lg border border-base-300 bg-white shadow-inner focus:outline-none">
            <span className="block truncate font-medium text-base text-base-800">{theme}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDownIcon
                className="h-5 w-5 text-base-500"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base border border-base-100 shadow-lg focus:outline-none">
              {themeOptions.map(themeItems => {
                const {name, value, Icon} = themeItems
                return(
                  <Listbox.Option
                  key={name}
                  value={value}
                  className={({ active }) =>
                    `flex cursor-default select-none py-1 px-2 gap-2 truncate font-medium items-center ${
                      active ? "bg-base-100 text-primary-main" : "text-gray-600"
                    }`
                  }
                >
                  <Icon className="h-5 w-5"/>
                  {name}
                </Listbox.Option>
                )
              })}
              {/* {themeOptions.map((themes, themeIDX) => (
                <Listbox.Option
                  key={themeIDX}
                  value={themes.value}
                  className={({ active }) =>
                    `flex cursor-default select-none py-1 px-2 gap-2 truncate font-medium items-center ${
                      active ? "bg-base-100 text-primary-main" : "text-gray-600"
                    }`
                  }
                >
                        {themes.name}
                </Listbox.Option>
              ))} */}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
      </div>
  );
};
