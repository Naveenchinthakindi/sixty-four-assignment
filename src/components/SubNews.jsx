import React from 'react'

const SubNews = (props) => {

  const {title} = props;
  return (
    <div className='subNews'>
      <ul style={{height:'20px',margin:'0px', padding:'15px', marginBottom:'10px'}} className='d-flex'>
        <li style={{listStyleType:'disc',color:'gray',margin:'0px',fontSize:'20px'}}></li>
        <p style={{color:'#51C2FE'}}>February&nbsp;24&nbsp;2024</p>
       </ul>
    
      <div className="content">
        <h6>{title}</h6>
        <p>
          Content matters when we are trying to solve problems and discover
          new solutions. Content matters when we are trying to keep from
          repeating the same mistakes and when we need our past to help us
          understand the present.
        </p>
      </div>
    </div>
  )
}

export default SubNews;
