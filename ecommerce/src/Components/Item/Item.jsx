import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='item'>
      {/* This link can only be accessed when clicked on an Item */}
        <Link to={`/product/${props.id}`}><img onClick={scrollTo(0,0)}src={props.image} ></img></Link>
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-price-new">
                ${props.new_price}
            </div>
             <div className='item-price-old'>
                ${props.old_price}
             </div>
        </div>

    </div>
  )
}

export default Item