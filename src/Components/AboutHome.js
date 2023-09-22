import Images from "./AboutImages";
import './AboutHome.css'

export default function AboutHome()
{
    const images = ['/images/img1 (2).jpg',
                  '/images/img2.jpg','images/img3.jpg','images/img4.jpg','images/img5.jpg','images/img6.jpg',
                  'images/img7.jpg','images/img8.jpg','images/img9.jpg'
                    ]
    return(
        <div className="section hero">
        <div className="col typography">
            <h1 className="title"> What Are We About</h1>
            <p className="info">CookMate is an  food enthusiasts dedicated to helping you discover and master the art of cooking. Join us on a culinary journey filled with delicious recipes, cooking tips, and kitchen inspiration.".Start Exploring now.!!</p>
           <center> <button className="btn"><a href="/about">explore now</a></button></center>
        </div>
        <div className="col gallery">
        {images.map((src, index) => (
            <Images key={index} imgSrc={src} pt={"90%"} />
        ))}
        <Images/>
           </div>

        </div>
    );
};
