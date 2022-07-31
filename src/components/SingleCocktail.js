import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import { useParams, Link } from "react-router-dom";

// const url = "http://localhost:3000/drinks";
function SingleCocktail({ onAddComment }) {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [ cocktail, setCocktail ] = useState( null );
  const [addCommentData, setAddCommentData] = useState({
    comment: "",
    author: "",
  });

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/drinks")
      .then((response) => response.json())
      .then((data) => {
        // const drinks = data;
        // console.log(data);
        if (data) {
          // console.log(data);
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            dateModified: datemodified,
          } = data[0];

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
          ];
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
            datemodified,
          };
          setCocktail(newCocktail);
          // console.log( data.drinks );
          // console.log(newCocktail);
        } else {
          setCocktail(null);
        }

        setLoading(false);
      });
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2 className="section-title">No Cocktail To Display</h2>;
  }
  const {
    name,
    image,
    info,
    category,
    glass,
    instructions,
    ingredients,
    datemodified,
  } = cocktail;
  
  function handleChange ( event )
  {
      // console.log(event);
      setAddCommentData({
        ...addCommentData,
        [event.target.name]: event.target.value,
      });
    }
    function handleSubmit(event) {
      event.preventDefault();

      fetch("http://localhost:3000/drinks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          comment: addCommentData.comment,
          author: addCommentData.author,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setAddCommentData({
            ...addCommentData,
            comment: "",
            author: "",
          });
        });
    }
  
  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        Back To Home
      </Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={image} alt={name} />
        <div className="drink-info">
          <p>
            <span className="drink-data">Name:</span>
            {name}
          </p>
          <p>
            <span className="drink-data">Info:</span>
            {info}
          </p>
          <p>
            <span className="drink-data">Category:</span>
            {category}
          </p>
          <p>
            <span className="drink-data">Glass:</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">Instructions:</span>
            {instructions}
          </p>
          <p>
            <span className="drink-data">Ingredients:</span>
            {ingredients.map((item, index) => {
              return item ? <span key={index}>{item}</span> : null;
              // console.log(item);
            })}
          </p>
          <p>
            <span className="drink-data">Modification Date:</span>
            {datemodified}
          </p>
        </div>
        <form className="new-comment-form" onSubmit={handleSubmit}>
          <textarea
            onChange={handleChange}
            value={addCommentData.comment}
            name="comment"
            placeholder="Write your comment here..."
            rows={10}
          />
          <input
            onChange={handleChange}
            value={addCommentData.author}
            name="author"
            placeholder="Author"
          />

          <input type="submit" value="Share your masterpiece" />
        </form>
      </div>
    </section>
  );
}
export default SingleCocktail;
