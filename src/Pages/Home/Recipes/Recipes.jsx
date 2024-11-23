import { useState } from "react";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import { useEffect } from "react";
import RecipeCard from "./RecipeCard";

const Recipes = () => {
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
      {/* <div>
        <SectionTitle
          heading="Explore Our Recipes"
          subHeading="From quick bites to gourmet feasts, explore recipes that are perfect for any occasion."
        />
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 w-1/2 border gap-y-4 gap-x-3  pl-4 lg:pl-10">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.recipe_id} recipe={recipe} />
        ))}
      </div>
    </>
  );
};

export default Recipes;
