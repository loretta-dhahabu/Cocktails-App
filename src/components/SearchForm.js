import React,{useEffect,useState} from 'react'
import {useGlobalContext} from "../context"

function SearchForm ({searchCocktail, search})
{
    const { setSearchName } = useGlobalContext();


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
// // function SearchForm ()
// // {
// //   const { setSearchName } = useGlobalContext();
// //   // console.log( setSearchName );

// //   // const [searchValue, setSearchValue] = useState("");

// //   useEffect( () =>
// //   {
// //   // setSearchValue(true)
// //   }, [setSearchName] )

// //   // function searchCocktail ()
// //   // {
// //   //   setSearchName ( searchValue )
    
// //   // }

// //   function handleSubmit (event)
// //   {
// //     event.preventDefault()
// //   }
// //   return (
// //     <section>
// //       <form className='search-form' onSubmit={handleSubmit}>
// //         <div className='form-controls'>
// //           <label id='form'>search for cocktails here</label>
// //           <input type="text" id='name'  style={ {background:"aqua"}}/>
// //         </div>
// //      </form>
// //     </section>
// //   );
// // }
// // export default SearchForm;