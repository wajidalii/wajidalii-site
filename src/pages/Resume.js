import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

// import Education from '../components/Resume/Education';
// import Experience from '../components/Resume/Experience';
// import Skills from '../components/Resume/Skills';
// import Courses from '../components/Resume/Courses';
// import References from '../components/Resume/References';

// import courses from '../data/resume/courses';
// import degrees from '../data/resume/degrees';
// import positions from '../data/resume/positions';
// import { skills, categories } from '../data/resume/skills';

// const sections = [
//   'Education',
//   'Experience',
//   'Skills',
//   'Courses',
//   'References',
// ];

const Resume = () => (
  <Main
    title="Resume"
    description="Wajid Ali's Resume."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="resume">Resume</Link></h2>
          {/* <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div> */}

        </div>
      </header>

      <div style={{ height: '100vh' }}>
        {/* <iframe className="holds-the-iframe" title="Wajid Resume" src="https://docs.google.com/gview?url=https://raw.githubusercontent.com/wajidalii/wajidalii/76e8530b26a5fac3d01921b1cc31313795d2ffb6/wajid%20Resume.pdf?token=AM7MC5Z7MK3C56SE27CYD6LBBGF7U&embedded=true" style={{ width: '100%', height: '100%' }} frameBorder="0" /> */}
        <iframe className="holds-the-iframe" title="Wajid Resume"
          src="https://docs.google.com/gview?url=https://github.com/wajidalii/wajidalii/raw/main/Wajid%20Ali%20-%20Resume.pdf&embedded=true" style={{ width: '100%', height: '100%' }} frameBorder="0" />
      </div>
      {/* <Education data={degrees} />
      <Experience data={positions} />
      <Skills skills={skills} categories={categories} />
      <Courses data={courses} />
      <References /> */}

    </article>
  </Main>
);

export default Resume;
