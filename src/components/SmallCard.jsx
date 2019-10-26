import React from 'react'
import PropTypes from 'prop-types';
import '../assets/css/small-card.css'

const SmallCard = props => {
    return (
        <div className="small-card">
            {
                props.children
            }
        </div>
    )
}

SmallCard.propTypes = {
    children: PropTypes.any.isRequired,
}

export default SmallCard