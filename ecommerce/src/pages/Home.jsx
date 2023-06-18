import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { useSelector } from 'react-redux'
const Home = () => {
  const auth = useSelector((state)=> state.auth);

  console.log(auth);
  return (
    <div>
        <Announcement/>
    <Navbar/>
   <Slider/>
   <Categories/>
   <Products/>
   <Newsletter/>
   <Footer/>
   </div>
   
  )
}

export default Home;