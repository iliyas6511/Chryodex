import React, { useState } from "react";
import { FaStore, FaUserTie } from "react-icons/fa";
import solution from "../assets/Images/tiloset.png"
import { Link } from "react-router-dom";

const categories = ["Tile Adhesive", "Tile Grout", "Cleaners", "Tile Accessories"];

const products = [
  {
    id: 1,
    name: "TILEOSET CLASSIC ",
    desc: "For Ceramic Tiles on Internal Floors & Walls",
    img: solution, // replace with your image
  },
  {
    id: 2,
    name: "TILEOSET CLASSIC",
    desc: "For Ceramic & Vitrified Tiles on Internal Floors & Walls",
    img: solution,
  },
  {
    id: 3,
    name: "TILEOSET PREMIUM PLUS",
    desc: "For Vitrified Tile & Natural Stones",
    img: solution,
  },
  {
    id: 4,
    name: "TILEOSET ULTRA Tile Adhesive ",
    desc: "For Large Tiles & Stones",
    img: solution,
  },
];

const MultiProducts = () => {
  const [activeCategory, setActiveCategory] = useState("Tile Adhesive");

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-10 py-8">
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium  transition ${activeCategory === cat
                ? "bg-[var(--color-secondary)] text-[var(--color-white)]"
                : "bg-gray-200  text-[var(--color-black)]"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link to={'/productdetails'}>
            <div
              key={product.id}
              className="bg-[var(--color-white)] shadow-md border border-gray-200 rounded-2xl p-4 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <div className="bg-gray-100 rounded-2xl w-full flex justify-center items-center p-6 mb-4">
                <img
                  src={product.img}
                  alt={product.name}
                  className="h-44 object-contain"
                />
              </div>
              <h3 className="font-medium text-textPrimary text-sm">{product.name}</h3>
              <p className="text-[10px] text-gray-600 mt-2">{product.desc}</p>

              {/* Buttons */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                <button className="flex text-gray-600 justify-center items-center gap-2 border border-gray-200 px-4 py-2 rounded-lg text-[8px] font-medium hover:bg-[var(--color-primary)] hover:text-[var(--color-black)] transition">
                  Find A Dealer
                </button>
                <button className="flex justify-center items-center gap-2 text-gray-600 border border-gray-200 px-4 py-2 rounded-lg text-[8px] font-medium hover:bg-[var(--color-primary)] hover:text-[var(--color-black)] transition">
                  Find A Contractor
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MultiProducts;
