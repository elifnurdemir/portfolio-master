// EmailForm.js

import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const EmailForm = () => {
    const [toName, setToName] = useState('');
    const [fromName, setFromName] = useState('');
    const [message, setMessage] = useState('');
    const [fromMail, setFromMail] = useState('');

    const [currentButton, setCurrentButton] = useState(1); // 1 ise send yazsin 2 ise sending yazsin 3 ise sent yazsin 4 ise failed yazsin

    const sendEmail = () => {


        setCurrentButton(2)

        const emailData = {
            to_name: toName,
            from_name: fromName,
            message: message,
            from_mail: fromMail,
        };

        if(toName === '' || fromName === '' || message === '' || fromMail===''){
            setCurrentButton(4)
            setTimeout(() => setCurrentButton(1), 2000);
            return;
        }
        emailjs.send(
            'service_4izjuyk', // Your service ID
            'template_ba8zvec', // Your template ID
            emailData,
            'hDB58YOdNC8zWwPU7' // Your user ID
        )
            .then((response) => {
                console.log('Email sent successfully:', response);
                setCurrentButton(3)
                setTimeout(() => setCurrentButton(1), 5000);

            })
            .catch((error) => {
                console.error('Email failed to send:', error);
                setCurrentButton(4)

                setTimeout(() => setCurrentButton(1), 5000);
            });
    };

    return (
        <>

            <div className="mail-input-area">
                <input type="text" placeholder="Name" />
            </div>
            <div className="mail-input-area">
                <input type="email" placeholder="example@mail.com" />
            </div>
            <div className="mail-input-area">
                <textarea className="mail-long-text-area" placeholder="At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.">
                </textarea>
            </div>

            <div className="mail-send-button" href="#" onClick={() => { sendEmail() }}>

                {(currentButton === 1) && "SEND"}
                {(currentButton === 2) && "SENDING"}
                {(currentButton === 3) && "SENT"}
                {(currentButton === 4) && "FAILED"}



                <div className={`mail-span ${currentButton === 1 ? `mail-span-send` : ``} ${currentButton === 2 ? `mail-span-sending` : ``} ${currentButton === 3 ? `mail-span-sent` : ``} ${currentButton === 4 ? `mail-span-failed` : ``}`} />
            </div>
        </>
    );
};

export default EmailForm;
