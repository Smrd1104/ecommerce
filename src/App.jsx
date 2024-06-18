import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Products from "./Components/Products/Products";
import AOS from "aos";
import 'aos/dist/aos.css'
import TopProducts from "./Components/TopProducts/TopProducts";
import Banner from "./Components/Banner/Banner";
import Subscribe from "./Components/Subscribe/Subscribe";
import Testimoinals from "./Components/Testimonials/Testimoinals";
import Footer from "./Components/Footer/Footer";
import Popup from "./Components/Popup/Popup";
import Advertisement from "./Components/Advertisement/Advertisement";
import ScrollToTopButton from "./Components/ScrollToTopButton/ScrollToTopButton";
import Atropos from "atropos";
import 'atropos/css'
import Loader from "./Components/Loader/Loader";

const App = () => {

  const [orderPopup,setOrderPopup]=React.useState(false);

  const handleOrderPopup =()=>{
    setOrderPopup(!orderPopup)
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200" > 
      <ScrollToTopButton/>
      <Navbar handleOrderPopup={handleOrderPopup}/>
      <Advertisement/>
      <Hero />
      <Products />
      <TopProducts/>
      <Banner/>
      <Subscribe/>
      <Products />
      <Testimoinals/>
      {/* <Atropos/> */}
      <Footer/>
    <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>

    
    </div>
  );
};

export default App;
