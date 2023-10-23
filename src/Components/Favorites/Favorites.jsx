import React from "react";
import { useEffect, useState } from "react";
import "../Favorites/Favorites.css";
import NavBar from "../NavBar/NavBar";
import Loader from "../Loader/Loader";
import RecipeCard2 from "../RecipeCard/RecipeCard2";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remove } from "../../Store/FavoriteSlice";

const Favorites = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const favRecipes = useSelector((state) => state.favorites);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1900);
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <NavBar />

          <div className="favcontainer">
            <h2>Your Fav recipes go here.</h2>
            <div className="favWrapper">
              {favRecipes.map((recipe, index) => (
                <RecipeCard2
                  key={index}
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
          </div>
        </div>
      )}
    </>
  );
};

export default Favorites;
