import { MdKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-[90vh] my-8 text-center rounded-2xl bg-base-300 mx-8 lg:mx-28 flex justify-center items-center">
      <div className="space-y-8">
        <h1 className="text-6xl font-semibold lg:text-8xl text-red-500">
          Error!
        </h1>
        <p className="text-xl font-semibold lg:text-2xl">404 Not found</p>
        <p className="text-sm w-[80%] mx-auto text-gray-500">
          This happended because the page you are trying to access does not
          exist or unavailable at this moment
        </p>
        <button
          onClick={() => navigate("/")}
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <div className="flex items-center">
            <MdKeyboardArrowLeft size={20} />
            <p>Go back to home</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
