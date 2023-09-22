import React from 'react'
import './ImageBanners.css'

function ImageBanner({aboutbanners}) {
  return (
    <div>
      <div className='image_banner_container'>
        {aboutbanners.map((aboutbanner) => (
            <div className='aboutbanner' key={aboutbanner.id}>
                <img className='banner-img' src={aboutbanner.urlImage} alt='banner-img'></img>
                <h1 className='banner-title'>{aboutbanner.text}</h1>
            </div>
        ))}
      </div>
    </div>
  )
}

export default ImageBanner
