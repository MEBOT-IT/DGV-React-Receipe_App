import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer_container'>
    <div className='footer'>
      <footer class="top">
        <div className='footer-logo'>
          <Link to='/'><img src='images/Logo - 11.png'  alt="Logo_img" className='footer_logo'></img></Link>
        </div>
          <div class="link-column">
            <h2>Get to know us</h2>
            <a href='/'>Home</a>
            <a href='/about'>About Us</a>
            <a href='/recipes'>Recipes</a>
            <a href='/recipes#view-more-recipe'>Add your recipe</a>
            <a href='/mealplan'>Plan your meal</a>
          </div>
          <div class="links-column">
            <h2>Customer Policy</h2>
            <a href='/terms'>Terms & Conditions</a>
            <a href='/faq'>FAQ</a>
            <a href='/privacy'>Privacy Policy</a>
          </div>
          <div class="links-column socials-column">
            <h2>Connect With us</h2>
            <p className='connect'>
              Follow us on social media to find out the latest updates on our
              progress.
            </p>
            <div class="socials">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-youtube"></i>
              <i class="fa-brands fa-twitter"></i>
            </div>
            <div className='download_btn'>
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                <img src="images/googleplay2.png" alt="Download from Play Store" className='download-image'/>
              </a>
              <a href="https://www.apple.com/in/app-store/" target="_blank" rel="noopener noreferrer">
                <img src="images/applestore.png" alt="Download from Apple Store"  className='download-image'/>
              </a>
            </div>
          </div>
      </footer>
      <footer class="bottom">
        <p class="copyright">© 2023 All rights reserved</p>
        <div class="legal">
          <a href='#'> License </a>
          <a href='/terms'> Terms </a>
          <a href='/privacy'> Privacy </a>
        </div>
      </footer>
    </div>
    </div>
  )
}

export default Footer