import React, { useContext, useState, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [searchName, setSearchName] = useState("a");
  const [cocktails, setCocktails] = useState([]);
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