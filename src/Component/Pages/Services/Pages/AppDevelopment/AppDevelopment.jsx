import React from 'react'
import './AppDevelopmet.css'
import Slider from "react-slick";
import AppDevelopProcess from './AppDevelopProcess';
import Testimonial from '../../../Home/Testimonial';
import AppUpWork from './AppUpWork';
import AppDevelopmentSolution from './AppDevelopmentSolution';

export default function AppDevelopment() {

    return (
        <div className='padding-top-89 overflow-hidden' id='main-section'>
            <div className='app-hero-back'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-lg-5 text-lg-start text-md-center text-center'>
                            <div className='app-hero-content technology-content'>
                                <h1 className='fw-bold mb-0'>Mobile App Development</h1>
                                <p className='my-4'>Mobile app development refers to the process of creating software applications designed to run on mobile devices such as smartphones and tablets.</p>
                                <a className="hero-btn btn-white-color btn-animate " href="/quotation">Get Started</a>
                            </div>
                        </div>
                        {/* <div className='col-lg-6 px-1 d-lg-block d-md-none d-none'>
                            <div className='position-relative'>
                                <img src="/images/app-hero-01.svg" alt="app-hero-01" className='img-fluid app-hero-01' />
                                <img src="/images/app-hero-search-img.svg" alt="app-hero-search-img" className='app-hero-search-img img-fluid' />
                                <img src="/images/app-hero-lock-img.svg" alt="app-hero-lock-img" className='app-hero-lock-img img-fluid' />
                                <img src="/images/app-hero-user-img.svg" alt="app-hero-user-img" className='app-hero-user-img img-fluid' />
                            </div>
                        </div> */}
                        <div className='col-lg-7'>
                            <div className='position-relative pt-lg-0 pt-md-5 pt-5 app-development-hero-img'>
                                <img src="/images/app-develop-hero-img.png" alt="app-develop-hero-img" className='img-fluid app-hero-01' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Upwork Section */}
            <div>
                <AppUpWork></AppUpWork>
            </div>

            {/* App development solution section */}
            <div>
                <AppDevelopmentSolution></AppDevelopmentSolution>
            </div>

            {/* App Develop Process Section */}
            <div className='container-fluid'>
                <AppDevelopProcess></AppDevelopProcess>
            </div>

            {/* Testimonial*/}
            <Testimonial></Testimonial>
        </div>
    )
}
