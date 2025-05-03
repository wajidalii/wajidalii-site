import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons/faMapMarkerAlt';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import Main from '../layouts/Main';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Wajid Ali via email @ wajidalli.me@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch. You can contact me at: </p>
        <a href="tel:+923067071981" rel="noreferrer" target="_blank">
          <FontAwesomeIcon icon={faPhone} /> (+92) 306 7071981
        </a>
        <br />
        <a href="https://wa.me/923067071981?text=%Hi" rel="noreferrer" target="_blank">
          <FontAwesomeIcon icon={faWhatsapp} /> (+92) 306 7071981
        </a>
        <br />
        <a href="mailto:wajidalli.me@gmail.com" rel="noreferrer" target="_blank">
          <FontAwesomeIcon icon={faEnvelope} /> wajidalli.me@gmail.com
        </a>
        <br />
        <a href="http://maps.google.com/?q=Ras Tanura, Saudi Arabia" rel="noreferrer" target="_blank">
          <FontAwesomeIcon icon={faMapMarkerAlt} /> Ras Tanura, Saudi Arabia
        </a>
      </div>
      Or check me at
      <br />
      <br />
      <ul className="actions">
        <li>
          <Link to="/resume" className="button">Resume</Link>
        </li>
        <li>
          <Link to="/Projects" className="button">Projects</Link>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/wajid-alli" rel="noreferrer" target="_blank" className="button"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>
        </li>
        <li>
          <a href="https://www.github.com/wajidalii" rel="noreferrer" target="_blank" className="button"><FontAwesomeIcon icon={faGithub} /> Github</a>
        </li>
      </ul>
    </article>
  </Main>
);

export default Contact;