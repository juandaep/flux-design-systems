"use client"
import { classNames } from '@/utils/classNames'
import React, { useState } from 'react'
import {
    EllipsisVerticalIcon
  } from "@heroicons/react/24/solid";

export const HomeMobileNav = () => {
    const [modalShow, setModalShow] = useState(false)

    const onModalNav = () => {
        setModalShow((status) => {
            if (status) {
                document.body.style.overflow = "auto"
            } else {
                document.body.style.overflow = "hidden"
            }
            return !status
        })
    }
    return (
      <div className={classNames('flex justify-center items-center p-2', 'md:hidden')}>
        <button
        type='button'
        className='w-6 h-6'
        aria-label='Nav Menu'
        onClick={onModalNav}>
            {modalShow ? <EllipsisVerticalIcon /> : <EllipsisVerticalIcon /> }
        </button>
      </div>
    )
}




