import { useLoaderData } from "react-router-dom";
import Card from "./Card";

const BooksByCategory = () => {
  const books = useLoaderData();
  // console.log(books);
  return (
    <div className="w-[80%] max-w-screen-xl mx-auto mt-14">
      <h1 className="text-3xl md:text-5xl text-center dark:text-white font-bold mb-10">
        {books[0].category}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {books.map((book) => (
          <Card key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BooksByCategory;
