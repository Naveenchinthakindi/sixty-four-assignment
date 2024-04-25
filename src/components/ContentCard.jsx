import React from "react";

const ContentCard = (props) => {
  const { title, image, content } = props?.user;

  return (
    <div>
      <div className="analysis">
        <img src={image} alt="analysis" />
        <div className="p-4">
        <p className="title">{title}</p>
        <p style={{width:'100px'}}>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
