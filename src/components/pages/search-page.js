import React from 'react';
import { Helmet } from 'react-helmet';
import MovieList from "../movie-list/movie-list";
import Pagination from "../pagination/pagination";

const SearchPage = ({ getData, getPagination, url, title }) => {
    return(
        <>
            <Helmet>
                <title>{`Search: ${url} — MovieApp`}</title>
            </Helmet>
            <MovieList getData={ getData }
                       url={ url }
                       title={`Search results: ${title}`} />
            <Pagination getData={ getPagination }
                        url={ url } />
        </>
    )
};

export default SearchPage;