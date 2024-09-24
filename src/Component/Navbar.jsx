import React, { useState } from 'react';
import Home from './Pages/Home/Home';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);
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
                                        <Link to='/app' className={`nav-link ${activeLink === '/app' ? 'active' : ''}`} onClick={() => setActiveLink('/app')} id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Services
                                        </Link>
                                        <ul className="dropdown-menu nav-sub-menu py-0" aria-labelledby="servicesDropdown">
                                            <li><Link to='/app' className="dropdown-item">App Development</Link></li>
                                            <li><Link className="dropdown-item" href="#">Game Development</Link></li>
                                            <li><Link className="dropdown-item" href="#">Web Development</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown d-flex align-items-center">
                                        <a className="nav-link" href="projects.html" data-section="project" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
                                        <ul className="dropdown-menu nav-sub-menu py-0" aria-labelledby="servicesDropdown">
                                            <li><a className="dropdown-item" href="#">Page Style 01</a></li>
                                            <li><a className="dropdown-item" href="#">Page Style 02</a></li>
                                            <li><a className="dropdown-item" href="#">Page Style 03</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item d-flex align-items-center">
                                        <a className="nav-link" href="blog.html" data-section="blog">Portfolio</a>
                                    </li>
                                    <li className="nav-item d-flex align-items-center">
                                        <a className="nav-link text-nowrap" href="./contact.html" data-section="contact">Contact Us</a>
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
