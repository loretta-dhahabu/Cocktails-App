import React from "react";
import { useGlobalContext } from "../context";
import Loading from "./Loading";
import Cocktail from "./Cocktail";

function CocktailList() {
  const { cocktails, loading } = useGlobalContext([]);
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
  return (
    <section className="section">
      <h2 className="section-title">Cocktail List Here</h2>

      <div className="cocktais-center">
        {cocktails.map((item, id) => {
          return <Cocktail key={id} {...item} />;
        })}
      </div>
    </section>
  );
}
export default CocktailList;
