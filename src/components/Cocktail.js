import React from 'react'
import { Link } from "react-router-dom"
// import { Card } from 'react-bootstrap';

function Cocktail ({id,name,category,image,info,glass,instructions}) {
  return (
    <article>
      <div className="img-container">
        <img src={image} alt="{name}" />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link
          to={`/cocktail/${id}`}
          className="btn btn-primary btn-details"
        >Drink Details</Link>
      </div>
    </article>
  );
}
export default Cocktail;

 

    //   <Card style={{ width: "18rem" }}>
    //   <Card.Img variant="top" src={ image } text={ name } style={ {width:"18rem", marginleft:"-1em"}}/>
    //   <Card.Body>
    //     <Card.Title>{name}</Card.Title>
    //     <Card.Text>{glass}</Card.Text>
    //     <Card.Text>{info}</Card.Text>
    //   </Card.Body>
    // </Card>