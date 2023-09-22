import React, { useEffect } from 'react'
import {useState} from 'react'
import './SearchBox.css'
import { FaHeart , FaRegHeart } from 'react-icons/fa'
import sweetdata from './JsonFiles/SweetRecipe.json'
import startersdata from './JsonFiles/StartersData.json'
import pizzadata from './JsonFiles/PizzaData.json'
import burgsanddata from './JsonFiles/BurgSandData.json'
import rotidata from './JsonFiles/RotiData.json'
import gravydata from './JsonFiles/GravyData.json'
import noodledata from './JsonFiles/NoodlesData.json'
import drinksdata from './JsonFiles/DrinksData.json'
import shakesdata from './JsonFiles/Shakesdata.json'
import ricedata from './JsonFiles/RiceData.json'
import currydata from './JsonFiles/CurryData.json'
import Indiandata from './JsonFiles/IndianData.json'
import Koreandata from './JsonFiles/KoreanData.json'
import Italiandata from './JsonFiles/ItalianData.json'
import Frenchdata from './JsonFiles/FrenchData.json'
import Chinesedata from './JsonFiles/ChineseData.json'
import Amerdata from './JsonFiles/AmericanData.json'
import Heart from 'react-heart'
import RecipeModal from './RecipeModal'
import ImageBanner from './ImageBanner'
import { useLocation } from 'react-router-dom'
import RecipeForm from './RecipeForm'



// export function china(){
//     const target3 = document.getElementById('chinese');
//     if (target3) {
//       target3.scrollIntoView({ behavior: 'smooth' });
//     }}
// import Alert from 'react-bootstrap/Alert';

// function alertt() {
//     return(
//         <>
//         {[
//         'success'
//       ].map((variant) => (
//         <Alert key={variant} variant={variant}>
//         This is a {variant} alert—check it out!
//       </Alert>
//       ))}
//         </>
//     )
//   }



