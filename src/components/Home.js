import React, { useState } from 'react'
import CocktailList from './CocktailList';
import SearchForm from './SearchForm';


function Home ()
{
  const [ searchValue, setSearchValue ] = useState( "" )
  const [cocktails, setCocktails] = useState([]);
    // console.log(setSearchName);
  
  function searchCocktail ( event )
  {
    setSearchValue( searchValue => event.target.value );
    // console.log( searchValue );
  }
  function handleDeleteCocktail(id) {
    const newCocktailList = cocktails.filter((cocktail) => cocktail.id !== id);
    setCocktails(newCocktailList);
  }
  

  return (
    <main>
      <SearchForm search={ searchValue } searchCocktail={searchCocktail}/>
      <CocktailList search={ searchValue } onDeleteCocktail={ handleDeleteCocktail}/>
    </main>
  );
}
export default Home;
