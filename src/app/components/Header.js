import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const links=[
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Productos",
    href: "/productos",
  },
  {
    label: "Contacto",
    href: "/contacto",
  }
]

const Header = () => {
  return (
    <header className='p-3 pl-4 flex justify-between items-center h-20 bg-blend-lighten md:bg-blend-darken'>
      <Link href={'/'}>
        <Image
          src={"/logo.png"}
          alt="SICnet-Logo"
          width={100}
          height={150}
        />
      </Link>
      <nav className='flex items-center'>
        {
          links.map(link => (
            <Link
              key={link.label}
              href={link.href}
              className={"text-base text-slate-100 p-3"}
            >
              {link.label}
            </Link>
          ))
        }
      </nav>
    </header>
  );
};
    
  


export default Header