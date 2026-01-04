import React from 'react';
import Layout from '../components/Layout';
import Carousel from '../components/Carousel';
import { projects } from '../data/projects';

const skills = [
  'Python',
  'JavaScript',
  'Next.js',
  'TypeScript',
  'React',
  'Tailwind CSS',
  'Git',
  'Docker',
  'REST APIs',
  'Linux/Unix',
  'Data Structures',
  'Algorithms'
];

const experiences = [
  {
    title: 'Underwriting Assistant',
    company: 'ZSIC General Insurance — Chililabombwe',
    time: 'May 2024 – Present',
    summary:
      'Streamlining insurance data workflows, organizing policy data, and shipping automation scripts to reduce manual overhead.'
  },
  {
    title: 'STEM & Robotics Contributor',
    company: 'Zambia Robotics',
    time: 'Ongoing',
    summary:
      'Designing programming challenges, mentoring teams, and coordinating sponsors to grow competitive robotics in Zambia.'
  }
];

const education = {
  school: 'African Leadership University — Chingola, Zambia',
  degree: 'B.Sc. Software Engineering',
  grad: 'Expected 2026',
  coursework: 'Data Structures & Algorithms, Database Systems, Operating Systems, OOP, Software Engineering'
};

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="page">
        <section className="hero">
          <div>
            <p className="eyebrow">Backend-first, frontend-polished</p>
            <h1>Hi, I am Ephraim Mulilo</h1>
            <p className="lede">
              Software engineer with strong CS fundamentals, shipping products that balance reliable backends with
              expressive interfaces. Currently blending underwriting discipline with engineering rigor in Chililabombwe.
            </p>
            <div className="hero-actions">
              <a className="primary" href="#projects">View projects</a>
              <a className="ghost" href="mailto:e.mulilo1@alustudent.com">Email me</a>
            </div>
            <div className="hero-meta">
              <span>Chingola · Zambia</span>
              <span>+260 973 370 564</span>
              <span>e.mulilo1@alustudent.com</span>
            </div>
          </div>
          <div className="hero-card">
            <p className="terminal-label">~ resume/index.html</p>
            <div className="terminal">
              <p><span className="prompt">$</span> role: Software Engineer / Underwriting Assistant</p>
              <p><span className="prompt">$</span> focus: Python, JS, Next.js, data pipelines</p>
              <p><span className="prompt">$</span> credo: ship reliable systems with thoughtful UI</p>
              <p className="cursor-line"><span className="prompt">$</span><span className="cursor" /></p>
            </div>
          </div>
        </section>

        <section className="panel" id="skills">
          <div className="panel__header">
            <p className="eyebrow">Skills</p>
            <h2>Strong CS fundamentals</h2>
          </div>
          <div className="pill-grid">
            {skills.map((skill) => (
              <span className="pill" key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section className="panel" id="projects">
          <div className="panel__header">
            <p className="eyebrow">Projects</p>
            <h2>Interactive carousel</h2>
            <p className="card__body">Tap a card to reveal the stack; swipe horizontally on mobile.</p>
          </div>
          <Carousel projects={projects} />
        </section>

        <section className="panel" id="education">
          <div className="panel__header">
            <p className="eyebrow">Education</p>
            <h2>{education.degree}</h2>
            <p className="card__subtitle">{education.school}</p>
          </div>
          <div className="edu">
            <p className="card__body">Expected Graduation: {education.grad}</p>
            <p className="card__body">Relevant coursework: {education.coursework}</p>
          </div>
        </section>

        <section className="panel" id="experience">
          <div className="panel__header">
            <p className="eyebrow">Experience</p>
            <h2>Operational discipline meets code</h2>
          </div>
          <div className="cards">
            {experiences.map((exp) => (
              <div className="card" key={exp.title}>
                <div className="card__top">
                  <p className="card__title">{exp.title}</p>
                  <p className="card__meta">{exp.time}</p>
                </div>
                <p className="card__subtitle">{exp.company}</p>
                <p className="card__body">{exp.summary}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="panel" id="contact">
          <div className="panel__header">
            <p className="eyebrow">Contact</p>
            <h2>Let us build something resilient</h2>
            <p className="card__body">Available for backend-heavy roles with frontend polish. Strong collaborator, fast learner.</p>
          </div>
          <div className="hero-actions">
            <a className="primary" href="mailto:e.mulilo1@alustudent.com">Email Ephraim</a>
            <a className="ghost" href="https://www.linkedin.com/in/ephraim-mulilo/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="ghost" href="https://github.com/ephraimm-zm" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;