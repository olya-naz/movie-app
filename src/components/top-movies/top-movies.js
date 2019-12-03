import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ApiTmdb from "../../api/api-tmdb";

import './top-movies.scss';

export default class TopMovies extends Component {
    _apiCall = new ApiTmdb();

    state = {
        movie: [],
        fetched: false
    };

    randomMovie = () => {
        const movieArr = [546554, 512200, 398978, 549053, 420809];
        const id = movieArr[Math.floor(Math.random() * movieArr.length)];
        this._apiCall.getMovie(`${id}`)
            .then(response => this.setState({
                movie: response,
                fetched: true
            }));
    };

    componentDidMount() {
        this.randomMovie();

        this.timer = setInterval(this.randomMovie, 7000);
    };
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        const { id, backdrop, title } = this.state.movie;
        const bannerImg = this.state.fetched ? `https://image.tmdb.org/t/p/original/${backdrop}` : null;

        return(
            <div className="top-rank-movie-block">
                <Link to={`/movie/${id}`}
                      style={{ backgroundImage: `url(${bannerImg})` }} >
                    <div className="content-wr">
                        <div className="container">
                            <h3>{title}</h3>
                            <div className="button-link"><button>More info</button></div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    };
};