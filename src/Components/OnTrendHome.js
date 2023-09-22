import React from 'react'
import './OnTrendHome.css';

const OnTrendHome = ({cards}) => {

  return (
    <div className='card-container'>
      <h1 className='ontrend-header'>On-Trend</h1>
    <div className="card-group">
        
      {cards.map((card) => (
        
        <div className='ontrend' key={card.id}>
            <div className="card-header">
            <span className="card-image">
             <img src={card.image} width="220px" height="170px" alt="OnTrend recipes" />
            </span>
            <p className="card-title">
              <a href="/recipes" className="card-title">
                  {card.name}
              </a>
            </p>
            </div>
            <div className="card-bottom">
                <p className="card-user">{card.user}</p>
            </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default OnTrendHome;
