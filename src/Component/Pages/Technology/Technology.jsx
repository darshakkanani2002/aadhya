import React from 'react'
import './Technology.css'
import AppTechnology from './AppTechnology'
import GameTechnology from './GameTechnology'
import WebTechnology from './WebTechnology'

export default function Technology() {
    return (
        <div>
            <div className='padding-top-89'>
                <div className='app-hero-back'>
                    <div className='container'>
                        <div className='row align-items-center'>
                            <div className='col-lg-6 text-lg-start text-md-center text-center'>
                                <div className='app-hero-content'>
                                    <h1 className='fw-bold'>Technologies We Deploy</h1>
                                    <p>Our cutting-edge technologies help in delivering our customers with software solutions that are seamless, efficient, and streamlines with their vision.</p>
                                    <a className="hero-btn btn-white-color btn-animate " href="/quotation">Get a Quote</a>
                                </div>
                            </div>
                            <div className='col-lg-6 px-1 d-lg-block d-md-none d-none'>
                                <div className='position-relative'>
                                    <img src="/images/techonology-hero-img-01.svg" alt="techonology-hero-img-01" className='img-fluid app-hero-01 w-100' />
                                    <img src="/images/techonology-hero-img-02.svg" alt="techonology-hero-img-02" className='technology-hero-img-02 img-fluid' />
                                    <img src="/images/techonology-hero-img-03.svg" alt="techonology-hero-img-03" className='technology-hero-img-03 img-fluid' />
                                </div>
                            </div>
                            <div className='col-lg-6 d-lg-none d-md-block d-block'>
                                <div className='position-relative pt-lg-0 pt-md-5 pt-5'>
                                    <img src="/images/techonology-hero-main-img.svg" alt="techonology-hero-main-img" className='img-fluid app-hero-01' />
                                </div>
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
            </div>
        </div>
    )
}
