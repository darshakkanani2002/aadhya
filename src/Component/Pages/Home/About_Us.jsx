import React, { useEffect, useRef, useState } from 'react'
import Testimonial from './Testimonial'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import Project from './Project';
import Our_solution from './Our_solution';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Our_Service from './Our_Service';
import { Link } from 'react-router-dom';

export default function About_Us() {
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

    useEffect(() => {
        AOS.init({
            duration: 2000, // duration of the animations (default: 1000ms)
            once: true, // whether animation should happen only once - while scrolling down
        });
    }, []);

    // for images magnetic
    const bannerImgRef = useRef(null);
    const handleMouseMove = (e) => {
        const bannerImg = bannerImgRef.current;
        const { left, top, width, height } = bannerImg.getBoundingClientRect();
        const xPos = (e.clientX - left) / width;
        const yPos = (e.clientY - top) / height;

        const moveX = (xPos - 0.5) * 30; // Adjust the multiplier for more or less movement
        const moveY = (yPos - 0.5) * 30;

        bannerImg.style.transform = `translate(${moveX}px, ${moveY}px) scale(1)`;
    };

    const handleMouseLeave = () => {
        const bannerImg = bannerImgRef.current;
        bannerImg.style.transform = 'translate(0px, 0px) scale(1)';
    };

    const bannerImgRef02 = useRef(null);
    const handleMouseMove02 = (e) => {
        const bannerImg = bannerImgRef02.current;
        const { left, top, width, height } = bannerImg.getBoundingClientRect();
        const xPos = (e.clientX - left) / width;
        const yPos = (e.clientY - top) / height;

        const moveX = (xPos - 0.5) * 30; // Adjust the multiplier for more or less movement
        const moveY = (yPos - 0.5) * 30;

        bannerImg.style.transform = `translate(${moveX}px, ${moveY}px) scale(1)`;
    };

    const handleMouseLeave02 = () => {
        const bannerImg = bannerImgRef02.current;
        bannerImg.style.transform = 'translate(0px, 0px) scale(1)';
    };

    return (
        <div >
            {/* About Our Comppany section */}
            <div className='about-us-back'>
                <div className='container about-our-company-sec'>
                    <div className='mb-5 overflow-hidden'>
                        <div className="three text-animation row align-items-center">
                            <div className='col-lg-6'>
                                <div className='about-our-comapny-content'>
                                    <div>
                                        <h2>ABOUT OUR COMPANY</h2>
                                        <h6>A software company specializes in the design, development, and distribution of software products and services.</h6>
                                        <p>A software company is a business entity that specializes in the development, maintenance, and distribution of software products and services. These companies create applications, systems, and solutions that address various needs across different industries, leveraging technology to solve problems, enhance productivity, and drive innovation.</p>
                                    </div>
                                    <button className='about-more-btn'><Link>More</Link></button>
                                </div>
                            </div>
                            <div className='col-lg-6 mt-lg-0 mt-md-5 mt-5'>
                                <div>
                                    <img src="/images/about-img-01.png" alt="about-img-01" className='img-fluid' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container my-5 d-none'>
                <div>
                    <div className='text-center'>
                        <button className='about-us-heading-button mb-2'>Why Aadhya</button>
                        <div className='container'>
                            <div className='d-flex justify-content-center gap-2'>
                                <img src="/images/why-section-border-img-01.png" alt="why-section-border-img-01" className='mb-2 d-lg-block d-md-none d-none img-fluid' />
                                <img src="/images/why-section-border-img-02.png" alt="why-section-border-img-02" className='mb-2 d-lg-block d-md-none d-none img-fluid' />
                                <img src="/images/why-section-border-img-03.png" alt="why-section-border-img-03" className='mb-2 d-lg-block d-md-none d-none img-fluid' />
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-lg-4 mt-lg-0 mt-md-3 mt-3'>
                            <div>
                                <div className='why-choose-us-01'>
                                    <div className='why-choose-img-back-01'>
                                        <img src="/images/why-img-innovations.gif" alt="why-img-innovations" className='why-choose-img' />
                                    </div>
                                    <div class="service-text mt-5">
                                        <h4>Innovation</h4>
                                        <p class="mt-3 sm-mt-4 ">We believe in innovating and meeting customer needs in every project. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 mt-lg-0 mt-md-3 mt-3'>
                            <div>
                                <div className='why-choose-us-02'>
                                    <div className='why-choose-img-back-02'>
                                        <img src="/images/why-img-quality-focused.gif" alt="why-img-quality-focused" className='why-choose-img' />
                                    </div>
                                    <div class="service-text mt-5">
                                        <h4>Innovation</h4>
                                        <p class="mt-3 sm-mt-4 ">We believe in innovating and meeting customer needs in every project. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 mt-lg-0 mt-md-3 mt-3'>
                            <div>
                                <div className='why-choose-us-03'>
                                    <div className='why-choose-img-back-03'>
                                        <img src="/images/why-img-value-for-money.gif" alt="why-img-value-for-money" className='why-choose-img' />
                                    </div>
                                    <div class="service-text mt-5">
                                        <h4>Innovation</h4>
                                        <p class="mt-3 sm-mt-4 ">We believe in innovating and meeting customer needs in every project. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* To Provide Smart Solution */}
            <div className='our-service-section py-5'>
                <Our_Service></Our_Service>
            </div>


            {/* Exper and projects */}
            <Project></Project>

            {/* inovative idea section */}
            <div className='d-none'>
                <div className='innovativ-banner'>
                    <div className='container-lg container-fluid'>
                        <div className='row overflow-hidden'>
                            <div className='col-lg-12' data-aos="flip-up">
                                <div className='innovative-text-sec'>
                                    <div className='innovative-style'>
                                        <h6 className='d-flex align-items-center mb-4'>
                                            <div></div>
                                            <span className='ps-3 text-white h5 mb-0'>
                                                Innovative Idea
                                            </span>
                                        </h6>

                                        <h2 className='text-white innovative-big-text mb-0'>
                                            “ Drawing on the technical expertise of IT professionals to assess and address complex technical.”
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='container-lg container-fluids'>
                        <div className='row'>
                            <div className='col-lg-12' data-aos="fade-down">
                                <div className='text-lg-end text-md-center text-center innovative-clitch-img d-lg-block d-md-block d-none'>
                                    <img src="/images/clitch-big-img.png" alt="clitch-big-img" className='img-fluid innovative-clitch-image' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Solution Process Section  */}
            <Our_solution></Our_solution>

            {/* Portfolio Section */}
            <div>
                <div>
                    <div className="home2-portfolio-section">
                        <div className='container'>
                            <div className="section-title three text-animation row">
                                <div className='about-our-company col-lg-12 our-solution-style-1 text-center mb-5'>
                                    <h2 className='text-lg-start text-md-center text-center new-work-text heading-text-before'>Project Showcase</h2>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-12'>
                                    <ul className="nav nav-pills mb-3 d-flex justify-content-center gap-5" id="pills-tab" role="tablist">
                                        <div className='d-flex flex-wrap gap-5 work-navigation-ul align-items-center justify-content-center'>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">App Development</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Game Development</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Website Development</button>
                                            </li>
                                            <li className="nav-item d-none" role="presentation">
                                                <button className="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false">Ui/Ux Design</button>
                                            </li>
                                        </div>
                                    </ul>
                                    <div className="tab-content" id="pills-tabContent">
                                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
                                            <div className='container'>
                                                <div className='row justify-content-center'>
                                                    <div className='col-lg-4 col-md-6 col-sm-6 col-12 mt-4'>
                                                        <a href="#">
                                                            <div className='position-relative wok-img-div mb-3'>
                                                                <img src="/images/app-project-img-01.svg" alt="app-project-img-01" className='img-fluid w-100' />
                                                                <div className='work-name-text-img'>
                                                                    <h5 className='mb-0'>What's app status saver</h5>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div className='project-content text-center'>
                                                            <div>
                                                                <h5 className='fw-bold'>What's app status saver <br className='d-lg-block d-md-none d-none'></br> Application</h5>
                                                                <p >App Designing</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-4 col-md-6 col-sm-6 col-12 mt-4'>
                                                        <a href="#">
                                                            <div className='position-relative wok-img-div mb-3'>
                                                                <img src="/images/app-project-img-02.svg" alt="app-project-img-02" className='img-fluid w-100' />
                                                                <div className='work-name-text-img'>
                                                                    <h5 className='mb-0'>Daily Quotes</h5>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div className='project-content text-center'>
                                                            <div>
                                                                <h5 className='fw-bold'>Daily Quotes
                                                                    <br className='d-lg-block d-md-none d-none'></br>Application</h5>
                                                                <p >App Designing</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-4 col-md-6 col-sm-6 col-12 mt-4'>
                                                        <a href="#">
                                                            <div className='position-relative wok-img-div mb-3'>
                                                                <img src="/images/app-project-img-03.svg" alt="app-project-img-03" className='img-fluid w-100' />
                                                                <div className='work-name-text-img'>
                                                                    <h5 className='mb-0'>Calculator</h5>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div className='project-content text-center'>
                                                            <div>
                                                                <h5 className='fw-bold'>Calculator- Tape to Calculate Application</h5>
                                                                <p >App Designing</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
                                            <div className='container'>
                                                <div className='row'>
                                                    <div className='col-lg-4 col-md-6 col-sm-6 col-12 mt-4' data-aos="zoom-in" data-aos-delay="500">
                                                        <a href="#">
                                                            <div className='position-relative wok-img-div'>
                                                                <img src="/images/work-game-img-01.webp" alt="work-game-img-01" className='img-fluid rounded-4' />
                                                                <div className='work-name-text-img'>
                                                                    <h5 className='mb-0'>ACCUBOW</h5>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className='col-lg-4 col-md-6 col-sm-6 col-12 mt-4' data-aos="zoom-in" data-aos-delay="500">
                                                        <a href="#">
                                                            <div className='position-relative wok-img-div'>
                                                                <img src="/images/work-game-img-02.webp" alt="work-game-img-02" className='img-fluid' />
                                                                <div className='work-name-text-img'>
                                                                    <h5 className='mb-0'>Zombie Shooter</h5>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className='col-lg-4 col-md-6 col-sm-6 col-12 mt-4' data-aos="zoom-in" data-aos-delay="500">
                                                        <a href="#">
                                                            <div className='position-relative wok-img-div'>
                                                                <img src="/images/work-game-img-03.webp" alt="work-game-img-03" className='img-fluid' />
                                                                <div className='work-name-text-img'>
                                                                    <h5 className='mb-0'>Traffic Rider</h5>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex="0">
                                            <div className='container'>
                                                <div className='row'>
                                                    <div className='col-lg-4 col-md-6 col-sm-6 col-12 mt-4' data-aos="zoom-in" data-aos-delay="500">
                                                        <a href="https://shop-gift.netlify.app" target='_blank'>
                                                            <div className='position-relative wok-img-div'>
                                                                <img src="/images/work-web-img-01.jpg" alt="work-web-img-01" className='img-fluid rounded-4' />
                                                                <div className='work-name-text-img'>
                                                                    <h5 className='mb-0'>Gift Shop</h5>
                                                                </div>
                                                            </div>
                                                            <div className="image-wrap d-none">
                                                                <a href="https://rahmanzeb.com">
                                                                    <img src="/images/Jewelry Landing Page.png" />
                                                                </a>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className='col-lg-4 col-md-6 col-sm-6 col-12 mt-4' data-aos="zoom-in" data-aos-delay="500">
                                                        <a href="https://vedartharchitech.netlify.app" target='_blank'>
                                                            <div className='position-relative wok-img-div'>
                                                                <img src="/images/work-web-img-02.jpg" alt="work-web-img-02" className='img-fluid rounded-4' />
                                                                <div className='work-name-text-img'>
                                                                    <h5 className='mb-0'>Vedarch Design</h5>
                                                                </div>
                                                            </div>

                                                        </a>
                                                    </div>
                                                    <div className='col-lg-4 col-md-6 col-sm-6 col-12 mt-4' data-aos="zoom-in" data-aos-delay="500">
                                                        <a href="https://effulgent-bonbon-a558df.netlify.app" target='_blank'>
                                                            <div className='position-relative wok-img-div'>
                                                                <img src="/images/work-web-img-03.jpg" alt="work-web-img-03" className='img-fluid rounded-4' />
                                                                <div className='work-name-text-img'>
                                                                    <h5 className='mb-0'>Asal Masala</h5>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabIndex="0">
                                            <div className='row'>
                                                <div className='col-lg-4 col-md-6 col-sm-6 col-12 mt-4' data-aos="zoom-in" data-aos-delay="500">
                                                    <a href="#">
                                                        <div className='position-relative wok-img-div'>
                                                            <img src="/images/work-ui-img-04.jpg" alt="work-ui-img-04" className='img-fluid rounded-4 work-ui-images' />
                                                            <div className='work-name-text-img'>
                                                                <h5 className='mb-0'>Ui/UX Design</h5>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className='col-lg-4 col-md-6 col-sm-6 col-12 mt-4' data-aos="zoom-in" data-aos-delay="500">
                                                    <a href="#">
                                                        <div className='position-relative wok-img-div'>
                                                            <img src="/images/work-ui-img-02.jpg" alt="work-ui-img-02   " className='img-fluid rounded-4 work-ui-images' />
                                                            <div className='work-name-text-img'>
                                                                <h5 className='mb-0'>Weather Ui/UX Design</h5>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className='col-lg-4 col-md-6 col-sm-6 col-12 mt-4' data-aos="zoom-in" data-aos-delay="500">
                                                    <a href="#">
                                                        <div className='position-relative wok-img-div'>
                                                            <img src="/images/work-ui-img-03.jpg" alt="work-ui-img-03" className='img-fluid rounded-4 work-ui-images' />
                                                            <div className='work-name-text-img'>
                                                                <h5 className='mb-0'>Car Wash Ui/UX Design</h5>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* We Used Technology Section */}
            <div>
                <div>
                    <div>
                        <div className="home2-portfolio-section">
                            <div className='container'>
                                <div className="section-title three text-animation row">
                                    <div className='about-our-company col-lg-12 our-solution-style-1 text-center mb-5'>
                                        <h2 className='text-lg-start text-md-center text-center new-work-text heading-text-before'>We Used Advance Technology</h2>
                                        <p className='fw-semibold mt-4'>Offer a wide range of services to help businesses establish and enhance <br className='d-lg-block d-md-none d-none' />
                                            their online presence.</p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12'>
                                        <ul className="nav nav-pills mb-3 d-flex justify-content-center gap-5" id="pills-tab" role="tablist">
                                            <div className='d-flex flex-wrap gap-5 work-navigation-ul align-items-center justify-content-center'>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link active px-4" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#tech-Front-End" type="button" role="tab" aria-controls="tech-Front-End" aria-selected="true">Front-End</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link px-4" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#tech-Back-End" type="button" role="tab" aria-controls="tech-Back-End" aria-selected="false">Back-End</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link px-4" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#tech-Mobile" type="button" role="tab" aria-controls="tech-Mobile" aria-selected="false">Mobile</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link px-4" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#tech-DevOps" type="button" role="tab" aria-controls="tech-DevOps" aria-selected="false">DevOps</button>
                                                </li>
                                            </div>
                                        </ul>
                                        <div className="tab-content" id="pills-tabContent">
                                            <div className="tab-pane fade show active" id="tech-Front-End" role="tabpanel" aria-labelledby="tech-Front-End-tab" tabIndex="0">
                                                <div className='container'>
                                                    <div className='w-100'>
                                                        <div className='d-flex flex-wrap'>
                                                            <div className='w-20 width-50 mt-3'>
                                                                <div className='mb-4 px-3'>
                                                                    <div className='technology-icon-back technology-hover text-center'>
                                                                        <div className="single-technology btn_wrapper big technology-content">
                                                                            <div className="icon">
                                                                                <img decoding="async" src="images/html.svg" alt="html" className='technology-icon img-fluid' />
                                                                            </div>
                                                                            <p className='mt-3 mb-0'>HTML</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='w-20 width-50 mt-3'>
                                                                <div className='mb-4 px-3'>
                                                                    <div className='technology-icon-back technology-hover text-center'>
                                                                        <div className="single-technology btn_wrapper big technology-content">
                                                                            <div className="icon">
                                                                                <img decoding="async" src="images/css.svg" alt="css" className='technology-icon img-fluid' />
                                                                            </div>
                                                                            <p className='mt-3 mb-0'>css</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='w-20 width-50 mt-3'>
                                                                <div className='mb-4 px-3'>
                                                                    <div className='technology-icon-back technology-hover text-center'>
                                                                        <div className="single-technology btn_wrapper big technology-content">
                                                                            <div className="icon">
                                                                                <img decoding="async" src="images/javascript.svg" alt="javascript" className='technology-icon img-fluid' />
                                                                            </div>
                                                                            <p className='mt-3 mb-0'>Javascript</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='w-20 width-50 mt-3'>
                                                                <div className='mb-4 px-3'>
                                                                    <div className='technology-icon-back technology-hover text-center'>
                                                                        <div className="single-technology btn_wrapper big technology-content">
                                                                            <div className="icon">
                                                                                <img decoding="async" src="images/vue.svg" alt="vue" className='technology-icon img-fluid' />
                                                                            </div>
                                                                            <p className='mt-3 mb-0'>Vue JS</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='w-20 width-50 mt-3'>
                                                                <div className='mb-4 px-3'>
                                                                    <div className='technology-icon-back technology-hover text-center'>
                                                                        <div className="single-technology btn_wrapper big technology-content">
                                                                            <div className="icon">
                                                                                <img decoding="async" src="images/react.svg" alt="react" className='technology-icon img-fluid' />
                                                                            </div>
                                                                            <p className='mt-3 mb-0'>React JS</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='w-20 width-50 mt-3'>
                                                                <div className='mb-4 px-3'>
                                                                    <div className='technology-icon-back technology-hover text-center'>
                                                                        <div className="single-technology btn_wrapper big technology-content">
                                                                            <div className="icon">
                                                                                <img decoding="async" src="images/angular.svg" alt="angular" className='technology-icon img-fluid' />
                                                                            </div>
                                                                            <p className='mt-3 mb-0'>Angular JS</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='w-20 width-50 mt-3'>
                                                                <div className='mb-4 px-3'>
                                                                    <div className='technology-icon-back technology-hover text-center'>
                                                                        <div className="single-technology btn_wrapper big technology-content">
                                                                            <div className="icon">
                                                                                <img decoding="async" src="images/d3.svg" alt="d3" className='technology-icon img-fluid' />
                                                                            </div>
                                                                            <p className='mt-3 mb-0'>D3 Js</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='w-20 width-50 mt-3'>
                                                                <div className='mb-4 px-3'>
                                                                    <div className='technology-icon-back technology-hover text-center'>
                                                                        <div className="single-technology btn_wrapper big technology-content">
                                                                            <div className="icon">
                                                                                <img decoding="async" src="images/jquery.svg" alt="jquery" className='technology-icon technology-jquery-img img-fluid' />
                                                                            </div>
                                                                            <p className='mt-3 mb-0'>JQuery</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='w-20 width-50 mt-3'>
                                                                <div className='mb-4 px-3'>
                                                                    <div className='technology-icon-back technology-hover text-center'>
                                                                        <div className="single-technology btn_wrapper big technology-content">
                                                                            <div className="icon">
                                                                                <img decoding="async" src="images/typescript.svg" alt="typescript" className='technology-icon img-fluid' />
                                                                            </div>
                                                                            <p className='mt-3 mb-0'>TypeScript</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='w-20 width-50 mt-3'>
                                                                <div className='mb-4 px-3'>
                                                                    <div className='technology-icon-back technology-hover text-center'>
                                                                        <div className="single-technology btn_wrapper big technology-content">
                                                                            <div className="icon">
                                                                                <img decoding="async" src="images/graphql.svg" alt="graphql" className='technology-icon img-fluid' />
                                                                            </div>
                                                                            <p className='mt-3 mb-0'>GraphQL</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="tech-Back-End" role="tabpanel" aria-labelledby="tech-Back-End-tab" tabIndex="0">
                                                <div className='container'>
                                                    <div className='w-100'>
                                                        <div className='d-flex flex-wrap justify-content-center'>
                                                            <div className='w-20 width-50 mt-3'>
                                                                <div className='mb-4 px-3'>
                                                                    <div className='technology-icon-back technology-hover text-center'>
                                                                        <div className="single-technology btn_wrapper big technology-content">
                                                                            <div className="icon">
                                                                                <img decoding="async" src="images/node-js.svg" alt="node-js" className='technology-icon img-fluid' />
                                                                            </div>
                                                                            <p className='mt-3 mb-0'>Node JS</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='w-20 width-50 mt-3'>
                                                                <div className='mb-4 px-3'>
                                                                    <div className='technology-icon-back technology-hover text-center'>
                                                                        <div className="single-technology btn_wrapper big technology-content">
                                                                            <div className="icon">
                                                                                <img decoding="async" src="images/ruby.svg" alt="ruby" className='technology-icon img-fluid' />
                                                                            </div>
                                                                            <p className='mt-3 mb-0'>Ruby</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='w-20 width-50 mt-3'>
                                                                <div className='mb-4 px-3'>
                                                                    <div className='technology-icon-back technology-hover text-center'>
                                                                        <div className="single-technology btn_wrapper big technology-content">
                                                                            <div className="icon">
                                                                                <img decoding="async" src="images/django.svg" alt="django" className='technology-icon img-fluid' />
                                                                            </div>
                                                                            <p className='mt-3 mb-0'>D Jnago</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='w-20 width-50 mt-3'>
                                                                <div className='mb-4 px-3'>
                                                                    <div className='technology-icon-back technology-hover text-center'>
                                                                        <div className="single-technology btn_wrapper big technology-content">
                                                                            <div className="icon">
                                                                                <img decoding="async" src="images/javascript.svg" alt="javascript" className='technology-icon img-fluid' />
                                                                            </div>
                                                                            <p className='mt-3 mb-0'>Express JS</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='w-20 width-50 mt-3'>
                                                                <div className='mb-4 px-3'>
                                                                    <div className='technology-icon-back technology-hover text-center'>
                                                                        <div className="single-technology btn_wrapper big technology-content">
                                                                            <div className="icon">
                                                                                <img decoding="async" src="images/asp.svg" alt="asp" className='technology-icon img-fluid' />
                                                                            </div>
                                                                            <p className='mt-3 mb-0'>ASP .Net</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='w-20 width-50 mt-3'>
                                                                <div className='mb-4 px-3'>
                                                                    <div className='technology-icon-back technology-hover text-center'>
                                                                        <div className="single-technology btn_wrapper big technology-content">
                                                                            <div className="icon">
                                                                                <img decoding="async" src="images/laravel.svg" alt="Laravel" className='technology-icon img-fluid' />
                                                                            </div>
                                                                            <p className='mt-3 mb-0'>Laravel</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='w-20 width-50 mt-3'>
                                                                <div className='mb-4 px-3'>
                                                                    <div className='technology-icon-back technology-hover text-center'>
                                                                        <div className="single-technology btn_wrapper big technology-content">
                                                                            <div className="icon">
                                                                                <img decoding="async" src="images/firebase.svg" alt="firebase" className='technology-icon img-fluid' />
                                                                            </div>
                                                                            <p className='mt-3 mb-0'>Firebase</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="tech-Mobile" role="tabpanel" aria-labelledby="tech-Mobile-tab" tabIndex="0">
                                                <div className='container'>
                                                    <div className='w-100'>
                                                        <div className='d-flex flex-wrap justify-content-center'>
                                                            <div className='w-20 width-50 mt-3'>
                                                                <div className='mb-4 px-3'>
                                                                    <div className='technology-icon-back technology-hover text-center'>
                                                                        <div className="single-technology btn_wrapper big technology-content">
                                                                            <div className="icon">
                                                                                <img decoding="async" src="images/flutter.svg" alt="flutter" className='technology-icon img-fluid' />
                                                                            </div>
                                                                            <p className='mt-3 mb-0'>Flutter</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='w-20 width-50 mt-3'>
                                                                <div className='mb-4 px-3'>
                                                                    <div className='technology-icon-back technology-hover text-center'>
                                                                        <div className="single-technology btn_wrapper big technology-content">
                                                                            <div className="icon">
                                                                                <img decoding="async" src="images/android.svg" alt="android" className='technology-icon img-fluid' />
                                                                            </div>
                                                                            <p className='mt-3 mb-0'>Android</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='w-20 width-50 mt-3'>
                                                                <div className='mb-4 px-3'>
                                                                    <div className='technology-icon-back technology-hover text-center'>
                                                                        <div className="single-technology btn_wrapper big technology-content">
                                                                            <div className="icon">
                                                                                <img decoding="async" src="images/ios.svg" alt="ios" className='technology-icon img-fluid' />
                                                                            </div>
                                                                            <p className='mt-3 mb-0'>Iso App</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='w-20 width-50 mt-3'>
                                                                <div className='mb-4 px-3'>
                                                                    <div className='technology-icon-back technology-hover text-center'>
                                                                        <div className="single-technology btn_wrapper big technology-content">
                                                                            <div className="icon">
                                                                                <img decoding="async" src="images/firebase.svg" alt="firebase" className='technology-icon img-fluid' />
                                                                            </div>
                                                                            <p className='mt-3 mb-0'>Firebase</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='w-20 width-50 mt-3'>
                                                                <div className='mb-4 px-3'>
                                                                    <div className='technology-icon-back technology-hover text-center'>
                                                                        <div className="single-technology btn_wrapper big technology-content">
                                                                            <div className="icon">
                                                                                <img decoding="async" src="images/react.svg" alt="react" className='technology-icon img-fluid' />
                                                                            </div>
                                                                            <p className='mt-3 mb-0'>React Native</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='w-20 width-50 mt-3'>
                                                                <div className='mb-4 px-3'>
                                                                    <div className='technology-icon-back technology-hover text-center'>
                                                                        <div className="single-technology btn_wrapper big technology-content">
                                                                            <div className="icon">
                                                                                <img decoding="async" src="images/swift.svg" alt="swift" className='technology-icon img-fluid' />
                                                                            </div>
                                                                            <p className='mt-3 mb-0'>Swift</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='w-20 width-50 mt-3'>
                                                                <div className='mb-4 px-3'>
                                                                    <div className='technology-icon-back technology-hover text-center'>
                                                                        <div className="single-technology btn_wrapper big technology-content">
                                                                            <div className="icon">
                                                                                <img decoding="async" src="images/java.svg" alt="java" className='technology-icon img-fluid' />
                                                                            </div>
                                                                            <p className='mt-3 mb-0'>Java</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='w-20 width-50 mt-3'>
                                                                <div className='mb-4 px-3'>
                                                                    <div className='technology-icon-back technology-hover text-center'>
                                                                        <div className="single-technology btn_wrapper big technology-content">
                                                                            <div className="icon">
                                                                                <img decoding="async" src="images/kotlin.svg" alt="Kotlin" className='technology-icon img-fluid' />
                                                                            </div>
                                                                            <p className='mt-3 mb-0'>Kotlin</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="tech-DevOps" role="tabpanel" aria-labelledby="tech-DevOps-tab" tabIndex="0">
                                                <div className='container'>
                                                    <div className='w-100'>
                                                        <div className='d-flex flex-wrap'>
                                                            <div className='w-20 width-50 mt-3'>
                                                                <div className='mb-4 px-3'>
                                                                    <div className='technology-icon-back technology-hover text-center'>
                                                                        <div className="single-technology btn_wrapper big technology-content">
                                                                            <div className="icon">
                                                                                <img decoding="async" src="images/html.svg" alt="html" className='technology-icon img-fluid' />
                                                                            </div>
                                                                            <p className='mt-3 mb-0'>HTML</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='w-20 width-50 mt-3'>
                                                                <div className='mb-4 px-3'>
                                                                    <div className='technology-icon-back technology-hover text-center'>
                                                                        <div className="single-technology btn_wrapper big technology-content">
                                                                            <div className="icon">
                                                                                <img decoding="async" src="images/css.svg" alt="css" className='technology-icon img-fluid' />
                                                                            </div>
                                                                            <p className='mt-3 mb-0'>css</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='w-20 width-50 mt-3'>
                                                                <div className='mb-4 px-3'>
                                                                    <div className='technology-icon-back technology-hover text-center'>
                                                                        <div className="single-technology btn_wrapper big technology-content">
                                                                            <div className="icon">
                                                                                <img decoding="async" src="images/javascript.svg" alt="javascript" className='technology-icon img-fluid' />
                                                                            </div>
                                                                            <p className='mt-3 mb-0'>Javascript</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='w-20 width-50 mt-3'>
                                                                <div className='mb-4 px-3'>
                                                                    <div className='technology-icon-back technology-hover text-center'>
                                                                        <div className="single-technology btn_wrapper big technology-content">
                                                                            <div className="icon">
                                                                                <img decoding="async" src="images/vue.svg" alt="vue" className='technology-icon img-fluid' />
                                                                            </div>
                                                                            <p className='mt-3 mb-0'>Vue JS</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='w-20 width-50 mt-3'>
                                                                <div className='mb-4 px-3'>
                                                                    <div className='technology-icon-back technology-hover text-center'>
                                                                        <div className="single-technology btn_wrapper big technology-content">
                                                                            <div className="icon">
                                                                                <img decoding="async" src="images/react.svg" alt="react" className='technology-icon img-fluid' />
                                                                            </div>
                                                                            <p className='mt-3 mb-0'>React JS</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='w-20 width-50 mt-3'>
                                                                <div className='mb-4 px-3'>
                                                                    <div className='technology-icon-back technology-hover text-center'>
                                                                        <div className="single-technology btn_wrapper big technology-content">
                                                                            <div className="icon">
                                                                                <img decoding="async" src="images/angular.svg" alt="angular" className='technology-icon img-fluid' />
                                                                            </div>
                                                                            <p className='mt-3 mb-0'>Angular JS</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='w-20 width-50 mt-3'>
                                                                <div className='mb-4 px-3'>
                                                                    <div className='technology-icon-back technology-hover text-center'>
                                                                        <div className="single-technology btn_wrapper big technology-content">
                                                                            <div className="icon">
                                                                                <img decoding="async" src="images/d3.svg" alt="d3" className='technology-icon img-fluid' />
                                                                            </div>
                                                                            <p className='mt-3 mb-0'>D3 Js</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='w-20 width-50 mt-3'>
                                                                <div className='mb-4 px-3'>
                                                                    <div className='technology-icon-back technology-hover text-center'>
                                                                        <div className="single-technology btn_wrapper big technology-content">
                                                                            <div className="icon">
                                                                                <img decoding="async" src="images/jquery.svg" alt="jquery" className='technology-icon technology-jquery-img img-fluid' />
                                                                            </div>
                                                                            <p className='mt-3 mb-0'>JQuery</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='w-20 width-50 mt-3'>
                                                                <div className='mb-4 px-3'>
                                                                    <div className='technology-icon-back technology-hover text-center'>
                                                                        <div className="single-technology btn_wrapper big technology-content">
                                                                            <div className="icon">
                                                                                <img decoding="async" src="images/typescript.svg" alt="typescript" className='technology-icon img-fluid' />
                                                                            </div>
                                                                            <p className='mt-3 mb-0'>TypeScript</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='w-20 width-50 mt-3'>
                                                                <div className='mb-4 px-3'>
                                                                    <div className='technology-icon-back technology-hover text-center'>
                                                                        <div className="single-technology btn_wrapper big technology-content">
                                                                            <div className="icon">
                                                                                <img decoding="async" src="images/graphql.svg" alt="graphql" className='technology-icon img-fluid' />
                                                                            </div>
                                                                            <p className='mt-3 mb-0'>GraphQL</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonial Section */}
            <Testimonial></Testimonial>

            {/* Partner Section */}
            <div className='d-none'>
                <div>
                    <div className="partner-area">
                        <div className="container-fluid py-5">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="partner-wrap">
                                        <div className="title1">
                                            <h6>Our Trusted Partner</h6>
                                        </div>
                                        <div className="marquee dark overflow-hidden py-5">
                                            <div className="marquee__group">
                                                <a href="#"><img decoding="async" src="images/partner-light-01.png" alt="Logo" /></a>
                                                <a href="#"><img decoding="async" src="images/partner-light-02.png" alt="Logo" /></a>
                                                <a href="#"><img decoding="async" src="images/partner-light-03.png" alt="Logo" /></a>
                                                <a href="#"><img decoding="async" src="images/partner-light-04.png" alt="Logo" /></a>
                                                <a href="#"><img decoding="async" src="images/partner-light-05.png" alt="Logo" /></a>
                                                <a href="#"><img decoding="async" src="images/partner-06.png" alt="Logo" /></a>
                                            </div>
                                            <div aria-hidden="true" className="marquee__group">
                                                <a href="#"> <img decoding="async" src="images/partner-light-01.png" alt="Logo" /></a>
                                                <a href="#"> <img decoding="async" src="images/partner-light-02.png" alt="Logo" /></a>
                                                <a href="#"> <img decoding="async" src="images/partner-light-03.png" alt="Logo" /></a>
                                                <a href="#"> <img decoding="async" src="images/partner-light-04.png" alt="Logo" /></a>
                                                <a href="#"> <img decoding="async" src="images/partner-light-05.png" alt="Logo" /></a>
                                                <a href="#"> <img decoding="async" src="images/partner-light-06.png" alt="Logo" /></a>
                                            </div>
                                        </div>
                                        <div className="title2">
                                            <h6>Almost 20+ Partner we have</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Latest Blog Section */}
            <div className=''>
                <div className="home2-blog-sec">
                    <div className="container-lg container-fluid">
                        <div className="row mb-60">
                            <div className="section-title four white text-animation vector-and-review">
                                <div className='techno-stlye-1'>
                                    <h2 className='testimonial-before'>Latest  <span className='text-start'>Post</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="home2-blog-section">
                        <div className="container-lg container-fluid">
                            <div className="row g-4">
                                <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="500">
                                    <div className="magnetic-wrap"><div className="blog-card2 magnetic-item">
                                        <a href="3" className="blog-img">
                                            <img loading="lazy" decoding="async" width="600" height="400" src="images/blog-st-img12-600x400.webp" className="attachment-blog-grid-thumb size-blog-grid-thumb wp-post-image img-fluid w-100 blog-img" alt="" /> </a>
                                        <div className="blog-content">
                                            <ul className="tags">
                                                <li>
                                                    <a href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                                                            <path d="M7.58455 3.09152C7.58455 3.4429 7.72414 3.7799 7.9726 4.02837C8.22107 4.27684 8.55807 4.41643 8.90946 4.41643C9.26085 4.41643 9.59785 4.27684 9.84632 4.02837C10.0948 3.7799 10.2344 3.4429 10.2344 3.09152C10.2344 2.74013 10.0948 2.40313 9.84632 2.15466C9.59785 1.90619 9.26085 1.7666 8.90946 1.7666C8.55807 1.7666 8.22107 1.90619 7.9726 2.15466C7.72414 2.40313 7.58455 2.74013 7.58455 3.09152ZM8.46782 3.09152C8.46782 2.97439 8.51435 2.86205 8.59718 2.77923C8.68 2.69641 8.79233 2.64988 8.90946 2.64988C9.02659 2.64988 9.13892 2.69641 9.22175 2.77923C9.30457 2.86205 9.3511 2.97439 9.3511 3.09152C9.3511 3.20865 9.30457 3.32098 9.22175 3.4038C9.13892 3.48662 9.02659 3.53315 8.90946 3.53315C8.79233 3.53315 8.68 3.48662 8.59718 3.4038C8.51435 3.32098 8.46782 3.20865 8.46782 3.09152Z">
                                                            </path>
                                                            <path d="M11.1167 0H7.06602C6.83178 5.00265e-05 6.60715 0.093142 6.44154 0.2588L0.258612 6.44173C0.0930223 6.60737 0 6.832 0 7.06621C0 7.30042 0.0930223 7.52505 0.258612 7.69068L4.30932 11.7414C4.47495 11.907 4.69958 12 4.93379 12C5.168 12 5.39263 11.907 5.55827 11.7414L11.7412 5.55846C11.9069 5.39285 11.9999 5.16822 12 4.93398V0.883276C12 0.649017 11.9069 0.424352 11.7413 0.258706C11.5756 0.0930591 11.351 0 11.1167 0ZM11.1167 4.93398L4.93379 11.1169L0.883087 7.06621L7.06602 0.883276H11.1167V4.93398Z">
                                                            </path>
                                                        </svg> Innovative </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                                                            <g>
                                                                <path d="M6 5.25C6.09946 5.25 6.19484 5.28951 6.26517 5.35984C6.33549 5.43016 6.375 5.52554 6.375 5.625V6.75H7.5C7.59946 6.75 7.69484 6.78951 7.76517 6.85983C7.83549 6.93016 7.875 7.02554 7.875 7.125C7.875 7.22446 7.83549 7.31984 7.76517 7.39017C7.69484 7.46049 7.59946 7.5 7.5 7.5H6.375V8.625C6.375 8.72446 6.33549 8.81984 6.26517 8.89017C6.19484 8.96049 6.09946 9 6 9C5.90054 9 5.80516 8.96049 5.73484 8.89017C5.66451 8.81984 5.625 8.72446 5.625 8.625V7.5H4.5C4.40054 7.5 4.30516 7.46049 4.23484 7.39017C4.16451 7.31984 4.125 7.22446 4.125 7.125C4.125 7.02554 4.16451 6.93016 4.23484 6.85983C4.30516 6.78951 4.40054 6.75 4.5 6.75H5.625V5.625C5.625 5.52554 5.66451 5.43016 5.73484 5.35984C5.80516 5.28951 5.90054 5.25 6 5.25Z">
                                                                </path>
                                                                <path d="M2.625 0C2.72446 0 2.81984 0.0395088 2.89016 0.109835C2.96049 0.180161 3 0.275544 3 0.375V0.75H9V0.375C9 0.275544 9.03951 0.180161 9.10983 0.109835C9.18016 0.0395088 9.27554 0 9.375 0C9.47446 0 9.56984 0.0395088 9.64017 0.109835C9.71049 0.180161 9.75 0.275544 9.75 0.375V0.75H10.5C10.8978 0.75 11.2794 0.908035 11.5607 1.18934C11.842 1.47064 12 1.85218 12 2.25V10.5C12 10.8978 11.842 11.2794 11.5607 11.5607C11.2794 11.842 10.8978 12 10.5 12H1.5C1.10218 12 0.720644 11.842 0.43934 11.5607C0.158035 11.2794 0 10.8978 0 10.5V2.25C0 1.85218 0.158035 1.47064 0.43934 1.18934C0.720644 0.908035 1.10218 0.75 1.5 0.75H2.25V0.375C2.25 0.275544 2.28951 0.180161 2.35984 0.109835C2.43016 0.0395088 2.52554 0 2.625 0ZM0.75 3V10.5C0.75 10.6989 0.829018 10.8897 0.96967 11.0303C1.11032 11.171 1.30109 11.25 1.5 11.25H10.5C10.6989 11.25 10.8897 11.171 11.0303 11.0303C11.171 10.8897 11.25 10.6989 11.25 10.5V3H0.75Z">
                                                                </path>
                                                            </g>
                                                        </svg> 20 May, 2024 </a>
                                                </li>
                                            </ul>
                                            <h4><a href="#">Comprehensive SEO Services for Increased Visibility</a></h4>
                                            <a className="explore-btn" href="#">
                                                Read More <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                                                    <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div></div>
                                </div>
                                <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="500">
                                    <div className="magnetic-wrap"><div className="blog-card2 magnetic-item">
                                        <a href="#" className="blog-img">
                                            <img loading="lazy" decoding="async" width="600" height="400" src="images/blog-st-img11-600x400.webp" className="attachment-blog-grid-thumb size-blog-grid-thumb wp-post-image img-fluid w-100 blog-img" alt="" /> </a>
                                        <div className="blog-content">
                                            <ul className="tags">
                                                <li>
                                                    <a href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                                                            <path d="M7.58455 3.09152C7.58455 3.4429 7.72414 3.7799 7.9726 4.02837C8.22107 4.27684 8.55807 4.41643 8.90946 4.41643C9.26085 4.41643 9.59785 4.27684 9.84632 4.02837C10.0948 3.7799 10.2344 3.4429 10.2344 3.09152C10.2344 2.74013 10.0948 2.40313 9.84632 2.15466C9.59785 1.90619 9.26085 1.7666 8.90946 1.7666C8.55807 1.7666 8.22107 1.90619 7.9726 2.15466C7.72414 2.40313 7.58455 2.74013 7.58455 3.09152ZM8.46782 3.09152C8.46782 2.97439 8.51435 2.86205 8.59718 2.77923C8.68 2.69641 8.79233 2.64988 8.90946 2.64988C9.02659 2.64988 9.13892 2.69641 9.22175 2.77923C9.30457 2.86205 9.3511 2.97439 9.3511 3.09152C9.3511 3.20865 9.30457 3.32098 9.22175 3.4038C9.13892 3.48662 9.02659 3.53315 8.90946 3.53315C8.79233 3.53315 8.68 3.48662 8.59718 3.4038C8.51435 3.32098 8.46782 3.20865 8.46782 3.09152Z">
                                                            </path>
                                                            <path d="M11.1167 0H7.06602C6.83178 5.00265e-05 6.60715 0.093142 6.44154 0.2588L0.258612 6.44173C0.0930223 6.60737 0 6.832 0 7.06621C0 7.30042 0.0930223 7.52505 0.258612 7.69068L4.30932 11.7414C4.47495 11.907 4.69958 12 4.93379 12C5.168 12 5.39263 11.907 5.55827 11.7414L11.7412 5.55846C11.9069 5.39285 11.9999 5.16822 12 4.93398V0.883276C12 0.649017 11.9069 0.424352 11.7413 0.258706C11.5756 0.0930591 11.351 0 11.1167 0ZM11.1167 4.93398L4.93379 11.1169L0.883087 7.06621L7.06602 0.883276H11.1167V4.93398Z">
                                                            </path>
                                                        </svg> Creative Design </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                                                            <g>
                                                                <path d="M6 5.25C6.09946 5.25 6.19484 5.28951 6.26517 5.35984C6.33549 5.43016 6.375 5.52554 6.375 5.625V6.75H7.5C7.59946 6.75 7.69484 6.78951 7.76517 6.85983C7.83549 6.93016 7.875 7.02554 7.875 7.125C7.875 7.22446 7.83549 7.31984 7.76517 7.39017C7.69484 7.46049 7.59946 7.5 7.5 7.5H6.375V8.625C6.375 8.72446 6.33549 8.81984 6.26517 8.89017C6.19484 8.96049 6.09946 9 6 9C5.90054 9 5.80516 8.96049 5.73484 8.89017C5.66451 8.81984 5.625 8.72446 5.625 8.625V7.5H4.5C4.40054 7.5 4.30516 7.46049 4.23484 7.39017C4.16451 7.31984 4.125 7.22446 4.125 7.125C4.125 7.02554 4.16451 6.93016 4.23484 6.85983C4.30516 6.78951 4.40054 6.75 4.5 6.75H5.625V5.625C5.625 5.52554 5.66451 5.43016 5.73484 5.35984C5.80516 5.28951 5.90054 5.25 6 5.25Z">
                                                                </path>
                                                                <path d="M2.625 0C2.72446 0 2.81984 0.0395088 2.89016 0.109835C2.96049 0.180161 3 0.275544 3 0.375V0.75H9V0.375C9 0.275544 9.03951 0.180161 9.10983 0.109835C9.18016 0.0395088 9.27554 0 9.375 0C9.47446 0 9.56984 0.0395088 9.64017 0.109835C9.71049 0.180161 9.75 0.275544 9.75 0.375V0.75H10.5C10.8978 0.75 11.2794 0.908035 11.5607 1.18934C11.842 1.47064 12 1.85218 12 2.25V10.5C12 10.8978 11.842 11.2794 11.5607 11.5607C11.2794 11.842 10.8978 12 10.5 12H1.5C1.10218 12 0.720644 11.842 0.43934 11.5607C0.158035 11.2794 0 10.8978 0 10.5V2.25C0 1.85218 0.158035 1.47064 0.43934 1.18934C0.720644 0.908035 1.10218 0.75 1.5 0.75H2.25V0.375C2.25 0.275544 2.28951 0.180161 2.35984 0.109835C2.43016 0.0395088 2.52554 0 2.625 0ZM0.75 3V10.5C0.75 10.6989 0.829018 10.8897 0.96967 11.0303C1.11032 11.171 1.30109 11.25 1.5 11.25H10.5C10.6989 11.25 10.8897 11.171 11.0303 11.0303C11.171 10.8897 11.25 10.6989 11.25 10.5V3H0.75Z">
                                                                </path>
                                                            </g>
                                                        </svg> 20 May, 2024 </a>
                                                </li>
                                            </ul>
                                            <h4><a href="#">Professional Web Design for Modern Businesses</a></h4>
                                            <a className="explore-btn" href="#">
                                                Read More <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                                                    <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div></div>
                                </div>
                                <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="500">
                                    <div className="magnetic-wrap"><div className="blog-card2 magnetic-item">
                                        <a href="#" className="blog-img">
                                            <img loading="lazy" decoding="async" width="600" height="400" src="images/blog-st-img10-600x400.webp" className="attachment-blog-grid-thumb size-blog-grid-thumb wp-post-image img-fluid w-100 blog-img" alt="" /> </a>
                                        <div className="blog-content">
                                            <ul className="tags">
                                                <li>
                                                    <a href="https://axleo-wp.egenslab.com/category/creative-design/">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                                                            <path d="M7.58455 3.09152C7.58455 3.4429 7.72414 3.7799 7.9726 4.02837C8.22107 4.27684 8.55807 4.41643 8.90946 4.41643C9.26085 4.41643 9.59785 4.27684 9.84632 4.02837C10.0948 3.7799 10.2344 3.4429 10.2344 3.09152C10.2344 2.74013 10.0948 2.40313 9.84632 2.15466C9.59785 1.90619 9.26085 1.7666 8.90946 1.7666C8.55807 1.7666 8.22107 1.90619 7.9726 2.15466C7.72414 2.40313 7.58455 2.74013 7.58455 3.09152ZM8.46782 3.09152C8.46782 2.97439 8.51435 2.86205 8.59718 2.77923C8.68 2.69641 8.79233 2.64988 8.90946 2.64988C9.02659 2.64988 9.13892 2.69641 9.22175 2.77923C9.30457 2.86205 9.3511 2.97439 9.3511 3.09152C9.3511 3.20865 9.30457 3.32098 9.22175 3.4038C9.13892 3.48662 9.02659 3.53315 8.90946 3.53315C8.79233 3.53315 8.68 3.48662 8.59718 3.4038C8.51435 3.32098 8.46782 3.20865 8.46782 3.09152Z">
                                                            </path>
                                                            <path d="M11.1167 0H7.06602C6.83178 5.00265e-05 6.60715 0.093142 6.44154 0.2588L0.258612 6.44173C0.0930223 6.60737 0 6.832 0 7.06621C0 7.30042 0.0930223 7.52505 0.258612 7.69068L4.30932 11.7414C4.47495 11.907 4.69958 12 4.93379 12C5.168 12 5.39263 11.907 5.55827 11.7414L11.7412 5.55846C11.9069 5.39285 11.9999 5.16822 12 4.93398V0.883276C12 0.649017 11.9069 0.424352 11.7413 0.258706C11.5756 0.0930591 11.351 0 11.1167 0ZM11.1167 4.93398L4.93379 11.1169L0.883087 7.06621L7.06602 0.883276H11.1167V4.93398Z">
                                                            </path>
                                                        </svg> Creative Design </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                                                            <g>
                                                                <path d="M6 5.25C6.09946 5.25 6.19484 5.28951 6.26517 5.35984C6.33549 5.43016 6.375 5.52554 6.375 5.625V6.75H7.5C7.59946 6.75 7.69484 6.78951 7.76517 6.85983C7.83549 6.93016 7.875 7.02554 7.875 7.125C7.875 7.22446 7.83549 7.31984 7.76517 7.39017C7.69484 7.46049 7.59946 7.5 7.5 7.5H6.375V8.625C6.375 8.72446 6.33549 8.81984 6.26517 8.89017C6.19484 8.96049 6.09946 9 6 9C5.90054 9 5.80516 8.96049 5.73484 8.89017C5.66451 8.81984 5.625 8.72446 5.625 8.625V7.5H4.5C4.40054 7.5 4.30516 7.46049 4.23484 7.39017C4.16451 7.31984 4.125 7.22446 4.125 7.125C4.125 7.02554 4.16451 6.93016 4.23484 6.85983C4.30516 6.78951 4.40054 6.75 4.5 6.75H5.625V5.625C5.625 5.52554 5.66451 5.43016 5.73484 5.35984C5.80516 5.28951 5.90054 5.25 6 5.25Z">
                                                                </path>
                                                                <path d="M2.625 0C2.72446 0 2.81984 0.0395088 2.89016 0.109835C2.96049 0.180161 3 0.275544 3 0.375V0.75H9V0.375C9 0.275544 9.03951 0.180161 9.10983 0.109835C9.18016 0.0395088 9.27554 0 9.375 0C9.47446 0 9.56984 0.0395088 9.64017 0.109835C9.71049 0.180161 9.75 0.275544 9.75 0.375V0.75H10.5C10.8978 0.75 11.2794 0.908035 11.5607 1.18934C11.842 1.47064 12 1.85218 12 2.25V10.5C12 10.8978 11.842 11.2794 11.5607 11.5607C11.2794 11.842 10.8978 12 10.5 12H1.5C1.10218 12 0.720644 11.842 0.43934 11.5607C0.158035 11.2794 0 10.8978 0 10.5V2.25C0 1.85218 0.158035 1.47064 0.43934 1.18934C0.720644 0.908035 1.10218 0.75 1.5 0.75H2.25V0.375C2.25 0.275544 2.28951 0.180161 2.35984 0.109835C2.43016 0.0395088 2.52554 0 2.625 0ZM0.75 3V10.5C0.75 10.6989 0.829018 10.8897 0.96967 11.0303C1.11032 11.171 1.30109 11.25 1.5 11.25H10.5C10.6989 11.25 10.8897 11.171 11.0303 11.0303C11.171 10.8897 11.25 10.6989 11.25 10.5V3H0.75Z">
                                                                </path>
                                                            </g>
                                                        </svg> 20 May, 2024 </a>
                                                </li>
                                            </ul>
                                            <h4><a href="#">Creative Branding Solutions to Elevate Your Brand</a></h4>
                                            <a className="explore-btn" href="#">
                                                Read More <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                                                    <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lets Talk Section */}
            <div className='d-none'>
                <div className='lets-contact-section'>
                    <div className="contact-section">
                        <div className="container-lg container-fluid">
                            <div className="row g-lg-4 gy-5">
                                <div className="col-lg-8">
                                    <div className="section-title text-animation vector-and-review">
                                        <div className='lest-talk-sec-style-1'>
                                            <h2>Let’s <span>TALK</span></h2>
                                        </div>
                                        <div className='lest-talk-sec-style-2'>
                                            <div className="dash-and-paragraph">
                                                <div className="dash"></div>
                                                <div className="content-and-social">
                                                    <p className='vector-and-review'>
                                                        <div className='lest-talk-sec-style-3'>Crafting a contact text for a digital agency
                                                        </div>
                                                        <div className='lest-talk-sec-style-3'>involvesproviding esential information for potential
                                                        </div>
                                                        <div className='lest-talk-sec-style-3'>clients or collaborators to reach out.</div>
                                                    </p>
                                                    <div className="social-area">
                                                        <h6>Connect Us</h6>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="6" viewBox="0 0 50 6">
                                                            <path d="M50 3L45 0.113249V5.88675L50 3ZM0 3.5H45.5V2.5H0V3.5Z"></path>
                                                        </svg>
                                                        <ul>
                                                            <li><a href="#">
                                                                <svg aria-hidden="true" className="e-font-icon-svg e-fab-facebook-f" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg></a>
                                                            </li>
                                                            <li><a href="#">
                                                                <svg aria-hidden="true" className="e-font-icon-svg e-fab-x-twitter" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg></a>
                                                            </li>
                                                            <li><a href="#">
                                                                <svg aria-hidden="true" className="e-font-icon-svg e-fab-linkedin-in" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg></a>
                                                            </li>
                                                            <li><a href="#">
                                                                <svg aria-hidden="true" className="e-font-icon-svg e-fab-instagram" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 d-lg-flex justify-content-end align-items-center">
                                    <div className="btn_wrapper lets-talk-btn-style d-block m-lg-0 m-md-auto m-auto">
                                        <a className="circle-btn btn-hover" href="#" target="_blank" rel="nofollow">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                                                <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z">
                                                </path>
                                            </svg> Contact <strong>Now</strong> <span></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
