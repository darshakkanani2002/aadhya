import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);
    useEffect(() => {
        // Update the active link when the location changes
        setActiveLink(location.pathname);
    }, [location.pathname]);

    // Function to check if the active link is a service route
    const isServiceActive = () => {
        return ['/app', '/game', '/web'].includes(activeLink);
    };
    return (
        <div>
            <div className='hero-bg-banner'>
                <nav className="navbar navigation_bar navbar-expand-lg">
                    <div className="container">
                        <div className="">
                            <a className="navbar-brand py-0" href="index.html">
                                <img src="images/logo-updated.png" className="logo img-fluid"
                                    alt="logo" />
                            </a>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarNav"
                            aria-controls="navbarNav">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="offcanvas offcanvas-start" tabIndex="-1" id="navbarNav" aria-labelledby="navbarNavLabel">
                            <div className="offcanvas-header justify-content-end">
                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav m-auto mb-2 mt-0 mb-lg-0">
                                    <li className="nav-item d-flex align-items-center">
                                        <Link to='/' className={`nav-link ${activeLink === '/' ? 'active' : ''}`} onClick={() => setActiveLink('/')} aria-current="page" data-section="home">Home</Link>
                                    </li>
                                    <li className="nav-item dropdown d-flex align-items-center">
                                        <Link className={`nav-link ${isServiceActive() ? 'active' : ''}`} id="servicesDropdown" role="button" aria-expanded="false">
                                            Services
                                        </Link>
                                        <ul className="dropdown-menu nav-sub-menu py-0" aria-labelledby="servicesDropdown">
                                            <li><Link to='/app' className="dropdown-item" onClick={() => setActiveLink('/app')}>App Development</Link></li>
                                            <li><Link to='/game' className="dropdown-item" onClick={() => setActiveLink('/game')}>Game Development</Link></li>
                                            <li><Link to='/web' className="dropdown-item" onClick={() => setActiveLink('/web')}>Web Development</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown d-flex align-items-center">
                                        <Link to='/technology' className={`nav-link ${activeLink === '/technology' ? 'active' : ''}`} onClick={() => setActiveLink('/technology')} >Technologies</Link>
                                    </li>
                                    <li className="nav-item d-flex align-items-center">
                                        <Link to='/portfolio' className={`nav-link ${activeLink === '/portfolio' ? 'active' : ''}`} onClick={() => setActiveLink('/portfolio')} data-section="blog">Portfolio</Link>
                                    </li>
                                    <li className="nav-item d-flex align-items-center">
                                        <Link to='/contact' className={`nav-link text-nowrap ${activeLink === '/contact' ? 'active' : ''}`} onClick={() => setActiveLink('/contact')} data-section="contact">Contact Us</Link>
                                    </li>
                                </ul>
                                <div className="p-1 nav-contact-button mt-3 mt-lg-0" role="search">
                                    <div><a href="#"><button className="nav-bar-contact-btn text-nowrap">Schedule a Call</button></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}
