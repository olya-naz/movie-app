import React from 'react';
import './footer.scss';

const Footer = () => {
    return(
        <footer>
            <div className="container">
                <div className="git-link">
                    <a href="https://github.com/olya-naz/movie-app"
                       target="_blank">
                        Fork me on <i className="icon-git-brands" />
                    </a>
                </div>
                <div className="tmdb-link">
                    <a href="https://www.themoviedb.org">
                        <img src="https://www.themoviedb.org/assets/2/v4/logos/powered-by-rectangle-green-dcada16968ed648d5eb3b36bbcfdd8cdf804f723dcca775c8f2bf4cea025aad6.svg" alt=""/>
                    </a>
                </div>
            </div>
        </footer>
    )
};

export default Footer;