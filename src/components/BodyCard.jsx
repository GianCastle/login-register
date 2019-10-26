import React from 'react'
import PropTypes from 'prop-types';
import '../assets/css/body-card.css'

const BodyCard = props => {
    return (
        <div className="body-card">
            {
                props.children
            }
        </div>
    )
}

BodyCard.propTypes = {
    children: PropTypes.any.isRequired
}

export default BodyCard