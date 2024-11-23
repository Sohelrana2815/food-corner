import { CiClock1 } from "react-icons/ci";
import { FaBurn } from "react-icons/fa";
import { FiRefreshCcw, FiRewind } from "react-icons/fi";

const RecipeCard = ({ recipe }) => {
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
      <div className="card card-compact px-4  lg:w-50 bg-base-100 shadow-xl xl:w-80">
        <figure className="h-56">
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
          <div className="flex">
            <p className="flex items-center gap-1">
              <CiClock1 /> {preparing_time}
            </p>
            <p className="flex items-center gap-1">
              <FaBurn /> {calories}
            </p>
          </div>
          <button className="btn bg-purple-600 rounded-full text-white">Want to Cook</button>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
