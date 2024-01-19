import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdKeyboardArrowUp } from "react-icons/md";
import "./Card.css";

const Card = ({ data }) => {
  const { author, text, replies } = data;
  console.log(replies);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="start">
      <div className="line" onClick={() => setIsOpen(!isOpen)} />
      <div className="card">
        <div>
          <div className="detail">
            {replies &&
              (isOpen ? (
                <MdKeyboardArrowUp
                  onClick={() => setIsOpen(!isOpen)}
                  className="btn"
                />
              ) : (
                <RiArrowDropDownLine
                  className="btn"
                  onClick={() => setIsOpen(!isOpen)}
                ></RiArrowDropDownLine>
              ))}
            <img src={author.avatar} alt={author.name} />
            <h1>{author.name}</h1>
          </div>
          <p>{text}</p>
        </div>
        {isOpen &&
          replies?.map((reply, index) => {
            return <Card data={reply} key={index} />;
          })}
      </div>
    </div>
  );
};

export default Card;
