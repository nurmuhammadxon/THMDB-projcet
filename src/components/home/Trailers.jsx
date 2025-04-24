import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { SwiperMovies } from '..';

const ButtonTrending = ({ title, isType, setIsType }) => {
    return (
        <button
            type='button'
            className={`
    rounded-4xl py-1 px-5 text-base font-semibold transition-all duration-200 ease-in-out cursor-pointer
    ${isType === title
                    ? 'bg-[#1ed5a9] text-primary'
                    : 'bg-inherit text-white'}
    `}
            onClick={() => setIsType(title)}
        >
            {title}
        </button>
    )
}

function Trailers() {
    const [isTrailers, setisTrailers] = useState('Now Playing')
    const [data, setData] = useState([])
    const [bgImage, setBgImage] = useState('')
    const pathname = useLocation().pathname

    const TrailersOptions = (trailerType) => {
        return {
            method: 'GET',
            url: `https://api.themoviedb.org/3/movie/${trailerType}`,
            params: { language: 'en-US', page: '1' },
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjk5NWRhYWU1NTE4ZDZmYTI5MGViMmU4Y2Q0YTQ5NiIsIm5iZiI6MTc0NDg2Nzk2Ny40ODE5OTk5LCJzdWIiOiI2ODAwOTI3ZmVmNWFlNjg3Y2JkOWM5MzgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.fxp9Onc6ShRqWb6MYgV_abl01Xmc62Q8h1jJ_s3Ml_I'
            }
        };
    }

    const getTrailers = async () => {
        const trailerType = isTrailers === 'Now Playing' ? 'now_playing' : 'top_rated'
        const options = TrailersOptions(trailerType);
        try {
            const res = await axios.request(options)
            if (res.status === 200) {
                const results = res.data.results
                setData(results)
                setBgImage(results[0].backdrop_path)
            }
        } catch (error) {
            console.error('Xatolik yuz berdi!', error);
        }
    }

    useEffect(() => {
        getTrailers()
    }, [pathname, isTrailers])

    return (
        <section
            className='max-w-[1400px] w-full mx-auto pt-[30px] px-10 bg-primary  transition-all duration-500 ease-in-out'
            style={{
                backgroundImage: bgImage ? `url(https://image.tmdb.org/t/p/original${bgImage})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className='flex items-center gap-5'>
                <h2 className='text-2xl font-semibold text-white'>Latest Trailers</h2>
                <div className='flex items-center border border-[#1ed5a9] rounded-4xl'>
                    <ButtonTrending
                        title='Now Playing'
                        isType={isTrailers}
                        setIsType={setisTrailers}
                    />
                    <ButtonTrending
                        title='Top Rated'
                        isType={isTrailers}
                        setIsType={setisTrailers}
                    />
                </div>
            </div>
            <div className='my-5'>
                <SwiperMovies data={data} setBgImage={setBgImage} />
            </div>
        </section>
    )
}

export default Trailers