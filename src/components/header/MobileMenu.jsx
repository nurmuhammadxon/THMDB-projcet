import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// icons
import { IoMdClose } from "react-icons/io";

// data
import { navList } from '../../util/constatns';

// components 
import { AuthButton } from '../index'

function MobileMenu({ isOpen, onClose, AuthButtonType }) {
    const [subNavState, setSubNavState] = useState({});

    const toggleSubNav = (id) => {
        setSubNavState(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <div
            className={`fixed top-0 right-0 h-full max-w-[300px] w-full bg-primary p-4 z-50 transition-all duration-300 ease-in-out
            ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
            <div className='flex justify-end mb-4'>
                <button onClick={onClose} className='text-3xl text-white'>
                    <IoMdClose />
                </button>
            </div>
            <ul className='flex flex-col gap-4 text-white'>
                {
                    navList.map(item => (
                        <li key={item.id}>
                            <div
                                className='font-semibold cursor-pointer flex justify-between items-center'
                                onClick={() => item.sub__nav && toggleSubNav(item.id)}
                            >
                                <span>{item.title}</span>
                                {item.sub__nav && <span>{subNavState[item.id] ? '−' : '+'}</span>}
                            </div>
                            {
                                item.sub__nav && (
                                    <ul className={`pl-4 mt-1 flex-col gap-1 ${subNavState[item.id] ? 'flex' : 'hidden'}`}>
                                        {item.sub__nav.map(sub__item => (
                                            <li key={sub__item.id}>
                                                <Link
                                                    to={sub__item.link}
                                                    className='text-sm hover:underline'
                                                    onClick={onClose} // optional: menyuni yopish
                                                >
                                                    {sub__item.sub__title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )
                            }
                        </li>
                    ))
                }
            </ul>
            <div className='mt-4'>
                <AuthButton isLoggedIn={AuthButtonType} />
            </div>
        </div>
    );
}

export default MobileMenu;
