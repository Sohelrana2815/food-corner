import { Link } from "react-router-dom";
import error_img from "../assets/Error/error_img.jpg";
const ErrorPage = () => {
  return (
    <>
      <div>
        <div className="relative">
          <Link to="/">
            <button className="btn bg-orange-600 text-white rounded-full lg:px-8 absolute md:btn-md btn-sm top-36 lg:top-[500px] lg:left-20 left-2">
              Go Back
            </button>
          </Link>
        </div>
        <img src={error_img} alt="" />
      </div>
    </>
  );
};

export default ErrorPage;
