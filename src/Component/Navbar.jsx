import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    useEffect(() => {
        // Update the active link when the location changes
        setActiveLink(location.pathname);
        // Scroll to the top when the active link changes without using window.scrollTo
        const mainSection = document.getElementById('main-section');
        if (mainSection) {
            mainSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [location.pathname]);

    // Function to check if the active link is a service route
    const isServiceActive = () => {
        return ['/app', '/game', '/web'].includes(activeLink);
    };

    // Function to handle click and close the offcanvas on medium screens
    const handleLinkClick = (path) => {
        setActiveLink(path);
        if (path === location.pathname) {
            window.location.reload();
        }

        // Close the offcanvas manually
        const offcanvasElement = document.querySelector('.offcanvas');
        if (offcanvasElement) {
            offcanvasElement.classList.remove('show');
            document.body.classList.remove('offcanvas-backdrop');
            document.body.style.overflow = '';  // Remove the no-scroll class Bootstrap adds
            document.body.style.opacity = '';
        }
    };
    return (
        <div>
            <div className='hero-bg-banner'>
                <nav className="navbar navigation_bar navbar-expand-lg">
                    <div className="container">
                        <div className="">
                            <Link to='/' className="navbar-brand py-0">
                                <img src="images/logo-updated.png" className="logo img-fluid" alt="logo" />
                            </Link>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarNav" aria-controls="navbarNav">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="offcanvas offcanvas-start" tabIndex="-1" id="navbarNav" aria-labelledby="navbarNavLabel">
                            <div className="offcanvas-header justify-content-end">
                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav m-auto mb-2 mt-0 mb-lg-0">
                                    <li className="nav-item d-flex align-items-center">
                                        <Link to='/' className={`nav-link px-4 ${activeLink === '/' ? 'active' : ''}`} onClick={() => handleLinkClick('/')} aria-current="page" data-section="home">Home</Link>
                                    </li>
                                    <li className="nav-item dropdown d-flex align-items-center">
                                        <Link to='/' className={`nav-link px-4 ${isServiceActive() ? 'active' : ''}`} onClick={() => handleLinkClick('/service')} id="servicesDropdown" role="button" aria-expanded="false">
                                            Services
                                        </Link>
                                        <ul className="dropdown-menu nav-sub-menu py-0" aria-labelledby="servicesDropdown">
                                            <li className='my-2'>
                                                <Link to='/web' className="dropdown-item d-flex align-items-center" onClick={() => handleLinkClick('/web')}>
                                                    <div className='nav-submenu-icon'>
                                                        <img src='/images/nav-submenu-ic-website.svg' alt='nav-submenu-ic-website' className='img-fluid nav-submenu-game-ic'></img>
                                                    </div>
                                                    <div className='ms-2'>Web Development</div>
                                                </Link>
                                            </li>
                                            <li className='my-2'>
                                                <Link to='/game' className="dropdown-item d-flex align-items-center" onClick={() => handleLinkClick('/game')}>
                                                    <div className='nav-submenu-icon'>
                                                        <img src='/images/nav-submenu-ic-game.svg' alt='nav-submenu-ic-game' className='img-fluid nav-submenu-game-ic'></img>
                                                    </div>
                                                    <div className='ms-2'>Game Development</div>
                                                </Link>
                                            </li>
                                            <li className='my-2'>
                                                <Link to='/app' className="dropdown-item d-flex align-items-center" onClick={() => handleLinkClick('/app')}>
                                                    <div className='nav-submenu-icon'>
                                                        <img src='/images/nav-submenu-ic-app.svg' alt='nav-submenu-ic-app' className='img-fluid nav-submenu-game-ic'></img>
                                                    </div>
                                                    <div className='ms-2'>App Development</div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown d-flex align-items-center">
                                        <Link to='/technology' className={`nav-link px-4 ${activeLink === '/technology' ? 'active' : ''}`} onClick={() => handleLinkClick('/technology')} >Technologies</Link>
                                    </li>
                                    <li className="nav-item d-flex align-items-center">
                                        <Link to='/' className={`nav-link px-4 ${activeLink === '/company' ? 'active' : ''}`} onClick={() => handleLinkClick('/company')} data-section="contact">Company</Link>
                                    </li>
                                    <li className="nav-item d-flex align-items-center">
                                        <Link to='/' className={`nav-link px-4 ${activeLink === '/portfolio' ? 'active' : ''}`} onClick={() => handleLinkClick('/portfolio')} data-section="blog">Portfolio</Link>
                                    </li>
                                </ul>
                                <div className="p-1 nav-contact-button mt-3 mt-lg-0" role="search">
                                    <div><Link to='/contact'><button className="nav-bar-contact-btn text-nowrap">Contact Us</button></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}
