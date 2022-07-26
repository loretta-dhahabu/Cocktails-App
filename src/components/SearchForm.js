import React,{useRef} from 'react'
import {useGlobalContext} from "../components/AppContext"

function SearchForm ()
{
  const { setSearchName } = useGlobalContext();
  // console.log( setSearchName );

  const searchValue = React.useRef( "" );

  function searchCocktail ()
  {
    setSearchName(searchValue.current.value)
  }
  return (
    <section>
      <form className='search-form'>
        <div className='form-controls'>
          <label id='form'>search your favourite cocktails here</label>
          <input type="text" id='name' ref={ searchValue } onChange={ searchCocktail } style={ {background:""}}/>
        </div>
     </form>
    </section>
  );
}
export default SearchForm;