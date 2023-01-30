import React from 'react'
import  './coinDetail.css'
export const CoinDetail
 = (props) => {
  return (
    <div className='mainDetail'>
        <h1>
        <img src = {props.image} alt = 'crypto' />
          {props.name.toUpperCase()}</h1>
          
    </div>
  )
}
