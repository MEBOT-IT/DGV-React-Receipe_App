import React from 'react'
import './Banner3.css';
//left img; right text

function Banner3({missions}) {
  return (
    <div className="mission-container">
            <div className="mission-group">
            {missions.map((mission) => (
            <div className='mission' key={mission.id}>
                <div className="mission-image">
                    <img src={mission.image}></img>
                </div>
                <div className="para">
                    <p id="title">{mission.title}</p>
                    <p id="mission-cont">{mission.desp}</p>
                </div>
            </div>
            ))}
            </div>
        </div>
  )
}

export default Banner3