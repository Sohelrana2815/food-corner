import banner_img from "../../../assets/banner_img.jpg";
const Banner = () => {
  return (
    <>
      <div className="relative max-w-screen-2xl mx-auto">
        <img className="rounded-lg w-full" src={banner_img} alt="Chef master" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-white lg:text-5xl md:text-3xl text-xl font-bold">
            {" "}
            Discover an exceptional cooking <br /> class tailored for you!
          </h1>
          <p className="text-white text-lg">
            Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
            Database and solve 500+ coding problems to become an exceptionally
            well world-class Programmer.
          </p>
          <div className="flex gap-2">
            <button className="btn bg-purple-600 text-white border-none">
              Explore Now
            </button>
            <button className="btn btn-outline text-white">Our Feedback</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
