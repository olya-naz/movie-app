import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { animateScroll as scroll } from 'react-scroll';
import ModalVideo from 'react-modal-video';
import ApiTmdb from "../../api/api-tmdb";
import Loader from "../loader/loader";
import Vote from "../vote/vote";

import './movie-details.scss';
import './modal-video.scss';
import defaultImg from '../../assets/img/default-poster.jpg';

export default class MovieDetails extends Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
    };

    _apiCall = new ApiTmdb();

    state = {
        details: [],
        fetched: false,
        isOpen: false,
        videoSrc: null
    };

    openModal = () => {
        this.setState({
            isOpen: true
        });
    };

    componentDidMount() {
        this.updateItem();
        this.getVideoSrc();

        scroll.scrollToTop({
            smooth: true,
            duration: 0,
            delay: 0,
            isDynamic: true,
        });
    };
    componentDidUpdate(prevProps) {
        if (this.props.id !== prevProps.id) {
            this.updateItem();
            this.getVideoSrc();
        }
    };

    updateItem() {
        const {id} = this.props;

        this._apiCall.getMovie(id)
            .then(response => this.setState({
                details: response,
                fetched: true
            }));
    }

    getVideoSrc = () => {
        this._apiCall.getVideo(`${this.props.id}/videos`)
            .then(response => this.setState({
                videoSrc: response
            }))
            .catch( error => console.error(error));
    };

    render() {
        const { fetched, videoSrc } = this.state;
        const { image, backdrop, title, tagline, overview, genre, date, vote } = this.state.details;

        const bannerImg = (fetched && backdrop) ? `https://image.tmdb.org/t/p/original/${backdrop}` : null;
        const posterImage = (fetched && image) ? `https://image.tmdb.org/t/p/w500/${image}` : defaultImg;

        const genreList = this.state.fetched ?
                                    genre.map(item => {return <li key={item.id}>{item.name}</li>})
                                    : null;

        if(fetched) {
            return(
                <div className="movie-details">
                    <Helmet>
                        <title>{`${title} — MovieApp`}</title>
                    </Helmet>
                    <div className="backdrop-wr">
                        <div className="backdrop-inner" style={{backgroundImage: `url(${bannerImg})`}} />
                    </div>
                    <div className="movie-details-inner">
                        <div className="poster-wr hidden-sm hidden-xs">
                            <img src={posterImage} alt={`${title} img`}/>
                        </div>
                        <div className="details-wr">
                            <div className="top-block">
                                <h1>{title}</h1>
                                { tagline && <blockquote>"{tagline}"</blockquote> }
                            </div>
                            <Vote vote={vote} />
                            { date && <p><span className="descr-title">Date:</span> {date}</p> }
                            <p>
                                <span className="descr-title">Overview:</span> {overview}
                            </p>
                            <ul>
                                <li>
                                    <span className="descr-title">Genres:</span>
                                </li>
                                { genreList }
                            </ul>
                            { videoSrc && (
                                <button className="movie-button"
                                        onClick={ this.openModal } >
                                    <i className="icon-play" />
                                    <span>Watch Trailer</span>
                                </button>
                            )}
                        </div>
                    </div>

                    <ModalVideo channel='youtube'
                                isOpen={this.state.isOpen}
                                videoId={this.state.videoSrc}
                                onClose={ () => this.setState({isOpen: false}) } />
                </div>
            )
        } else {
            return <Loader />
        }
    }
};