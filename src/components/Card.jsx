import React from 'react'

const Card = (props) => {
    const{item} =props;
    const {id,date,title,color} = item;

  return (
    <div key={id} className='card'>
        <p><i class="fa-solid fa-book" style={{color:color}}></i></p>
      <p className='title'>{title}</p>
      <p style={{color:'GrayText'}}>{date}</p>
    </div>
  )
}

export default Card