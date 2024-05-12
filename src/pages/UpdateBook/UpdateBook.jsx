import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const UpdateBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [book, setBook] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const getData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/book/${id}`
    );
    setBook(data);
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(book);

  const handleUpdateBook = (data) => {
    try {
      axios.put(`${import.meta.env.VITE_BACKEND_URL}/update-book/${id}`, {
        img: data.imgUrl,
        bookName: data.bookName,
        authorName: data.authorName,
        category: data.category,
        rating: data.rating,
      });
      toast.success("Book info updated successfully!");
      navigate("/all-books");
    } catch (error) {
      console.log(error.message);
      toast.success(error.message);
    }
    // axios
    //   .put(`${import.meta.env.VITE_BACKEND_URL}/update-book/${id}`, {
    //       img: data.imgUrl,
    //     bookName: data.bookName,
    //     authorName: data.authorName,
    //     category: data.category,
    //     rating: data.rating,
    //   })
    //   .then((res) => {
    //     console.log(res.data);
    //     toast.success("Book added successfully!");
    //   })
    //   .catch((error) => console.log(error.message));
  };

  return (
    <div className="w-[80%] max-w-sm mx-auto mt-14">
      <form
        className="max-w-md mx-auto"
        onSubmit={handleSubmit(handleUpdateBook)}
      >
        <div className="relative z-0 w-full mb-5 group">
          <input
            {...register("bookName", { required: true })}
            type="text"
            id="bookName"
            placeholder=""
            defaultValue={book.bookName}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />

          <label
            htmlFor="bookName"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Book name
          </label>
          {errors.bookName && (
            <span className="text-red-500 italic text-sm">
              This field is required
            </span>
          )}
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            {...register("imgUrl", { required: true })}
            type="text"
            id="imgUrl"
            placeholder=""
            defaultValue={book.img}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
          <label
            htmlFor="imgUrl"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Book image
          </label>
          {errors.imgUrl && (
            <span className="text-red-500 italic text-sm">
              This field is required
            </span>
          )}
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              {...register("authorName", { required: true })}
              type="text"
              id="authorName"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
              defaultValue={book.authorName}
            />
            <label
              htmlFor="authorName"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Author name
            </label>
            {errors.authorName && (
              <span className="text-red-500 italic text-sm">
                This field is required
              </span>
            )}
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              {...register("category", { required: true })}
              type="text"
              id="category"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
              defaultValue={book.category}
            />
            <label
              htmlFor="category"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Category
            </label>
            {errors.category && (
              <span className="text-red-500 italic text-sm">
                This field is required
              </span>
            )}
          </div>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            {...register("rating", { required: true })}
            type="text"
            id="rating"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
            defaultValue={book.rating}
          />
          <label
            htmlFor="rating"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Rating
          </label>
          {errors.rating && (
            <span className="text-red-500 italic text-sm">
              This field is required
            </span>
          )}
        </div>
        <div className="text-end">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateBook;
