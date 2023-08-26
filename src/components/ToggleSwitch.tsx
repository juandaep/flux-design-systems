"use client"
import React from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const ToggleSwitch: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex items-center">
      <MoonIcon className="w-6 h-6 mr-2 text-gray-600 dark:text-yellow-400" />
      <label className="switch">
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
        <span className="slider round"></span>
      </label>
      <SunIcon className="w-6 h-6 ml-2 text-yellow-400 dark:text-gray-600" />
    </div>
  );
};

export default ToggleSwitch;
