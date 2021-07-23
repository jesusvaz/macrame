import React from 'react';
import  './items.styles.scss';       

const Item = ({picture,title,price}) => {
    return (
        <div className="item">
            <h2>{title} ${price}</h2>
            <img src={picture} alt="Maria's Macarame"/>
        </div>
    )
}

export default Item
