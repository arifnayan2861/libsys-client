import { useLoaderData } from "react-router-dom";
import StarRatings from "react-star-ratings";

const BookDetails = () => {
  const book = useLoaderData();
  console.log(book);
  return (
    <div className="w-[80%] max-w-screen-xl mx-auto mt-14 flex flex-col lg:flex-row gap-8">
      <div className="bg-base-300 h-56 lg:h-[30rem] lg:w-[120rem] rounded-xl">
        <img
          className="w-28 lg:w-72 h-56 lg:h-[29rem] mx-auto py-5 lg:pb-2"
          src={book.img}
          alt=""
        />
      </div>
      <div>
        <div className="space-y-4 flex items-center gap-8">
          <h1 className="font-bold text-2xl lg:text-4xl">{book.bookName}</h1>
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
            }text-xs font-semibold px-2.5 py-0.5 rounded my-4`}
          >
            {book.category}
          </span>
        </div>
        <p className="my-4">Author: {book.authorName}</p>
        <div className="space-y-4">
          <p>{book.description}</p>
        </div>
        <p className="my-4">Available: {book.quantity}</p>
        <hr className="my-4" />
        <StarRatings
          starEmptyColor="orange"
          numberOfStars={parseInt(book.rating)}
          name="rating"
          starDimension="20px"
          starSpacing="1px"
        />
        <div className="mt-8">
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Borrow
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
