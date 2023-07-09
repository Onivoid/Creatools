import React from 'react';
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/img/svg/Happy.svg";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={inter.className}>
      <div className='shadow-md'>
        <nav className='container mx-auto flex items-center justify-between'>
          <div className='flex items-center justify-between'>
            <Image src={Logo} alt="Logo" width={100} height={100} />
            <h1 className='text-2xl mr-2'>Creatools</h1>
            <p className='text-xs mt-2'>by Creartcom</p>
          </div>
          <ul className='flex gap-8'>
            <li className='text-lg'>
              <Link href="/">Accueil</Link>
            </li>
            <li className='text-lg'>
              <Link href="/favicons">Favicons</Link>
            </li>
          </ul>
        </nav>
      </div>
      {children}
    </div>
  );
}
