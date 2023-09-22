import React,{useState, useEffect} from "react";
import './Slider.css'
import image1 from '../Assets/image-1.jpg'

const Slider = () => {
    const slides = [
        {
          images: 'url(https://images.unsplash.com/photo-1624374053855-39a5a1a41402?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)',
          text : 'The Ultimate Recipe Hub..',
        },
        {
          images: 'url(https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1371&q=80)',
          text : 'From our kitchen to yours..',
        },
        {
          images: 'url(https://images.unsplash.com/photo-1626132647523-66f5bf380027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80)',
          text : 'Cook, Click, and Connect..',
        },
        {
          images: 'url(https://images.unsplash.com/photo-1626500155537-93690c24099e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80)',
          text : "Every recipe has a story. What's yours?",
        },
        {
          images: 'url(https://images.unsplash.com/photo-1598515211932-b130a728a769?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)',
          text : 'Explore endless recipes..',
        },
        {
          images: 'url(https://images.unsplash.com/photo-1623243020684-9f8bcefe6e94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)',
          text : 'From novice to pro chef..',
        }
    ];
    const [active, setActive] = useState(0);
    const [autoplay, setAutoplay] = useState(0);
    const max = slides.length -1;

    const intervalBetweenSlides = () => autoplay && setActive(active === max  ? 0 : active + 1)

    useEffect(() => {
        const interval = setInterval( () => intervalBetweenSlides(), 4000);
        return () => clearInterval(interval);
    });

    const toggleAutoPlay = () => setAutoplay(!autoplay)

    const nextOne = () => (active === max) ? setActive(0) : setActive(active + 1)

    const prevOne = () => (active === 0) ? setActive(max) : setActive(active - 1)

    const isActive = value => active === value && 'active'

    const setSliderStyles = () => {
        const transition = active * - 100;
        
        return {
          width: ( slides.length * 100 ) + 'vw',
          transform: 'translateX(' + transition + 'vw)',
          filter : 'grayscale(0.20)'
        }
    }

    const renderSlides = () => slides.map((item, index) => (
        <div 
            className='each-slide' 
            key={ index } 
            style={{ backgroundImage: item.images }}>
            <div className="each-slide-desp">
            <p><i>{item.text}</i></p>
            </div>
        </div> 
    ));


    const renderPlayStop = () => autoplay
        ? (
            <svg fill='#FFFFFF' height='24' viewBox='0 0 24 24' width='24'>
                <path d='M0 0h24v24H0z' fill='none'/>
                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z'/>
            </svg> 
        )
        : (
            <svg fill='#FFFFFF' height='24' viewBox='0 0 24 24' width='24'>
                    <path d='M0 0h24v24H0z' fill='none'/>
                    <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z'/>
            </svg>
        )

    const renderArrows = () => (
        <div>
            <button 
                type='button'
                className='arrows prev' 
                onClick={ () => prevOne() } >
                <svg fill='#FFFFFF' width='50' height='50' viewBox='0 0 24 24'>
                    <path d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'/>
                    <path d='M0 0h24v24H0z' fill='none'/>
                </svg>
            </button>
            <button 
                type='button'
                className='arrows next' 
                onClick={ () => nextOne() } > 
                <svg fill='#FFFFFF' height='50' viewBox='0 0 24 24' width='50'>
                    <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'/>
                    <path d='M0 0h24v24H0z' fill='none'/>
                </svg>
            </button>
        </div>
    )

    return (
        <section className='slider'>
            <div 
                className='wrapper' 
                style={ setSliderStyles() }>
                { renderSlides() }
            </div>
            { renderArrows() }
            
            <button 
                type='button'
                className='toggle-play' 
                onClick={ toggleAutoPlay }> 
                { renderPlayStop() }
            </button>
        </section>
    );
};

export default Slider;