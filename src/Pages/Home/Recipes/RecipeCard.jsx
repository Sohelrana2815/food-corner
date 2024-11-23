const RecipeCard = ({ recipe }) => {
  const { recipe_image, recipe_name, description, ingredients } = recipe;
  return (
    <>
      <div className="card card-compact  lg:w-50 bg-base-100 shadow-xl xl:w-72">
        <figure className="h-56">
          <img className="rounded-lg" src={recipe_image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="md:text-lg font-semibold">{recipe_name}</h2>
          <p>{description}</p>
          <h4>Ingredients: {ingredients.length}</h4>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
