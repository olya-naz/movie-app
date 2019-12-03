import React from 'react';
import { Helmet } from 'react-helmet';
import TopMovies from "../top-movies/top-movies";
import MovieList from "../movie-list/movie-list";

const MainPage = ({ getData }) => {
    return(
        <>
            <Helmet>
                <title>MovieApp</title>
            </Helmet>
            <TopMovies />
            <MovieList getData={ getData }
                       url="popular"
                       title='Popular today:' />
        </>
    )
};

export default MainPage;