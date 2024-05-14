import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { IoMenu } from "react-icons/io5";
import { CiGrid41 } from "react-icons/ci";
import { FaPencilAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import StarRatings from "react-star-ratings";

import Card from "./Card";
import { AuthContext } from "../../context/AuthProvider";

const AllBooks = () => {
  const { user } = useContext(AuthContext);
  const [books, setBooks] = useState([]);
  const [tableView, setTableView] = useState(true);
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();
  // const books = useLoaderData();
  const getData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/all-books`,
      {
        withCredentials: true,
      }
    );
    setBooks(data);
  };

  const getUser = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/current-user/${user?.email}`
    );
    setCurrentUser(data);
  };

  useEffect(() => {
    getData();
    getUser();
  }, []);

  const handleFilter = async () => {
    try {
      const { data } = await axios(
        `${import.meta.env.VITE_BACKEND_URL}/filtered-books`
      );
      setBooks(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  //   console.log(books);
  return (
    <div className="w-[80%] max-w-screen-xl mx-auto mt-14">
      <h1 className="text-3xl md:text-5xl text-center dark:text-white font-bold mb-10">
        All Books
      </h1>
      <div className="text-center mb-10 flex items-center justify-between">
        <button
          onClick={handleFilter}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Show available books
        </button>
        <div className="flex items-center gap-4 border p-2 rounded-lg cursor-pointer">
          <IoMenu
            onClick={() => setTableView(true)}
            size={30}
            className={tableView && "bg-gray-500 rounded-md"}
          />
          <CiGrid41
            onClick={() => setTableView(false)}
            size={30}
            className={tableView || "bg-gray-500 rounded-md"}
          />
        </div>
      </div>
      {tableView ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {books.map((book) => (
            <Card key={book._id} book={book} />
          ))}
        </div>
      ) : (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Book
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Rating
                </th>
                <th scope="col" className="px-6 py-3">
                  Author
                </th>
                <th scope="col" className="px-6 py-3">
                  Update
                </th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr
                  key={book._id}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {book.bookName}
                  </th>
                  <td className="px-6 py-4">
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
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <StarRatings
                        starEmptyColor="orange"
                        numberOfStars={parseInt(book.rating)}
                        name="rating"
                        starDimension="20px"
                        starSpacing="1px"
                      />
                    </div>
                  </td>
                  <td className="px-6 py-4">{book.authorName}</td>
                  <td className="px-6 py-4">
                    <button
                      disabled={currentUser?.role !== "librarian"}
                      onClick={() => navigate(`/update-book/${book._id}`)}
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:bg-gray-500 disabled:hover:bg-gray-500"
                    >
                      <FaPencilAlt size={15} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllBooks;
