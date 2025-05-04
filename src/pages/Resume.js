import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const Resume = () => (
  <Main
    title="Resume"
    description="Wajid Ali's Resume - Full Stack Engineer with 4+ years of experience"
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/resume">Resume</Link></h2>
          <div className="resume-actions">
            <a
              href="https://docs.google.com/document/d/1071lpVQSqyoGOCr-p8cDoso6wj_uF_I43K0hnd0tuh0/export?format=pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Download PDF
            </a>
          </div>
        </div>
      </header>

      <div style={{
        height: '100vh',
        marginTop: '20px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <iframe
          className="holds-the-iframe"
          title="Wajid Ali Resume"
          src={`https://docs.google.com/viewer?url=${encodeURIComponent(
            'https://docs.google.com/document/d/1071lpVQSqyoGOCr-p8cDoso6wj_uF_I43K0hnd0tuh0/export?format=pdf'
          )}&embedded=true`}
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            position: 'absolute',
            top: 0,
            left: 0
          }}
          frameBorder="0"
          allowFullScreen
        />
      </div>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p>
          Having trouble viewing?{' '}
          <a
            href="https://docs.google.com/document/d/1071lpVQSqyoGOCr-p8cDoso6wj_uF_I43K0hnd0tuh0/export?format=pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download PDF directly
          </a>
        </p>
      </div>
    </article>
  </Main>
);

export default Resume;