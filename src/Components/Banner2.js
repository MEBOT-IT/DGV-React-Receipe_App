import React from 'react'
import './Banner2.css'

//one below other

export default function Banner2({data}) {
  return (
    <div>
            {data.map((item, index) => (
                <div className='ImageTextList-item' key={index}>
                    <img  src={item.imageUrl} alt={`Image ${index}`} />
                    <h1>{item.title}</h1>
                    <p>{item.text}</p>
                </div>
            ))}
        </div>
  )
}
