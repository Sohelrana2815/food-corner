import { useState } from "react";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import Banner from "../Banner/Banner";
import Recipes from "../Recipes/Recipes";
import WantToCook from "../WantToCook/WantToCook";

const Home = () => {
  const [cookItems, setCookItems] = useState([]);

  const handleWantToCook = (recipe) => {
    const newCookItems = [...cookItems, recipe];
    setCookItems(newCookItems);
  };

  return (
    <div>
      <Banner />
      <SectionTitle
        heading="Explore Our Recipes"
        subHeading="  From quick bites to gourmet feasts, explore recipes that are perfect
          for any occasion."
      />
      <div className="flex">
        <Recipes handleWantToCook={handleWantToCook} />
        <WantToCook cookItems={cookItems} />
      </div>
    </div>
  );
};

export default Home;
