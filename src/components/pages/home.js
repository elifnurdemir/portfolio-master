import React from 'react';
import profilePicture from '../../assets/media/profile.png'
import '../../assets/About.css';
import Navbar from '../navbar/navbar';
import instagramIcon from '../../assets/media/instagram.png';
import youtubeIcon from '../../assets/media/youtube.png';
import snapchatIcon from '../../assets/media/snapchat.png';
import linkedinIcon from '../../assets/media/linkedin.png';
import Tilt from 'react-parallax-tilt';

const Home = () => {


    const socialMediaLinks = [
        { name: "Instagram", link: "https://www.instagram.com/arrivederciaoo/", icon: instagramIcon },
        { name: "Youtube", link: "https://www.youtube.com/channel/UC2Uuxc9_uAlntcodjv-fmxw", icon: youtubeIcon },
        { name: "Snapchat", link: "https://www.snapchat.com/add/arrivederciao?share_id=nu2cOEVYRVM&locale=tr-TR", icon: snapchatIcon },
        { name: "LinkedIn", link: "https://www.linkedin.com/in/elifnur-demir-a682b826a/", icon: linkedinIcon },
    ];


    const SocialMediaButton = () => {
        return (
            <div className="about-row-social-button-container">
                {socialMediaLinks.map((socialMedia, index) => (
                    <div className='about-row-social-button' key={index}>
                        <a href={socialMedia.link} target="_blank" rel="noopener noreferrer">
                            <img src={socialMedia.icon} alt={`${socialMedia.name} icon`} />
                        </a>
                    </div>
                ))}
            </div>
        );
    }


    return (
        <div className="about-container">
            <Navbar title={"Elif Demir"} />
            <div className="about-row">
                <div className="about-row-part">
                    <Tilt
                        className="parallax-effect-glare-scale about-img-tilt"
                        perspective={1000}
                        glareEnable={true} glareMaxOpacity={0.2} glareColor="white" glarePosition="all"
                        tiltMaxAngleX={5}
                        tiltMaxAngleY={5}
                    >
                        <div className="inner-element">


                            <img className="about-img" src={profilePicture} alt="img" />

                        </div>
                    </Tilt>
                </div>

                <div className='about-vertical-separator' />

                <div className="about-row-part">
                    <div className="about-row-text-container">
                        <div className="about-row-title">
                            Hi! I am Elif
                            <div>Frontend Developer</div>
                        </div>
                        <div className="about-row-description">
                            I'm a Frontend Developer with extensive experience for over 5 years. My expertise is to design and create Websites and many more...
                        </div>
                        <div className="about-row-button-container">
                            <div className="about-row-button">
                                Contact Me
                            </div>
                            <div className="about-row-button">
                                Blog
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='about-separator' />
            <div className="about-row-reverse">
                <div className="about-row-part">
                    <div className="about-row-title">Follow Me</div>

                    <SocialMediaButton />
                </div>

                <div className='about-vertical-separator' />

                <div className="about-row-part">
                    <div className="about-row-text-container">
                        <div className="about-row-title">
                            Who Am I ?
                        </div>
                        <div className="about-row-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                        <div className="about-row-button-container">
                            <div className="about-row-button">
                                Contact Me
                            </div>
                            <div className="about-row-button">
                                My Projects
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Home;