import { useGetMoviesQuery } from 'generated/graphql';
import { NextPage } from 'next/types';

const Home: NextPage = () => {
    const { data } = useGetMoviesQuery()
    const movies = data?.movie || [];

    return (
        <div className='w-full flex justify-center'>
            <div id="home-page-container" className="max-w-5xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {movies.map((movie, index) => {
                    return (
                        <div className='col-span-1 bg-no-repeat h-[300px] relative bg-cover ' key={index}
                            style={{ backgroundImage: `url(${movie.poster})` }}>
                            <div className='absolute bottom-0 left-0 bg-black/70 text-center w-full py-2 text-white text-2xl'>
                                {movie.title}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


export default Home
