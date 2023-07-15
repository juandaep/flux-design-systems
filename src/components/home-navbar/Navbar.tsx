import { classNames } from "@/utils/classNames"
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline"
import Image from 'next/image'
import Link from 'next/link'
import { HomeMobileNav } from "./MobileNav"
import { homeNavLinks } from './navLinks'

export const HomeNavbar = () => {
  return (
    <nav
    className={classNames('flex p-4 justify-between items-center', 'md:px-12 md:py-6')}>
        <div className={classNames('relative w-[60px] h-[18px]', 'md:w-[96px] md:h-[32px]')}>
        <Image
        src='/logo.svg'
        alt='Flux Logo'
        priority
        fill />
        </div>

        <div className="flex items-center gap-6 font-medium text-base-600">      
        <div className={classNames('hidden', 'md:flex md:space-x-6')}>
            {homeNavLinks.map((link) => (
                <Link
                key={link.title}
                href={link.href}
                className={classNames('transition-all hover-animation', 'hover:text-primary-main')}>
                    {link.title}
                </Link>
            ))}

            <Link
            href="https://www.figma.com/community/file/1172091403014887161"
            className={classNames('transition-all flex items-center gap-2', 'hover-animation hover:text-primary-main')}
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
