import React from 'react';
import '../../assets/Contact.css';
import Navbar from '../navbar/navbar.js';
import EmailForm from '../forms/email.js'

const Contact = () => {
    return (
        <>
            <Navbar title={"Contact Me"} />
            <div className="contact-container">
                <div className='personal-info-container'>
                    <div className="personal-info-part">
                        <div className="personal-info-title">
                            Contact Us
                        </div>
                        {/*
                        <div className="personal-info-textarea">
                            <div className='personal-info'>
                                Name: Elifnur
                            </div>
                            <div className='personal-info'>
                                Surname: Demir
                            </div>
                            <div className='personal-info'>
                                Phone Number: +90 (551) 162 78 95

                            </div>
                            <div className='personal-info'>
                                E-Posta: <a className='personal-info-mail' href="mailto:elifnurdemir@outlook.com.tr">elifnurdemir@outlook.com.tr</a>
                            </div>
                            <div className='personal-info'>

                                Address: Kocaeli/Turkey

                            </div>
                        </div>
                         */}

                        <div className="email-container">
                        <EmailForm/>
                        </div>

                        


                    </div>

                </div>

            </div>
        </>
    );
}

export default Contact;
