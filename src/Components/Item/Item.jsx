import React from 'react'

import './Item.css'

const Item = (props) => {
  
  return (
    <div className='item'>
      <div className="item-listing-details">
      <img src={props.image} alt="" />
      <h3>{props.subcategory}</h3>
      <p className='t'>{props.category}</p>
      
      <p>{props.description}</p>
      
      
      
        <div className="item-price-new">
          &#8377;{props.price}
        </div>
        <div className="item-button">Add to cart</div>
      
        </div>
    </div>
  )
}

export default Item
