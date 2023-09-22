import React, { useState } from 'react';
import "./MealPlan.css"
const MealPlan = ({ recipes }) => {
    const today = new Date();
    
    // Create an array to hold the days you want to display
    const daysToDisplay = [];
    
    // Loop to get today, tomorrow, and the day after
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
      daysToDisplay.push(dayOfWeek);
    }
    
    // Initialize the meal plan object with the generated days
    const initialMealPlan = {};
    daysToDisplay.forEach(day => {
      initialMealPlan[day] = [];
    });
    
    // State for mealPlan
    const [mealPlan, setMealPlan] = useState(initialMealPlan);
  
    const handleRecipeSelect = (day, recipe) => {
      setMealPlan((prevMealPlan) => ({
        ...prevMealPlan,
        [day]: [...prevMealPlan[day], recipe],
      }));
    };
  
    const handleRemoveRecipe = (day, index) => {
      setMealPlan((prevMealPlan) => {
        const updatedDayPlan = [...prevMealPlan[day]];
        updatedDayPlan.splice(index, 1);
        return {
          ...prevMealPlan,
          [day]: updatedDayPlan,
        };
      });
    };
  
    return (
      <div className='meal-planner-container'>
      <div className="meal-planner">
        <h1 className='meal-planner-heading'>Weekly Meal Planner</h1>
        <table id='mealplan-table'>
          <thead>
            <tr id='row-table'>
              <th className='table-head'>Day</th>
              <th className='table-head'>Selected Recipes</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(mealPlan).map((day) => (
              <tr id='row-table' key={day}>
                <td className='meal-planner-day'>{day}</td>
                <td className='day'>
                  <div className='select-div'>
                  <select id='dish-selector'
                      onChange={(e) => handleRecipeSelect(day, e.target.value)}
                      value=""
                    >
                      <option value="" disabled>
                        Select a Recipe
                      </option>
                      {recipes.map((recipe) => (
                        <option key={recipe.id} value={recipe.title} className="recipe-option">
                          {recipe.title}
                        </option>
                      ))}
                    </select>
                    </div>
                    <div className="selected-recipes">
                      {mealPlan[day].map((selectedRecipe, index) => (
                        <div key={index} className="selected-recipe">
                            <div className='recipe-plan' >
                            <div>
                              <img className='recipe-image' src={recipes.find(recipe => recipe.title === selectedRecipe)?.img} alt={selectedRecipe} />
                            </div>
                            <div className='selected-recipe-detail'>
                              {selectedRecipe}
                              <button className='recipe-cancel-btn' onClick={() => handleRemoveRecipe(day, index)}>
                              X
                            </button></div>
                            </div>
                        </div>
                      ))}
                    </div>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    );
    
  };
  
  export default MealPlan;