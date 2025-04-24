import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function HomeBanner() {
    const [movieImg, setMovieImg] = useState('')
    const pathname = useLocation().pathname

    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/discover/movie',
        params: {
            include_adult: 'false',
            include_video: 'false',
            language: 'en-US',
            page: '1',
            sort_by: 'popularity.desc'
        },
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjk5NWRhYWU1NTE4ZDZmYTI5MGViMmU4Y2Q0YTQ5NiIsIm5iZiI6MTc0NDg2Nzk2Ny40ODE5OTk5LCJzdWIiOiI2ODAwOTI3ZmVmNWFlNjg3Y2JkOWM5MzgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.fxp9Onc6ShRqWb6MYgV_abl01Xmc62Q8h1jJ_s3Ml_I'
        }
    };

    const getImageData = async () => {
        try {
            const res = await axios.request(options)
            const data = res.data.results

            if (data.length === 0) {
                console.error("Ma'lumot topilmadi!")
                return;
            }
            const randomIndex = Math.floor(Math.random() * data.length);
            const selectMovie = data[randomIndex]

            if (selectMovie && selectMovie.backdrop_path) {
                setMovieImg(selectMovie.backdrop_path)
            } else {
                console.error("Tanlangan filmda rasm mavjud emas.");

            }
        } catch (error) {
            console.error(`Xatolik yuz berdi ${error.messenger}`);
        }
    }

    useEffect(() => {
        getImageData()
    }, [pathname])

    return (
        <section
            className='w-full h-[400px]'
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/w500${movieImg}")`,
                backgroundSize: "cover",
                backgroundPosition: "start",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className='w-full h-full bg-[#00000033] flex items-center justify-center md:py-[30px] px-5 md:px-10'>
                <div>
                    <div className='md:mb-5'>
                        <h2 className='text-3xl md:text-5xl font-bold leading-none text-white'>Welcome.</h2>
                        <h3 className='text-2xl md:text-3xl font-semibold mt-1.5 md:mt-4 text-white'>
                            Millions of movies, TV shows and people to discover. Explore now.
                        </h3>
                    </div>
                    <div className='w-full'>
                        <form className='mt-4 md:mt-7 relative top-0 left-0'>
                            <label className='w-full flex items-center justify-between bg-white rounded-4xl pl-5
                            '>
                                <input
                                    type="text"
                                    placeholder='Search for a movie, tv show, person......'
                                    className='h-9 md:h-11 text-sm ms:text-base text-[#00000080] py-2.5 w-full outline-none'
                                />
                                <span className='h-9 md:h-11 md:py-2.5 px-4 md:px-6 rounded-4xl text-sm md:text-base text-white cursor-pointer hover:text-primary transition-colors duration-200 ease-in-out flex items-center justify-center'
                                    style={{
                                        background: 'linear-gradient(to right, rgba( 30, 213, 169, 1) 0%, rgba( 1, 180, 228, 1) 100%)'
                                    }}
                                >
                                    Search
                                </span>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeBanner