import React from 'react'
import './Recipes.css'
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import SearchBox from '../Components/SearchBox'
import Newsletter from '../Components/Newsletter';

function Recipes() {
   
  return (
    <div>
      <Header/>
      <SearchBox/>
      <Footer/>
    </div>
  )
}

export default Recipes
