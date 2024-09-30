import React from 'react'
import './WebDevelopment.css'
import AppUpWork from '../AppDevelopment/AppUpWork'
import WebDevelopmentSolustion from './WebDevelopmentSolustion'
import Testimonial from '../../../Home/Testimonial'
import AppDevelopProcess from '../AppDevelopment/AppDevelopProcess'

export default function WebDevelopment() {
    return (
        <div>
            <div className='padding-top-89'>
                <div className='app-hero-back'>
                    <div className='container'>
                        <div className='row align-items-center'>
                            <div className='col-lg-6 text-lg-start text-md-center text-center'>
                                <div className='app-hero-content'>
                                    <h1 className='fw-bold'>Web Development Company</h1>
                                    <p>We help you take your business to the digital sphere.</p>
                                    <a className="hero-btn btn-white-color btn-animate " href="/quotation">Get a Quote</a>
                                </div>
                            </div>
                            <div className='col-lg-6 px-1 d-lg-block d-md-none d-none'>
                                <div className='position-relative'>
                                    <img src="/images/web-hero-img-01.svg" alt="web-hero-img-01" className='img-fluid app-hero-01 position-relative z-1 w-100' />
                                    <img src="/images/web-hero-img-02.svg" alt="web-hero-img-02" className='web-hero-img-02 img-fluid' />
                                    <img src="/images/web-hero-img-03.svg" alt="web-hero-img-03" className='web-hero-img-03 img-fluid' />
                                    <img src="/images/web-hero-img-04.svg" alt="web-hero-img-04" className='web-hero-img-04 img-fluid' />
                                    <img src="/images/web-hero-img-04.svg" alt="web-hero-img-04" className='web-hero-img-05 img-fluid' />
                                    <img src="/images/web-hero-img-04.svg" alt="web-hero-img-04" className='web-hero-img-06 img-fluid' />
                                    <img src="/images/web-hero-img-05.svg" alt="web-hero-img-05" className='web-hero-img-07 img-fluid' />
                                </div>
                            </div>
                            <div className='col-lg-6 d-lg-none d-md-block d-block'>
                                <div className='position-relative pt-lg-0 pt-md-5 pt-5'>
                                    <img src="/images/web-hero-main-img.svg" alt="web-hero-main-img" className='img-fluid app-hero-01' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Upwork Section */}
                <div>
                    <AppUpWork></AppUpWork>
                </div>

                {/* Web Development Solustion section */}
                <div>
                    <WebDevelopmentSolustion></WebDevelopmentSolustion>
                </div>
                {/* Wed Development process */}
                <div>
                    <AppDevelopProcess></AppDevelopProcess>
                </div>
                {/* Testimonial Section */}
                <div>
                    <Testimonial></Testimonial>
                </div>
            </div>
        </div>
    )
}
