import React from 'react'
import { navbarData, copyRightIcon } from '@/assets'

const Navbar = () => {
  return (
    <div className="w-[70px] h-full fixed left-0 top-0 flex flex-col justify-between border-r border-gray-200 px-4 py-10 ">
      <a href="/#home">
        <span className="text-3xl font-semibold text-red-400">D</span>.
        <span className="block w-min rotate-90 origin-[left_bottom] text-[12px] font-semibold">
          Ichmoukhametov
        </span>
      </a>
      <div className="flex flex-col gap-y-3 sm:gap-y-2">
        {navbarData.map((item, i) => (
          <a
            key={i}
            className="group flex flex-col items-center gap-y-2"
            href={`/#${item.id}`}
          >
            <span className="text-2xl text-yellow-600 group-hover:scale-125 transition-all">
              {item.icon}
            </span>
            <span className="text-[10px] tracking-wide -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-center">
              {item.name}
            </span>
          </a>
        ))}
      </div>
      <p className="flex items-center justify-center text-[13px] text-gray-500 mt-6">
        <span className="absolute left-1/2 w-max flex items-center -rotate-90 origin-bottom-left tracking-wider">
          {copyRightIcon} 2025
        </span>
      </p>
    </div>
  )
}

export default Navbar
