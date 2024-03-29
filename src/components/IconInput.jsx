import React from 'react'
import PropTypes from 'prop-types';
import '../assets/css/icon-input.css'

const IconInput = props => {
    return (
        <div className={`icon-input`}>
            <div className={`i-i-iconBox ${props.error ? 'i-i-error' : ''}`}>
                <img src={props.icon} alt="" className="i-i-i-icon" />
                <div className="i-i-separate" />
            </div>
            <input 
                type={props.type} 
                className={`i-i-input ${props.error ? 'i-i-error' : ''}`} 
                onChange={props.change} 
                placeholder={props.placeholder} 
                name={props.name}
                required={props.required}
            />
        </div>
    )
}

IconInput.propTypes = {
    name: PropTypes.string.isRequired,
    error: PropTypes.bool,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    icon: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    change: PropTypes.func.isRequired
}

export default IconInput