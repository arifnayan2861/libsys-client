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
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/Error/ErrorPage";
import axios from "axios";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
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
        element: (
          <PrivateRoute>
            <AllBooks />
          </PrivateRoute>
        ),
        // loader: () =>
        //   axios.get(`${import.meta.env.VITE_BACKEND_URL}/all-books`, {
        //     withCredentials: true,
        //   }),
      },
      {
        path: "/update-book/:id",
        element: (
          <PrivateRoute>
            <UpdateBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-book",
        element: (
          <PrivateRoute>
            <AddBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/borrowed-books",
        element: (
          <PrivateRoute>
            <BorrowedBooks />
          </PrivateRoute>
        ),
      },
      {
        path: "/books/:category",
        element: <BooksByCategory />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_BACKEND_URL}/books/${params.category}`),
      },
      {
        path: "/book/:id",
        element: (
          <PrivateRoute>
            <BookDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_BACKEND_URL}/book/${params.id}`),
      },
    ],
  },
]);

export default routes;
