import React from 'react'
import PropTypes from 'prop-types';
import '../assets/css/small-card.css'

const SmallCard = props => {
    return (
        <div className={`small-card ${props.className}`}>
            {
                props.children
            }
        </div>
    )
}

SmallCard.propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string
}

export default SmallCard