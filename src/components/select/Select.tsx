"use client";
import React, { useState } from "react";
import { Option } from "./interfaces";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface SelectProps {
  placeholder?: string;
  value: any
  options: Option[];
  selected: Option | null;
  onChange: (selection: Option) => void;
};

export const Select: React.FC<SelectProps> = ({ placeholder, selected, options, onChange }) => {
  const [showOptions, setShowOptions] = useState(false);

  return (
      <div className="relative">
          <div onClick={() => setShowOptions(!showOptions)} className="flex px-4 py-2 border border-base-300 w-[280px] cursor-pointer justify-between">
              <span className="text-sm">{selected ? selected.label : placeholder}</span>
              <span><ChevronDownIcon className="w-4 h-4" /></span>
          </div>
          {showOptions && (
              <div className="absolute w-[280]">
                  {options.map(option => (
                      <div onClick={() => {
                          onChange(option);
                          setShowOptions(false);
                      }} key={option.value} className="flex w-[280] bg-base-400 px-4 py-2 border border-base-700">
                          <span>{option.label}</span>
                      </div>
                  ))}
              </div>
          )}
      </div>
  );
};
