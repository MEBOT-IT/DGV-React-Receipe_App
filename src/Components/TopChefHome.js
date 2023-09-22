import React from 'react'
import './TopChefHome.css'

function TopChefHome() {
  return (
    <div>
          <h1 className='topchef_header'>Our Top Chefs</h1>
            <ul class="cards">
  <li>
    <a href="" className="card">
      <img src="/images/chef_2.jpg" class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img class="card__thumb" src="/images/chef_2.jpg" alt="" />
          <div class="card__header-text">
            <h3 class="card__title">Chef Aravind</h3>            
            {/* <span class="card__status">1 hour ago</span> */}
          </div>
        </div>
        <p class="card__description"><b>Recipes:</b> 20 <br/>
        <b>Cuisine:</b> INDIAN</p>
        <div class='icon_place'>
          <a href='https://www.instagram.com/'><i class="fa-brands fa-instagram"></i></a>
          <a href='https://www.facebook.com/'><i class="fa-brands fa-facebook"></i></a>
          <a href='https://twitter.com/?lang=en'><i class="fa-brands fa-twitter"></i></a> </div>
      </div>
    </a>      
  </li>
  <li>
    <a href="" class="card">
      <img src="/images/chef_31.jpg" class="card__image" alt="" />
      <div class="card__overlay">        
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          <img class="card__thumb" src="/images/chef_31.jpg" alt="" />
          <div class="card__header-text">
            <h3 class="card__title">Chef Siva </h3>
          </div>
        </div>
        <p class="card__description"><b>Recipes:</b> 32 <br/>
        <b>Cuisine:</b> ITALIAN</p>
        <div class='icon_place'>
          <a href='https://www.instagram.com/'><i class="fa-brands fa-instagram"></i></a>
          <a href='https://www.facebook.com/'><i class="fa-brands fa-facebook"></i></a>
          <a href='https://twitter.com/?lang=en'><i class="fa-brands fa-twitter"></i></a></div>
      </div>
    </a>
  </li>
  <li>
    <a href="" class="card">
      <img src="/images/chef_7.jpg" class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img class="card__thumb" src="/images/chef_7.jpg" alt="" />
          <div class="card__header-text">
            <h3 class="card__title">Chef Karthi</h3>
            {/* <span class="card__tagline">NAMBI SEINGA ALLI SAPDUNGA</span>            
            <span class="card__status">1 hour ago</span> */}
          </div>
        </div>
        <p class="card__description"><b>Recipes: </b> 26<br/>
        <b>Cuisine:</b> KOREAN</p>
        <div class='icon_place'>
          <a href='https://www.instagram.com/'><i class="fa-brands fa-instagram"></i></a>
          <a href='https://www.facebook.com/'><i class="fa-brands fa-facebook"></i></a>
          <a href='https://twitter.com/?lang=en'><i class="fa-brands fa-twitter"></i></a>
        </div>
      </div>
    </a>
  </li>
  <li>
    <a href="" class="card">
      <img src="/images/chef_4.jpg" class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          <img class="card__thumb" src="/images/chef_4.jpg" alt="" />
          <div class="card__header-text">
            <h3 class="card__title">Chef Saranya</h3>
            <span class="card__status"></span>
          </div>          
        </div>
        <p class="card__description"><b>Recipes:</b> 17 <br/>
        <b>Cuisine:</b> FRENCH</p>
        <div class="icon_place">
          <a href='https://www.instagram.com/'><i class="fa-brands fa-instagram"></i></a>
          <a href='https://www.facebook.com/'><i class="fa-brands fa-facebook"></i></a>
          <a href='https://twitter.com/?lang=en'><i class="fa-brands fa-twitter"></i></a>
       
       </div>
      </div>
    </a>
  </li>    
</ul>
            </div>
  )
}

export default TopChefHome
