import React from 'react';
import Navbar from '../navbar/navbar';
import '../../assets/Projects.css';
import GithubIcon from '../../assets/media/github.png';
import WebsiteIcon from '../../assets/media/html.png';

const Projects = () => {
    const projectsData = [
        {
            projectName: 'Radiosso',
            projectSubtitle: 'A simple internet radio station with glassmorphism and 3D hover animation',
            githubLink: 'https://github.com/necatimertmetin/necatimertmetin.github.io',
            websiteLink: 'https://necatimertmetin.github.io',
        },
        {
            projectName: 'Time is',
            projectSubtitle: 'It Shows Time!',
            githubLink: 'https://github.com/username/project2',
            websiteLink: 'https://time.is',
        },
        {
            projectName: 'Project3',
            projectSubtitle: 'Description of Project3',
            githubLink: 'https://github.com/username/project3',
            websiteLink: 'https://www.scottsnyderphoto.com/',
        },
        {
            projectName: 'Project4',
            projectSubtitle: 'Description of Project4',
            githubLink: 'https://github.com/username/project4',
            websiteLink: 'https://andrevv.com/',
        },
        {
            projectName: 'Project5',
            projectSubtitle: 'Description of Project5',
            githubLink: 'https://github.com/username/project5',
            websiteLink: 'https://civit.ai/',
        },
    ];

    const ProjectList = () => {
        return (
            <div className='projects-column'>
                {projectsData.map((project, index) => (
                    <Project key={index} {...project} index={index} />
                ))}
            </div>
        );
    };

    const Project = ({ projectName, projectSubtitle, githubLink, websiteLink, index }) => {
        const isEvenIndex = index % 2 === 1;
        return (
            <>
                <div className={`projects-row ${isEvenIndex ? 'reverse-row' : ''}`}>
                    <div className='projects-row-side text-content'>
                        <div className='project-title'>
                            <div className='project-name'>
                                {projectName}
                            </div>
                            <div className='project-subtitle'>
                                {projectSubtitle}
                            </div>
                        </div>
                        <div className='project-link-container'>
                            <a className='project-link' href={githubLink} rel="noopener noreferrer">
                                <img className='project-link-img' src={GithubIcon} alt='GitHub Icon' />
                                <div className='project-link-title'>Github</div>
                            </a>
                            <a className='project-link' href={websiteLink} rel="noopener noreferrer">
                                <img className='project-link-img' src={WebsiteIcon} alt='Website Icon' />
                                <div className='project-link-title'>Website</div>
                            </a>
                        </div>
                    </div>

                    <div className='projects-vertical-separator' />

                    <div className='projects-row-side'>
                        <iframe className='project-frame' title={projectName} src={websiteLink} />
                    </div>
                </div>
            </>
        );
    };

    return (
        <div className='projects-container'>
            <Navbar title={'My Projects'} />

            <div className='projects-header'>
                <div className='projects-header-textarea'>
                    <div className='projects-header-title'>Harmony of Design and Code <br /> Unveiling my Frontend Masterpieces</div>
                    <div className='projects-header-Description'>"You can do anything you set your mind to. "</div>
                </div>
            </div>
            <div className='projects-separator' />

            <ProjectList />

        </div>
    )
}

export default Projects;
