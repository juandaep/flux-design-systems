import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline"
import Image from 'next/image'
import Link from 'next/link'
import { homeNavLinks } from './navLinks'
import { HomeMobileNav } from "./MobileNav"
import { classNames } from "@/utils/classNames"

export const HomeNavbar = () => {
  return (
    <nav
    className='flex p-4 justify-between items-center'>
        <Image
        src='/logo.svg'
        alt='Flux Logo'
        priority
        width={96}
        height={32} />

        <div className="flex items-center gap-6 font-medium text-neutral-600">      
        <div className={classNames('hidden', 'md:flex md:space-x-6')}>
            {homeNavLinks.map((link) => (
                <Link
                key={link.title}
                href={link.href}
                className='transition-all hover-animation hover:text-primary-main'>
                    {link.title}
                </Link>
            ))}

            <Link
            href="https://www.figma.com/community/file/1172091403014887161"
            className='transition-all flex items-center gap-2 hover-animation hover:text-primary-main'
            target='_blank'>
                Figma 
                <span className='w-4 h-4'>
                    <ArrowTopRightOnSquareIcon />
                </span>
            </Link>
        </div>
            <HomeMobileNav />
        </div>
    </nav>
  )  
}
