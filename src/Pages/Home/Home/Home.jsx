import SectionTitle from "../../../SectionTitle/SectionTitle";
import Banner from "../Banner/Banner";
import Recipes from "../Recipes/Recipes";
import WantToCook from "../WantToCook/WantToCook";

const Home = () => {
  return (
    <div>
      <Banner />
      <SectionTitle
        heading="Explore Our Recipes"
        subHeading="  From quick bites to gourmet feasts, explore recipes that are perfect
          for any occasion."
      />
      <div className="flex justify-evenly">
        <Recipes />
        <WantToCook />
      </div>
    </div>
  );
};

export default Home;
