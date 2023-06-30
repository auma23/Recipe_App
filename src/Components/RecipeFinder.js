import React, { useState } from 'react';
import axios from 'axios';

function RecipeFinder() {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    try {
      const apiKey = 'dc4ecf6129fa48ebb85e9237cca97065'; // Replace with your Spoonacular API key
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${searchTerm}`
      );
      setRecipes(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        className='ml-5' 
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      /> 
      <button onClick={handleSearch} className='focus:outline-none ml-10 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-500 dark:hover:bg-purple-700 dark:focus:ring-purple-500'>Search</button>
      {recipes.map((recipe) => (
        <div className='grid'>
        <div className='flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700' key={recipe.id}>
          <img className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg' src={recipe.image} alt={recipe.title} />
          <div className='flex flex-col justify-between p-4 leading-normal'>
          <h3 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{recipe.title}</h3>
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{recipe.instructions}</p>
          </div>
        </div>
        </div>
      ))}
    </div>
  );
}

export default RecipeFinder;
