import React from 'react';
import PropTypes from 'prop-types';

import './vote.scss';

const Vote = ({ vote }) => {
    let classNames = ['vote'];

    if(Number(Object.values({vote})) > 6.9) {
        classNames += ' hight';
    } else if(Number(Object.values({vote})) > 3.9) {
        classNames += ' middle';
    }

    return(
        <>
            { vote > 0 && (
                <div className={classNames}>
                    <i className="icon-star-solid" />
                    {vote}
                </div>
            )}
        </>
    )
};

export default Vote;

Vote.propTypes = {
    vote: PropTypes.number
};