import React from 'react';
import PropTypes from 'prop-types';
import '../assets/css/button-large.css';

const buttonLarge = props => {
    return(
        <button className="button-large" onClick={props.click}>
            {props.value}
        </button>
    )
}

buttonLarge.propTypes = {
    value: PropTypes.string.isRequired,
    click: PropTypes.func.isRequired
}

export default buttonLarge