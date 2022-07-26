import React,{useEffect} from 'react'
import {useGlobalContext} from "../components/AppContext"

function SearchForm ()
{
  const { setSearchName } = useGlobalContext();
  // console.log( setSearchName );

  const searchValue = React.useRef( "" );

  useEffect( () =>
  {
  searchValue.current.focus()
  }, [] )

  function searchCocktail ()
  {
    setSearchName(searchValue.current.value)
  }

  function handleSubmit (event)
  {
    event.preventDefault()
  }
  return (
    <section>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-controls'>
          <label id='form'>search your favourite cocktails here</label>
          <input type="text" id='name' ref={ searchValue } onChange={ searchCocktail } style={ {background:""}}/>
        </div>
     </form>
    </section>
  );
}
export default SearchForm;