import React from 'react';
import "./Cards.css";
import { Link } from 'react-router-dom';

const Cards = ({ imageSrc, title, description, link, linkText }) => {
  return ( 
    <Link to={link} style={{textDecoration:"none"}}>
    <div className="card container" style={{padding: "0px", marginBottom: "20px"}}>

      <img className="card-img-top" src={imageSrc} alt={title} />
      <i className="fa-regular fa-circle-question text-end" style={{fontSize: "15px", margin: "5px"}}></i>  

      <div className="card-body">
        <h4 className="card-title text-center">
          <a className='titleCard'>{title}</a>
        </h4>
        <p className="card-text">{description}</p> 
        <div className='text-end'>
          <img src='assets/plus.png' style={{width: "15px"}} alt="Plus Icon"/>
          <Link to={link} className="getActionCard mx-2">{linkText}</Link> 
        </div>
      </div>
    </div> 
    </Link>
  );
}

export default Cards;
