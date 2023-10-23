import React from "react";
import { useState, useEffect } from "react";
import "../Pages/Pages.css";
import Loader from "../Loader/Loader";
import NavBar from "../NavBar/NavBar";
import RecipeCard from "../RecipeCard/RecipeCard";
import Footer from "../Footer/Footer";

const Page2 = () => {
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [name, setName] = useState("");
  const [buttonPress, setButtonPress] = useState(false);
  const [recipes, setRecipes] = useState("");

  const handleButtonClick = () => {
    setName(query);
    setButtonPress(true);
    setQuery("");
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1900);
  }, []);

  useEffect(
    () => {
      if (buttonPress) {
        const fetchRecipes = async () => {
          try {
            const response = await fetch(
              `https://api.spoonacular.com/recipes/complexSearch?apiKey=13f9114cda9a421db0d3aff973098ca1&query=${name}&number=20&addRecipeInformation=true`
            );
            if (!response.ok) {
              throw new Error("Failed to fetch Data");
            }
            const data = await response.json();
            setRecipes(data.results);
            console.log(data.results);
            console.log("Data Fetched");
          } catch (error) {
            console.error(error);
          }
        };
        fetchRecipes();
        console.log("button is Pressed");
      }
    },
    [name],
    [buttonPress]
  );

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <NavBar />
          <div className="Page2 flexStart">
            <h1>Go on! Try searching for something.</h1>

            <div className="main">
              <input
                type="text"
                placeholder="Type in the key ingredient"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleButtonClick();
                  }
                }}
              />
              <button onClick={handleButtonClick}>Search</button>
            </div>
            {recipes !== "" && (
              <span className="showing">
                Showing results for recipes for{" "}
                <span style={{ fontWeight: "bold" }}>{name}</span>
              </span>
            )}
            {recipes !== "" && (
              <div className="flexCenter recipe_container">
                {recipes.map((recipe, key) => (
                  <RecipeCard
                    key={key}
                    identity={recipe.id}
                    name={recipe.title}
                    image={recipe.image}
                    type={recipe.diets}
                    vegornot={recipe.vegetarian}
                    serves={recipe.servings}
                    healthy={recipe.veryHealthy}
                  />
                ))}
              </div>
            )}
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default Page2;
