import { useEffect, useState } from 'react';
import Recipes from './Recipes';
import bcgr from './bcgr.avif';
import './App.css';

function App() {

  const MY_ID = "98ff107a";
  const MY_KEY = "911da917d0db5c143d798540c5a54dd1";

  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState("avocado");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      setMyRecipes(data.hits);
    }
    fetchData();
  }, [wordSubmitted])

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value);
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch);
  } 

  return (
    <div>
      <img src={bcgr} alt="bcgr" className="bcgr"/>
      <div className="title">
        <h1>Find a recipe</h1>
        <div className="search">
          <form onSubmit={finalSearch}>
            <input placeholder="Search..." onChange={myRecipeSearch} value={mySearch}></input>
          </form>
          <button onClick={finalSearch}><img src="https://img.icons8.com/laces/512/fry.png" alt="icon" width="26px"/></button>
        </div>
      </div>
      <div className="container">
        {myRecipes.map((element, index) => (
          <Recipes element={element.recipe} key={index}/>
        ))}
      </div>
    </div>
  );
}

export default App;
