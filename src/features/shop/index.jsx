import React, { useState } from "react";
import { motion } from "framer-motion";
import { mockProducts } from "../Data/Data";
import { Frown } from "lucide-react";

const index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

  const filterCategories = [
    "All",
    "Gear",
    "Clothing",
    "Accessories",
    "Supplements",
    "Equipments",
  ];

  const filteredProducts = mockProducts.filter((product) => {
    const matchesCategory =
      filterCategory === "All" || product.category === filterCategory;
    const matchesSearchQuery = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearchQuery;
  });

  return (
    <div className="bg-gray-100 p-6">
      {/* Header Section */}
      <header className="flex justify-between items-center py-6">
        <div className="logo text-2xl font-bold">The Body Refinery</div>
        {/* Search Bar */}
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search for products..."
            className="px-4 py-2 border border-gray-300 rounded-md"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="cart-icon">Cart (0)</div>
      </header>

      {/* Hero Section */}
      <section
        className="relative bg-cover h-72 text-white"
        style={{ backgroundImage: "url('/path-to-banner-image.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center p-6">
          <h2 className="text-3xl font-bold mb-4">
            Shop Fitness Gear & Apparel
          </h2>
          <button className="bg-[#2c6975] px-8 py-3 rounded text-white">
            Shop Now
          </button>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="mt-8">
        <h3 className="text-2xl font-semibold mb-4 text-center">
          Shop by Category
        </h3>
        {/* Filter Buttons */}
        <div className="flex justify-center space-x-4 my-6">
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setFilterCategory(category)}
              className={`px-4 py-2 rounded font-medium ${
                filterCategory === category
                  ? "bg-[#2c6975] text-white"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {["Clothing", "Accessories", "Gear", "Supplements"].map(
            (category) => (
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img
                  src={`/path-to-${category.toLowerCase()}-image.jpg`}
                  alt={category}
                  className="w-full h-40 object-cover mb-4"
                />
                <h4 className="font-semibold text-xl">{category}</h4>
              </div>
            )
          )}
        </div> */}
      </section>

      {/* Products Display */}
      <section className="mt-8">
        <motion.div className="grid md:grid-cols-3 gap-8 ">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                className="bg-white shadow-md rounded-lg p-4"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover mb-4 rounded-md"
                />
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-lg font-bold mt-2">${product.price}</p>
                <p className="text-yellow-500 mt-1">
                  Rating: {product.rating} ★
                </p>
                <button className="bg-[#2c6975] text-white mt-4 px-4 py-2 rounded">
                  Add to Cart
                </button>
              </motion.div>
            ))
          ) : (
            <div className="w-full flex flex-col items-center justify-center text-center">
              <Frown /> 
              <p className="text-center text-gray-600">No products found</p>
            </div>
          )}
        </motion.div>
      </section>

      {/* Featured Products Section */}
      <section className="mt-12">
        <h3 className="text-2xl font-semibold mb-6">Featured Products</h3>
        <motion.div layout className="grid md:grid-cols-3 gap-8">
          {mockProducts.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-white shadow-md rounded-lg p-4"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="font-bold">{product.name}</h3>
              <p className="text-lg font-bold mt-2">${product.price}</p>
              <button className="bg-[#2c6975] text-white mt-4 px-4 py-2 rounded">
                Add to Cart
              </button>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default index;
