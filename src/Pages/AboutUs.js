import React from 'react'
import Header from '../Components/Header'
import Banner2 from '../Components/Banner2'
import Banner1 from '../Components/Banner1'
import CountUpAnimation from '../Components/Counter';
import Banner3 from '../Components/Banner3';
import Seperator from '../Components/Seperator';
import imageUrl from '../Assets/seperator.png'
import Banner4 from '../Components/Banner4';
import Footer from '../Components/Footer';
import ImageBanner from '../Components/ImageBanner';
import Newsletter from '../Components/Newsletter';

function AboutUs({welcomeMessage}) {
  //Main banner
  const abtbanners = [{
    id:1,
    urlImage:'/images/aboutbg-1.jpg',
    text: 'We Spice Up The Chef Inside You'
  },]
  //who we are
  const whoweare=[
    {
        id: 1,
        image: '/images/aboutusimg-4.jpg', 
        title:'Who We Are',
        desp:'CookMate is a versatile cooking platform accessible through both a mobile app and a website. Along with offering a diverse range of free recipes for various occasions, CookMate empowers users to contribute their own culinary masterpieces to the platform, fostering a worldwide community of food enthusiasts.'
      },
]
  //banner1 - cta
    const contents = [
        {
          id: 1,
          title: "Any More Questions?",
          desp: "Thank you for reaching out to CookMate. Whether you're a vegetarian, gluten-free, or keto enthusiast, find recipes tailored to your dietary preferences for guilt-free indulgence. If any queries, please reach us out",
          buttontext: 'Explore more',
          linkage: '/contact'
        },
      ];
      //banner2 - our aim
      const data = [
        {
          imageUrl: '/images/aboutusimg-11.jpeg',
          title:'Our Aim',
          text: 'Our aim is to deliver the best personalized, guided cooking experience possible using tried-and-true recipes, in-depth teaching materials, and a friendly digital user interface.',
        },
    
      ];
      //banner3 - mission
      const missions=[
        {
            id: 1,
            image: '/images/cookphone.jpg', 
            title:'Our Mission',
            desp:'Our mission is to inspire culinary creativity and foster a global community of food enthusiasts by providing a platform for users to discover, share, and savor diverse and delicious recipes from around the world.'
          }
    ]
    //banner4 - belief
    const visions=[
      {
          id: 1,
          image: '/images/aboutusimg-3.jpg', 
          title:'Our Belief',
          desp:'Our belief is to become the ultimate destination for food lovers, where individuals can effortlessly explore, exchange, and celebrate their passion for cooking, while promoting cultural diversity and culinary artistry worldwide.'
        },
  ]
  //team
  const team=[
    {
        id: 1,
        image: '/images/about team.jpg', 
        title:'Our Team',
        desp:'Our dedicated team of passionate food enthusiasts is on a mission to simplify cooking and inspire creativity in the kitchen. With a diverse blend of culinary expertise and tech-savvy minds, we are committed to bringing you the best recipe sharing experience.'
      },
]
  return (
    <div>
      <Header welcomeMessage={welcomeMessage}/>
      <ImageBanner aboutbanners={abtbanners}/>
      <Banner4 missions={whoweare}/>
      <Seperator props={imageUrl}/>
      <Banner3 missions={missions}/>
      <Seperator props={imageUrl}/>
      <Banner4 missions={visions}/>
      <Seperator props={imageUrl}/>
      <Banner2 data={data}/>
      {/* <Seperator props={imageUrl}/> */}
      <CountUpAnimation/>
      <Banner3 missions={team}/>
      <Seperator props={imageUrl}/>
      <Banner1 contents={contents} />
      <Seperator props={imageUrl}/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default AboutUs
