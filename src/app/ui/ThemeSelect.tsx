"use client";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import { Fragment, useEffect, useState } from "react";

const people = [
    { name: 'Light', value: 'light' },
    { name: 'Dark', value: 'dark' },
    { name: 'System', value: 'system' },
  ]

export const ThemeSelect = () => {
    const [mounted, setMounted] = useState(false)
    const {theme, setTheme} = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])
    if (!mounted) {
        return null
    }

  return (
    <Listbox value={theme} onChange={setTheme}>
      <Listbox.Button>{theme}</Listbox.Button>
      <Listbox.Options>
        {people.map((value) => (
          <Listbox.Option
            value={value.value}
            className="ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black"
          >
            <CheckIcon className="hidden ui-selected:block" />
            {value.name}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}