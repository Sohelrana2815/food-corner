import { CiClock1 } from "react-icons/ci";
import { FaBurn } from "react-icons/fa";

const RecipeCard = ({ recipe, handleWantToCook }) => {
  const {
    recipe_image,
    recipe_name,
    description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
  return (
    <>
      <div className="card card-compact px-4  lg:w-50 bg-base-100 shadow-xl xl:w-96">
        <figure className="h-60">
          <img className="rounded-lg" src={recipe_image} alt="Shoes" />
        </figure>
        <div className="card-body ">
          <h2 className="md:text-lg font-semibold">{recipe_name}</h2>
          <p>{description}</p>
          <div className="divider"></div>
          <h4>Ingredients: {ingredients.length}</h4>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          {/* time and calories */}
          <div className="md:flex ">
            <p className="flex items-center gap-1">
              <CiClock1 /> {preparing_time}
            </p>
            <p className="flex items-center gap-1">
              <FaBurn /> {calories}
            </p>
          </div>
          <button
            onClick={() => handleWantToCook(recipe)}
            className="btn bg-purple-600 rounded-full text-white  btn-xs md:btn-sm lg:btn-md text-xs lg:text-base"
          >
            Want to Cook
          </button>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
