import PropTypes from "prop-types";
const RecipeTable = () => {
  return (
    <>
      <div className="px-2">
        <div className="overflow-x-auto  rounded-lg  border border-purple-600 max-w-screen-sm mx-auto py-2">
          <h2 className="text-center text-2xl  font-bold">Want to Cook :</h2>
          <table className="table table-zebra table-xs lg:table-lg">
            {/* head */}
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Time</th>
                <th>Calorie</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td></td>
                <td></td>
                <td>min</td>
                <td> Calories</td>
                <td className="btn btn-sm lg:btn-md btn-outline rounded-full">
                  Preparing
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
RecipeTable.propTypes = {
  currentCooking: PropTypes.arrayOf(
    PropTypes.shape({
      recipe_name: PropTypes.string.isRequired,
      preparingTime: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
    }).isRequired
  ),
  cookItems: PropTypes.arrayOf(
    PropTypes.shape({
      recipe_id: PropTypes.string.isRequired,
      recipe_name: PropTypes.string.isRequired,
      preparing_time: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
    })
  ).isRequired,
  preparingRecipeItems: PropTypes.func.isRequired,
  preparingTime: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
};
export default RecipeTable;
