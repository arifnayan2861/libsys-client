import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const AllBooks = () => {
  const [books, setBooks] = useState([]);

  const getData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/all-books`
    );
    setBooks(data);
  };

  useEffect(() => {
    getData();
  }, []);
  //   console.log(books);
  return (
    <div className="w-[80%] max-w-screen-xl mx-auto mt-14">
      <h1 className="text-3xl md:text-5xl text-center dark:text-white font-bold mb-10">
        All Books
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {books.map((book) => (
          <Card key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
