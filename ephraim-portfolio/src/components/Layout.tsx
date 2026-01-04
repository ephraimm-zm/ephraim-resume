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