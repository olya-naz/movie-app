import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../header/header";
import Footer from '../footer/footer';
import MainPage from '../pages/main-page';
import MoviePage from '../pages/movie-page';
import SearchPage from "../pages/search-page";
import Error from "../error/error";
import ApiTmdb from "../../api/api-tmdb";

import '../../assets/styles/_base.scss';

const {
    getAllMovies,
    getSearchResults,
    getSearchPagination
} = new ApiTmdb();

const App = () => {
    return(
        <>
            <Router>
                <Header />
                <main>
                    <Switch>
                        <Route path="/"
                               exact
                               render={() => {
                                   return <MainPage getData={ getAllMovies }/>
                               }}/>

                        <Route path="/movie/:id"
                               render={({ match }) => {
                                   const { id } = match.params;
                                   return <MoviePage id={ id }
                                                     getData={ getAllMovies } />
                               }} />

                        <Route path="/search/:query"
                               render={({ match }) => {
                                   const { query } = match.params;
                                   const n = query.indexOf('&');
                                   const title = query.substring(0, n !== -1 ? n : query.length);
                                   return <SearchPage getData={ getSearchResults }
                                                      getPagination={ getSearchPagination }
                                                      url={ query }
                                                      title={ title }/>
                               }} />
                        <Route component={ Error } />
                    </Switch>
                </main>
                <Footer />
            </Router>
        </>
    )
};

export default App;