import { useState, useEffect } from 'react'
import axios from './axios'
import './Row.css'
const baseImgUrl = "https://image.tmdb.org/t/p/original/"
const Row = function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        // async function fetchData() {
        //     const request = await axios.get(fetchUrl)
        //     setMovies(request.data.results)

        //     return request
        // }
        // fetchData()


        fetch('https://api.themoviedb.org/3' + `${fetchUrl}`).then(function (res) {
            return res.json()
        }).then(function (data) {
            setMovies(data.results)


        })
    }, [fetchUrl])
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row_posters'>
                {/* several row posters */}
                {movies.map((movie) => (
                    <img
                        key={movie.id}
                        className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                        src={`${baseImgUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ))}

            </div>
        </div>
    );
}

export default Row;