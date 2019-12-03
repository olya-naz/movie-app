import React from 'react';
import MovieDetails from "../movie-details/movie-details";
import MovieList from "../movie-list/movie-list";

const MoviePage = ({ id, getData }) => {
    return(
        <>
            <MovieDetails id={id} />
            <MovieList id={id}
                       getData={ getData }
                       url={`${id}/recommendations`}
                       title='Recommended:' />
        </>
    )
};

export default MoviePage;