import React from 'react'
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

export default SmallCard