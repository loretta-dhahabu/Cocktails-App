import React from 'react'
import { Link } from "react-router-dom"
// import { Card } from 'react-bootstrap';

// const url = "http://localhost:3000/drinks";
function Cocktail ( { id, name, category, image, info, glass, instructions, ingredients,onDeleteCocktail } )
{
  function handleDeleteCocktail() {
    fetch(`https://cocktaildrinks.herokuapp.com/cocktails/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // onDeleteCocktail(id);
      });
  }
  return (
    <article className='cocktail'>
      <div className="img-container">
        <img src={image} alt="{name}" />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`}>
          <button className="btn btn-primary ">View Cocktail</button>
        </Link>
        <br /><br/>
        <button className=" btn delete-btn" onClick={handleDeleteCocktail} >
          not interested
        </button>
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
    