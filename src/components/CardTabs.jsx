import React from 'react'
import PropTypes from 'prop-types';
import '../assets/css/card-tabs.css'

const CardTabs = props => {
    return (
        <div className="card-tabs">
            {
                props.buttons.map((item, key) => (
                        <div 
                            className={`c-t-buttons ${(props.actual === item.text) ? 'c-t-b-active' : ' '}`} 
                            key={key}
                            onClick={item.action}
                        >
                            {item.text}
                        </div>
                    )
                )
            }
        </div>
    )
}

CardTabs.propTypes = {
    buttons: PropTypes.array.isRequired,
    actual: PropTypes.string.isRequired,
}

export default CardTabs