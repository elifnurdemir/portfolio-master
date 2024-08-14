import React, { useState, useEffect } from 'react';
import '../../assets/BackToTopButton.css';
import arrow from '../../assets/media/up-arrow.png';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Sayfa scroll olunca kontrol et
    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll event listener'ı ekle
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Sayfayı en üstüne götüren fonksiyon
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <div>

            {isVisible && (

                <button onClick={scrollToTop} className='back-to-top-button'>
                    <img src={arrow} alt='Up'/>
                </button>
            )}
        </div>
    );
};



export default BackToTopButton;
