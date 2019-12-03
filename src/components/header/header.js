import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import './header.scss';
import logo from '../../assets/img/camera.svg';

class Header extends Component {
    state = {
        searchValue: ''
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const { searchValue } = this.state;

        if(searchValue.length === 0) {
            return;
        }

        this.setState({
            searchValue: ''
        });

        this.props.history.push(`/search/${searchValue}`);
    };

    handleInputChange = (e) => {
        this.setState({
            searchValue: e.target.value
        });
    };

    render() {
        const { searchValue } = this.state;
        return(
            <header>
                <div className="container">
                    <div className="logo-wr">
                        <Link to="/">
                            <img src={logo} alt="logo"/>
                            <span>MovieApp</span>
                        </Link>
                    </div>
                    <div className="search-wr">
                        <form className="search-form"
                              onSubmit={ this.handleSubmit }>
                            <input type="text"
                                   value={ searchValue }
                                   placeholder="Type to search..."
                                   className="search-text"
                                   onChange={ this.handleInputChange } />
                            <button type="submit"
                                    className="search-button">
                                <i className="icon-search" />
                            </button>
                        </form>
                    </div>
                </div>
            </header>
        )
    }
}

export default withRouter(Header);