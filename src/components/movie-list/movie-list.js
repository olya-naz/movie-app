import React from 'react';
import PropTypes from 'prop-types';
import { animateScroll as scroll } from 'react-scroll';
import MovieItem from "../movie-item/movie-item";
import Loader from "../loader/loader";
import Error from "../error/error";

import './movie-list.scss';

export default class MovieList extends React.Component {
    static propTypes = {
        url: PropTypes.string.isRequired,
        getData: PropTypes.func.isRequired,
        title: PropTypes.string
    };

    state = {
        itemList: [],
        fetched: false
    };

    componentDidMount() {
        this.updateItem();
    };

    componentDidUpdate(prevProps) {
        if (this.props.url !== prevProps.url) {
            this.updateItem();

            scroll.scrollToTop({
                smooth: true,
                duration: 500,
                delay: 0,
                isDynamic: true,
            });
        }
    };

    updateItem() {
        const { getData, url } = this.props;
        if (!url) {
            return;
        }

        getData(url)
            .then(response => this.setState({
                itemList: response,
                fetched: true
            }));
    }
    render() {
        const { itemList, fetched } = this.state;
        const { title } = this.props;

        const data = itemList.map(item => {
            const { id } = item;

            return (
                <MovieItem key={ id }
                           { ...item } />
            );
        });

        if(fetched) {
            return(
                <>
                    <div className="movie-list">
                        <div className="container">
                            <h2>{ title }</h2>
                            { data.length ? (
                                <div className="movie-list-wr">
                                    { data }
                                </div>)
                                : <Error /> }
                        </div>
                    </div>
                </>
            );
        } else {
            return(
                <Loader />
            )
        }
    }
};