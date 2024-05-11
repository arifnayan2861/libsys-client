import PropTypes from "prop-types";

const Card = ({ book, handleReturn }) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="bg-base-200 h-56 rounded-xl mb-4">
        <img className="w-28 h-56 mx-auto py-5" src={book.img} alt="" />
      </div>
      <div className="px-5 pb-5">
        <div className="flex items-center mt-2.5 mb-5">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {book.bookName}
          </h5>
          <span
            className={`${
              book.category === "Sci-fi"
                ? "bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800"
                : book.category === "Drama"
                ? "bg-orange-100 text-orange-800 dark:bg-orange-200 dark:text-orange-800"
                : book.category === "Thriller"
                ? "bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-800"
                : book.category === "Non-fiction"
                ? "bg-pink-100 text-pink-800 dark:bg-pink-200 dark:text-pink-800"
                : ""
            } text-xs font-semibold px-2.5 py-0.5 rounded ms-3`}
          >
            {book.category}
          </span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs text-gray-900 dark:text-white">
            Borrowed on: {book.borrowedDate}
          </span>
          <span className="text-xs text-gray-900 dark:text-white">
            Return on: {book.returnDate}
          </span>
        </div>
        <button
          onClick={() => handleReturn(book.userEmail, book.bookId)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Return
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  book: PropTypes.object,
  handleReturn: PropTypes.func,
};

export default Card;
