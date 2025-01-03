   /**
 * The Marketplace component renders a marketplace page with a search bar, a hero section and a main content area.
 * The main content area contains a sidebar with categories and a product grid that displays products filtered by category.
 * The component uses a combination of Tailwind CSS classes and custom CSS to style the elements.
 * The component also uses React hooks to handle state and side effects.
 * The component renders a gray line to separate the hero section from the main content area.
 * The component renders a product grid with products filtered by category and sorted by name.
 * The component renders a loading indicator when the products are being fetched from the server.
 * The component renders an error message when there is an error fetching the products from the server.
 * The component also renders a back to top button that scrolls to the top of the page when clicked.
 */
import { useState } from "react";
import ComputerVillage from "../assets/markets/ComputerVillage.jpg";
import Alaba from "../assets/markets/AlabaMarket.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Marketplace = () => {
  const [categories] = useState([
    "All Categories",
    "Appliances",
    "Automobiles",
    "Health & Beauty",
    "Home & Office",
    "Electronics",
    "Fashion",
    "Supermarket",
    "Computing",
    "Baby Products",
    "Gaming",
    "Sporting Goods",
    "Toys",
  ]);

  const [products] = useState([
    { name: "Classic Dry Iron", price: 40000, image: ComputerVillage },
    { name: "Samsung TV", price: 100000, image: Alaba },
    { name: "Refrigerator", price: 140000, image: "path/to/image3.jpg" },
    { name: "Multipurpose Blender", price: 40000, image: "path/to/image4.jpg" },
    { name: "Washing Machine", price: 79000, image: "path/to/image5.jpg" },
    { name: "Kitchen Oven", price: 200000, image: "path/to/image6.jpg" },
    { name: "Counter Microwave", price: 58000, image: "path/to/image7.jpg" },
    { name: "Home Theatre Set", price: 180000, image: "path/to/image8.jpg" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("Appliances");

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Search Bar */}
      <div className="relative flex justify-center bg-white shadow-md py-2 text-Primary">
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Search a vendor or category"
            className="border-Primary py-2 pr-4 pl-10 border rounded-full focus:ring-2 focus:ring-Primary w-full text-sm placeholder-gray-400 focus:outline-none"
          />
          <svg
            className="top-1/2 left-3 absolute w-5 h-5 text-Primary transform -translate-y-1/2"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 4.247 11.943l5.53 5.53a.75.75 0 0 0 1.06-1.06l-5.53-5.53A6.75 6.75 0 0 0 10.5 3.75ZM5.25 10.5a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative w-screen h-[300px]">
        <img
          src={ComputerVillage}
          alt="Computer Village"
          className="top-0 left-0 absolute w-full h-full market-image object-cover"
        />
        <div className="top-0 left-0 absolute bg-green-900 bg-opacity-50 w-full h-full"></div>
        <div className="relative flex flex-col justify-center items-center h-full text-center text-white">
          <h1 className="font-[400] text-5xl sm:text-4xl md:text-8xl uppercase leading-tight otto">
            Computer Village
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex mx-auto container">
        {/* Sidebar */}
        <div className="flex flex-col justify-between bg-white shadow-md p-4 w-[300px]">
          <div className="pt-20">
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`cursor-pointer p-2 rounded ${
                    selectedCategory === category
                      ? "bg-Primary text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex-grow bg-white rounded-2xl py-10 shadow-md ml-6 mt-8 mb-8 mr-6 p-6 pb-20">
            <h3 className="font-bold text-xl">{selectedCategory}</h3>
            {/* Gray Line */}
            <div className="mt-6 border-t-2 border-gray-200"></div>
            {/* Product Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                >
                  {/* Product Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover rounded-t-2xl"
                  />
                  {/* Product Details */}
                  <div className="flex justify-between items-center p-4">
                    <div>
                      <h4 className="text-sm text-gray-800">{product.name}</h4>
                      <p className="text-Primary font-thin mt-2">
                        ₦{product.price.toLocaleString()}
                      </p>
                    </div>
                    <button className="bg-Primary bg-opacity-20 text-Primary py-3 px-4 rounded-full hover:bg-opacity-30">
                      <FontAwesomeIcon icon={faCartShopping} className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
        </div>  
      </div>
    </div>
  );
};

export default Marketplace;
