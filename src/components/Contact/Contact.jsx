import React from 'react';
import './Contact.css';
import contactImg from './contact.jpg';
import github from '../../../src/icons/github-brands.svg';
import fcc from '../../../src/icons/free-code-camp-brands.svg';
import stack from '../../../src/icons/stack-overflow-brands.svg';
import linkedin from '../../../src/icons/linkedin-in-brands.svg';
import email from '../../../src/icons/envelope-regular.svg';
import phone from '../../../src/icons/phone-solid.svg';

function Contact()  {
     
        return (
            <div className="container">
                <img src={contactImg} alt="Contact" style={{backgroundSize: "cover", width:"100%", height:"100%"}}/>; 
            <div className="text">
            <img className="icons" src={github} alt="GitHub" />
            <a className="contact" href="github.com/roydaly" target="_blank" rel="noopener noreferrer"> - GitHub</a>
            <br></br>
            <img className="icons" src={fcc} alt="freeCodeCamp" />
            <a className="contact" href="https://www.freecodecamp.org/roydaly" target="_blank" rel="noopener noreferrer"> - freeCodeCamp</a>
            <br></br>
            <img className="icons" src={stack} alt="StackOverflow" />
            <a className="contact" href="https://stackoverflow.com/users/12032022/roydaly" target="_blank" rel="noopener noreferrer"> - Stack Overflow</a>
            <br></br>
            <img className="icons" src={linkedin} alt="LinkedIn" />
            <a className="contact" href="https://www.linkedin.com/in/roy-daly/" target="_blank" rel="noopener noreferrer"> - LinkedIn</a>
            <br></br>
            <img className="icons" src={email} alt="Email" />
            <a className="contact" href="mailto:roy@roydaly.com" target="_blank" rel="noopener noreferrer"> - Email Me</a>
            <br></br>
            <img className="icons" src={phone} alt="Email" />
            <a className="contact" href="tel:425-306-7299" target="_blank" rel="noopener noreferrer"> - 425.306.7299</a>
            </div>
            </div>
        )
    
}

export default Contact;