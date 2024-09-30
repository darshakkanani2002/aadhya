import React from 'react'
import '../AppDevelopment/AppDevelopmet.css'
import './GameDevelopment.css'
import AppUpWork from '../AppDevelopment/AppUpWork'
import AppDevelopmentSolution from '../AppDevelopment/AppDevelopmentSolution'
import AppDevelopProcess from '../AppDevelopment/AppDevelopProcess'
import Testimonial from '../../../Home/Testimonial'

export default function GameDevelopment() {
    return (
        <div id='main-section'>
            <div className='padding-top-89 overflow-hidden'>
                <div className='app-hero-back'>
                    <div className='container'>
                        <div className='row align-items-center'>
                            <div className='col-lg-6 text-lg-start text-md-center text-center'>
                                <div className='app-hero-content'>
                                    <h1 className='fw-bold'>Mobile Game Development <br></br>Company</h1>
                                    <p>We build dynamic, user-friendly, and engaging mobile applications.</p>
                                    <a className="hero-btn btn-white-color btn-animate " href="/quotation">Get a Quote</a>
                                </div>
                            </div>
                            <div className='col-lg-6 px-1 d-lg-block d-md-none d-none'>
                                <div className='position-relative'>
                                    <img src="/images/game-hero-img-01.svg" alt="game-hero-img-01" className='img-fluid app-hero-01' />
                                    <img src="/images/game-hero-img-02.svg" alt="game-hero-img-02" className='game-hero-img-02 img-fluid' />
                                    <img src="/images/game-hero-img-03.svg" alt="game-hero-img-03" className='game-hero-img-03 img-fluid' />
                                    <img src="/images/game-hero-img-04.svg" alt="game-hero-img-04" className='game-hero-img-04 img-fluid' />
                                </div>
                            </div>
                            <div className='col-lg-6 d-lg-none d-md-block d-block'>
                                <div className='position-relative pt-lg-0 pt-md-5 pt-5'>
                                    <img src="/images/game-hero-main-img.svg" alt="game-hero-main-img" className='img-fluid app-hero-01' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Upwork section */}
                <div>
                    <AppUpWork></AppUpWork>
                </div>

                {/* Game Development section */}
                <div>
                    <AppDevelopmentSolution></AppDevelopmentSolution>
                </div>

                {/* Game Develop process Section */}
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
