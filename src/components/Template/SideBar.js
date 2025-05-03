import React from "react";
import { Link } from "react-router-dom";
import ContactIcons from "../Contact/ContactIcons";

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src="https://github.com/wajidalii.png" alt="" />
      </Link>
      <header>
        <Link to="/">
          <h2>Wajid Ali</h2>
        </Link>
        <p>
          <a href="mailto:wajidalli.me@gmail.com">wajidalli.me@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I'm Wajid. A passionate Full Stack Engineer with 4+ years of expertise in building scalable web applications. Alumni of{" "}
        <a href="https://itu.edu.pk/" rel="noreferrer" target="_blank">
          Information Technology University
        </a>
        . Currently based in{" "}
        <a
          href="https://en.wikipedia.org/wiki/Saudi_Arabia"
          rel="noreferrer"
          target="_blank"
        >
          Saudi Arabia
        </a>
        . I specialize in creating high-performance solutions using modern technologies. My passion lies in{" "}
        <a
          href="https://react.dev/"
          rel="noreferrer"
          target="_blank"
        >
          React.js
        </a>
        ,{" "}
        <a
          href="https://redux.js.org/"
          rel="noreferrer"
          target="_blank"
        >
          Redux
        </a>
        ,{" "}
        <a href="https://expressjs.com/" rel="noreferrer" target="_blank">
          Express.js
        </a>
        ,{" "}
        <a href="https://dotnet.microsoft.com/" rel="noreferrer" target="_blank">
          .NET Core
        </a>
        , and{" "}
        <a href="https://laravel.com/" rel="noreferrer" target="_blank">
          Laravel
        </a>
        . I also enjoy optimizing systems, mentoring junior developers, and implementing DevOps solutions with{" "}
        <a href="https://www.nginx.com/" rel="noreferrer" target="_blank">
          Nginx
        </a>
        ,{" "}
        <a href="https://pm2.keymetrics.io/" rel="noreferrer" target="_blank">
          PM2
        </a>
        , and Linux.
      </p>
      <ul className="actions">
        <li>
          <Link to="/resume" className="button">
            Resume
          </Link>
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Wajid Ali <Link to="/">wajidali.netlify.app</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;