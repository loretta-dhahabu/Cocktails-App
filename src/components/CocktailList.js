import React from "react";
import { useGlobalContext } from "../context";
import Loading from "./Loading";
import Cocktail from "./Cocktail";

function CocktailList({ search }) {
  const { cocktails, loading, onDeleteCocktail } = useGlobalContext( [] );
  const listOfCocktails = cocktails.map( ( cocktail ) =>
  {
    // console.log( cocktail );
    return (
      <Cocktail
        key={cocktail.id}
        cocktail={cocktail}
        onDeleteCocktail={onDeleteCocktail}
      />
    );
  });
  // console.log(cocktails);
  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return (
      <h2 className="section-title">
        no cocktails matched your search criteria
      </h2>
    );
  }
  const searchFilter = cocktails.filter((cocktail) => {
    if (search == "a") return true;

    return cocktail.name.includes(search);
  });
  
  return (
    <section className="section">
      <h2 className="section-title">Cocktail List Here</h2>

      <div className="cocktais-center">
        {searchFilter.map((item, id) => {
          return (
            <Cocktail key={ id } { ...item } />
          );
        } ) }
        {listOfCocktails}
      </div>
    </section>
  );
}
export default CocktailList;
