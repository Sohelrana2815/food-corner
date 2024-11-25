import { CiClock1 } from "react-icons/ci";
import { FaBurn } from "react-icons/fa";
import PropTypes from "prop-types";
const RecipeCard = ({ recipe, handleWantToCook }) => {
  const {
    recipe_id,
    recipe_image,
    recipe_name,
    description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
  return (
    <>
      <div className="card card-compact px-4  lg:w-50 bg-base-100 shadow-xl xl:w-96 ">
        <figure className="h-60">
          <img className="rounded-lg" src={recipe_image} alt="Shoes" />
        </figure>
        <div className="card-body ">
          <h2 className="md:text-lg font-semibold">{recipe_name}</h2>
          <p className="md:text-sm">{description}</p>
          <div className="divider"></div>
          <h4 className="lg:text-lg">Ingredients: {ingredients.length}</h4>
          <div>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </div>
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
            onClick={() => handleWantToCook(recipe, recipe_id)}
            className="btn bg-purple-600 rounded-full text-white   md:btn-sm btn-md lg:btn-md text-xs lg:text-base"
          >
            Want to Cook
          </button>
        </div>
      </div>
    </>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    recipe_id: PropTypes.string.isRequired,
    recipe_name: PropTypes.string.isRequired,
    recipe_image: PropTypes.string.isRequired,
    preparing_time: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,

  handleWantToCook: PropTypes.func.isRequired,
};

export default RecipeCard;
