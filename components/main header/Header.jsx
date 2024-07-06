'use client'

import React from 'react'
import Link from 'next/link'
import Logo from "@/assets/logo.png"
import Image from 'next/image'
import HeaderBG from './HeaderBG'
import NavLink from './nav-link'

const Header = () => {

  return (
    <>
      <HeaderBG />
      <header className='max-h-40 my-12 flex gap-4 justify-evenly items-center p-2 text-xl text-white'>
        <Link href="/" className=' flex gap-5 items-center'>
          <Image src={Logo} className='w-24' alt="Mealy Meals Logo" priority />
          {/* 'priority' ensures that the image is always loaded as quickly as possible */}
          <p className='text-2xl oswald-400 font-bold tracking-wider'>MEALY MEALS</p>
        </Link>
        <nav >
          <ul className='flex justify-evenly gap-10 items-center'>
            <li>
              <NavLink href="/meals">
                Browse Meals
              </NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>

          </ul>
        </nav>

      </header >
    </>
  )
}

export default Header
