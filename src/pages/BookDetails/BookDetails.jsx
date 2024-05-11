import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { RxCrossCircled } from "react-icons/rx";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

import { AuthContext } from "../../context/AuthProvider";

const BookDetails = () => {
  const { user } = useContext(AuthContext);
  const [modal, setModal] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const book = useLoaderData();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // console.log(book);
  const handleBorrow = async () => {
    try {
      const { data } = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/book/${book._id}/borrow`,
        {
          bookId: book._id,
          bookName: book.bookName,
          img: book.img,
          category: book.category,
          quantity: parseInt(book.quantity),
          userName: user?.displayName,
          userEmail: user?.email,
          borrowedDate: new Date(),
          returnDate: startDate,
        }
      );
      navigate("/borrowed-books");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-[80%] max-w-screen-xl mx-auto mt-14">
      <div className="flex flex-col lg:flex-row gap-8">
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
            <button
              onClick={() => setModal(true)}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Borrow
            </button>
          </div>
        </div>
      </div>
      {modal && (
        <div className="absolute top-20 h-[80vh] w-[80%] bg-white dark:bg-gray-700 rounded-lg">
          <div className="flex justify-between py-6 px-10">
            <h1 className="text-xl text-black dark:text-white font-bold">
              Borrow book
            </h1>
            <button onClick={() => setModal(false)}>
              <RxCrossCircled size={30} />
            </button>
          </div>
          <hr />
          <div>
            <form
              className="w-[80%] max-w-sm mx-auto mt-10"
              onSubmit={handleSubmit(handleBorrow)}
            >
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Return date
                </label>
                <DatePicker
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[15rem] md:w-[24rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light disabled:text-gray-400"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your name
                </label>
                <input
                  {...register("name")}
                  type="text"
                  id="name"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light disabled:text-gray-400"
                  defaultValue={user?.displayName}
                  disabled
                />
                {errors.name && (
                  <span className="text-red-500 italic text-sm">
                    This field is required
                  </span>
                )}
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  {...register("email")}
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light disabled:text-gray-400"
                  defaultValue={user?.email}
                  disabled
                />
                {errors.email && (
                  <span className="text-red-500 italic text-sm">
                    This field is required
                  </span>
                )}
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
