import React from 'react'
import { FaSearch } from 'react-icons/fa'

function Search({ isSearch = false, setIsSearch }) {
    return (
        <div className='max-w-[1400px] mx-auto border-y border-y-[#e3e3e3]'>
            <form className='w-full px-10'>
                <label
                    className='w-full flex items-center gap-7 cursor-text'
                    onClick={() => setIsSearch(prev => !prev)}
                >
                    <span>
                        <FaSearch />
                    </span>
                    <input
                        type="search"
                        placeholder='Search for a movie, tv show, person...'
                        className='w-full h-11 border-0 outline-none italic text-[#acacac]'
                    />
                </label>
            </form>
            <div>
                {
                    isSearch ? <></> : ''
                }
            </div>
        </div>
    )
}

export default Search