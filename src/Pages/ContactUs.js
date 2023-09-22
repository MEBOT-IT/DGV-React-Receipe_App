import React from 'react'
import './ContactUs.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import ContactForm from '../Components/ContactUsForm'
import ContactUs2 from '../Components/ContactUs2'
import ContactUs1 from '../Components/ContactUs1'
import background from '../Assets/food-bg-21.jpg'
import Newsletter from '../Components/Newsletter'


function ContactUs() {
  return (
    <div>
        <Header/>
        
        <div className="largecontact" style={{backgroundImage: `url(${background})`}}>
                <div className="smallercontact">
                    <div className="contactus1">
                        <ContactUs1 />
                    </div>
                    <div className="flex">
                        <div className="contactus2">
                            <ContactUs2 />
                        </div>
                        <div className="contactusform">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
            <Newsletter/>
        <Footer/>
    </div>
  )
}

export default ContactUs
