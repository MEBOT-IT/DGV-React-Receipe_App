import React, { useState } from "react";
import './Newsletter.css';

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed with email: ${email}`);
    } else {
      alert('Invalid email address');
    }
  };

  return (
    <div>
    <div className="newsletter-card">
      <div className="content">
        <div className="heading">
          <h2>Hey, wait..</h2>
          <h2 style={{ fontSize: "23px" }} >Subscribe to our newsletter!</h2>
        </div>
        <div className="details">
          <p>You will never miss our podcasts, latest
          news, etc. Our newsletter is once a 
          week, every Wednesday.</p>
        </div>
        <div className="subscribe-form">
          <div className="button">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSubscribe}>Subscribe</button>
        </div>
      </div>
      </div>
      <div className="news-image-container">
        <img src='images/news.jpeg' className="newsletter-image" alt="Food Newsletter" />
      </div>
    </div>
    
    </div>
  );
}

export default Newsletter;