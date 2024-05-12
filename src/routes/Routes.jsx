import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Regsiter/Register";
import AddBook from "../pages/AddBook/AddBook";
import BooksByCategory from "../pages/BooksByCategory/BooksByCategory";
import BookDetails from "../pages/BookDetails/BookDetails";
import BorrowedBooks from "../pages/BorrowedBooks/BorrowedBooks";
import AllBooks from "../pages/AllBooks/AllBooks";
import UpdateBook from "../pages/UpdateBook/UpdateBook";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/all-books",
        element: <AllBooks />,
      },
      {
        path: "/update-book/:id",
        element: <UpdateBook />,
      },
      {
        path: "/add-book",
        element: <AddBook />,
      },
      {
        path: "/borrowed-books",
        element: <BorrowedBooks />,
      },
      {
        path: "/books/:category",
        element: <BooksByCategory />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_BACKEND_URL}/books/${params.category}`),
      },
      {
        path: "/book/:id",
        element: <BookDetails />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_BACKEND_URL}/book/${params.id}`),
      },
    ],
  },
]);

export default routes;
