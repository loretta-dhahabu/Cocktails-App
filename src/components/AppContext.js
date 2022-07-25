import React, { useContext, useState, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [searchName, setSearchName] = useState("a");
  const [ cocktails, setCocktails ] = useState( [] );
  
   
    useEffect( () =>
    {
      fetch( `${url}${searchName}` )
        .then( response => response.json() )
        .then( ( data ) =>console.log(data))
        
          setLoading( loading );
          setCocktails(cocktails) 
        
      
    }, [] )
    
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
export { AppContext, AppProvider } ;
