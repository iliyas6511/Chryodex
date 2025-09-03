import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaArrowRight, FaUserCircle } from "react-icons/fa";

const Banner = () => {
  const slides = [
    {
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600",
      title: "Naya Ghar Banta Hai Chryodex Se!",
      subtitle:
        "AAC blocks jo rakhe seelan aur shora, dono ko door, Aur kare faster aur smarter construction!",
    },
    {
      img: "https://images.unsplash.com/photo-1557929101-7ef521427d97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVpbGRpbmclMjB0aWxlcyUyMGNoZW1pY2FsfGVufDB8fDB8fHww",
      title: "Stronger & Smarter Walls!",
      subtitle: "Build homes that last longer with Magicrete AAC blocks.",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1682142051662-eda5ad640633?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJ1aWxkaW5nJTIwdGlsZXMlMjBjaGVtaWNhbHxlbnwwfHwwfHx8MA%3D%3D",
      title: "Faster Construction with Chryodex",
      subtitle: "Save time & money while building your dream home.",
    },
  ];

  // Function to restart overlay animation on each slide change
  const restartOverlayAnimation = () => {
    const overlays = document.querySelectorAll(".clip-triangle");
    overlays.forEach((el) => {
      el.style.animation = "none";
      // reflow trick
      void el.offsetWidth;
      el.style.animation = "slideIn 1.2s ease forwards";
    });
  };

  return (
    <div className="w-full h-[50vh] md:h-[85vh] relative mt-[120px]">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        onSlideChange={restartOverlayAnimation}
        onSwiper={restartOverlayAnimation}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-center bg-cover relative"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              {/* Angled Overlay */}
              <div className="absolute inset-0 bg-black/60 clip-triangle"></div>

              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-start px-6 md:px-16">
                <div className="max-w-[50%] text-white z-10">
                  <div className="max-w-[500px]">
                    <h1 className="text-2xl md:text-4xl font-semibold mb-4 leading-snug">
                      {slide.title}
                    </h1>
                    <p className="text-sm md:text-lg font-medium mb-6">
                      {slide.subtitle}
                    </p>
                    <button className="flex items-center gap-2 border border-white text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-medium shadow-md hover:bg-primary hover:text-black transition">
                      Know More <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Animation Styles */}
      <style jsx>{`
  .clip-triangle {
    clip-path: polygon(0 0, 60% 0, 30% 100%, 0% 100%);
    animation: slideIn 1.2s ease forwards;
  }

  @keyframes slideIn {
    0% {
      clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
    }
    100% {
      clip-path: polygon(0 0, 60% 0, 30% 100%, 0% 100%);
    }
  }

  /* Swiper pagination custom styles */
  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background: var(--color-gray-50);
    opacity: 0.5;
    transition: all 0.3s ease;
    margin: 0 10px!;
  }

  .swiper-pagination-bullet-active {
    background: var(--color-primary);
    opacity: 1;
    transform: scale(1.1);
  }
`}</style>
    </div>
  );
};



