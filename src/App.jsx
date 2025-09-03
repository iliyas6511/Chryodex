import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Homepage from './Pages/Homepage'
import Sample from './Components/Sample'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout'
import Products from './Components/Sample'
import ProductCategories from './Pages/Product'
import MultiProducts from './Pages/Multiproducts'
import ProductDetails from './Pages/PruductDetails'

function App() {
  const navbarRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    if (navbarRef.current) {
      setNavHeight(navbarRef.current.offsetHeight);
    }

    const handleResize = () => {
      if (navbarRef.current) {
        setNavHeight(navbarRef.current.offsetHeight);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
       <BrowserRouter>
       <Routes>

        <Route  element={<Layout />}>
          <Route path="/" element={<Homepage />} />ProductCategories
          <Route path="/products" element={<ProductCategories />} />
          <Route path="/multiproducts" element={<MultiProducts />} />
          <Route path="/productdetails" element={<ProductDetails />} />
          <Route path="/sample" element={<Products />} />
        </Route>
       </Routes>
       
       </BrowserRouter>
      
      
    </>
  )
}

export default App
