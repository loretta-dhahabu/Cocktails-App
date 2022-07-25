import React from 'react'
import {useGlobalContext} from "../components/AppContext"

function SearchForm ()
{
    const { setSearchName } = useGlobalContext();
  return (
    <div>
      <h2>SearchForm component</h2>
    </div>
  );
}
export default SearchForm;