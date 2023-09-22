import React, { useEffect, useState } from 'react';
import './Counter.css'; // Import your CSS file here
import './Update.js';
import ValueCounter from './Update.js';

const CountUpAnimation = () => {
  
  const [data, setData] = useState([
    { id:1, icon: 'fas fa-utensils', value: 1500, text: "Recipes" },
    {id:2, icon: 'fas fa-user', value: 2400, text: "Unique Users" },
    { id:3,icon: 'fas fa-users', value: 225, text: "Team Members" },
    {id:4, icon: 'fas fa-download', value: 1800,text: "App downloads" },
  ]);

  useEffect(() => {
    // Your animation logic can go here
    // You can use libraries like GSAP or CSS transitions to animate the numbers
  }, []);
  
 
  return (
    <div className='counter'>
      <h1 className='counter_head'>At A Glance</h1>
    <div className="counter_wrapper">
      {data.map((item, index) => (
        <div className="container11" key={item.index}>
          <i id='i_icon' className={item.icon}></i>
          <span className="num" data-val={item.value}>
            000
            
          </span>
          <ValueCounter/>
          <span className="text">{item.text}</span>
        </div>
        
      ))}
    </div></div>
  );
};

export default CountUpAnimation;
