import React from 'react'
import './Banner1.css'

//cta

function Banner1({contents}) {
  return (
    <div className="banner1_container" >
            {contents.map((content) => (
                <div className='content' key={content.id}>
                    <h1 className='banner1_head'>{content.title}</h1>
                    <p className='banner1_desp'>{content.desp}</p>
                    <button className="message-button"><a href={content.linkage}>{content.buttontext}</a></button>
                </div>
            ))}

    </div>
  )
}

export default Banner1
