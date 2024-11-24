import PropTypes from "prop-types";
const WantToCook = ({
  cookItems,
  preparingRecipeItems,
  currentCooking,
  preparingTime,
  calories,
}) => {
  return (
    <>
      <div className="hidden lg:block">
        <div className="overflow-x-auto relative md:left-20 xl:left-52  p-2 rounded-lg w-[500px] border border-purple-600 ">
          <h2 className="text-center text-2xl  font-bold">
            Want to Cook : {cookItems.length}
          </h2>
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
              {cookItems.map((cookItem, idx) => (
                <tr key={idx} className="space-y-2">
                  <td>{idx + 1}</td>
                  <td>{cookItem.recipe_name}</td>
                  <td>{cookItem.preparing_time} min</td>
                  <td>{cookItem.calories} Calories</td>
                  <td
                    onClick={() =>
                      preparingRecipeItems(
                        cookItem,
                        cookItem.preparing_time,
                        cookItem.calories,
                        cookItem.recipe_id
                      )
                    }
                    className="btn btn-sm lg:btn-md btn-outline rounded-full"
                  >
                    Preparing
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* 2nd tabel */}
        <div>
          <div className="overflow-x-auto  relative md:left-20 xl:left-52  p-2 rounded-lg w-[500px] border border-purple-600 mt-20">
            <h2 className="text-center text-2xl font-bold">
              Currently Cooking: {currentCooking.length}
            </h2>
            <div className="divider"></div>
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {currentCooking.map((currentCookingSingleItem, idx) => (
                  <tr key={idx} className="hover">
                    <td>{currentCookingSingleItem.recipe_name}</td>
                    <td>{currentCookingSingleItem.preparing_time} min</td>
                    <td>{currentCookingSingleItem.calories}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="relative md:left-20 xl:left-52 text-end">
          <div className="divider"></div>
          <p className="font-medium">Total times = {preparingTime} min</p>
          <p className="font-semibold">Total calories = {calories}</p>
        </div>
      </div>
    </>
  );
};

WantToCook.propTypes = {
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

export default WantToCook;
