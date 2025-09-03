import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import ChryodexLogo from "../assets/Images/Chryodex.png";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white mt-24">
      {/* Overlapping Top CTA (half outside, half inside footer) */}
      <div className="absolute inset-x-4 md:inset-x-16 -top-16 z-10">
        <div className="bg-white text-center md:text-left rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.25)] ring-1 ring-black/5 px-6 py-8 md:px-16 md:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <h2 className="text-xl md:text-4xl font-semibold text-textPrimary leading-tight">
            One–Stop Solution for all your Construction Needs
          </h2>
          <button
            className="bg-primary mx-auto md:mx-0 text-black font-semibold px-6 py-3 rounded-full shadow-md hover:brightness-110 transition"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Spacer so content doesn't hide under the CTA */}
      <div className="pt-30 md:pt-20" />

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className=" grid grid-cols-12 gap-7 md:gap-10">

          {/* Logo & About */}
          <div className="col-span-12 md:col-span-4">
            <div className="text-left">
              <img
                src={ChryodexLogo}
                alt="Chryodex Logo"
                className="h-18 md:h-20 w-auto md:mx-0 mb-4"
              />
              <p className="text-white mt-4 leading-relaxed">
                Chryodex is India’s frontline producer of AAC Products, Construction
                Chemicals & Precast Construction Solutions, turning over a new leaf
                in the construction industry.
              </p>
            </div>
            <div className="flex space-x-4 mt-5">
              <a href="#" className="p-2 bg-secondary rounded-full hover:bg-primary hover:text-black transition">
                <FaFacebookF />
              </a>
              <a href="#" className="p-2 bg-secondary rounded-full hover:bg-primary hover:text-black transition">
                <FaInstagram />
              </a>
              <a href="#" className="p-2 bg-secondary rounded-full hover:bg-primary hover:text-black transition">
                <FaLinkedinIn />
              </a>
              <a href="#" className="p-2 bg-secondary rounded-full hover:bg-primary hover:text-black transition">
                <FaTwitter />
              </a>
              <a href="#" className="p-2 bg-secondary rounded-full hover:bg-primary hover:text-black transition">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-12 md:col-span-2">
            <h3 className="text-xl font-semibold text-[var(--color-primary)]">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-white">
              <li><a href="#" className="hover:text-[var(--color-primary)]">About Us</a></li>
              <li><a href="#" className="hover:text-[var(--color-primary)]">Career</a></li>
              <li><a href="#" className="hover:text-[var(--color-primary)]">Contact Us</a></li>
              <li><a href="#" className="hover:text-[var(--color-primary)]">Sitemap</a></li>
              <li><a href="#" className="hover:text-[var(--color-primary)]">Blogs</a></li>
            </ul>
          </div>

          {/* Products */}
          <div className="col-span-12 md:col-span-3">
            <h3 className="text-xl font-semibold text-[var(--color-primary)]">Products</h3>
            <ul className="mt-4 space-y-2 text-white">
              <li><a href="#" className="hover:text-[var(--color-primary)]">Walling Solutions</a></li>
              <li><a href="#" className="hover:text-[var(--color-primary)]">Tile & Stone Fixing</a></li>
              <li><a href="#" className="hover:text-[var(--color-primary)]">Waterproofing Solutions</a></li>
              <li><a href="#" className="hover:text-[var(--color-primary)]">Precast Products</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-12 md:col-span-3">
            <h3 className="text-xl font-semibold text-[var(--color-primary)]">Subscribe</h3>
            <div className="flex mt-4">
              <input type="email" placeholder="Enter your email" className="px-3 py-2 w-full rounded-l-lg text-black bg-white outline-none" />
              <button className="bg-[var(--color-secondary)] hover:bg-[var(--color-primary)] px-5 py-2 rounded-r-lg transition"> → </button>
            </div>




            <h3 className="text-xl font-semibold text-[var(--color-primary)] mt-6">Download App</h3>
            <div className="flex space-x-3 mt-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-10 cursor-pointer"
              />
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-10 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-5 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Magicrete | Privacy Policy | Cookie Policy | Terms & Conditions | Sitemap</p>
          <p className="mt-2 md:mt-0">Made with ❤️ By nobletech Iliyas</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer ;