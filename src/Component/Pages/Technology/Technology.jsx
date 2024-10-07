import React from 'react'
import './Technology.css'
import AppTechnology from './AppTechnology'
import GameTechnology from './GameTechnology'
import WebTechnology from './WebTechnology'
import Testimonial from '../Home/Testimonial'

export default function Technology() {
    return (
        <div>
            <div className='padding-top-89'>
                <div className='app-hero-back'>
                    <div className='container'>
                        <div className='row align-items-center'>
                            <div className='col-lg-7 text-lg-start text-md-center text-center'>
                                <div className='app-hero-content technology-content'>
                                    <h1 className='fw-bold'>How can we help
                                        you develop your project?</h1>
                                    <p className='my-4'>Let's  go to innovate for all your technology needs with Aadhya Infotech.</p>
                                    <a className="hero-btn btn-white-color btn-animate " href="/quotation">Get Started</a>
                                </div>
                            </div>
                            <div className='col-lg-5 d-flex justify-content-end'>
                                <img src="/images/technology-hero-img.png" alt="technology-hero-img" className='img-fluid app-hero-01 technology-hero-img' />
                            </div>
                        </div>
                    </div>
                </div>
                {/* App Technologies */}
                <div>
                    <AppTechnology></AppTechnology>
                </div>

                {/* Game Technology */}
                <div>
                    <GameTechnology></GameTechnology>
                </div>

                {/* Web Technologies */}
                <WebTechnology></WebTechnology>

                {/* testimonial */}
                <Testimonial></Testimonial>
            </div>
        </div>
    )
}
