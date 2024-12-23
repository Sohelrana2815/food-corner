import { useState } from "react";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import Banner from "../Banner/Banner";
import Recipes from "../Recipes/Recipes";
import WantToCook from "../WantToCook/WantToCook";
import RecipeTable from "../RecipeTable/RecipeTable";
import toast, { Toaster } from "react-hot-toast";
const Home = () => {
  const [cookItems, setCookItems] = useState([]);
  const [currentCooking, setCurrentCooking] = useState([]);
  const [preparingTime, setPreparingTime] = useState(0);
  const [calories, setCalories] = useState(0);

  const handleWantToCook = (recipe, id) => {
    const isExist = cookItems.find((cookItem) => cookItem.recipe_id === id);
    if (!isExist) {
      const newCookItems = [...cookItems, recipe];
      setCookItems(newCookItems);
      toast.success("Added Successfully");
    } else {
      toast.error("You have already added this");
    }
  };

  //
  const preparingRecipeItems = (currentlyCookingItem, time, calorie, id) => {
    console.log(currentlyCookingItem, id);

    const totalPreparingTime = preparingTime + time;
    setPreparingTime(totalPreparingTime);
    const totalCalories = calories + calorie;
    setCalories(totalCalories);
    const newCurrentlyCookingItem = [...currentCooking, currentlyCookingItem];
    setCurrentCooking(newCurrentlyCookingItem);

    const remainingFromWantToCook = cookItems.filter(
      (cookItem) => cookItem.recipe_id !== id
    );

    setCookItems(remainingFromWantToCook);
  };

  return (
    <div>
      <Banner />
      <div className="pt-20">
        <SectionTitle
          heading="Explore Our Recipes"
          subHeading="  From quick bites to gourmet feasts, explore recipes that are perfect
          for any occasion."
        />
      </div>
      <RecipeTable
        cookItems={cookItems}
        preparingRecipeItems={preparingRecipeItems}
        currentCooking={currentCooking}
        preparingTime={preparingTime}
        calories={calories}
      />
      <div className="flex py-10">
        <Recipes handleWantToCook={handleWantToCook} />
        <WantToCook
          cookItems={cookItems}
          preparingRecipeItems={preparingRecipeItems}
          currentCooking={currentCooking}
          preparingTime={preparingTime}
          calories={calories}
        />
      </div>
      <Toaster />
    </div>
  );
};

export default Home;
