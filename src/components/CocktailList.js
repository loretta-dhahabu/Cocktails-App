import React from 'react'
import { useGlobalContext } from "../components/AppContext"
import Loading from "./Loading"
import Cocktail from './Cocktail'

function CocktailList ()
{
    const { cocktails, loading } = useGlobalContext();
    // console.log(cocktails);

    if ( loading )
    {
        return <Loading/> 
    }
    if ( cocktails.length < 1 )
    {
        return (
            <h2>
                no cocktails matched your search criteria
            </h2>
        )
    }
  return (
    <div>CocktailList here</div>
  )
}
export default CocktailList;