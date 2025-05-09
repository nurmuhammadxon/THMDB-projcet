import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

// bg image
import tredingBg from '../../assets/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg'

// components
import { SwiperMovies } from '../index'

const ButtonTrending = ({ title, isType, setIsType }) => {
    return (
        <button
            type='button'
            className={`rounded-4xl py-1 px-2 md:px-5 text-sm md:text-base font-semibold transition-all duration-200 ease-in-out cursor-pointer
    ${isType === title
                    ? 'bg-primary text-[#1ed5a9]'
                    : 'bg-white text-primary'}
    `}
            onClick={() => setIsType(title)}
        >
            {title}
        </button>
    )
}

function TodayMovie() {
    const [isTrending, setIsTrending] = useState('Today')
    const [data, setData] = useState([])
    const pathname = useLocation().pathname

    const TrendingOptions = (tredingType) => {
        return {
            method: 'GET',
            url: `https://api.themoviedb.org/3/movie/${tredingType}`,
            params: { language: 'en-US', page: '1' },
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjk5NWRhYWU1NTE4ZDZmYTI5MGViMmU4Y2Q0YTQ5NiIsIm5iZiI6MTc0NDg2Nzk2Ny40ODE5OTk5LCJzdWIiOiI2ODAwOTI3ZmVmNWFlNjg3Y2JkOWM5MzgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.fxp9Onc6ShRqWb6MYgV_abl01Xmc62Q8h1jJ_s3Ml_I'
            }
        };
    }

    const getMovieData = async () => {

        const trendingType = isTrending !== 'Today' ? 'top_rated' : 'popular';
        const options = TrendingOptions(trendingType);

        try {
            const res = await axios.request(options)
            if (res.data.length !== 0 && res.status === 200) {
                const resData = res.data.results

                setData(resData)
            } else {
                console.error("Ma'lumot topilmadi");
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getMovieData()
    }, [pathname, isTrending])

    return (
        <section
            className='w-full'
            style={{
                backgroundImage: `url(${tredingBg})`,
                backgroundPosition: '50% 200px',
                backgroundRepeat: "no-repeat"
            }}
        >
            <div className='w-full py-4 md:py-8 px-2 sm:px-6 lg:px-10 flex flex-col'>
                <div className='flex items-center justify-between gap-4 px-2 md:px-4'>
                    <h2 className='font-semibold text-xl sm:text-2xl text-gray-800'>
                        Trending
                    </h2>
                    <div className='flex items-center border border-primary rounded-full overflow-hidden'>
                        <ButtonTrending
                            title='Today'
                            isType={isTrending}
                            setIsType={setIsTrending}
                        />
                        <ButtonTrending
                            title='This Week'
                            isType={isTrending}
                            setIsType={setIsTrending}
                        />
                    </div>
                </div>

                <div className='mt-2 md:mt-6'>
                    <SwiperMovies data={data} />
                </div>
            </div>
        </section>

    )
}

export default TodayMovie