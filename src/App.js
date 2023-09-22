import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Recipes from './Pages/Recipes';
import Privacy from './Pages/Privacy';
import SearchBox from './Components/SearchBox';
import ContactUs from './Pages/ContactUs';
import TermsAndCond from './Pages/TermsAndCond';
import FAQ from './Pages/FAQ';
import { useState } from 'react';
import Login from './Components/Login';
import Signup from './Components/Signup';
import MealPlanner from './Pages/MealPlanner';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const [isLoggedIn,setisLoggedIn] = useState(false);
    const handleClick = () => { 
        setisLoggedIn(!isLoggedIn)
        }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home welcomeMessage={welcomeMessage} />}/>
        <Route path='about' element={<AboutUs welcomeMessage={welcomeMessage}/> }/>
        {/* <Route path='recipes' element={<Recipes/>}/> */}
        <Route path='recipes' element={<Recipes/>}/>
        <Route path='contact' element={<ContactUs/>}/>
        <Route path='privacy' element={<Privacy/>}/>
        <Route path='terms' element={<TermsAndCond/>}/>
        <Route path='faq' element={<FAQ/>}/>
        <Route path='/login' element={<Login updateWelcomeMessage={setWelcomeMessage} />}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/mealplan' element={<MealPlanner/>}/>
      </Routes>
    </div>
  );
}

export default App;
