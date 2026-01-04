import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="shell">
            <div className="grid-overlay" aria-hidden="true" />
            <header className="site-header">
                <div className="brand">
                    <span className="brand__dot" />
                    <div>
                        <p className="brand__eyebrow">Ephraim Mulilo</p>
                        <p className="brand__title">Software Developer</p>
                    </div>
                </div>
                <nav className="site-nav">
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#education">Education</a>
                    <a href="#experience">Experience</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>

            <main>{children}</main>

            <footer className="site-footer">
                <p>Currently building from Chililabombwe, Zambia · {new Date().getFullYear()}</p>
                <div className="footer-links">
                    <a href="https://github.com/ephraimm-zm" target="_blank" rel="noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/ephraim-mulilo/" target="_blank" rel="noreferrer">LinkedIn</a>
                    <a href="mailto:e.mulilo1@alustudent.com">Email</a>
                </div>
            </footer>
        </div>
    );
};

export default Layout;