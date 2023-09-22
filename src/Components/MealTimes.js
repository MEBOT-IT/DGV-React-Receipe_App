import React from 'react';
import './MealTimes.css';

const Mealtimes = () => {
  // Define an array of image objects with URLs and links
  const mealimages = [
    {
      id: 1,
      image: 'images/morning.png',
      time:'Breakfast',
      linkUrl: '/recipes#indian',
    },
    {
      id: 2,
      image: 'images/noon.png',
      time:'Lunch',
      linkUrl: '/recipes#rice',
    },
    {
      id: 3,
      image: 'images/evening.png',
      time:'Evening',
      linkUrl: '/recipes#drinks',
    },
    {
        id: 4,
        image: 'images/night.png',
        time:'Dinner',
        linkUrl: '/recipes#roti',
    },
    // Add more images and links as needed
  ];

  return (
    <div className="image-gallery">
      {mealimages.map((mealimage) => (
        <div key={mealimage.id} className="image-container">
          <a href={mealimage.linkUrl} id='time-rec-link'>
            <img src={mealimage.image} alt={`Image ${mealimage.id}`} id='timeimg' width="100px" height="100px"/>
            <p id='meal-times'>{mealimage.time}</p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Mealtimes;