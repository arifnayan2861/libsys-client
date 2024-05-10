import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import axios from "axios";

import { AuthContext } from "../../context/AuthProvider";
import toast from "react-hot-toast";
import auth from "../../../firebase.config";

const Register = () => {
  const { user, createUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegsitration = async (data) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z@!?"$%&*_]{6,}$/;
    if (!regex.test(data.password)) {
      toast.error(
        "Password must be at least 6 characters with at least one uppercase letter, one lowercase letter, and one special character."
      );
      return;
    }
    if (data.password !== data.repeatPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    try {
      const result = await createUser(data.email, data.password);
      console.log(result.user);
      await updateProfile(auth.currentUser, {
        displayName: data.name,
        photoURL: data.photoUrl,
      });
      setUser({ ...user, photoURL: data.photoUrl, displayName: data.name });
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/users`, {
          name: data.name,
          email: data.email,
          password: data.password,
          photoUrl: data.photoUrl,
          role: "user",
        })
        .then((res) => console.log(res))
        .catch((error) => console.log(error.message));
      toast.success("Regsitration successful!");
      navigate("/");
    } catch (error) {
      console.log(error.message);
      toast.error("Registration failed!");
    }
  };

  return (
    <form
      className="w-[80%] max-w-sm mx-auto mt-14"
      onSubmit={handleSubmit(handleRegsitration)}
    >
      <div className="mb-5">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your name
        </label>
        <input
          {...register("name", { required: true })}
          type="text"
          id="name"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
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
          {...register("email", { required: true })}
          type="email"
          id="email"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="name@flowbite.com"
        />
        {errors.email && (
          <span className="text-red-500 italic text-sm">
            This field is required
          </span>
        )}
      </div>
      <div className="mb-5">
        <label
          htmlFor="photoUrl"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your photoUrl
        </label>
        <input
          {...register("photoUrl", { required: true })}
          type="text"
          id="photoUrl"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        />
        {errors.photoUrl && (
          <span className="text-red-500 italic text-sm">
            This field is required
          </span>
        )}
      </div>
      <div className="mb-5">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your password
        </label>
        <input
          {...register("password", { required: true })}
          type="password"
          id="password"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        />
        {errors.password && (
          <span className="text-red-500 italic text-sm">
            This field is required
          </span>
        )}
      </div>
      <div className="mb-5">
        <label
          htmlFor="repeat-password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Repeat password
        </label>
        <input
          {...register("repeatPassword", { required: true })}
          type="password"
          id="repeat-password"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        />
        {errors.repeatPassword && (
          <span className="text-red-500 italic text-sm">
            This field is required
          </span>
        )}
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Register new account
      </button>
    </form>
  );
};

export default Register;
