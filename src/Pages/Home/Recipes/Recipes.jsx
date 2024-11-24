import { useState } from "react";
import { useEffect } from "react";
import RecipeCard from "./RecipeCard";
import PropTypes from "prop-types";
const Recipes = ({ handleWantToCook }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch the json file from the public folder

    fetch("/recipeData.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error loading JSON data:", error));
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:w-1/2 gap-y-4 gap-x-3  md:pl-10  ">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.recipe_id}
            recipe={recipe}
            handleWantToCook={handleWantToCook}
          />
        ))}
      </div>
    </>
  );
};

Recipes.propTypes = {
  handleWantToCook: PropTypes.func.isRequired,
};

export default Recipes;
