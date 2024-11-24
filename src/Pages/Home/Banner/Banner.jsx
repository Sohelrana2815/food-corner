import banner_img from "../../../assets/Banner/banner_img.jpg";
const Banner = () => {
  return (
    <>
      <div className="relative max-w-screen-2xl mx-auto">
        {/* Background Image */}
        <img className="rounded-lg w-full" src={banner_img} alt="Chef master" />

        {/* Overlay */}

        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>

        {/* Text content */}

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-5">
          <h1 className="text-white lg:text-5xl md:text-3xl text-xl font-bold">
            {" "}
            Discover an exceptional cooking <br /> class tailored for you!
          </h1>
          <p className="text-white lg:text-lg w-3/5 mx-auto md:block hidden font-semibold">
            Discover the art of cooking with our world-class recipes and tips.
            Unleash your inner chef today!
          </p>
          <div className="flex gap-2">
            <button className="btn btn-xs md:btn-md bg-purple-600 text-white border-none rounded-full">
              Explore Now
            </button>
            <button className="btn btn-xs md:btn-md  btn-outline text-white font-semibold rounded-full tex">
              Our Feedback
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
