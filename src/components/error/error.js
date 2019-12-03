import React from 'react';

import './error.scss';

const Error = () => {
    return(
        <div className="error">
            <div className="title">Ooops!</div>
            <p>Couldn't find that. Try something else.</p>
        </div>
    )
};

export default Error;