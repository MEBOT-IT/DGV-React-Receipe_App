import React, { useState } from 'react';
import "../Pages/ContactUs.css"


const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = '!Name is required';
        }

        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!formData.email.trim() || !emailPattern.test(formData.email)) {
            newErrors.email = '!Valid email is required';
        }


        if (formData.phone && isNaN(formData.phone)) {
            newErrors.phone = '!Phone must be a number';
        }


        if (!formData.message.trim()) {
            newErrors.message = '!Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            window.alert('your form is successfully submitted:', formData);
        }
    };

    return (
        <>


            <div className=' Contact-form'>

                <h2 className='send-msg'>Send Message</h2>
                <form className='form-margin' onSubmit={handleSubmit}>
                    <div className='name-email' >
                        <div className='contact-name'>
                            <p className='cp'>Name:</p>
                            <input id='contactna-em'
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <div className='error-div'>
                                {errors.name && <span className="error-msg">{errors.name}</span>}
                            </div>
                        </div>
                        <div className='contact-email'>
                            <p className='cp'>Email:</p>
                            <input id='contactna-em'
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <div className='error-div'>
                                {errors.email && <span className="error-msg">{errors.email}</span>}
                            </div>
                        </div>
                    </div>
                    <div className='contact-phone'>
                        <p className='cp'>Phone:</p>
                        <input id='contactna-em'
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        <div className='error-div'>
                            {errors.phone && <span className="error-msg">{errors.phone}</span>}
                        </div>
                    </div>
                    <div className='contact-textarea'>
                        <p className='cp'>Message:</p>
                        <textarea id="contactna-em"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                        />
                        <div className='error-div'>
                            {errors.message && <span className="error-msg">{errors.message}</span>}
                        </div>
                    </div>
                    <div className='contact-submit'>
                        <button id='contactsub' type="submit">Submit</button>
                    </div>
                </form >
            </div >
        </>
    );
};

export default ContactForm;