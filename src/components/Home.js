import React, { useState , useEffect} from 'react'
import CocktailList from './CocktailList';
import SearchForm from './SearchForm';


function Home ()
{
  const [ searchValue, setSearchValue ] = useState( "" )
  
    // console.log(setSearchName);
  
  function searchCocktail ( event )
  {
    setSearchValue( searchValue => event.target.value );
    // console.log( searchValue );
  }

  return (
    <main>
      <SearchForm search={ searchValue } searchCocktail={searchCocktail}/>
      <CocktailList search={searchValue}/>
    </main>
  );
}
export default Home;
