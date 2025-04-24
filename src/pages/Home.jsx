import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

import Footer from '../components/Footer';
import Projects from '../pages/projectsData'; // Import Projects component


const projectSummaries = [
  {
    title: 'Anicafe.xyz',
    brief: 'Initially an anime and movies download and streaming website turned to blogging, completely seo optimised',
    link: '/projects#project-1',
  },
  {
    title: 'Hardware and software security',
    brief: 'Security of hardware, and encryption of algorithm in my internship. Encryption process is still going on',
    link: '/projects#project-2',
  },
  {
    title: 'API',
    brief: 'API project comprising of book management system using postman. Used Express, node too ',
    link: '/projects#project-3',
  },
  {
    title: 'Ongoing project of SEO in internship',
    brief: 'Working on the SEO of website . ',
    link: '/projects#project-4',
  },


  // Add more project summaries as needed
];

const Home = () => {
  return (
    <div className="home">
      <div className="about-me">
        <div className="about-text">
        Hello! <b>I'm Kanishk Saraswat</b>, an <b>aspiring cybersecurity</b> professional with a keen interest in <b>Red Team operations</b>. I am passionate about offensive cybersecurity, focusing on identifying and exploiting vulnerabilities to strengthen defenses and enhance security measures.

. My background in <b>web development</b> complements my cybersecurity skills, allowing me to understand and address potential threats in diverse digital environments. Additionally, I am a <b> master in SEO </b>, which helps me appreciate the importance of secure, optimized online experiences.

I am eager to contribute to the cybersecurity community by uncovering vulnerabilities and helping organizations build more resilient security postures.

  </div>
        <div className="photo-container">
          <img 
            src = " src/porfile.jpg"
            // src="https://media.licdn.com/dms/image/D5603AQEH3QpnKi7Mow/profile-displayphoto-shrink_400_400/0/1721387732693?e=1727913600&v=beta&t=58AMVsQqNZjjqA8u_NI8UNEnd9DCtKbLci2g1EvVMLM" 
            alt="Your Name" 
            className="profile-photo" 
          />
        </div>
      </div>

      <section id="skills" className="skills-section">
        <h2 className="skills-heading">Skills</h2>
        <div className="skills-cards">
          <div className="card">
            <h3>Cyber Security</h3>
            <ul>
              <li>Web app pentesting</li>
              <li>Network Security</li>
              <li>Browser security</li>
              <li>Cloud security</li>
              <li>Cryptography</li>
              <li>Python</li>
            </ul>
          </div>
          <div className="card">
            <h3>Web Development</h3>
            <ul>
              <li>HTML & CSS</li>
              <li>JavaScript & React</li>
              <li>Bootstrap and Tailwind</li>
            </ul>
          </div>
          <div className="card">
            <h3>Cloud Computing</h3>
            <ul>
              <li>AWS</li>
              <li>Infrastructure as Code</li>
              <li>Cloud Security</li>
            </ul>
          </div>
          <div className="card">
            <h3>Extra</h3>
            <ul>
              <li>SEO & SEM</li>
              <li>Content Writing</li>
              <li>Community Building and Management</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="certifications">
        <h2>Certifications</h2>
        <div className="certifications-container">
          <div className="certification">
            <img 
              src="src/cyber.png"
              // src="https://media.licdn.com/dms/image/D5622AQGHTTEKZ0o0hg/feedshare-shrink_800/0/1721070775578?e=1725494400&v=beta&t=o4AEcAWdOFF1WtHllnqA0nQhWKNxva64uBSknaqhYrw" 
              alt="Certification 1" 
              className="certification-image" 
            />
            <div className="certification-details">
              <p>3 months course of cyber security. <br></br> 
              Networking, 
              Web App Pentesting, 
              Cloud Security, 
              Browser Security,
              Network Security,
              Cryptography,
              Python,
              
              
              </p> 
            


            </div>
          </div>
          <div className="certification">
            <img 
              src = "src/SEO.png"
         // src="https://udemy-certificate.s3.amazonaws.com/image/UC-d4d4bf3f-3fbf-4482-9c2e-9df0ed538601.jpg?v=1688419257000" 
              alt="Certification 2" 
              className="certification-image" 
            />
            <div className="certification-details">
              <p>SEO <br></br>
              Keyword Searching, Backlink building, Content Writing, Digital Marketing, Google Analytics, ahref, adsense.              
              
              
              </p>
            </div>
          </div>
          <div className="certification">
            <img 
              src="https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~Y9TQT5KS4EM6/CERTIFICATE_LANDING_PAGE~Y9TQT5KS4EM6.jpeg" 
              alt="Certification 3" 
              className="certification-image" 
            />
            <div className="certification-details">
              <p>Python for automation from Google</p>


            </div>
          </div>
        </div>
      </section>

    

      <section id="projects">
        <h2>Projects</h2>
        <div className="project-cards">
          {projectSummaries.map((project, index) => (
            <Link to={project.link} key={index} className="project-summary">
              <h3>{project.title}</h3>
              <p>{project.brief}</p>
            </Link>
          ))}
        </div>
      </section>

      <section id="resume" className="resume-section">
        <h2>Resume</h2>
        <a 
          href="src/Kanishk's CV.pdf " 
          download 
          className="resume-link"
        >
          Download My Resume
        </a>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
