import { Switch } from "@headlessui/react";
import { useState } from "react";

export const ThemeToggle = () => {
  const [enable, setEnable] = useState(false);

  return (
    <Switch.Group>
      <div className="flex px-2 py-3 items-center justify-between self-stretch">
        <Switch.Label className="text-base-700"> Switch Theme</Switch.Label>
        <Switch
          checked={enable}
          onChange={setEnable}
          className={`${
            enable
              ? "bg-primary-main bg-[url(https://cdn.jsdelivr.net/gh/juandaep/Icons@master/flux/moon.svg)]"
              : "bg-base-100 bg-[url(https://cdn.jsdelivr.net/gh/juandaep/Icons@master/flux/sun.svg)]"
          } relative inline-flex w-[64px] h-[32px] items-center shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-cover bg-center bg-no-repeat inset-0 left-0 top-0 transition-colors duration-200 ease-in-out focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span className="sr-only">Use Theme</span>
          <span
            aria-hidden="true"
            className={`${enable ? "translate-x-8" : "translate-x-1"}
        pointer-events-none inline-block w-[24px] h-[24px] transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out`}
          />
        </Switch>
      </div>
    </Switch.Group>
  );
};
