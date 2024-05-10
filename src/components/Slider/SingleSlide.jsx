import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const SingleSlide = ({ imgLink }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="hero min-h-[70vh] rounded-xl"
        style={{
          backgroundImage: imgLink,
        }}
      >
        <div className="hero-overlay bg-opacity-50 rounded-xl"></div>
        <div className="hero-content text-neutral-content">
          <div className="max-w-lg text-center space-y-4">
            <h1 className="mb-5 text-xl md:text-3xl font-bold text-white">
              Streamline Your Library: Powerful Management Made Easy
            </h1>
            <p className="text-white">
              Cataloging, circulation, reporting, and more - manage your entire
              library with a single platform.
            </p>
            <button
              type="button"
              onClick={() => navigate("/register")}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

SingleSlide.propTypes = {
  imgLink: PropTypes.string,
};

export default SingleSlide;
