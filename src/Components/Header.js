import { Link } from "react-router-dom";
import React,{useState} from 'react'
import './Header.css'
import logo from '../Assets/Logo - 11- crop.png'
import collectionlogo from '../Assets/collection.png'

const Header = ({welcomeMessage}) => {
    const [isLoggedIn,setisLoggedIn] = useState(false);

    const handleClick = () => { 
        setisLoggedIn(!isLoggedIn)
    //     {isLoggedIn ? 
    //         (alert('Please log in to continue')) :
    //         (alert('Welcome user!')) 
    // }
        }

         

    // toggle mediaquery
    const toggleBtnIcon = document.querySelector('.toggle_btn i');
    const dropdownmenu = document.querySelector('.dropdown_menu');

    const toggleicon = function() {
        dropdownmenu.classList.toggle('open')
        const isOpen = dropdownmenu.classList.contains('open')

        toggleBtnIcon.classList = isOpen 
        ? "fa-solid fa-xmark" : "fa-solid fa-bars"
    }
    return(
        <div className='header'>
        <nav>
            <div className="header_left">
                <Link to='/'><img src= {logo} alt="Logo_img" className="logo"></img></Link>
            </div>
                <div className="header_middle">
                <ul className="nav-items">

                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to='/recipes'>Recipes</Link></li>
                    <li><Link to='/mealplan'>Plan Your Meal</Link></li>
                    <li><Link to='/faq'>FAQ</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                </ul>
                </div>
                <div className="header_right">
                
                    <div className="nav_right_items">
                        
                    <div onClick={(handleClick)}><Link to='/login'>
                        {isLoggedIn ? 'Log out' : 'Log In'}
                        </Link></div>
                        {/* <div>
                            <button onClick={(handleClick)}>
                                {isLoggedIn ? 'Log out' : 'Log In'}
                            </button>
                        </div> */}
                        <div ><Link to='/signup'><p>Sign up</p></Link></div>
                        {/* <div>
                        <Link to='/cart'>
                        <img src={collectionlogo} alt='cart' className="collection"></img></Link>
                        </div> */}
                    </div>
                    
                </div>
                
                {/* media query */}
            <div className="toggle_btn" onClick={toggleicon}>
                <i className="fa-solid fa-bars"></i>
            </div>
            <div className="dropdown_menu">
            {/* <div className="header_middle"> */}
            <ul className="nav-items">

                <li><Link to="/about">About Us</Link></li>
                <li><Link to='/recipes'>Recipes</Link></li>
                <li><Link to='/mealplan'>Add Your Recipe</Link></li>
                <li><Link to='/contact'>Contact Us</Link></li>
            </ul>
            {/* </div> */}
            <div className="header_right">
                <div className="nav_right_items">
                    <div><Link to='/'><p>Sign up</p></Link></div>
                    <div>
                        
                    </div>
                    <div>
                    <Link to='/cart'>
                    <img src={collectionlogo} alt='cart' className="collection"></img></Link></div>
                </div>
            </div>
            </div>
            
            
        </nav>
        {welcomeMessage && <p className="welcome-msg">{welcomeMessage}</p>}
        </div>
        
    );
}

export default Header;