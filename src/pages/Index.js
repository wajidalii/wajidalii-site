import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Wajid Ali's personal website. Saudi Arabian based Senior Full-Stack Engineer with 4+ years of experience."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Who Am I?</Link></h2>
          <p>
            I'm a Senior Full-Stack Engineer with 4+ years of expertise in building scalable,
            distributed web applications. I specialize in solving complex challenges through
            innovative engineering and delivering high-performance solutions. Passionate about
            mentoring junior developers and optimizing systems for maximum efficiency.
          </p>
        </div>
      </header>
      <p> Languages and Technologies I use:
        <br />
        <FontAwesomeIcon icon={faPlus} /> Frontend
        <p className="technologies">
          JavaScript, TypeScript, React, Redux, HTML5/CSS3
        </p>
        <br />
        <FontAwesomeIcon icon={faPlus} /> Backend
        <p className="technologies">
          Node.js, Express.js, .NET Core, Laravel, PHP, REST APIs
        </p>
        <br />
        <FontAwesomeIcon icon={faPlus} /> Databases
        <p className="technologies">
          MySQL, Microsoft SQL Server, Oracle, Firebase
        </p>
        <br />
        <FontAwesomeIcon icon={faPlus} /> DevOps & Infrastructure
        <p className="technologies">
          Linux, Nginx, PM2, Ngrok, Bash Scripting, Crontab
        </p>
        <br />
        <FontAwesomeIcon icon={faPlus} /> Other Skills
        <p className="technologies">
          Unity3D Game Development, Android Development, Salesforce
        </p>
        <br />
        <FontAwesomeIcon icon={faPlus} /> Tools
        <p className="technologies">
          VS Code, Visual Studio, Git, GitHub, Postman, Android Studio
        </p>
      </p>
      <br />
      <p>
        <h2>Want to know more?</h2>
        Check out my
      </p>
      <ul className="actions">
        <li>
          <Link to="/resume" className="button">Resume</Link>
        </li>
        <li>
          <Link to="/Projects" className="button">Projects</Link>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/wajid-alli" rel="noreferrer" target="_blank" className="button">LinkedIn</a>
        </li>
        <li>
          <a href="https://www.github.com/wajidalii" rel="noreferrer" target="_blank" className="button">Github</a>
        </li>
        <li>
          <Link to="/contact" className="button">Contact</Link>
        </li>
      </ul>
    </article>
  </Main>
);

export default Index;