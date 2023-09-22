import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import recipedata from '../Components/JsonFiles/RecipeData.json';
import MealPlan from '../Components/MealPlan';
import Mealtimes from '../Components/MealTimes';

function MealPlanner() {
  return (
    <div>
      <Header/>
      <Mealtimes/>
      <MealPlan recipes={recipedata}/>
      <Footer/>
    </div>
  )
}

export default MealPlanner
