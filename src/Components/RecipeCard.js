import React from 'react'
import './RecipeCard.css'

function RecipeCard({recipes}) {
  return (
    <div className='recipe-cards'>
      {recipes.map((recipe) => (
        <div className="recipe-card" key={recipes.id}>
        <div className="recipe-card__body">
            <img src={recipe.img} class="recipe-card__image" />
            <h2 className="recipe-card__title">{recipe.title}</h2>
            <p className="recipe-card__description">{recipe.description}</p>
        </div>
        <button className="recipe-card__btn">View Recipe</button>
        </div>
      ))}
    </div>
  )
}

export default RecipeCard
