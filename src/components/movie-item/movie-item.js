import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Vote from '../vote/vote'

import './movie-item.scss';
import defaultImg from "../../assets/img/default-poster.jpg";

const MovieItem = ({ id, title, image, vote }) => {
    const posterImage = image ? `https://image.tmdb.org/t/p/w342/${image}` : defaultImg;

    return(
        <div className="movie-item">
            <Link to={`/movie/${id}`} >
                <figure>
                    <img src={posterImage} alt={`${title} img`}/>
                    <figcaption>{title}</figcaption>
                </figure>
            </Link>
            <Vote vote={vote} />
        </div>
    )
};

export default MovieItem;

MovieItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    image: PropTypes.string,
    vote: PropTypes.number,
};