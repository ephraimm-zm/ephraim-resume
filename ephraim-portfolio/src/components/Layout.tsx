import React, { useState } from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleExportPDF = () => {
        setMenuOpen(false);
        window.print();
    };

    return (
        <div className="shell">
            <div className="grid-overlay" aria-hidden="true" />
            <header className="site-header">
                <div className="brand-row">
                    <div className="brand">
                        <span className="brand__dot" />
                        <div>
                            <p className="brand__eyebrow">Ephraim Mulilo</p>
                            <p className="brand__title">Software Developer</p>
                        </div>
                    </div>
                    <button 
                        className="burger" 
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                    >
                        <span className={menuOpen ? 'open' : ''}></span>
                        <span className={menuOpen ? 'open' : ''}></span>
                        <span className={menuOpen ? 'open' : ''}></span>
                    </button>
                </div>
                <nav className={`site-nav ${menuOpen ? 'open' : ''}`}>
                    <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
                    <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
                    <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
                    <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
                    <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
                    <button className="pdf-export" onClick={handleExportPDF}>
                        Export to PDF
                    </button>
                </nav>
            </header>

            <main>{children}</main>

            <div className="resume-template" aria-hidden="true">
                <div className="resume-header">
                    <h1>Ephraim Mulilo</h1>
                    <p className="resume-contact">
                        Chililabombwe, Zambia | e.mulilo1@alustudent.com | GitHub: github.com/ephraimm-zm
                    </p>
                </div>

                <div className="resume-section">
                    <h2>PROFESSIONAL SUMMARY</h2>
                    <p>Software developer with strong CS fundamentals, shipping products that balance reliable backends with expressive interfaces. Currently blending underwriting discipline with engineering rigor in Chililabombwe.</p>
                </div>

                <div className="resume-section">
                    <h2>EDUCATION</h2>
                    <div className="resume-item">
                        <div className="resume-item-header">
                            <strong>Bachelor of Science in Software Engineering</strong>
                            <span>Expected 2026</span>
                        </div>
                        <p>African Leadership University — Kigali, Rwanda</p>
                        <p>Relevant Coursework: Data Structures & Algorithms, Database Systems, Operating Systems, OOP, Software Engineering</p>
                    </div>
                </div>

                <div className="resume-section">
                    <h2>TECHNICAL SKILLS</h2>
                    <p><strong>Languages:</strong> Python, JavaScript, TypeScript</p>
                    <p><strong>Frameworks & Libraries:</strong> Next.js, React, Flask, Tailwind CSS</p>
                    <p><strong>Tools & Technologies:</strong> Git, Docker, REST APIs, Linux/Unix, Nginx, Gunicorn</p>
                    <p><strong>Core Competencies:</strong> Data Structures, Algorithms, OOP, Software Testing, Agile Development</p>
                </div>

                <div className="resume-section">
                    <h2>PROJECTS</h2>
                    
                    <div className="resume-item">
                        <div className="resume-item-header">
                            <strong>Weather App</strong>
                        </div>
                        <p>Weather insights served through Nginx and Gunicorn with a Flask core; responsive front end for quick city lookups and forecasts.</p>
                        <p><em>Technologies:</em> Nginx, Gunicorn, Flask, Python 3, HTML, CSS, JavaScript</p>
                    </div>

                    <div className="resume-item">
                        <div className="resume-item-header">
                            <strong>zed-bnb</strong>
                        </div>
                        <p>Accommodation platform built with Next.js and NextAuth, blending TypeScript APIs with Tailwind UI and Python data utilities.</p>
                        <p><em>Technologies:</em> Next.js, Tailwind CSS, NextAuth.js, TypeScript, Python</p>
                    </div>

                    <div className="resume-item">
                        <div className="resume-item-header">
                            <strong>Student Finance Tracker</strong>
                        </div>
                        <p>Lightweight web app that helps students budget, categorize spending, and track savings goals without friction.</p>
                        <p><em>Technologies:</em> HTML, CSS, JavaScript</p>
                    </div>

                    <div className="resume-item">
                        <div className="resume-item-header">
                            <strong>Regex Data Extractor</strong>
                        </div>
                        <p>CLI-first Python tool for fast data extraction pipelines with reusable regex snippets and CSV/JSON outputs.</p>
                        <p><em>Technologies:</em> Python</p>
                    </div>

                    <div className="resume-item">
                        <div className="resume-item-header">
                            <strong>buy-vb</strong>
                        </div>
                        <p>Shopify storefront integrated with Flutterwave for payments; optimized product flows and lightweight customizations.</p>
                        <p><em>Technologies:</em> Shopify, Flutterwave</p>
                    </div>
                </div>

                <div className="resume-section">
                    <h2>EXPERIENCE</h2>
                    
                    <div className="resume-item">
                        <div className="resume-item-header">
                            <strong>Underwriting Assistant</strong>
                            <span>May 2024 – Present</span>
                        </div>
                        <p>ZSIC General Insurance — Chililabombwe</p>
                        <ul>
                            <li>Streamlining insurance data workflows, organizing policy data, and shipping automation scripts to reduce manual overhead</li>
                        </ul>
                    </div>

                    <div className="resume-item">
                        <div className="resume-item-header">
                            <strong>STEM & Robotics Contributor</strong>
                            <span>Ongoing</span>
                        </div>
                        <p>Zambia Robotics</p>
                        <ul>
                            <li>Designing programming challenges, mentoring teams, and coordinating sponsors to grow competitive robotics in Zambia</li>
                        </ul>
                    </div>
                </div>
            </div>

            <footer className="site-footer">
                <p>Currently building from Chililabombwe, Zambia · {new Date().getFullYear()}</p>
                <div className="footer-links">
                    <a href="https://github.com/ephraimm-zm" target="_blank" rel="noreferrer">GitHub</a>
                    <a href="mailto:e.mulilo1@alustudent.com">Email</a>
                </div>
            </footer>
        </div>
    );
};

export default Layout;