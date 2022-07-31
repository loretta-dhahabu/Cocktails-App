import React, { useContext, useState, useEffect, createContext } from "react";

const url = "http://localhost:3000/drinks";

const AppContext = createContext();

function AppProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [searchName, setSearchName] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
      fetch(`${url}`)
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          // const { drinks } = data;
          if (data) {
            // console.log(data);

            const newCocktails = data.map((item) => {
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
            });
            // console.log( cocktails );
            // console.log(drinks);
            setCocktails(newCocktails);
            setLoading(true);
            // console.log(newCocktails);
          } else {
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
