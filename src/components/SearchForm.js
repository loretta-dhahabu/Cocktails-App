import React from 'react'
import {useGlobalContext} from "../components/AppContext"

function SearchForm ()
{
  const { setSearchName } = useGlobalContext();
  // console.log( setSearchName );
  return (
    <div>
      <h2>Search Form component</h2>
    </div>
  );
}
export default SearchForm;