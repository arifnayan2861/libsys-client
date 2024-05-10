import BookCategories from "../../components/BookCategories/BookCategories";
import Slider from "../../components/Slider/Slider";

const Home = () => {
  return (
    <div className="w-[80%] max-w-screen-xl mx-auto mt-8 md:mt-10">
      <Slider />
      <BookCategories />
    </div>
  );
};

export default Home;
