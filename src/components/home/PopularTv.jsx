import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { SwiperMovies } from '../index'

function PopularTv() {
    const [isTrending, setIsTrending] = useState('All')
    const [data, setData] = useState([])
    const pathname = useLocation().pathname

    const trendingArr = ['All', 'Movies', 'TV']

    const handleTrend = () => {
        const currentIndex = trendingArr.indexOf(isTrending)
        let newIndex = currentIndex + 1
        if (newIndex >= trendingArr.length) {
            newIndex = 0
        }
        setIsTrending(trendingArr[newIndex])
    }

    const TrendingOptions = (tredingType) => {
        return {
            method: 'GET',
            url: `https://api.themoviedb.org/3/trending/${tredingType}/day`,
            params: { language: 'en-US' },
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjk5NWRhYWU1NTE4ZDZmYTI5MGViMmU4Y2Q0YTQ5NiIsIm5iZiI6MTc0NDg2Nzk2Ny40ODE5OTk5LCJzdWIiOiI2ODAwOTI3ZmVmNWFlNjg3Y2JkOWM5MzgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.fxp9Onc6ShRqWb6MYgV_abl01Xmc62Q8h1jJ_s3Ml_I'
            }
        };
    }

    const getMovieData = async () => {
        const trendingType = isTrending === 'Movies' ? 'movie' : isTrending.toLowerCase()
        const options = TrendingOptions(trendingType);

        try {
            const res = await axios.request(options)
            if (res.status === 200) {
                const resData = res.data.results
                setData(resData)
            } else {
                console.error("Ma'lumot topilmadi!");
            }

        } catch (error) {
            console.error('Xatolik yuz berdi!', error);
        }
    }
    
    useEffect(() => {
        getMovieData()
    }, [pathname, isTrending])


    return (
        <section className='w-full bg-white'>
            <div className='py-[30px] px-10'>
                <div className='flex items-center gap-5'>
                    <h2 className='font-semibold text-2xl'>What's Popular</h2>
                    <div>
                        <button
                            className='rounded-4xl py-1 px-5 text-base font-semibold transition-all duration-200 ease-in-out cursor-pointer bg-primary text-[#1ed5a9]'
                            onClick={handleTrend}
                        >
                            {isTrending}
                        </button>
                    </div>
                </div>
                <div className='my-5'>
                    <SwiperMovies data={data} />
                </div>
            </div>
        </section>
    )
}

export default PopularTv