function SearchBox() {
    const [searchTerm,setsearchTerm] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  //combining json
//   const [combinedData, setCombinedData] = useState([]);

    // show favourites  
    const [isVisible, setIsVisible] = useState(false);

    //heart
    const [active, setActive] = useState(false)
  
    // Combine the data from data1 and data2 into a single array
    const combined = [...startersdata, ...sweetdata,...pizzadata,...burgsanddata,...rotidata,...gravydata,
        ...noodledata,...drinksdata,...shakesdata,...ricedata,...currydata,...Indiandata
    ,...Koreandata,...Italiandata,...Frenchdata,...Chinesedata,...Amerdata,];
    // setCombinedData(combined);
    const [indianRecipe,setIndianRecipe] = useState([
        {
        id:96,
        img:"https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        title:"The Everyday Salad",
        description:"Take your boring salads up a knotch. This recipe is perfect for lunch and only contains 5 ingredients!",
        isFavorite: false,
        },
        ]);

  const [recipes,setFoodItems] = useState(combined);

  //heart click
  const [isClicked, setIsClicked] = useState(false);

    const fav_addbtn = isClicked ? <FaHeart/> : <FaRegHeart/>;

  const toggleFavorite = (id) => {
    
    setFoodItems((prevItems) =>
      prevItems.map((item) =>
      
        item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
      )
    );
  };
//   const [isFavorite, setIsFav] = useState(false);
//   

  const removeFavorite = (id) => {
    setFoodItems((prevItems) =>
      prevItems.map((item) =>
        id === item.id ? { ...item, isFavorite: false } : item
      )
    );
  };

  const favoriteItems = recipes.filter((item) => item.isFavorite);
    const favoriteCount = favoriteItems.length;

  const recipebg = [{
    id:1,
    urlImage:'/images/recipebg.jpg',
  },]

  //Modal open
    const handleRecipeClick = (val) => {
        setSelectedRecipe(val);
        setModalOpen(true);
      };
    //Modal close
      const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedRecipe(null);
      };

    //   console.log({combinedData});
    function heart()  {
        const heart = document.getElementById('heart');
        heart.addEventListener('click', function() {
          heart.classList.toggle('red');
        });
      }

      //cuisine
      
      const location = useLocation();

        useEffect(() => {
            const targetDivId = location.hash.substring(1); // Remove the '#' from the hash
            const targetDiv = document.getElementById(targetDivId);

            if (targetDiv) {
            targetDiv.scrollIntoView({ behavior: 'smooth' });
            }
        }, [location]);
      
  return (
    <div className='recipe-fulldivision'>
        {isVisible && (
            <div className='favorites-main'>
            <div className="favorites">
            <h2 className='fav-header'>
            Number of Favorites: <span className='fav-count'>{favoriteCount}</span>
            </h2>
            <ul>
            {favoriteItems.map((recipes) => (
                <li key={recipes.id}>
                    <div>
                    <img src={recipes.img} alt={recipes.name} width="100" height="100" onClick={() => handleRecipeClick(recipes)} /></div>
                    <div>{recipes.title}</div>
                    <div>
                    <button className='favorite-remove-btn' onClick={() => removeFavorite(recipes.id)} >Remove</button>
                    </div>
                </li>
                ))}
            </ul>
            
        </div>
        <RecipeModal isOpen={modalOpen} onClose={handleCloseModal} val={selectedRecipe}/>
        </div>
    )}
    <div className='show-fav' onClick={() => setIsVisible(!isVisible)}>
    {/* <button className='show-fav-btn' onClick={() => setIsVisible(!isVisible)}>Click</button> */}
    <button class="arrow-btn"><span class="arrow arrow-bottom"></span></button>
    </div>
        <ImageBanner aboutbanners={recipebg}/>
        <div className='searchInput-Container' >
            <input id='searchInput' type='text' placeholder='search here..'
             onChange={(event) => {setsearchTerm(event.target.value)
            }}/>
        </div>
        <div className='recipe-container' >
            <div>
                <h1 className='recipe-header'>Starters</h1>
                <div className='search-Container'>
                    {
                        // recipes
                        startersdata
                        .filter((val) => {
                            if(searchTerm == ""){
                                return val;
                            }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                                return val;
                            }
                        }) 
                        .map((val) => {
                            return(
                                <div className="recipe-card" key={val.id}>
                                <div className="recipe-card__body">
                                    <img src={val.img} class="recipe-card__image" alt="recipe" />
                                    <h2 className="recipe-card__title">{val.title}</h2>
                                    <p className="recipe-card__description">{val.description}</p>
                                </div>
                                <div >
                                <button className='icon-button'  onClick={() => toggleFavorite(val.id)}>
                                    {val.isFavorite ? <FaHeart/>: <FaRegHeart/>}
                                    {/* <Heart isActive={active} onClick={() => setActive(!active)}/> */}
                                </button>
                                <button className="recipe-card__btn" onClick={() => handleRecipeClick(val)}>View Recipe</button>
                                </div>
        
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        <RecipeModal isOpen={modalOpen} onClose={handleCloseModal} val={selectedRecipe}/>
        </div>
        {/* SWEETS */}
        <div className='recipe-container'>
            <div>
                <h1 className='recipe-header'>Sweets</h1>
                <div className='search-Container'>
                    {
                        sweetdata
                        .filter((val) => {
                            if(searchTerm == ""){
                                return val;
                            }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                                return val;
                            }
                        })
                        .map((val) => {
                            return(
                                <div className="recipe-card" key={val.id}>
                                <div className="recipe-card__body">
                                    <img src={val.img} class="recipe-card__image" alt="recipe" />
                                    <h2 className="recipe-card__title">{val.title}</h2>
                                    <p className="recipe-card__description">{val.description}</p>
                                </div>
                                <div >
                                <button className={`icon-button `}  onClick={() => toggleFavorite(val.id)}>
                                    {val.isFavorite ? <FaHeart/> : <FaRegHeart/>}
                                </button>
                                <button className="recipe-card__btn" onClick={() => handleRecipeClick(val)}>View Recipe</button>
                                </div>
                                
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        <RecipeModal isOpen={modalOpen} onClose={handleCloseModal} val={selectedRecipe}/>
        </div>
        {/* Burger and sandwich */}
        <div className='recipe-container'>
            <div>
                <h1 className='recipe-header'>Burger & Sandwich</h1>
                <div className='search-Container'>
                    {
                        burgsanddata
                        .filter((val) => {
                            if(searchTerm == ""){
                                return val;
                            }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                                return val;
                            }
                        })
                        .map((val) => {
                            return(
                                <div className="recipe-card" key={val.id}>
                                <div className="recipe-card__body">
                                    <img src={val.img} class="recipe-card__image" alt="recipe" />
                                    <h2 className="recipe-card__title">{val.title}</h2>
                                    <p className="recipe-card__description">{val.description}</p>
                                </div>
                                <div >
                                <button className={`icon-button `}  onClick={() => toggleFavorite(val.id)}>
                                    {val.isFavorite ? <FaHeart/>: <FaRegHeart/>}
                                </button>
                                <button className="recipe-card__btn" onClick={() => handleRecipeClick(val)}>View Recipe</button>
                                </div>
                                
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        <RecipeModal isOpen={modalOpen} onClose={handleCloseModal} val={selectedRecipe}/>
        </div>
        {/* Pizza */}
        <div className='recipe-container'>
            <div>   
                <h1 className='recipe-header'>Pizza</h1>
                <div className='search-Container'>
                    {
                        pizzadata
                        .filter((val) => {
                            if(searchTerm == ""){
                                return val;
                            }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                                return val;
                            }
                        })
                        .map((val) => {
                            return(
                                <div className="recipe-card" key={val.id}>
                                <div className="recipe-card__body">
                                    <img src={val.img} class="recipe-card__image" alt="recipe" />
                                    <h2 className="recipe-card__title">{val.title}</h2>
                                    <p className="recipe-card__description">{val.description}</p>
                                </div>
                                <div >
                                <button className={`icon-button `}  onClick={() => toggleFavorite(val.id)}>
                                    {val.isFavorite ?  <FaHeart/> : <FaRegHeart/>}
                                </button>
                                <button className="recipe-card__btn" onClick={() => handleRecipeClick(val)}>View Recipe</button>
                                </div>
                                
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        <RecipeModal isOpen={modalOpen} onClose={handleCloseModal} val={selectedRecipe}/>
        </div>
        {/* Noodles */}
        <div className='recipe-container'>
            <div>
                <h1 className='recipe-header'>Noodles</h1>
                <div className='search-Container'>
                    {
                        noodledata
                        .filter((val) => {
                            if(searchTerm == ""){
                                return val;
                            }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                                return val;
                            }
                        })
                        .map((val) => {
                            return(
                                <div className="recipe-card" key={val.id}>
                                <div className="recipe-card__body">
                                    <img src={val.img} class="recipe-card__image" alt="recipe" />
                                    <h2 className="recipe-card__title">{val.title}</h2>
                                    <p className="recipe-card__description">{val.description}</p>
                                </div>
                                <div >
                                <button className={`icon-button `}  onClick={() => toggleFavorite(val.id)}>
                                    {val.isFavorite ?  <FaHeart/>:<FaRegHeart/>}
                                </button>
                                <button className="recipe-card__btn" onClick={() => handleRecipeClick(val)}>View Recipe</button>
                                </div>
                                
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        <RecipeModal isOpen={modalOpen} onClose={handleCloseModal} val={selectedRecipe}/>
        </div>
        {/* Shakes */}
        <div className='recipe-container'>
            <div>
                <h1 className='recipe-header'>Shakes</h1>
                <div className='search-Container'>
                    {
                        shakesdata
                        .filter((val) => {
                            if(searchTerm == ""){
                                return val;
                            }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                                return val;
                            }
                        })
                        .map((val) => {
                            return(
                                <div className="recipe-card" key={val.id}>
                                <div className="recipe-card__body">
                                    <img src={val.img} class="recipe-card__image" alt="recipe" />
                                    <h2 className="recipe-card__title">{val.title}</h2>
                                    <p className="recipe-card__description">{val.description}</p>
                                </div>
                                <div >
                                <button className={`icon-button `}  onClick={() => toggleFavorite(val.id)}>
                                    {val.isFavorite ? <FaHeart/> :<FaRegHeart/>}
                                </button>
                                <button className="recipe-card__btn" onClick={() => handleRecipeClick(val)}>View Recipe</button>
                                </div>
                                
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        <RecipeModal isOpen={modalOpen} onClose={handleCloseModal} val={selectedRecipe}/>
        </div>
        {/* Drinks */}
        <div className='recipe-container' id='drinks'>
            <div>
                <h1 className='recipe-header'>Drinks</h1>
                <div className='search-Container'>
                    {
                        drinksdata
                        .filter((val) => {
                            if(searchTerm == ""){
                                return val;
                            }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                                return val;
                            }
                        })
                        .map((val) => {
                            return(
                                <div className="recipe-card" key={val.id}>
                                <div className="recipe-card__body">
                                    <img src={val.img} class="recipe-card__image" alt="recipe" />
                                    <h2 className="recipe-card__title">{val.title}</h2>
                                    <p className="recipe-card__description">{val.description}</p>
                                </div>
                                <div >
                                <button className={`icon-button `}  onClick={() => toggleFavorite(val.id)}>
                                    {val.isFavorite ? <FaHeart/>: <FaRegHeart/>}
                                </button>
                                <button className="recipe-card__btn" onClick={() => handleRecipeClick(val)}>View Recipe</button>
                                </div>
                                
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        <RecipeModal isOpen={modalOpen} onClose={handleCloseModal} val={selectedRecipe}/>
        </div>
        {/* Gravy */}
        <div className='recipe-container'>
            <div>
                <h1 className='recipe-header'>Gravy</h1>
                <div className='search-Container'>
                    {
                        gravydata
                        .filter((val) => {
                            if(searchTerm == ""){
                                return val;
                            }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                                return val;
                            }
                        })
                        .map((val) => {
                            return(
                                <div className="recipe-card" key={val.id}>
                                <div className="recipe-card__body">
                                    <img src={val.img} class="recipe-card__image" alt="recipe" />
                                    <h2 className="recipe-card__title">{val.title}</h2>
                                    <p className="recipe-card__description">{val.description}</p>
                                </div>
                                <div >
                                <button className={`icon-button `}  onClick={() => toggleFavorite(val.id)}>
                                    {val.isFavorite ? <FaHeart/>:<FaRegHeart/>}
                                </button>
                                <button className="recipe-card__btn" onClick={() => handleRecipeClick(val)}>View Recipe</button>
                                </div>
                                
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        <RecipeModal isOpen={modalOpen} onClose={handleCloseModal} val={selectedRecipe}/>
        </div>
        {/* Roti */}
        <div className='recipe-container' id='roti'>
            <div>
                <h1 className='recipe-header'>Roti</h1>
                <div className='search-Container'>
                    {
                        rotidata
                        .filter((val) => {
                            if(searchTerm == ""){
                                return val;
                            }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                                return val;
                            }
                        })
                        .map((val) => {
                            return(
                                <div className="recipe-card" key={val.id}>
                                <div className="recipe-card__body">
                                    <img src={val.img} class="recipe-card__image" alt="recipe" />
                                    <h2 className="recipe-card__title">{val.title}</h2>
                                    <p className="recipe-card__description">{val.description}</p>
                                </div>
                                <div >
                                <button className={`icon-button `}  onClick={() => toggleFavorite(val.id)}>
                                    {val.isFavorite ? <FaHeart/>:<FaRegHeart/>}
                                </button>
                                <button className="recipe-card__btn" onClick={() => handleRecipeClick(val)}>View Recipe</button>
                                </div>
                                
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        <RecipeModal isOpen={modalOpen} onClose={handleCloseModal} val={selectedRecipe}/>
        </div>
        {/* Rice */}
        <div className='recipe-container' id='rice'>
            <div>
                <h1 className='recipe-header'>Rice</h1>
                <div className='search-Container'>
                    {
                        ricedata
                        .filter((val) => {
                            if(searchTerm == ""){
                                return val;
                            }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                                return val;
                            }
                        })
                        .map((val) => {
                            return(
                                <div className="recipe-card" key={val.id}>
                                <div className="recipe-card__body">
                                    <img src={val.img} class="recipe-card__image" alt="recipe" />
                                    <h2 className="recipe-card__title">{val.title}</h2>
                                    <p className="recipe-card__description">{val.description}</p>
                                </div>
                                <div >
                                <button className={`icon-button `}  onClick={() => toggleFavorite(val.id)}>
                                    {val.isFavorite ?  <FaHeart/>:<FaRegHeart/>}
                                </button>
                                <button className="recipe-card__btn" onClick={() => handleRecipeClick(val)}>View Recipe</button>
                                </div>
                                
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        <RecipeModal isOpen={modalOpen} onClose={handleCloseModal} val={selectedRecipe}/>
        </div>
        {/* Curry */}
        <div className='recipe-container'>
            <div>
                <h1 className='recipe-header'>Curry</h1>
                <div className='search-Container'>
                    {
                        currydata
                        .filter((val) => {
                            if(searchTerm == ""){
                                return val;
                            }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                                return val;
                            }
                        })
                        .map((val) => {
                            return(
                                <div className="recipe-card" key={val.id}>
                                <div className="recipe-card__body">
                                    <img src={val.img} class="recipe-card__image" alt="recipe" />
                                    <h2 className="recipe-card__title">{val.title}</h2>
                                    <p className="recipe-card__description">{val.description}</p>
                                </div>
                                <div >
                                <button className={`icon-button `}  onClick={() => toggleFavorite(val.id)}>
                                    {val.isFavorite ?  <FaHeart/>:<FaRegHeart/>}
                                </button>
                                <button className="recipe-card__btn" onClick={() => handleRecipeClick(val)}>View Recipe</button>
                                </div>
                                
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        <RecipeModal isOpen={modalOpen} onClose={handleCloseModal} val={selectedRecipe}/>
        </div>
        {/* Indian */}
        <div className='recipe-container' id='indian'>
            <div>
                <h1 className='recipe-header'>Indian Specials</h1>
                <div className='search-Container'>
                    {
                        Indiandata
                        .filter((val) => {
                            if(searchTerm == ""){
                                return val;
                            }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                                return val;
                            }
                        })
                        .map((val) => {
                            return(
                                <div className="recipe-card" key={val.id}>
                                <div className="recipe-card__body">
                                    <img src={val.img} class="recipe-card__image" alt="recipe" />
                                    <h2 className="recipe-card__title">{val.title}</h2>
                                    <p className="recipe-card__description">{val.description}</p>
                                </div>
                                <div >
                                <button className={`icon-button `}  onClick={() => toggleFavorite(val.id)}>
                                    {val.isFavorite ?  <FaHeart/>:<FaRegHeart/>}
                                </button>
                                <button className="recipe-card__btn" onClick={() => handleRecipeClick(val)}>View Recipe</button>
                                </div>
                                
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        <RecipeModal isOpen={modalOpen} onClose={handleCloseModal} val={selectedRecipe}/>
        </div>
        {/* Korean */}
        <div className='recipe-container' id='korean'>
            <div>
                <h1 className='recipe-header'>Korean Specials</h1>
                <div className='search-Container'>
                    {
                        Koreandata
                        .filter((val) => {
                            if(searchTerm == ""){
                                return val;
                            }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                                return val;
                            }
                        })
                        .map((val) => {
                            return(
                                <div className="recipe-card" key={val.id}>
                                <div className="recipe-card__body">
                                    <img src={val.img} class="recipe-card__image" alt="recipe" />
                                    <h2 className="recipe-card__title">{val.title}</h2>
                                    <p className="recipe-card__description">{val.description}</p>
                                </div>
                                <div >
                                <button className={`icon-button `}  onClick={() => toggleFavorite(val.id)}>
                                    {val.isFavorite ?  <FaHeart/>:<FaRegHeart/>}
                                </button>
                                <button className="recipe-card__btn" onClick={() => handleRecipeClick(val)}>View Recipe</button>
                                </div>
                                
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        <RecipeModal isOpen={modalOpen} onClose={handleCloseModal} val={selectedRecipe}/>
        </div>
        {/* Italian */}
        <div className='recipe-container' id='italian'>
            <div>
                <h1 className='recipe-header'>Italian Specials</h1>
                <div className='search-Container'>
                    {
                        Italiandata
                        .filter((val) => {
                            if(searchTerm == ""){
                                return val;
                            }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                                return val;
                            }
                        })
                        .map((val) => {
                            return(
                                <div className="recipe-card" key={val.id}>
                                <div className="recipe-card__body">
                                    <img src={val.img} class="recipe-card__image" alt="recipe" />
                                    <h2 className="recipe-card__title">{val.title}</h2>
                                    <p className="recipe-card__description">{val.description}</p>
                                </div>
                                <div >
                                <button className={`icon-button `}  onClick={() => toggleFavorite(val.id)}>
                                    {val.isFavorite ?  <FaHeart/>:<FaRegHeart/>}
                                </button>
                                <button className="recipe-card__btn" onClick={() => handleRecipeClick(val)}>View Recipe</button>
                                </div>
                                
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        <RecipeModal isOpen={modalOpen} onClose={handleCloseModal} val={selectedRecipe}/>
        </div>
        {/* French */}
        <div className='recipe-container' id='french'>
            <div>
                <h1 className='recipe-header'>French Specials</h1>
                <div className='search-Container'>
                    {
                        Frenchdata
                        .filter((val) => {
                            if(searchTerm == ""){
                                return val;
                            }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                                return val;
                            }
                        })
                        .map((val) => {
                            return(
                                <div className="recipe-card" key={val.id}>
                                <div className="recipe-card__body">
                                    <img src={val.img} class="recipe-card__image" alt="recipe" />
                                    <h2 className="recipe-card__title">{val.title}</h2>
                                    <p className="recipe-card__description">{val.description}</p>
                                </div>
                                <div >
                                <button className={`icon-button `}  onClick={() => toggleFavorite(val.id)}>
                                    {val.isFavorite ? <FaHeart/>:<FaRegHeart/>}
                                </button>
                                <button className="recipe-card__btn" onClick={() => handleRecipeClick(val)}>View Recipe</button>
                                </div>
                                
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        <RecipeModal isOpen={modalOpen} onClose={handleCloseModal} val={selectedRecipe}/>
        </div>
        {/* Chinese */}
        <div className='recipe-container' id='chinese'>
            <div>
                <h1 className='recipe-header'>Chinese Specials</h1>
                <div className='search-Container'>
                    {
                        Chinesedata
                        .filter((val) => {
                            if(searchTerm == ""){
                                return val;
                            }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                                return val;
                            }
                        })
                        .map((val) => {
                            return(
                                <div className="recipe-card" key={val.id}>
                                <div className="recipe-card__body">
                                    <img src={val.img} class="recipe-card__image" alt="recipe" />
                                    <h2 className="recipe-card__title">{val.title}</h2>
                                    <p className="recipe-card__description">{val.description}</p>
                                </div>
                                <div >
                                <button className={`icon-button `}  onClick={() => toggleFavorite(val.id)}>
                                    {val.isFavorite ?  <FaHeart/>:<FaRegHeart/>}
                                </button>
                                <button className="recipe-card__btn" onClick={() => handleRecipeClick(val)}>View Recipe</button>
                                </div>
                                
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        <RecipeModal isOpen={modalOpen} onClose={handleCloseModal} val={selectedRecipe}/>
        </div>
        {/* American */}
        <div className='recipe-container' id='american'>
            <div>
                <h1 className='recipe-header'>American Specials</h1>
                <div className='search-Container'>
                    {
                        Amerdata
                        .filter((val) => {
                            if(searchTerm == ""){
                                return val;
                            }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                                return val;
                            }
                        })
                        .map((val) => {
                            return(
                                <div className="recipe-card" key={val.id}>
                                <div className="recipe-card__body">
                                    <img src={val.img} class="recipe-card__image" alt="recipe" />
                                    <h2 className="recipe-card__title">{val.title}</h2>
                                    <p className="recipe-card__description">{val.description}</p>
                                </div>
                                <div >
                                <button className={`icon-button `}  onClick={() => toggleFavorite(val.id)}>
                                    {val.isFavorite ?  <FaHeart/>:<FaRegHeart/>}
                                </button>
                                <button className="recipe-card__btn" onClick={() => handleRecipeClick(val)}>View Recipe</button>
                                </div>
                                
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        <RecipeModal isOpen={modalOpen} onClose={handleCloseModal} val={selectedRecipe}/>
        </div>
        {/* recipes end */}
        <div className='recipe-container' >
            <div>
            <RecipeForm setIndian={setIndianRecipe}/>
                <div className='search-Container'>
                    {
                        // recipes
                        indianRecipe
                        .filter((val) => {
                            if(searchTerm == ""){
                                return val;
                            }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                                return val;
                            }
                        }) 
                        .map((val) => {
                            return(
                                <div className="recipe-card" key={val.id}>
                                <div className="recipe-card__body">
                                    <img src={val.img} class="recipe-card__image" alt="recipe" />
                                    <h2 className="recipe-card__title">{val.title}</h2>
                                    <p className="recipe-card__description">{val.description}</p>
                                </div>
                                <div >
                                <button className='icon-button'  onClick={() => toggleFavorite(val.id)}>
                                    {val.isFavorite ? <FaHeart/>: <FaRegHeart/>}
                                    {/* <Heart isActive={active} onClick={() => setActive(!active)}/> */}
                                </button>
                                <button className="recipe-card__btn" onClick={() => handleRecipeClick(val)}>View Recipe</button>
                                </div>
        
                                </div>
                            )
                        })
                    }
                    
                </div>
                
            </div>
        {/* <RecipeModal isOpen={modalOpen} onClose={handleCloseModal} val={selectedRecipe}/> */}
        
        </div>
       
    </div>
  )
}

export default SearchBox
