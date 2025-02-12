import React, { useState } from 'react';
import './contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setConfirmationMessage('Thank you for you request, we will get back to you soon.');
    };

    const [confirmationMessage, setConfirmationMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(process.env.REACT_APP_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (res.ok) {
                setConfirmationMessage('Thank you for you request, we will get back to you soon.');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setConfirmationMessage('Error submitting request, please try again later.');
            }
        }
        catch (error) {
            setConfirmationMessage('Error submitting form, please try again later.');
        }
    };

    return (
        <div className="contactCont">
            <h2 className="head2" id="contactHead">Contact Us</h2>
            <div id="contactBody">
                <div className="babble">
                    <p className="contactText">If you need a website, hosting, or logo design/branding, please contact us about your project by calling, emailing, or filling out the form below. We would love to hear from you and look forward to helping you build your online presence.</p>
                    <p className="contactText">
                        We are located near Atlanta, Georgia, but we can work with clients from anywhere in the world. We are available to meet in person, by phone, or by video chat. We look forward to hearing from you!
                    </p>
                    <p className="contactText">
                        Please make sure to include your name, contact information and a detailed description of your project when messaging us. We will get back to you as soon as possible.
                    </p>
                    
                </div>
                <div id="contactFormCont">
                <   div id="phoneEmail">
                        <ul>
                            <li className="contactText">Phone: 443-695-7008</li>
                            <li className="contactText">Email: admin@opwebdev.com</li>
                        </ul>
                    </div>
                    <form id="contactForm" onSubmit={handleSubmit}>
                        <div className= "formInput">
                            <label for="name">Name:</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required></input>
                        </div>
                        <div className= "formInput">
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required></input>
                        </div>
                        <label for="message">Message:</label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
                        <button type="submit" id="contSubmit">Submit</button>
                    </form>
                     {confirmationMessage && <p>{confirmationMessage}</p>}
                </div>
            </div>
        </div>
    )
};

export default Contact;