import React from "react";
import "../RecipeCard/RecipeCard.css";
import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  function truncate(str, no_words) {
    return str.split(" ").splice(0, no_words).join(" ");
  }

  let name = truncate(props.name, 6);

  return (
    <>
      <Link to={`/recipedetails/${props.identity}`}>
        <div className=" flexStart RecipeCard">
          <div className="image">
            <img src={props.image} alt={props.name} className="recipe_image" />
          </div>
          <div className="recipe-info">
            <div className="recipe_name">
              <span>{name}</span>
            </div>
            <div className="recipe_deets">
              <div className="deets">
                {props.vegornot ? (
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

                <span className="servings">
                  Serves <span style={{ fontWeight: 700 }}>{props.serves}</span>
                </span>

                {props.healthy ? (
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
              </div>
              <div className="recipeTags_container">
                {props.type.map((type, index) => (
                  <div key={index} className="type_tag">
                    {type}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default RecipeCard;
