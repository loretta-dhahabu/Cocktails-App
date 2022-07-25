import React from 'react'
import {Link} from "react-router-dom"

function Cocktail ({id,name,category,image,info,glass,instructions}) {
  return (
    <article>
      <div className='img-container'>
        <img src={ image } alt="{name}" />
      </div>
      <div className='cocktail-footer'>
        <h3>{ name }</h3>
        <h4>{ glass }</h4>
        <p>{ info }</p>
      </div>
    </article>
  );
}
export default Cocktail;