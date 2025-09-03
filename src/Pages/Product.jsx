import React from "react";
import {
  FaBuilding,
  FaThLarge,
  FaTint,
  FaFlask,
  FaTools,
  FaWater,
} from "react-icons/fa";

import solution from "../assets/Images/tiloset.png";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "WALLING SOLUTIONS",
    desc: "INCREDIBLE BOND. IT’S NOT ABOUT BREAKING",
    img: solution,
    icon: <FaBuilding size={28} className="text-black" />,
  },
  {
    title: "TILE & STONE INSTALLATION",
    desc: "INCREDIBLE BOND. IT’S NOT ABOUT BREAKING",
    img: solution,
    icon: <FaThLarge size={28} className="text-black" />,
  },
  {
    title: "WATERPROOFING SOLUTIONS",
    desc: "THE CHEMICAL ARMOR: UNCOMPROMISING WATERPROOFING WATERPROOF PROTECTION",
    img: solution,
    icon: <FaTint size={28} className="text-black" />,
  },
  {
    title: "CONCRETE ADMIXTURE TECHNOLOGY",
    desc: "CONCRETE SOLUTIONS: BUILDING BEYOND LIMITS",
    img: solution,
    icon: <FaFlask size={28} className="text-black" />,
  },
  {
    title: "CONCRETE REPAIR & OTHER PRODUCTS",
    desc: "REBUILD. RESTORE. REINFORCE: YOUR CONCRETE MIRACLE",
    img: solution,
    icon: <FaTools size={28} className="text-black" />,
  },
  {
    title: "WATER PROOFING SYSTEMS",
    desc: "YOUR ULTIMATE WATERPROOF SOLUTION",
    img: solution,
    icon: <FaWater size={28} className="text-black" />,
  },
];

const ProductCategories = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-black)]">
          PRODUCTS
        </h2>
        <p className="mt-4 text-[var(--color-textPrimary)] max-w-3xl mx-auto">
          At CCC, we see infinite possibilities for intelligent, sustainable
          solutions that can solve the emerging challenge before us. The brand
          portfolio under CCC encompasses concrete admixtures, waterproofing,
          concrete repair and protection, dry mortar, performance grouts and
          performance flooring.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, index) => (
          <Link to={"/multiproducts"}>
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition"
          >
            
            {/* Image Area */}
            <div className="w-full h-60 flex items-center justify-center p-4">
              <img
                src={cat.img}
                alt={cat.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Content Area with fixed height */}
            <div className="bg-primary w-full py-4 px-3 flex flex-col justify-center gap-2 min-h-[120px]">
              <h3 className="text-base font-semibold text-black text-center">
                {cat.title}
              </h3>
              <p className="text-[12px] text-textPrimary  text-center line-clamp-3">
                {cat.desc}
              </p>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
