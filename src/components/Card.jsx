import React from 'react'
import './card.css';
const Card = ({item}) => {
  return (
    <div className='card'>
        <img className='image' src={item.avatar} alt="dp" />
        <h1 className='fullName'>{`${item.first_name} ${item.last_name}`}</h1>
        <h2 className='emailId'>{item.email}</h2>
    </div>
  )
}

export default Card