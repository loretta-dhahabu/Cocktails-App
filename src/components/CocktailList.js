import React from 'react'
import { useGlobalContext } from "../components/AppContext"
import Loading from "./Loading"
import Cocktail from './Cocktail'

function CocktailList ()
{
    const [ actualCocktail, loading ] = useGlobalContext();
    
     
  return (
    <div>CocktailList</div>
  )
}
export default CocktailList;