import './Cuisines.css'
import React from 'react';

const Cuisine = ({cuisines}) => {
    return(
        <div classname= 'cuisine_card'>
             <h1 className='topchef_header'>Multi-Cuisines</h1>
            <div class="whole_box">
                 
            {cuisines.map((cuisine) => (
            
            <section class="card-section" key={cuisine.id}>
                <div class="cuisine-card">
                    <div class="flip-card">
                        <div class="flip-card__container">
                            <div class="card-front">
                                <div class="card-front__tp card-front__tp--city">
                                    <img src={cuisine.image} class='img_icon'></img>
                                        <h2 class="card-front__heading" style={{color:"#442A00"}}> 
                                            {cuisine.country}
                                        </h2>
                                </div>

                                <div class="card-front__bt">
                                    <p class="card-front__text-view card-front__text-view--city" style={{color:"#442A00"}}>
                                        {cuisine.frtxt}
                                    </p>
                                </div>
                            </div>
                            <div class="card-back">
                                <img src={cuisine.vid} class="video__container" autoplay muted loop />
                            </div>
                        </div>
                    </div>

                    <div class="inside-page">
                        <div class="inside-page__container">
                            <p class="inside-page__heading inside-page__heading--city" style={{color:"#442A00"}}>
                                {cuisine.heading}
                            </p>
                            <p class="inside-page__text">
                                {cuisine.para}
                            </p>
                            <a href={cuisine.link} class="inside-page__btn inside-page__btn--city">{cuisine.anc}</a>
                        </div>
                    </div>
                </div>
            </section>
            ))}
        </div>
        </div>
    );
};

export default Cuisine;