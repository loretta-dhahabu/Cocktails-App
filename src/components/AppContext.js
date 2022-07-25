import React, { useContext, useState, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [searchName, setSearchName] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    fetch(`${url}${searchName}`)
      .then((response) => response.json())
      .then((data) => {
        const { drinks } = data;
        if (drinks) {
          const newCocktails = drinks.map((item) => {
            const {
              idDrink,
              strDrink,
              strCategory,
              strDrinkThumb,
              strAlcoholic,
              strGlass,
              strInstructions,
            } = item;
            return {
              id: idDrink,
              name: strDrink,
              category: strCategory,
              image: strDrinkThumb,
              info: strAlcoholic,
              glass: strGlass,
              instructions: strInstructions,
            };
          } );
          // console.log( cocktails );
          // console.log(drinks);
          setCocktails( newCocktails )
          // console.log(newCocktails);
        }
        else
        {
          setCocktails([]);
        }
        setLoading(false);
      });
  }, [searchName]);

  // if (data) {
  //   const newCocktails = data.map((item) => {
  //     const { idDrink, strDrink, strDRinkThumb, strAlcoholic, strGlass } = item;
  //   });
  // }

  return (
    <AppContext.Provider
      value={{ loading, searchName, cocktails, setSearchName }}
    >
      {children}
    </AppContext.Provider>
  );
}
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
