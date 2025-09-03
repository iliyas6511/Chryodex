import React, { useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { GiSandsOfTime, GiStrong } from "react-icons/gi";
import { MdKeyboardArrowDown } from "react-icons/md";

const ProductDescription = () => {
  const [selectedVariant, setSelectedVariant] = useState("5 Kg");
  const [isOpen, setIsOpen] = useState(false);

  const variants = [
    { label: "200 gm", price: 80 },
    { label: "1 Kg", price: 350 },
    { label: "5 Kg", price: 1550 },
    { label: "20 Kg", price: 5900 },
  ];

  const currentVariant = variants.find((v) => v.label === selectedVariant);

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-8 p-6 lg:p-12">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-5">
          {/* Left Side - Product Image & Price/Variants */}
          <div className="flex flex-col items-center w-full">
            {/* Image with hover scale */}
            <div className="overflow-hidden rounded-xl">
              <img
                src="https://www.magicrete.in/assets/uploads/2024/01/productdetil/unibond-sbr_1705666232.webp"
                alt="Unibond SBR"
                className="w-64 lg:w-80 h-full transform transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Variant & Price */}
            <div className="w-full sm:w-[70%] mt-6 border border-gray-300 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
              {/* Variants */}
              <div className="flex flex-col w-full sm:w-1/2">
                <span className="text-xs font-semibold text-gray-400 tracking-wide mb-1">
                  VARIANTS
                </span>
                <div
                  className="border border-lime-400 rounded-lg px-4 py-2 flex justify-between items-center cursor-pointer bg-white"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span className="text-gray-700 font-medium">{selectedVariant}</span>
                  <MdKeyboardArrowDown
                    className={`text-gray-600 transform transition-transform ${isOpen ? "rotate-180" : ""
                      }`}
                    size={22}
                  />
                </div>

                {isOpen && (
                  <div className="absolute mt-16 w-[150px] bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                    {variants.map((v) => (
                      <div
                        key={v.label}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setSelectedVariant(v.label);
                          setIsOpen(false);
                        }}
                      >
                        {v.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Price */}
              <div className="flex flex-col w-full sm:w-1/2 text-center sm:text-left">
                <span className="text-xs font-semibold text-gray-400 tracking-wide mb-1">
                  PRICE
                </span>
                <div className="flex items-center justify-center sm:justify-start text-2xl font-semibold text-[var(--color-black)]">
                  {/* <FaRupeeSign className="text-xl" /> */}
                  ₹{currentVariant.price}
                </div>
              </div>
            </div>

            {/* Buttons Below Variant & Price */}
            <div className="flex gap-4 mt-6 flex-col sm:flex-row w-full justify-center">
              <button className="bg-[var(--color-primary)] text-[var(--color-black)] px-6 py-3 rounded-lg font-semibold w-full sm:w-auto hover:opacity-90 transition">
                Find A Dealer
              </button>
              <button className="bg-[var(--color-secondary)] text-sm text-white px-6 py-3 rounded-lg font-semibold w-full sm:w-auto hover:opacity-90 transition">
                Find A Contractor
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="col-span-12 md:col-span-7">
          <div className="w-full">
            {/* Title */}
            <h2 className="text-3xl font-bold text-[var(--color-secondary)]">
              Unibond SBR
            </h2>

            {/* Description */}
            <p className="mt-3 text-base text-textPrimary leading-relaxed">
              Unibond (SBR) is a modified styrene-butadiene liquid emulsion that
              works as a ready-to-use bonding agent for repairing spalled concrete
              floors, columns, beams, and slabs. Its bonding capabilities also work
              well when bonding old concrete and mortar to new layers of concrete
              and mortar.
            </p>
            <p className="mt-3 text-textPrimary text-base leading-relaxed">
              In addition, Magicrete Unibond SBR also works great as a waterproofing
              agent for bathrooms, roofs, underground concrete tanks, walkways, and
              small terraces by providing a damp-resistant, anti-carbonation coating
              to the structures. Other use areas are:
            </p>

            <ul className="list-disc pl-6 mt-3 text-base text-textPrimary space-y-1">
              <li>It can be used as an additive in injection grouting</li>
              <li>It works as a great anti-corrosive coating on steel structures</li>
            </ul>

            <button className="mt-3 text-base text-[var(--color-secondary)] font-semibold flex items-center gap-1">
              + Read More
            </button>

            {/* Suitable Section */}
            <p className="mt-4 text-base text-textPrimary ">
              <span className="font-semibold">Suitable For:</span> Waterproofing
              underground/overhead concrete tanks, toilets, bathrooms, roofs. Also
              for repairing spalled concrete floors, columns, beams, slabs & cracks
              in masonry.
            </p>

            <p className="mt-2 text-base text-textPrimary">
              <span className="font-semibold">Size:</span> 200 gm, 1 kg, 5 kg & 20
              kg Packs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};



const FeatureCard = ({ number, color, icon, title, descript }) => {
  return (
    <div className={`rounded-[18px] w-full p-8 md:p-4 lg:p-8 flex flex-col gap-3 items-start ${color}`}>
      {icon}
      <div>
        {/* <span className="text-[34px] leading-[93px] font-bold text-black">
          {number}
          <span className={number % 2 === 0 ? "text-white" : "text-[#F9B800]"}>.</span>
        </span> */}
        <p className="flex flex-col gap-1">
          <span className="text-xl font-semibold">{title}</span>

          <span className="text-base font-extralight">{descript}</span>
        </p>
      </div>
    </div>
  );
};

const Features = () => {
  const featureData = [
    {
      number: 1,
      color: "bg-white",
      title: "High Bond Strength",
      descript: "Achieve superior adhesion ensuring optimal bonding to various substrates for long-lasting and reliable results.",
      icon: <GiStrong className="w-[50px] h-[50px] text-[#1C274C]" />,
    },
    {
      number: 2,
      color: "bg-primary",
      title: "Extended Open Time",
      descript: "Offers extended open time with special polymers, allowing easy application and ample adjustment time without compromising adhesive strength.",
      icon: <GiSandsOfTime className="w-[50px] h-[50px] text-[#1C274C]" />,
    },
    {
      number: 3,
      color: "bg-primary",
      title: "High Sag Resistance",
      descript: "Perfect for vertical applications, Magicrete Standard Tile Adhesive ensures superior grip, effectively preventing tile slippage.",
      icon: <GiSandsOfTime className="w-[50px] h-[50px] text-[#1C274C]" />,
    },
    {
      number: 4,
      color: "bg-white",
      title: "No Shrinkage",
      descript: "Water-retaining and self-curing properties ensure minimal shrinkage cracks, guaranteeing a flawless finish for your project.",
      icon: <GiStrong className="w-[50px] h-[50px] text-[#1C274C]" />,
    },
  ];

  return (
    <section className="bg-[#262626] my-18">
      <div>
        <svg viewBox="0 0 3725 375" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.0021713 0L0.000976562 375.003L1925 0H0.0021713Z"
            fill="#F9B800"
          />
        </svg>
      </div>


      <main className="flex flex-col justify-center gap-[50px] md:gap-[40px] lg:gap-[100px] mx-auto w-full max-w-[1280px] min-w-[280px] py-4 px-4 lg:px-8">
        <div className="max-w-full mx-auto text-center ">
          <p className="text-xl text-[#F9B800]">
            Innovative solutions, engineered for tomorrow’s industries today.
          </p>
          <h2 className="text-[30px] leading-[48px] md:text-[50px] md:leading-[68px] mt-5 mb-8 text-white">
            Our Features.
          </h2>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-2 grid-rows-2 gap-[60px] md:gap-[30px] lg:gap-[45px] md:mt-[-70px] items-center">
          {featureData.map((item) => (
            <FeatureCard
              number={item.number}
              color={item.color}
              icon={item.icon}
              title={item.title}
              descript={item.descript}
              className=""
            />
          ))}
          {/* <FeatureCard
            number={featureData[0].number}
            color={featureData[0].color}
            icon={featureData[0].icon}
            className=""
          />
          <FeatureCard
            number={featureData[1].number}
            color={featureData[1].color}
            icon={featureData[1].icon}
            className="col-start-2 col-end-3 row-start-2 row-end-5"
          />
          <FeatureCard
            number={featureData[2].number}
            color={featureData[2].color}
            icon={featureData[2].icon}
            className="col-start-1 col-end-2 row-start-4 row-end-7"
          />
          <FeatureCard
            number={featureData[3].number}
            color={featureData[3].color}
            icon={featureData[3].icon}
            className="col-start-2 col-end-3 row-start-5 row-end-8"
          /> */}

        </div>
      </main>



      <div className="rotate-180">
        <svg viewBox="0 0 3725 375" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.0021713 0L0.000976562 375.003L1925 0H0.0021713Z"
            fill="#F9B800"
          />
        </svg>
      </div>
    </section>
  );
};





const TechnicalSpecs = () => {
  // Data list
  const nutrientData = [
    { name: "Calories", amount: "240" },
    { name: "Total Fat", amount: "12g" },
    { name: "Saturated Fat", amount: "3.5g", isChild: true },
    { name: "Trans Fat", amount: "0g", isChild: true },
    { name: "Cholesterol", amount: "45mg" },
    { name: "Sodium", amount: "430mg" },
    { name: "Total Carbohydrate", amount: "19g" },
    { name: "Dietary Fiber", amount: "3g", isChild: true },
    { name: "Sugars", amount: "4g", isChild: true },
    { name: "Protein", amount: "22g" },
  ];

  return (
    <div className="">
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-4xl text-secondary font-semibold">
          Technical Specification
        </h1>
      </div>

      {/* Table */}
      <div className="border border-gray-300 shadow-sm rounded-lg overflow-hidden max-w-5xl mx-auto mt-16">
        <table className="w-full text-sm leading-5">
          <colgroup>
            <col className="w-[30%] border-r border-gray-300" />
            <col className="w-[70%]" />
          </colgroup>
          <thead className="bg-gray-100">
            <tr>
              <th className="py-4 px-4 text-left text-[20px] font-semibold text-gray-600">
                Parameter
              </th>
              <th className="py-4 px-4 text-left  text-[20px] font-semibold text-gray-600">
                Specification
              </th>
            </tr>
          </thead>
          <tbody>
            {nutrientData.map((item, index) => (
              <tr
                key={index}
                className={index % 2 === 1 ? "bg-gray-50" : ""}
              >
                <td
                  className={`py-3 px-4 text-left text-lg font-medium text-gray-600 `}
                >
                  {item.name}
                </td>
                <td className="py-3 px-4 text-lg text-secondary font-medium text-left">{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};



const FAQItem = ({ id, question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
      <button
        type="button"
        id={`question${id}`}
        data-state={isOpen ? 'open' : 'closed'}
        className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
        onClick={toggleAnswer}
      >
        <span className="flex text-lg font-semibold text-black">{question}</span>
        <svg
          id={`arrow${id}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className={`w-6 h-6 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-0' : 'rotate-180'}`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        id={`answer${id}`}
        className={`px-4 pb-5 sm:px-6 sm:pb-6 ${isOpen ? 'block' : 'hidden'}`}
      >
        <p className="text-textPrimary">{answer}</p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      id: 1,
      question: "How can I start using your tile adhesives and chemicals?",
      answer: "Getting started is simple! Contact our sales team to create an account and receive a product catalog. You can place orders directly through our platform or with a sales representative. No minimum order is required for first-time customers."
    },
    {
      id: 2,
      question: "What is the pricing structure for your tile manufacturing chemicals?",
      answer: "Our pricing is competitive and tailored to project needs. We offer bulk pricing for large orders and flexible plans for recurring purchases. Contact our team for a customized quote based on your requirements."
    },
    {
      id: 3,
      question: "What kind of technical support do you provide for your products?",
      answer: "We provide comprehensive technical support, including product application guidance, on-site consultations, and access to our technical resources. Reach out via email, phone, or our online knowledge base for assistance."
    },
    {
      id: 4,
      question: "Can I return or exchange unused chemical products?",
      answer: "Yes, you can return unused, unopened products within 30 days of purchase, subject to our return policy. We ensure a hassle-free process with no restocking fees for standard returns."
    }
];
  return (
    <section className="py-10 bg-gray-50 sm:py-16 my-10 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold leading-tight text-secondary sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          {faqs.map(faq => (
            <FAQItem
              key={faq.id}
              id={faq.id}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
        <p className="text-center text-gray-600 text-base mt-9">
          Still have questions?
          <span className="cursor-pointer font-medium text-blue-600 transition-all duration-200 hover:text-blue-800 focus:text-blue-800 hover:underline">
            Contact our support
          </span>
        </p>
      </div>
    </section>
  );
};





const reports = [
  {
    id: 1,
    title: "Tile Adhesive BIS Report",
    img: "https://images.unsplash.com/vector-1738926674451-12dff3682b77?w=600&auto=format&fit=crop&q=60",
    link: "#",
  },
  {
    id: 2,
    title: "Construction Safety Standards",
    img: "https://images.unsplash.com/vector-1738926674451-12dff3682b77?w=600&auto=format&fit=crop&q=60",
    link: "#",
  },
  {
    id: 3,
    title: "Material Testing Guidelines",
    img: "https://images.unsplash.com/vector-1738926674451-12dff3682b77?w=600&auto=format&fit=crop&q=60",
    link: "#",
  },
];

const DownloadReports = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-6 py-12">
      {/* Section Heading */}
      <h2 className="text-3xl font-semibold text-center mb-12 text-secondary">
        Knowledge Base
      </h2>

      {/* Grid Layout */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {reports.map((report) => (
          <div
            key={report.id}
            className="flex flex-col gap-8 items-center border border-gray-200 rounded-2xl shadow-md px-3 py-14 hover:shadow-lg transition bg-[color:var(--color-white)]"
          >
            {/* Title */}
            <h3 className="text-lg font-semibold text-center  text-[color:var(--color-black)]">
              {report.title}
            </h3>

            {/* PDF Illustration */}
            <img
              src={report.img}
              alt="PDF Illustration"
              className="w-24 h-24 object-cover"
            />

            {/* Download Button */}
            <a
              href={report.link}
              className="px-6 py-2 border-2 rounded-lg font-medium text-[color:var(--color-secondary)] border-[color:var(--color-secondary)] hover:bg-[color:var(--color-secondary)] hover:text-[color:var(--color-white)] transition"
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};






const ProductDetails = () => {
  return (
    <>
      <ProductDescription />
      <Features />
      <TechnicalSpecs />
      <FAQSection />
      <DownloadReports />

    </>
  )
}

export default ProductDetails

