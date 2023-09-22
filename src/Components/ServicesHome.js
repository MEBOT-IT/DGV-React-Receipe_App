import React from 'react'
import './ServicesHome.css';

function ServicesHome() {
  return (
    <div>
        <div class="services">
            <h1 class="service_heading">We Assist In</h1>
            <ol class='service_list'>
                <li class='service_list_item' >
                    <div class="icon"><img src="/images/recipepng-1.png" alt="service-1"></img></div>
                    <div class="descr">Multi-cuisine Recipes</div>
                </li>
                <li class='service_list_item'>
                    <div class="icon"><img src="/images/learnnew-1.png" alt="service-2"></img></div>
                    <div class="descr">Learn New Recipes</div>
                </li>
                <li class='service_list_item'>
                    <div class="icon"><img src="/images/topchef-2.png" alt="service-3"></img></div>
                    <div class="descr">Top Rated Chef Dishes</div>
                </li>
                <li class='service_list_item'>
                    <div class="icon"><img src="/images/writerecipe.png" alt="service-4"></img></div>
                    <div class="descr">Write Your Own Recipes</div>
                </li>
                <li class='service_list_item' >
                    <div class="icon"><img src="/images/nutritionfact-2.png" alt="service-5"></img></div>
                    <div class="descr">Know Nutrition Facts</div>
                </li>
                <li class='service_list_item'>
                    <div class="icon"><img src="/images/mealplan-1.png" alt="service-6"></img></div>
                    <div class="descr">Plan Your Meal</div>
                </li>
            </ol>
        </div>
    </div>
  )
}

export default ServicesHome
