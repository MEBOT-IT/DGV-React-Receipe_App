import React from 'react';
import './RecipeModal.css';
import Typewriter from "typewriter-effect";

function RecipeModal({ isOpen, onClose, val }) {
  if (!isOpen) return null;

  return (
    <div className="modal-container">
        <div className='modal'>
            <div className="modal-content">
                <img src={val.img} id='modal-recipe'/>
                <h1 className='modal-header'>{val.title}</h1>
                <div className='modal-top'>
                    <div className="ingredients">
                    <p className='modal-ingredients'>Ingredients:
                    </p>
                    <ul className='modal-ingredients-list'>
                        {val.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                    </div>
                    <div className='modal-top-right'>
                        <div style={{ display: "flex" }}>
                        <img src='/images/calories1.png' id='modal-kcal'/>
                        <p id='modal-kcal-text'>{val.kcal}</p>
                        </div>
                        <div style={{ display: "flex",paddingTop: "10px"  }}>
                        <img src='/images/serve.png' id='modal-serve'/>
                        <p id='modal-serving-text'>2 servings</p>
                        </div>
                    </div>
                </div>
                <div className="steps">
                <p className='modal-steps'>Steps:</p>
                <ol className='modal-steps-list'>
                    {val.steps.map((step, index) => (
                    <li key={index}>{step}</li>
                    ))}
                </ol>
                </div>
                <div className='full-recipe-link' style={{ textAlign: "left" }} >
                <p className='modal-steps recipelink'>Full Recipe:</p>
                
                <a className='modal-link' href={val.link} target='_blank'>Click to view recipe <i id='link-icon' class="fa-solid fa-up-right-from-square" ></i></a>
                </div>
                <button className='modal-btn' onClick={onClose}>Close</button>
                <button className='modal-btn1' onClick={onClose}>X</button>
            </div>
        </div>
    </div>
  );
}

export default RecipeModal;