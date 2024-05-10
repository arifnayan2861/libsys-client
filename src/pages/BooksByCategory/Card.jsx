import PropTypes from "prop-types";
import StarRatings from "react-star-ratings";

const Card = ({ book }) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="bg-base-200 h-56 rounded-xl mb-4">
        <img className="w-28 h-56 mx-auto py-5" src={book.img} alt="" />
      </div>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {book.bookName}
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center justify-between space-x-1 rtl:space-x-reverse">
            <div className="flex items-center">
              <StarRatings
                starEmptyColor="orange"
                numberOfStars={parseInt(book.rating)}
                name="rating"
                starDimension="20px"
                starSpacing="1px"
              />
              {/* <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                {book.rating}
              </span> */}
            </div>
            <div>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                {book.category}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            {book.authorName}
          </span>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  book: PropTypes.object,
};

export default Card;
