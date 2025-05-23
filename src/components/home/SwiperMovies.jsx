import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
// swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Scrollbar } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/scrollbar';
// icons
import { CgMoreO } from "react-icons/cg";
import { FaHeart, FaList, FaBookmark, FaStar } from "react-icons/fa";
// componetns
import { CircularRating } from '../index'
// redux
import { addMovie } from '../../store/CounterMovie'

function SwiperMovies({ data, setBgImage = false }) {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const [isMore, setIsMore] = useState(false)
    const swiperRef = useRef(null)
    const navigate = useNavigate()

    const releaseDate = (date) => {
        const releaseDateArr = date.split('-')
        const monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const day = releaseDateArr[2]
        const monthIndex = Number(releaseDateArr[1])
        const month = monthArr[monthIndex]
        const year = releaseDateArr[0]

        return `${month} ${day} ${year}`
    }

    const handleProgress = (swiper) => {
        const container = document.querySelector('.swiper__before')
        if (swiper.isBeginning) {
            container?.classList.remove('hide-gradient')
        } else {
            container?.classList.add('hide-gradient')
        }
    }

    const navigateBtn = (id) => {
        const newData = data.find(i => i.id === id)
        navigate(`/movie/${id}`)
        dispatch(addMovie(newData))
    }

    return (
        <div className='relative swiper__before'>
            <Swiper
                modules={[Mousewheel, Scrollbar]}
                slidesPerView={1.5}
                breakpoints={{
                    450: {
                        slidesPerView: 3,
                        spaceBetween: 10
                    },
                    640: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 6,
                        spaceBetween: 40,
                    },
                }}
                grabCursor={true}
                mousewheel={true}
                scrollbar={{ draggable: true }}
                onProgress={handleProgress}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                className='cursor-pointer py-5! h-auto'
            >
                {data.map((item) => (
                    <SwiperSlide
                        key={item.id}
                        className='mr-10'
                        onMouseEnter={() =>
                            setBgImage(item.backdrop_path || item.poster_path)}
                    >
                        <div>
                            <div className='w-full h-[225px] overflow-hidden rounded-lg shadow-md relative'>
                                <div
                                    className='w-full h-full bg-cover bg-center'
                                    style={{
                                        backgroundImage: `url(https://image.tmdb.org/t/p/w500${item.backdrop_path})`
                                    }}
                                    onClick={() => navigateBtn(item.id)}
                                />
                                <div className='absolute top-2 right-2 opacity-80 z-50'>
                                    <button
                                        className='size-5 bg-gray-400 hover:opacity-100 hover:brightness-125 flex items-center justify-center text-xl rounded-full transition duration-200 cursor-pointer'
                                        onClick={(e) => {
                                            e.preventDefault()
                                            setIsMore((prev) => (prev === item.id ? null : item.id))
                                        }}
                                    >
                                        <CgMoreO />
                                    </button>

                                    {isMore === item.id && (
                                        <div className='w-40 absolute top-8 right-0 bg-white shadow-md rounded-md p-2.5 z-50 text-sm'>
                                            <ul className='w-full space-y-1'>
                                                <li className='hover:bg-primary hover:text-gray-400 p-1 px-2 cursor-pointer flex items-center'>
                                                    <span className='mr-5'><FaList /></span>
                                                    Add to list
                                                </li>
                                                <li className='hover:bg-primary hover:text-gray-400 p-1 px-2 cursor-pointer flex items-center gap-1 border-t border-t-[#00000099]'>
                                                    <span><FaHeart /></span>
                                                    Favorite
                                                </li>
                                                <li className='hover:bg-primary hover:text-gray-400 p-1 px-2 cursor-pointer flex items-center gap-1 border-t border-t-[#00000099]'>
                                                    <span><FaBookmark /></span>
                                                    Watchlist
                                                </li>
                                                <li className='hover:bg-primary hover:text-gray-400 p-1 px-2 cursor-pointer flex items-center gap-1 border-t border-t-[#00000099]'>
                                                    <span><FaStar /></span>
                                                    Your reting
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className='w-full relative pt-7'>
                                <div className='absolute -top-5 left-2.5 size-[38px] p-0.5 bg-[#081c22] rounded-full flex items-center justify-center'>
                                    <CircularRating value={Math.round(item.vote_average * 10)} />
                                </div>
                                <h2
                                    className={`text-base font-bold ${setBgImage ? 'text-white' : ''}`}
                                >
                                    {item.title ? item.title : item.name}
                                </h2>
                                <p className={`text-base mt-2
                                    ${setBgImage ? 'text-[#e3e3e399]' : 'text-[#00000033]'}`
                                }>
                                    {
                                        item.release_date
                                            ? releaseDate(item.release_date)
                                            : releaseDate(item.first_air_date)
                                    }
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default SwiperMovies
