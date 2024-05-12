import { useEffect, useState } from "react";
import axios from "axios";

import Card from "./Card";

const AllBooks = () => {
  const [books, setBooks] = useState([]);

  const getData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/all-books`,
      {
        withCredentials: true,
      }
    );
    setBooks(data);
  };

  useEffect(() => {
    getData();
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
      <div className="text-center mb-10">
        <button
          onClick={handleFilter}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Show available books
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {books.map((book) => (
          <Card key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
