import React from 'react'
import Link from 'next/link'
import Logo from "@/assets/logo.png"
import Image from 'next/image'

const Header = () => {
  return (
    <header className='my-12 flex gap-4 justify-evenly items-center p-2 text-xl text-white'>
      <Link href="/" className=' flex gap-5 items-center'>
        <Image src={Logo} className='w-24' alt="Mealy Meals Logo" priority />
        {/* 'priority' ensures that the image is always loaded as quickly as possible */}
        <p className='text-2xl oswald-400 font-bold tracking-wider'>MEALY MEALS</p>
      </Link>
      <nav >
        <ul className='flex justify-evenly gap-10 items-center'>
          <li>
            <Link href="/meals" className="hover:text-yellow-300 transition duration-500 hover:scale-110">
              Browse Meals
            </Link>
          </li>
          <li>
            <Link href="/community" className='hover:text-yellow-300 transition duration-500 ' >Foodies Community</Link>
          </li>
          <li>
            <Link href="/meals/share" className='hover:text-yellow-300 transition duration-500 ' >Share Meals</Link>
          </li>
        </ul>
      </nav>

    </header>
  )
}

export default Header
