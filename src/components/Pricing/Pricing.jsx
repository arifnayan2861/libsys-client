const Pricing = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-8 mx-auto mt-14">
        <h1 className="text-2xl font-bold text-center text-gray-800 capitalize lg:text-5xl dark:text-white">
          Pricing Plan
        </h1>

        <p className="max-w-2xl mx-auto mt-4 text-center text-gray-500 xl:mt-6 dark:text-gray-300">
          Sign up to LibSys & get amazing pricing. We have options for
          everybody.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-6 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg dark:border-gray-700">
            <p className="font-medium text-gray-500 uppercase dark:text-gray-300">
              Free
            </p>

            <h2 className="text-4xl font-semibold text-gray-800 uppercase dark:text-gray-100">
              $0
            </h2>

            <p className="font-medium text-gray-500 dark:text-gray-300">
              Life time
            </p>

            <button className="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
              Start Now
            </button>
          </div>

          <div className="w-full p-8 space-y-8 text-center bg-blue-600 rounded-lg">
            <p className="font-medium text-gray-200 uppercase">Premium</p>

            <h2 className="text-5xl font-bold text-white uppercase dark:text-gray-100">
              $40
            </h2>

            <p className="font-medium text-gray-200">Per month</p>

            <button className="w-full px-4 py-2 mt-10 tracking-wide text-blue-500 capitalize transition-colors duration-300 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:ring focus:ring-gray-200 focus:ring-opacity-80">
              Start Now
            </button>
          </div>

          <div className="w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg dark:border-gray-700">
            <p className="font-medium text-gray-500 uppercase dark:text-gray-300">
              Enterprise
            </p>

            <h2 className="text-4xl font-semibold text-gray-800 uppercase dark:text-gray-100">
              $100
            </h2>

            <p className="font-medium text-gray-500 dark:text-gray-300">
              Life time
            </p>

            <button className="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
              Start Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
