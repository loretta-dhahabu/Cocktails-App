import React from 'react'
import CocktailList from './CocktailList';
import SearchForm from './SearchForm';

function Home () {
  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  );
}
export default Home;
