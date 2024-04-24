import React from "react";

const ContentCard = (props) => {
  // const { user } = props;
  // console.log("props are 123 ",props)
  const { title, image, content } = props?.user;
  // console.log("props are ", props);

  const num = Math.ceil(Math.random() * 9);
  // console.log("num ", num);

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
