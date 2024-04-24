import React from 'react'

const Card = (props) => {
    const{item} =props;
    console.log("items are ",item)
    const {id,date,title,color} = item;

    const colordata = ["#B197FC","#74C0FC","#d666e5","#21bbfd","#fd6e21"]

  return (
    <div key={id} className='card'>
        <p><i class="fa-solid fa-book" style={{color:colordata[id]}}></i></p>
      <p className='title'>{title}</p>
      <p style={{color:'GrayText'}}>{date}</p>
    </div>
  )
}

export default Card