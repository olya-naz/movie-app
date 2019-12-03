import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './pagination.scss';

export default class Pagination extends Component {
    static propTypes = {
        url: PropTypes.string.isRequired,
        getData: PropTypes.func.isRequired
    };

    state = {
        data: null,
        loading: true
    };
    componentDidMount() {
        this.getPage();
    }
    componentDidUpdate(prevProps) {
        if(prevProps.url !== this.props.url) {
            this.getPage();
        }
    }
    getPage() {
        const { getData, url } = this.props;

        getData(url)
            .then(response => this.setState({
                data: response,
                loading: false
            }));
    }

    render() {
        if(!this.state.loading) {
            const { page, total_pages } = this.state.data;

            let path = window.location.pathname;
            const n = path.indexOf('&');
            path = path.substring(0, n !== -1 ? n : path.length);

            const prevButton = (page !== 1) ?
                <Link to={`${path}&page=${page-1}`}
                      className="prev-btn">
                    <i className="icon-left"/> Prev page
                </Link>
                : null;
            const nextButton = (page < total_pages) ?
                <Link to={`${path}&page=${page+1}`}
                      className="next-btn">
                    Next page <i className="icon-right"/>
                </Link>
                : null;

            return(
                <div className="pagination">
                    <div className="container">
                        { prevButton }
                        { nextButton }
                    </div>
                </div>
            )
        } else {
            return null
        }
    }
}