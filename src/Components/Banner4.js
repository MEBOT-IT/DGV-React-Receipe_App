import React from 'react'
import './Banner4.css'

function Banner4({missions}) {
  return (
    <div className="mission-container">
            <div className="mission-group">
            {missions.map((mission) => (
            <div className='mission' key={mission.id}>
                <div className="para">
                    <p id="title">{mission.title}</p>
                    <p id="mission-cont">{mission.desp}</p>
                </div>
                <div className="vision-image">
                    <img src={mission.image}></img>
                </div>
            </div>
            ))}
            </div>
        </div>
  )
}

export default Banner4
