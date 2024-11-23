const RecipeCard = ({ recipe }) => {
  const { recipe_image, recipe_name, description } = recipe;
  return (
    <>
      <div className="card card-compact  lg:w-50 bg-base-100 shadow-xl xl:w-72">
        <figure>
          <img src={recipe_image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2>{recipe_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
