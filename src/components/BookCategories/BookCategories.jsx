import Card from "./Card";

const BookCategories = () => {
  // const bookCategories=["Non-fiction", "Drama", "Sci-fi", "Thriller"]
  const bookCategories = [
    {
      category: "Non-fiction",
      image: "https://i.ibb.co/wzwV7sW/nonfiction-2021.png",
    },
    {
      category: "Drama",
      image:
        "https://i.ibb.co/wY3CyNP/HA426-Summer-Reading-adults-flatlay-Drama-facebook-v3.jpg",
    },
    {
      category: "Sci-fi",
      image:
        "https://i.ibb.co/C5gxz1J/best-sci-fi-books-ever-e1678272724101-1000x563-jpg.webp",
    },
    {
      category: "Thriller",
      image:
        "https://i.ibb.co/64vb0NY/1-best-thriller-books-index-comp-649d9b68c3157.jpg",
    },
  ];
  return (
    <div>
      <div>
        <h1 className="text-2xl md:text-5xl font-bold text-center my-10 md:my-16 dark:text-white">
          Book Categories
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto">
        {bookCategories.map((category, idx) => (
          <Card key={idx} name={category.category} img={category.image} />
        ))}
      </div>
    </div>
  );
};

export default BookCategories;
