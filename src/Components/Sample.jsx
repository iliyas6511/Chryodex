import React from "react";
import { FaUser } from "react-icons/fa";

const blogs = [
  {
    id: 1,
    title: "Compressive Strength of AAC Blocks Explained",
    desc: "Learn about grades, density, and strength-to-weight advantage of AAC blocks.",
    img: "https://www.magicrete.in/assets/uploads/2025/08/blog/whatsapp-image-2025-08-26-at-1-17-52-pm_1756203955.jpeg",
    date: "26 Aug 2025",
    author: "Cryodex",
  },
  {
    id: 2,
    title: "AAC Block Sizes & IS Standards Explained",
    desc: "Why AAC block sizes matter and standard codes in India.",
    img: "https://www.magicrete.in/assets/uploads/2025/08/blog/whatsapp-image-2025-08-26-at-1-17-52-pm_1756203955.jpeg",
    date: "22 Aug 2025",
    author: "Cryodex",
  },
  {
    id: 3,
    title: "Sustainable Building with AAC Blocks",
    desc: "How AAC blocks contribute to eco-friendly construction.",
    img: "https://www.magicrete.in/assets/uploads/2025/08/blog/whatsapp-image-2025-08-26-at-1-17-52-pm_1756203955.jpeg",
    date: "15 Aug 2025",
    author: "Cryodex",
  },
  {
    id: 4,
    title: "AAC Blocks vs Red Bricks",
    desc: "Compare durability, strength, and cost-effectiveness.",
    img: "https://www.magicrete.in/assets/uploads/2025/08/blog/whatsapp-image-2025-08-26-at-1-17-52-pm_1756203955.jpeg",
    date: "10 Aug 2025",
    author: "Cryodex",
  },
];

const BlogSection = () => {
  return (
    <section className="py-14 bg-[var(--color-white)]">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-secondary tracking-tight">
          Recent Blogs
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-lg">
          Explore the World of Construction Innovation through our engaging blogs – Where Ideas Take Shape.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto px-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
          >
            <img
              src={blog.img}
              alt={blog.title}
              className="w-full h-56 object-cover rounded-t-2xl"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-black mb-3">
                {blog.title}
              </h3>
              <p className="text-gray-700 mb-5 leading-relaxed">{blog.desc}</p>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <span className="flex items-center gap-2">
                  <FaUser className="text-[var(--color-secondary)]" /> {blog.author}
                </span>
                <span className="font-medium">{blog.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center mt-12">
        <button className="bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] hover:text-white text-[var(--color-black)] font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
          View More
        </button>
      </div>
    </section>
  );
};

export default BlogSection;
