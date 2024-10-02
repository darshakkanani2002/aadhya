import React, { useEffect, useRef, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import About_Us from './About_Us';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

export default function Home() {
    const [countStarted, setCountStarted] = useState
        (false);
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger the animation only once
        threshold: 0.3, // Trigger when 30% of the component is in view
        onChange: (inView) => {
            if (inView) {
                setCountStarted(true);
            }
        }
    });
    const bannerImgRef = useRef(null);

    useEffect(() => {
        AOS.init({
            duration: 1000, // duration of the animations (default: 1000ms)
            once: true, // whether animation should happen only once - while scrolling down
        });
    }, []);

    const handleMouseMove = (e) => {
        const bannerImg = bannerImgRef.current;
        const { left, top, width, height } = bannerImg.getBoundingClientRect();
        const xPos = (e.clientX - left) / width;
        const yPos = (e.clientY - top) / height;

        const moveX = (xPos - 0.5) * 30; // Adjust the multiplier for more or less movement
        const moveY = (yPos - 0.5) * 30;

        bannerImg.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.02)`;
    };

    const handleMouseLeave = () => {
        const bannerImg = bannerImgRef.current;
        bannerImg.style.transform = 'translate(0px, 0px) scale(1)';
    };
    return (
        <div>
            {/* hero section */}
            <div className='hero-section' id='main-section'>
                {/* animation section */}
                <div className="elementor-widget-container">
                    <div className="text-slider-section">
                        <div className="marquee">
                            <div className="marquee__group">
                                <span>Welcome to Aadhya Infotech
                                </span>
                                <span>EMAIL MARKETING
                                </span>
                                <span> DIGITAL STUDIO
                                </span>
                                <span>UI/UX DESIGN
                                </span>
                                <span>EMAIL MARKETING
                                </span>
                                <span>DIGITAL STUDIO
                                </span>
                            </div>
                            <div className="marquee__group">
                                <span>Welcome to Aadhya Infotech
                                </span>
                                <span>EMAIL MARKETING </span>
                                <span>DIGITAL STUDIO
                                </span>
                                <span>UI/UX DESIGN
                                </span>
                                <span>EMAIL MARKETING
                                </span>
                                <span>DIGITAL STUDIO
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-xl container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6 d-block align-items-center position-relative z-3'>
                            <div className='banner-content-wrap'>
                                <h1 className="text-animation2">We Craft <span>Software </span> Masterpieces.</h1>
                                <div className='hero-banner-review-text  d-lg-block d-md-flex d-flex justify-content-lg-start justify-content-md-center justify-content-center'>
                                    <p style={{ perspective: "400px" }} data-aos="fade-up" className='text-lg-start text-md-center text-center'>
                                        This Is a Company That Provides Services Related to Online Marketing, Web Development, Design, and Other Digital Solutions to Clients.
                                    </p>
                                </div>
                                <div className='banner-content d-lg-flex d-md-block d-block'>
                                    <div className='vector-and-review  text-animation d-lg-block d-md-flex d-flex justify-content-lg-start justify-content-md-center justify-content-center'>
                                        <div>
                                        </div>
                                    </div>
                                    <div className="content-and-btn text-animation" style={{ perspective: "400px" }}>
                                        <div className='hero-banner-review-text  d-lg-block d-md-flex d-flex justify-content-lg-start justify-content-md-center justify-content-center'>
                                            <div className="banner-btn">
                                                <a className='hero-button-hover text-decoration-none' href="http://+990737621432" target="_blank" rel="nofollow">
                                                    <span className="content">Let's Get Connect</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='logo-video-section'>
                                <video src="/images/logo website video.mp4" autoPlay muted loop className='log-video'></video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row' ref={ref}>
                    <div className='col-lg-12'>
                        <div className='home-ratting'>
                            <div className='row'>
                                <div className='col-lg-2 col-md-6 col-sm-6 col-12 text-center px-lg-0'>
                                    <div className='home-ratting-content'>
                                        <p className='mb-0'>Clients</p>
                                        {countStarted ? <CountUp className='home-counter-number' end={35} duration={3} delay={0.5} /> : 0}
                                        <span className='text-dark'>+</span>
                                    </div>
                                </div>
                                <div className='col-lg-2 col-md-6 col-sm-6 col-12 text-center px-lg-0'>
                                    <div className='home-ratting-content'>
                                        <p className='mb-0'>Experts</p>
                                        {countStarted ? <CountUp className='home-counter-number' end={15} duration={3} delay={0.5} /> : 0}
                                        <span className='text-dark'>+</span>
                                    </div>
                                </div>
                                <div className='col-lg-2 col-md-6 col-sm-6 col-12 text-center px-lg-0'>
                                    <div className='home-ratting-content'>
                                        <p className='mb-0'>Projects Delivered</p>
                                        {countStarted ? <CountUp className='home-counter-number' end={145} duration={3} delay={0.5} /> : 0}
                                        <span className='text-dark'>+</span>
                                    </div>
                                </div>

                                <div className='col-lg-3 col-md-6 col-sm-6 col-12 text-center px-lg-0'>
                                    <div className='home-ratting-content'>
                                        <p className='mb-0'>Service Satisfaction Guarentee.</p>
                                        {countStarted ? <CountUp className='home-counter-number' end={100} duration={3} delay={0.5} /> : 0}
                                        <span className='text-dark'>%</span>
                                    </div>
                                </div>
                                <div className='col-lg-3 col-md-6 col-sm-6 col-12 text-center px-lg-0'>
                                    <div className='home-ratting-last-content'>
                                        <p className='mb-0'>Highly Accredited Security</p>
                                        {countStarted ? <CountUp className='home-counter-number' end={145} duration={3} delay={0.5} /> : 0}
                                        <span className='text-dark'>%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <About_Us></About_Us>
        </div>
    )
}
