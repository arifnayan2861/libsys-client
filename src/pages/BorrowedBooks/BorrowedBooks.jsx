import { useContext, useEffect, useState } from "react";
import axios from "axios";

import { AuthContext } from "../../context/AuthProvider";
import Card from "./Card";
import toast from "react-hot-toast";

const BorrowedBooks = () => {
  const { user } = useContext(AuthContext);
  const [books, setBooks] = useState([]);

  const getData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/borrowed-books/${user?.email}`
    );
    setBooks(data);
  };

  useEffect(() => {
    getData();
  }, [user]);

  const handleReturn = (email, id) => {
    try {
      const { data } = axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/borrowed-books/${email}/${id}`
      );
      console.log(data);
      getData();
      toast.success("Book returned successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[80%] max-w-screen-xl mx-auto mt-14">
      {/* <h1 className="text-3xl md:text-5xl text-center dark:text-white font-bold mb-10">
        {books[0].category}
      </h1> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {books.map((book) => (
          <Card key={book._id} book={book} handleReturn={handleReturn} />
        ))}
      </div>
    </div>
  );
};

export default BorrowedBooks;
