import React from 'react'
import { useSelector } from 'react-redux'
import CircularRating from './CircularRating'

function MovieDetail() {
    const movieData = useSelector((state) => state.counter.value)
    const movie = movieData[0]

    if (!movie) return <div className="text-center text-white mt-20">Loading...</div>;

    return (
        <div
            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})` }}
            className='w-full min-h-screen bg-cover bg-center mt-16 md:mt-20'
        >
            <div className="bg-[#000000cc] w-full min-h-screen text-white px-4 py-8 md:px-12 flex flex-col md:flex-row items-start gap-8 md:gap-14 backdrop-blur-sm">
                {/* Poster */}
                <div className='w-full md:w-[300px] flex-shrink-0'>
                    <div className='w-full aspect-[2/3] overflow-hidden rounded-lg shadow-lg'>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path || movie.backdrop_path}`}
                            alt={`${movie.title || movie.name} movie image`}
                            className='w-full h-full object-cover'
                        />
                    </div>
                </div>

                {/* Movie Info */}
                <div className='w-full flex flex-col'>
                    <h1 className="text-2xl md:text-4xl font-bold">
                        {movie.title || movie.name}
                        <span className='ml-2 text-base font-normal opacity-80'>
                            ({movie.release_date?.split('-')[0]})
                        </span>
                    </h1>

                    <div className='flex flex-wrap items-center gap-3 mt-2 text-sm text-gray-300'>
                        <span className='border border-[#ffffff99] px-2 py-0.5 rounded'>R</span>
                        <span>{movie.release_date} ({movie.original_language?.toUpperCase()})</span>
                    </div>

                    {/* Rating */}
                    <div className='flex items-center gap-3 mt-5'>
                        <CircularRating
                            value={Math.round(movie.vote_average * 10)}
                            size='64px'
                        />
                        <span className='text-sm'>
                            User <br />
                            Score
                        </span>
                    </div>

                    {/* Overview */}
                    <div className='mt-8'>
                        <h3 className='font-semibold text-xl'>Overview</h3>
                        <p className='mt-2 text-sm md:text-base text-gray-200'>
                            {movie.overview}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetail
