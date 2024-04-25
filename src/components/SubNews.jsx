import React from 'react'

const SubNews = (props) => {

  const {title} = props;
  return (
    <div className='subNews'>
      <ul className="subnewsul">
        <li></li>
        <p >February&nbsp;24&nbsp;2024</p>
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
