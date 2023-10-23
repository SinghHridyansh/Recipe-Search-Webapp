import React from "react";
import "../RecipeDetailsPage/RecipeDetailsPage.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../../Store/FavoriteSlice";
import Loader from "../Loader/Loader";
import NavBar from "../NavBar/NavBar";

const RecipeDetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [state, setState] = useState("");
  const [loading, setLoading] = useState(true);

  const handleAdd = (wholeRecipe) => {
    dispatch(add(wholeRecipe));
    alert("Item added to favorites");
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1900);
  }, []);

  useEffect(() => {
    const fetchrecipeDetails = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=13f9114cda9a421db0d3aff973098ca1`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch Data");
        }
        const data = await response.json();
        setState(data);
        console.log(data);
        console.log("Data Fetched");
      } catch (error) {
        console.error(error);
      }
    };
    fetchrecipeDetails();
  }, []);

  const ingredients = state.extendedIngredients;
  //   console.log(ingredients);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="recipe-container">
          {state.length !== 0 ? (
            <div className="recipe_inside">
              <NavBar />
              <div className="recipeDetails">
                <div>
                  <img
                    src={state.image}
                    alt=""
                    className="recipe-detail-image"
                  />

                  <div className="recipe_detail_name">
                    <span className="recipe_detail_heading">{state.title}</span>
                    <div className="recipe_detail_tags">
                      {state.vegetarian ? (
                        <div
                          className="nvg"
                          style={{ backgroundColor: "#0c8509", color: "white" }}
                        >
                          Vegetarian
                        </div>
                      ) : (
                        <div
                          className="nvg"
                          style={{ backgroundColor: "#7e0a1d", color: "white" }}
                        >
                          Non-Vegetarian
                        </div>
                      )}

                      {state.veryHealthy ? (
                        <div
                          className="status"
                          style={{ backgroundColor: "#659c62", color: "white" }}
                        >
                          Healthy
                        </div>
                      ) : (
                        <div
                          className="status"
                          style={{ backgroundColor: "#ffc559", color: "black" }}
                        >
                          Suboptimal
                        </div>
                      )}

                      {state.sustainable ? (
                        <div
                          className="status"
                          style={{ backgroundColor: "#659c62", color: "white" }}
                        >
                          Sustainable
                        </div>
                      ) : (
                        <div
                          className="status"
                          style={{ backgroundColor: "red", color: "white" }}
                        >
                          Not Sustainable
                        </div>
                      )}

                      {state.diets.map((diet, index) => (
                        <div key={index} className="type_tag">
                          {diet}
                        </div>
                      ))}
                    </div>

                    <div className="serves">
                      <span className="servings">
                        Serves{" "}
                        <span style={{ fontWeight: 700 }}>
                          {state.servings}
                        </span>
                      </span>

                      <span className="servings">
                        <span style={{ fontWeight: 700 }}>
                          ${state.pricePerServing}{" "}
                        </span>
                        per Serve
                      </span>

                      <button onClick={() => handleAdd(state)}>
                        Add to Favorite
                      </button>
                    </div>
                  </div>
                </div>

                <div
                  dangerouslySetInnerHTML={{ __html: state.summary }}
                  className="summary"
                />

                <div className="ingred-inst">
                  <div>Ready in {state.readyInMinutes} minutes</div>

                  <h2>Ingredients</h2>
                  <ul>
                    {ingredients.map((item, index) => (
                      // <IngregientCard key={index} img={item.image} name={item.original} />
                      <li key={index}>{item.original}</li>
                    ))}
                  </ul>
                  <h2>Instructions</h2>
                  <div
                    dangerouslySetInnerHTML={{ __html: state.instructions }}
                    className="instructions"
                  />
                </div>
              </div>
            </div>
          ) : (
            <Loader />
          )}
        </div>
      )}
    </>
  );
};

export default RecipeDetailsPage;
