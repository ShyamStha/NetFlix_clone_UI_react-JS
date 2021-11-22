import requests from './request'
import { useEffect, useState } from 'react'
const Banner = function () {
    const [movie, setMovies] = useState([])
    useEffect(() => {
        fetch('https://api.themoviedb.org/3' + `${requests.fetchNetflixOriginals}`).then(function (res) {
            return res.json()
        }).then(function (value) {
            setMovies(
                value.results[Math.floor(Math.random() * value.results.length - 1)]

            )


        })
    }, [])
    return (
        <header className="banner"
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url("https://image/tmbd.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center"
            }}
        >
            <div className="banner-contents">
                <h1></h1>
            </div>
        </header>
    )
}
export default Banner