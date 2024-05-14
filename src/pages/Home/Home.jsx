import BookCategories from "../../components/BookCategories/BookCategories";
import Faq from "../../components/FAQ/Faq";
import Pricing from "../../components/Pricing/Pricing";
import Slider from "../../components/Slider/Slider";

const Home = () => {
  return (
    <div className="w-[80%] max-w-screen-xl mx-auto mt-8 md:mt-10">
      <Slider />
      <BookCategories />
      <Pricing />
      <Faq />
    </div>
  );
};

export default Home;
