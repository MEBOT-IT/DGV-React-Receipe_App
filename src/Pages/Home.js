import React from 'react'
import Header from '../Components/Header'
import Slider from '../Components/Slider'
import AboutHome from '../Components/AboutHome'
import ServicesHome from '../Components/ServicesHome'
import Footer from '../Components/Footer'
import OnTrendHome from '../Components/OnTrendHome'
import TopChefHome from '../Components/TopChefHome'
import Testimonial from '../Components/Testimonial'
import Cuisine from '../Components/Cuisine'
import Newsletter from '../Components/Newsletter'
import Seperator from '../Components/Seperator';
import imageUrl from '../Assets/seperator.png'

function Home({welcomeMessage}) {  
  const cards =[
    {
      id: 1,
      name: 'Malai Kofta',
      image: '/images/malai kofta.jpg',
      user:'Vaishnavi' 
    },
    {
      id: 2,
      name: 'Choco Brownie',
      image: '/images/brownie wit.jpg',
      user:'Aravind' 
    },
    {
      id: 3,
      name: 'Chicken Briyani',
      image: 'images/Chicken dum.jpg',
      user:'Madeshwaran' 
    },
    {
      id: 4,
      name: 'Veg noodles',
      image: '/images/veg noodle.jpg',
      user:'Thahseen fathima' 
    },
    {
      id: 5,
      name: 'White pasta',
      image: '/images/WhiteSaucePasta.jpg',
      user:'Jeyalakshmi' 
    },
  ]
  //testimonial
  const testimonials = [
    {
      image: '/images/testimonial-img (3).png',
      title: 'Monica Geller',
      content: '"Cookmate is a fantastic platform for connecting food enthusiasts. It offers a seamless user experience, making it easy to share and discover delicious homemade meals while promoting sustainability."',
      StarRating:"4.5",
    },
    {
      image: '/images/testimonial-img (4).png',
      title: 'Joey Tribbiani',
      review: 'fa fa-star checked',
      content: '"Cookmate is a game-changer! It effortlessly connects food lovers, allowing us to share and savor homemade dishes, fostering community and culinary delight."',
      StarRating:"5",
    },
    
    {
      image: '/images/testimonial-img (1).jpg',
      title: 'Rachel Green',
      content: '"Cookmate is a culinary gem. It simplifies sharing homemade dishes, making it a delightful experience for foodies, while reducing food waste. Highly recommended!"',
      review: 'fa fa-star checked',
      StarRating:"4.3",
    },
    {
      image: '/images/testimonial-img (2).jpg',
      title: 'Chandler Bing',
      content: '"This food sharing website is a lifesaver! It is incredibly user-friendly and connects food enthusiasts seamlessly, creating a win-win situation for both sharers and tasters. I am hooked!"',
      review: 'fa fa-star checked',
      StarRating:"4.5",
    },
    
  ];

  const cuisines = [
    {
    id : 1,
    image : '/images/biryani.png',
    country : ' INDIAN ',
    link : '/recipes#indian',
    frtxt : 'View me',
    vid : '/images/chickB.jpg',
    heading : 'Explore the flavors of India',
    para : ' Namasthey! Welcome to a culinary journey through the flavors of India!' ,
    anc : 'View dishes'
    },
    {
    id : 2,
    image : '/images/hamburger.png',
    country : ' AMERICAN ',
    link : '/recipes#american',
    frtxt : 'View me',
    vid : '/images/hamb.jpg',
    heading : 'Savoring American cuisine',
    para : ' Welcome to a delectable journey through the flavorful world of American cuisine.' ,
    anc : 'View dishes'
    },
    {
    id : 3,
    image : '/images/pizza.png',
    country : ' ITALIAN ',
    frtxt : 'View me',
    link : '/recipes#italian',
    vid : '/images/piz.jpg',
    heading : 'A Taste of Italy Culinary Heritage',
    para : ' Welcome to a culinary journey through the heart of Italy!' ,
    anc : 'View dishes'
    },{
    id : 4,
    image : '/images/noodles.png',
    country : ' CHINESE',
    link : '/recipes#chinese',
    frtxt : 'View me',
    vid : '/images/nood.jpg',
    heading : 'Authentic Recipes from the East',
    para : ' Welcome to Chinese cuisine, a gastronomic journey filled with bold flavors' ,
    anc : 'View dishes'
    },{
    id : 5,
    image : '/images/korean.png',
    country : 'KOREAN',
    link : '/recipes#korean',
    frtxt : 'View me',
    vid: "/images/korea dish.jpg" ,
    heading : 'Savor the Flavors of Korea',
    para : 'Welcome to a Culinary Journey Through Korean Delights!' ,
    anc : 'View dishes'
    },{
    id : 6,
    image : '/images/frenicon.png',
    country : 'FRENCH',
    frtxt : 'View me',
    vid : '/images/fries.jpg',
    link : '/recipes#french',
    heading : 'Explore Authentic French Recipes',
    para : 'Welcome to the French cuisine, a realm of exquisite flavors and culinary artistry.' ,
    anc : 'View dishes'
    }
    ];


  return (
    <div>
      <Header welcomeMessage={welcomeMessage} />
      <Slider />
      <AboutHome/>
      <ServicesHome/>
      <OnTrendHome cards={cards}/>
      <Cuisine cuisines={cuisines}/>
      <Testimonial slides={testimonials}/>
      <TopChefHome/>
      <Seperator props={imageUrl}/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home