const AboutUs = () => {
  return (
    <section className="w-full py-16 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="grid grid-cols-12 gap-5">
          {/* Left Side - Text */}
          <div className="col-span-12 md:col-span-6 space-y-5">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold ">
                About Us
              </h2>
              <div className="w-10 h-1 bg-primary"></div>
            </div>
            <p className="text-textPrimary text-lg">
              At CCC, we see infinite possibilities for intelligent, sustainable solutions that can solve the emerging
              challenge before us. The brand portfolio under the CCC encompasses concrete admixtures, waterproofing,
              concrete repair and protection, dry mortar, performance grouts and performance flooring.
            </p>
            <button className="flex items-center gap-2 text-sm bg-primary text-textPrimary font-medium px-6 py-3 rounded-full hover:bg-secondary hover:text-primary transition">
              Read More <FaArrowRight />
            </button>
          </div>

          {/* Right Side - Image */}
          <div className="col-span-12 md:col-span-6">
            <div className="w-full md:max-w-[80%] mx-auto">
              <img
                src="src/assets/Images/a 1.png"
                alt="About Us"
                className="w-full h-[400px] rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};




import product1 from "../assets/Images/Group 120.png"
import product2 from "../assets/Images/p21.png"
import product3 from "../assets/Images/pp91.png"

const productsData = {
  "Water Proofing": [
    { id: 1, name: "Aqua Shield", desc: "High quality waterproofing solution", img: product1 },
    { id: 2, name: "Hydro Guard", desc: "Protects walls & roofs from water damage", img: product2 },
  ],
  "Solutions": [
    { id: 3, name: "Smart Fix", desc: "Complete construction fixing solution", img: product3 },
    { id: 4, name: "Pro Seal", desc: "Advanced sealing solution for cracks", img: product1 },
  ],
  "Chemicals": [
    { id: 5, name: "Chem Bond", desc: "Strong chemical bonding agent", img: product2 },
    { id: 6, name: "Durafix", desc: "Durable chemical mix for structures", img: product3 },
  ],
};

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("Water Proofing");

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12">
      {/* Tab Buttons */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        {Object.keys(productsData).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 text-lg font-semibold rounded-xl shadow-md transition-all duration-300
              ${activeTab === tab
                ? "bg-[var(--color-secondary)] text-[var(--color-white)]"
                : "bg-[var(--color-primary)] text-[var(--color-black)] hover:bg-[var(--color-secondary)] hover:text-[var(--color-white)]"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-4">
        {productsData[activeTab].map((product) => (
          <div
            key={product.id}
            className="bg-[var(--color-white)] p-4 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
          >
            <div className="w-full h-[250px] bg-blue-100 rounded-md p-4">
              <img src={product.img} alt={product.name} className="w-full h-full object-fill" />
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-xl text-[var(--color-secondary)] mb-2">{product.name}</h3>
              <p className="text-[var(--color-black)] text-sm font-medium mb-4">{product.desc}</p>
              <button className="px-4 py-2 bg-[var(--color-primary)] text-[var(--color-black)] font-semibold rounded-lg shadow-md hover:bg-[var(--color-secondary)] hover:text-[var(--color-white)] transition-all duration-300">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const videos = [
  { id: 1, title: "Video 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: 2, title: "Video 2", url: "https://www.youtube.com/embed/ysz5S6PUM-U" },
  { id: 3, title: "Video 3", url: "https://www.youtube.com/embed/jNQXAC9IVRw" },
  { id: 4, title: "Video 4", url: "https://www.youtube.com/embed/tgbNymZ7vqY" },
  { id: 5, title: "Video 5", url: "https://www.youtube.com/embed/kXYiU_JCYtU" },
];

const VideoGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Prev & Next with wrapping loop
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="max-w-7xl mx-auto py-10 bg-[var(--color-white)] text-center">
      <h2 className="text-3xl font-bold text-[var(--color-secondary)] mb-8">
        Video Gallery
      </h2>

      <div className="relative flex items-center justify-center">
        {/* Left Button */}
        <button
          onClick={handlePrev}
          className="absolute left-2 md:left-8 z-10 bg-[var(--color-primary)] p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          <FaChevronLeft className="text-[var(--color-black)]" />
        </button>

        {/* Carousel */}
        <div className="overflow-hidden w-full max-w-4xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${activeIndex * 100}%)`,
            }}
          >
            {videos.map((video, index) => (
              <div
                key={video.id}
                className="w-full flex-shrink-0 flex justify-center px-4"
              >
                <div
                  className={`rounded-xl overflow-hidden shadow-lg border-4 transition-all duration-500
                    ${index === activeIndex ? "scale-100 border-[var(--color-primary)]" : "scale-90 border-transparent opacity-75"}
                  `}
                  style={{ minWidth: "80%" }} // Show center fully & sides partially
                >
                  <iframe
                    className="w-full h-60 md:h-72"
                    src={video.url}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <p className="py-2 font-semibold text-[var(--color-black)] bg-[var(--color-white)]">
                    {video.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Button */}
        <button
          onClick={handleNext}
          className="absolute right-2 md:right-8 z-10 bg-[var(--color-primary)] p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          <FaChevronRight className="text-[var(--color-black)]" />
        </button>
      </div>
    </div>
  );
};

import { FaDownload } from "react-icons/fa";

const DownloadBrochure = () => {
  return (
    <section className="w-full flex justify-center px-4 py-20">
      <div className="max-w-7xl w-full bg-[var(--color-primary)] rounded-[150px_30px_150px_30px] p-8 md:p-14 flex flex-col items-center text-center relative overflow-hidden">

        {/* Background circle pattern */}
        <div className="absolute left-[-80px] top-10 w-72 h-72 border-[1px] border-black/10 rounded-full"></div>
        <div className="absolute right-[-80px] bottom-10 w-72 h-72 border-[1px] border-black/10 rounded-full"></div>

        {/* Title */}
        <h2 className="text-2xl md:text-4xl font-bold text-[var(--color-black)]">
          Want to Know More About Us?
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-lg text-[var(--color-textPrimary)]">
          Download Company Brochure
        </p>

        {/* Button */}
        <a
          href="#"
          className="mt-6 flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-black)] text-[var(--color-white)] font-semibold shadow-lg transition-all duration-300 hover:bg-[var(--color-secondary)] hover:scale-105"
        >
          <FaDownload className="text-lg" />
          Download Brochure
        </a>
      </div>
    </section>
  );
};


const tools = [
  {
    id: 1,
    title: "AAC Block Calculator",
    img: "https://www.magicrete.in/assets/images/index/old/aac-block.png",
    link: "#",
  },
  {
    id: 2,
    title: "Adhesive Selector",
    img: "https://www.magicrete.in/assets/images/index/old/adhesive-selector.png",
    link: "#",
  },
  {
    id: 3,
    title: "Adhesive Coverage Calculator",
    img: "https://www.magicrete.in/assets/images/index/old/adhesivecoveragecalculator.png",
    link: "#",
  },
  {
    id: 4,
    title: "Grout Coverage Calculator",
    img: "https://www.magicrete.in/assets/images/index/old/groupcoveragecalculator.png",
    link: "#",
  },
  {
    id: 5,
    title: "Tile Visualizer",
    img: "https://www.magicrete.in/assets/images/index/old/tilevisualizer.png",
    link: "#",
  },
];

const UsefulTools = () => {
  return (
    <section className="w-full flex justify-center px-4 py-16 bg-[var(--color-black)]">
      <div className="max-w-7xl w-full text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-white)]">
          Useful Tools
        </h2>
        <p className="mt-4 text-gray-300">
          Friendly tools to help you select the right product, match shades to your tiles,
          and estimate the right quantity.
        </p>

        {/* Tools Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className="bg-gray-800 text-[var(--color-white)] rounded-xl p-6 flex flex-col items-center justify-between shadow-md hover:shadow-lg transition-all duration-300"
            >
              {/* Row Layout */}
              <div className="flex flex-col items-center gap-4">
                {/* Icon Image */}
                <img
                  src={tool.img}
                  alt={tool.title}
                  className="w-16 h-16 object-contain"
                />

                {/* Title */}
                <h3 className="text-base font-semibold text-center">{tool.title}</h3>

                {/* Button */}
                <a
                  href={tool.link}
                  className="mt-3 px-5 py-2 rounded-full border border-gray-400 text-[var(--color-white)] font-medium transition-all duration-300 hover:bg-[var(--color-secondary)] hover:border-[var(--color-secondary)] hover:scale-105"
                >
                  View More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TrustedBy = () => {
  const logos = [
    "https://www.magicrete.in/assets/uploads/2024/04/trustedbymaster/12_1713876011.webp",
    "https://www.magicrete.in/assets/uploads/2024/04/trustedbymaster/13_1713950079.webp",
    "https://www.magicrete.in/assets/uploads/2024/04/trustedbymaster/14_1713876029.webp",
    "https://www.magicrete.in/assets/uploads/2024/04/trustedbymaster/15_1713876040.webp",
    "https://www.magicrete.in/assets/uploads/2024/04/trustedbymaster/16_1713876050.webp",
    "https://www.magicrete.in/assets/uploads/2024/04/trustedbymaster/16_1713876050.webp",
    "https://www.magicrete.in/assets/uploads/2024/04/trustedbymaster/17_1713876060.webp",
  ];

  return (
    <section className="w-full flex justify-center px-4 py-16 bg-gray-50">
      <div className="max-w-7xl w-full text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-secondary">
          Trusted By
        </h2>
        <p className="mt-4 text-textPrimary text-base">
          Preferred choice of top-tier clients for quality-driven solutions.
        </p>

        {/* Logo Slider */}
        <div className="relative overflow-hidden mt-6">
          <div className="flex animate-scroll space-x-10">
            {/* duplicate logos for infinite loop */}
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[150px] h-[140px]"
              >
                <img
                  src={logo}
                  alt={`Client ${index}`}
                  className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Keyframes inside style */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
};

const VideoSection = () => {
  return (
    <section className="w-full flex justify-center px-4 pb-20 bg-gray-50">
      <div className="max-w-7xl w-full flex flex-col items-center text-center">
        {/* Video Wrapper */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-lg">
          {/* Responsive iframe */}
          <div className="relative pb-[56.25%] h-0">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-2xl"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Dummy Video
              title="Company Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Gradient Overlay */}
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-center justify-center">
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[var(--color-black)] font-semibold px-6 py-2 rounded-full shadow-lg hover:bg-[var(--color-primary)] hover:text-[var(--color-black)] transition-all duration-300"
            >
              Watch Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};


import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";


const projects = [
  {
    title: "Kalpataru Immensa",
    location: "Mumbai",
    product: "AAC Blocks",
    img: "https://www.magicrete.in/assets/uploads/2024/03/projectmaster/kalpataru-immensa_1709888438.jpg",
  },
  {
    title: "Supreme Court of India",
    location: "New Delhi",
    product: "AAC Blocks",
    img: "https://www.magicrete.in/assets/uploads/2024/03/projectmaster/supreme-court-of-india_1709641252.jpg",
  },
  {
    title: "IIM Rohtak",
    location: "Rohtak",
    product: "AAC Blocks",
    img: "https://www.magicrete.in/assets/uploads/2024/03/projectmaster/iim-rohtak_1709641579.webp",
  },
  {
    title: "Surat Diamond Bourse",
    location: "Surat",
    product: "AAC Blocks",
    img: "https://www.magicrete.in/assets/uploads/2024/03/projectmaster/surat-diamond-bourse_1709641367.jpg",
  },
  {
    title: "ITPO Pragati Maidan",
    location: "Delhi",
    product: "AAC Blocks",
    img: "https://www.magicrete.in/assets/uploads/2024/03/projectmaster/itpo-pragati-maidan_1709643971.png",
  },
];

const ProjectCard = ({ project }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
  >
    {/* Project Image */}
    <img
      src={project.img}
      alt={project.title}
      className="w-full h-80 object-cover"
    />

    {/* Always visible title at bottom */}
    <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 py-3">
      <h3 className="text-lg md:text-xl font-semibold text-white">
        {project.title}
      </h3>
    </div>

    {/* Hover Overlay */}
    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-between p-6">
      <div>
        <p className="text-sm text-gray-200">Location: {project.location}</p>
        {/* <p className="text-sm text-gray-300 mt-1">
          🏗 Product: {project.product}
        </p> */}
      </div>
      <div className="flex justify-start">
        <button className="bg-indigo-600 text-white text-sm px-5 py-2 rounded-full shadow-md hover:bg-indigo-700 transition">
          View More →
        </button>
      </div>
    </div>
  </motion.div>
);

const ProjectShowcase = () => {
  return (
    <div className="py-12 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-semibold text-center text-secondary mb-6">
        Our Projects
      </h2>
      <p className="text-center text-base text-textPrimary font-medium mb-10">
        Our Project Showcase Unveils the Art of Innovative Construction!
      </p>

      {/* Desktop Grid */}
      <div className="hidden lg:grid grid-cols-3 gap-8 py-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>



      {/* Mobile/Tablet Carousel */}
      <div className="lg:hidden">
        <Swiper
          spaceBetween={20}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            0: { slidesPerView: 1 }, // small screen: 1 slide
            640: { slidesPerView: 2 }, // tablet: 2 slides
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex justify-center mt-8">
        <button className="flex items-center gap-2 text-indigo-700 font-semibold text-lg group hover:text-primary transition">
          View All
          <FaArrowRight className="transform transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};


import { FaUser } from "react-icons/fa";
import Footer from "../Components/Footer";

const blogs = [
  {
    id: 1,
    title: "Compressive Strength of AAC Blocks Explained",
    desc: "Learn about grades, density, and strength-to-weight advantage of AAC blocks.",
    img: "https://www.magicrete.in/assets/uploads/2025/08/blog/whatsapp-image-2025-08-26-at-1-17-52-pm_1756203955.jpeg",
    date: "26 Aug 2025",
    author: "Chryodex",
  },
  {
    id: 2,
    title: "AAC Block Sizes & IS Standards Explained",
    desc: "Why AAC block sizes matter and standard codes in India.",
    img: "https://www.magicrete.in/assets/uploads/2025/08/blog/whatsapp-image-2025-08-26-at-1-17-52-pm_1756203955.jpeg",
    date: "22 Aug 2025",
    author: "Chryodex",
  },
  {
    id: 3,
    title: "Sustainable Building with AAC Blocks",
    desc: "How AAC blocks contribute to eco-friendly construction.",
    img: "https://www.magicrete.in/assets/uploads/2025/08/blog/whatsapp-image-2025-08-26-at-1-17-52-pm_1756203955.jpeg",
    date: "15 Aug 2025",
    author: "Chryodex",
  },
  {
    id: 4,
    title: "AAC Blocks vs Red Bricks",
    desc: "Compare durability, strength, and cost-effectiveness.",
    img: "https://www.magicrete.in/assets/uploads/2025/08/blog/whatsapp-image-2025-08-26-at-1-17-52-pm_1756203955.jpeg",
    date: "10 Aug 2025",
    author: "Chryodex",
  },
];

const BlogSection = () => {
  return (
    <section className="py-14 bg-[var(--color-white)]">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-semibold text-secondary tracking-tight">
          Recent Blogs
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-base px-2 md:text-lg">
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
            <div className="p-4 md:p-6 h-auto flex flex-col">
              <h3 className="text-lg md:text-xl font-semibold text-black mb-3">
                {blog.title}
              </h3>
              <p className="text-gray-700 mb-5 text-sm md:text-base leading-relaxed">{blog.desc}</p>
              <div className="w-full self-end">
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <span className="flex items-center text-[16px] gap-2">
                    <FaUserCircle className="text-gray-500 text-[27px]" />
                    {blog.author}
                  </span>
                  <span className="font-normal text-gray-600">{blog.date}</span>
                </div>
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





const Homepage = () => {
  return (
    <>
      <Banner />
      <AboutUs />
      <ProductTabs />
      <VideoGallery />
      <DownloadBrochure />
      <UsefulTools />
      <TrustedBy />
      <VideoSection />
      <ProjectShowcase />
      <BlogSection />
      <Footer />
    </>
  );
};

export default Homepage;
