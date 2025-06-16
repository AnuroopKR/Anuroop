import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='fixed top-0 w-screen h-14 bg-teal-800/20 backdrop-blur-md z-50 flex justify-between'>
      <div className='p-3 ' >
        <h1 className='text-amber-500 text-3xl mx-10 font-bold '>Portfolio</h1>
      </div>
      <div className='text-amber-500  m-auto flex gap-8 font-semibold'>
      <Link href="#about">About</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#blogs">Blogs</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </div>
  )
}

export default Header
