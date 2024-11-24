const WantToCook = ({ cookItems }) => {
  return (
    <>
      <div
        className="overflow-x-auto relative lg:left-44
       md:left-36  xl:w-[450px] md:w-72"
      >
        <h2 className="text-center text-lg lg:text-2xl md:text-xl">
          Want to Cook : {cookItems.length}
        </h2>
        <div className="divider"></div>
        <table className="table table-xs lg:table-md">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Time</th>
              <th>Calorie</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cookItems.map((cookItem) => (
              <tr key={cookItem.recipe_id} className="hover space-y-2">
                <th>{cookItem.recipe_name}</th>
                <td>{cookItem.preparing_time}</td>
                <td>{cookItem.calories}</td>
                <button className="btn  btn-sm bg-purple-600 text-white">
                  Preparing
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default WantToCook;
