import React from 'react'
import  '../Pages/ContactUs.css';

function ContactUs2() {
  const data = [{
          img: '/images/address.png', name: `Address`, desc: `11/8, Sugar Camp road, Arumbakkam, Chennai - 600001`
      }, {
          img: '/images/phone.png', name: `Phone`, phone: `+91 9176650198`
      },
      { img: 'images/mail.png', name: `Email`, mail: `support@cookmate.com` },]

      return (
          <>
              {data.map((i) => {
                  return (

                      <div className="contact-div">
                          <img className="contact-icon" src={i.img} />
                          <div>
                              <p className="address">{i.name}</p>
                              <p id="adesc-link">{i.desc}</p>
                              <a id="adesc-link" href="https://wa.me/9176650198">{i.phone}</a><a id="adesc-link" href="mailto:saranyabalu2711@gmail.com">{i.mail}</a>
                          </div>
                      </div>

                  )
              })}
          </>
      );
      }

export default ContactUs2