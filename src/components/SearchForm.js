import React from 'react'
// import {useGlobalContext} from "../context"

function SearchForm ({searchCocktail, search})
{
    // const { } = useGlobalContext();


  function handleSubmit (event)
  {
    searchCocktail(event) 
  }
  
  return (
    <section className="section search">
        <div className="form-controls">
          <label htmlFor="name">search for cocktails here</label>
          <input
            type="text"
                  id="name" value={search}
            placeholder="Search..."
            onChange={handleSubmit}
            style={{ background: "aqua" }}
          />
        </div>
      
    </section>
  );
}
export default SearchForm;
// function SearchForm ()
// {const { query, setQuery, error } = useGlobalContext()
//   return (
//     <form className='search-form' onSubmit={(e) => e.preventDefault()}>
//       <h2>search movies</h2>
//       <input
//         type='text '
//         className='form-input'
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//       />
//       {error.show && <div className='error'>{error.msg}</div>}
//     </form>
//   )
// }

// export default SearchForm