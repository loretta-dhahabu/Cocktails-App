import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import { useParams, Link } from "react-router-dom";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
function SingleCocktail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`${url}${id}`)
      .then((response) => response.json())
      .then((data) => {
        const drinks = data;
        // console.log(data);

        if (data.drinks) {
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
          } = data.drinks[0];

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

  const { name, image, info, category, glass, instructions, ingredients } =
    cocktail;

  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        Back To Home
      </Link>
      <h2 className="section-title">{name}</h2>
      <img src={ image } alt={ name }/>
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
          { ingredients.map( ( item, index ) =>
          {
            return item ? <span key={ index }>{ item }</span> : null;
            // console.log(item);
          })}
        </p>
      </div>
    </section>
  );
}
export default SingleCocktail;

// useEffect(() => {
//     fetch(`${url}${searchName}`)
//       .then((response) => response.json())
//       .then((data) => {
//         const { drinks } = data;
//         if (drinks) {
//           const newCocktails = drinks.map((item) => {
//             const {
//               idDrink,
//               strDrink,
//               strCategory,
//               strDrinkThumb,
//               strAlcoholic,
//               strGlass,
//               strInstructions,
//             } = item;
//             return {
//               id: idDrink,
//               name: strDrink,
//               category: strCategory,
//               image: strDrinkThumb,
//               info: strAlcoholic,
//               glass: strGlass,
//               instructions: strInstructions,
//             };
//           } );
