import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// icons
import { FaSearch } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";

// lgog
import logo from '../../assets/TMDB logo.svg';

// constants
import { navList } from '../../util/constatns'

// search
import { AuthButton, MobileMenu, Search } from '../index'

function Header() {
    const [addMovie, setAddMovie] = useState(false);
    const [isLoggedIn, setLoggendIn] = useState(false);
    const [isLanguage, setIsLanguage] = useState(false);
    const [isSearch, setIsSearch] = useState(false)
    const [isMenuMobile, setIsMenuMobile] = useState(false)
    const [showHeader, setShowHeader] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    const controlHeader = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) {
                setShowHeader(false)
            } else {
                setShowHeader(true)
            }
            setLastScrollY(window.scrollY)
        }
    }


    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlHeader);

            return () => {
                window.removeEventListener('scroll', controlHeader);
            };
        }
    }, [lastScrollY]);

    return (
        <header
            className={`fixed top-0 left-0 w-full bg-primary shadow z-50 transition-transform duration-300 
        ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}
        >
            <div className='max-w-[1400px] w-full mx-auto flex items-center justify-between px-5 lg:px-10 py-5'>
                <div className='flex items-center gap-4'>
                    <a href="/">
                        <img src={logo} alt="The Movie Database (TMDB)" width={154} height={20} />
                    </a>
                    {/* desktop navbar */}
                    <nav>
                        <ul className='hidden md:flex items-center gap-5'>
                            {
                                navList.map(item => (
                                    <li
                                        key={item.id}
                                        className='group relative text-white font-semibold text-base cursor-pointer'
                                    >
                                        <span>{item.title}</span>

                                        {item.sub__nav && (
                                            <div className='absolute top-full left-0 mt-2 bg-white rounded-md shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-[180px]'>
                                                <ul className='py-2'>
                                                    {item.sub__nav.map(sub__item => (
                                                        <li
                                                            key={sub__item.id}
                                                            className='text-xs px-3 py-1.5 hover:bg-gray-100'
                                                        >
                                                            <Link
                                                                to={sub__item.link}
                                                                className='text-black font-normal'
                                                            >
                                                                {sub__item.sub__title}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                </div>

                {/* mobile menu */}
                <div className='block md:hidden relative'>
                    <div>
                        <button
                            className='text-3xl text-white'
                            onClick={() => setIsMenuMobile(true)}
                        >
                            <IoMdMenu />
                        </button>
                    </div>
                    <MobileMenu
                        isOpen={isMenuMobile}
                        onClose={() => setIsMenuMobile(false)}
                        AuthButtonType={isLoggedIn}
                    />
                </div>

                {/* desktop menu */}
                <div className='hidden md:flex items-center gap-4 lg:gap-7'>
                    <div className='relative z-40'>
                        <button
                            type='button'
                            className='size-7 border border-white rounded-sm text-white bg-primary font-semibold uppercase relative cursor-pointer hover:text-primary hover:bg-white transition-all duration-200 ease-in'
                            onClick={() => setIsLanguage(prev => !prev)}
                        >
                            EN
                        </button>
                    </div>
                    <AuthButton isLoggedIn={isLoggedIn} />
                    <div>
                        <button
                            type='button'
                            className='text-xl text-[#01b4e4] cursor-pointer'
                            onClick={() => setIsSearch(prev => !prev)}
                        >
                            <FaSearch />
                        </button>
                    </div>
                </div>
            </div>

            {/* desktop search */}
            <div className='hidden md:block bg-white'>
                <Search isSearch={isSearch} setIsSearch={setIsSearch} />
            </div>
        </header>
    );
}

export default Header;
