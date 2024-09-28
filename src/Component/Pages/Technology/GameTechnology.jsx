import React, { useEffect } from 'react'
import AOS from 'aos';

export default function GameTechnology() {
    useEffect(() => {
        AOS.init({
            duration: 2000, // duration of the animations (default: 1000ms)
            once: true, // whether animation should happen only once - while scrolling down
        });
    }, []);
    return (
        <div>
            <div className='technology-game-back py-5 mt-1'>
                <div className='container'>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className='text-center'>
                                <h2>Technologies Used for Game Development</h2>
                                <p>Game development includes character designing, animation, navigation building and functional testing. Each step needs efficient technologies and applications for smoother output.</p>
                            </div>
                        </div>

                        <div className='col-lg-12'>
                            <div>
                                <div>
                                    <div className="py-5 bg-transparent">
                                        <div className="container-lg container-fluid">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="technology-tab-wrap">
                                                        <ul className="nav nav-tabs" id="technologyTab" role="tablist">
                                                            <li className="nav-item" role="presentation">
                                                                <button className="nav-link active" id="Front-End-tab" data-bs-toggle="tab" data-bs-target="#tech-game-Front-End" type="button" role="tab" aria-controls="tech-game-Front-End" aria-selected="false" tabIndex="-1">
                                                                    Front-End</button>
                                                            </li>
                                                            <li className="nav-item" role="presentation">
                                                                <button className="nav-link" id="Back-End-tab" data-bs-toggle="tab" data-bs-target="#tech-game-Back-End" type="button" role="tab" aria-controls="tech-game-Back-End" aria-selected="false" tabIndex="-1">
                                                                    Back-End</button>
                                                            </li>
                                                            <li className="nav-item" role="presentation">
                                                                <button className="nav-link" id="Mobile-tab" data-bs-toggle="tab" data-bs-target="#tech-game-Database" type="button" role="tab" aria-controls="tech-game-Database" aria-selected="true">
                                                                    Database</button>
                                                            </li>
                                                        </ul>
                                                        <div className="tab-content" id="technologyTabContent">
                                                            <div className="tab-pane fade active show mt-5 pt-5" id="tech-game-Front-End" role="tabpanel" aria-labelledby="Front-End-tab">
                                                                <div className="row g-4 align-items-end justify-content-center">
                                                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 technology-hover" data-aos="zoom-in" data-aos-delay="500">
                                                                        <div className="single-technology btn_wrapper technology-sec-style">
                                                                            <div className="icon mb-3">
                                                                                <img decoding="async" src="images/technology-game-front-img-01.svg" alt="technology-game-front-img-01" className='technology-img' />
                                                                            </div>
                                                                            <span>Unity3D</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 technology-hover" data-aos="zoom-in" data-aos-delay="500">
                                                                        <div className="single-technology btn_wrapper technology-sec-style">
                                                                            <div className="icon mb-3">
                                                                                <img decoding="async" src="images/technology-game-front-img-02.svg" alt="technology-game-front-img-02" className='technology-img' />
                                                                            </div>
                                                                            <span>C#</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tab-pane fade mt-5 pt-5" id="tech-game-Back-End" role="tabpanel" aria-labelledby="Back-End-tab">
                                                                <div className="row g-4 align-items-end justify-content-center">
                                                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 technology-hover" data-aos="zoom-in" data-aos-delay="500">
                                                                        <div className="single-technology btn_wrapper technology-sec-style">
                                                                            <div className="icon mb-3">
                                                                                <img decoding="async" src="images/technology-app-back-img-01.svg" alt="technology-app-back-img-01" className='technology-img' />
                                                                            </div>
                                                                            <span>PHP</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 technology-hover" data-aos="zoom-in" data-aos-delay="500">
                                                                        <div className="single-technology btn_wrapper technology-sec-style">
                                                                            <div className="icon mb-3">
                                                                                <img decoding="async" src="images/technology-app-back-img-02.svg" alt="technology-app-back-img-02.svg" className='technology-img' />
                                                                            </div>
                                                                            <span>Node.js</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 technology-hover" data-aos="zoom-in" data-aos-delay="500">
                                                                        <div className="single-technology btn_wrapper technology-sec-style">
                                                                            <div className="icon mb-3">
                                                                                <img decoding="async" src="images/technology-app-back-img-03.svg" alt="technology-app-back-img-03.svg" className='technology-img' />
                                                                            </div>
                                                                            <span>Python</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 technology-hover" data-aos="zoom-in" data-aos-delay="500">
                                                                        <div className="single-technology btn_wrapper technology-sec-style">
                                                                            <div className="icon mb-3">
                                                                                <img decoding="async" src="images/technology-app-back-img-04.svg" alt="technology-app-back-img-04.svg" className='technology-img' />
                                                                            </div>
                                                                            <span>Laravel</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 technology-hover" data-aos="zoom-in" data-aos-delay="500">
                                                                        <div className="single-technology btn_wrapper technology-sec-style">
                                                                            <div className="icon mb-3">
                                                                                <img decoding="async" src="images/technology-app-back-img-05.svg" alt="technology-app-back-img-04" className='technology-img' />
                                                                            </div>
                                                                            <span>CodeIgniter</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 technology-hover" data-aos="zoom-in" data-aos-delay="500">
                                                                        <div className="single-technology btn_wrapper technology-sec-style">
                                                                            <div className="icon mb-3">
                                                                                <img decoding="async" src="images/technology-app-back-img-06.svg" alt="technology-app-back-img-04" className='technology-img' />
                                                                            </div>
                                                                            <span>Express.js</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tab-pane fade mt-5 pt-5" id="tech-game-Database" role="tabpanel" aria-labelledby="Mobile-tab">
                                                                <div className="row g-4 align-items-end">
                                                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 technology-hover" data-aos="zoom-in" data-aos-delay="500">
                                                                        <div className="single-technology btn_wrapper technology-sec-style">
                                                                            <div className="icon">
                                                                                <img decoding="async" src="images/technology-app-database-img-01.svg" alt="technology-app-database-img-01" className='technology-img' />
                                                                            </div>
                                                                            <span>MongoDB</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 technology-hover" data-aos="zoom-in" data-aos-delay="500">
                                                                        <div className="single-technology btn_wrapper technology-sec-style">
                                                                            <div className="icon">
                                                                                <img decoding="async" src="images/technology-app-database-img-02.svg" alt="technology-app-database-img-01" className='technology-img' />
                                                                            </div>
                                                                            <span>MySQL</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 technology-hover" data-aos="zoom-in" data-aos-delay="500">
                                                                        <div className="single-technology btn_wrapper technology-sec-style">
                                                                            <div className="icon">
                                                                                <img decoding="async" src="images/technology-app-database-img-03.svg" alt="technology-app-database-img-01" className='technology-img' />
                                                                            </div>
                                                                            <span>Firebase</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 technology-hover" data-aos="zoom-in" data-aos-delay="500">
                                                                        <div className="single-technology btn_wrapper technology-sec-style">
                                                                            <div className="icon">
                                                                                <img decoding="async" src="images/technology-app-database-img-04.svg" alt="technology-app-database-img-04" className='technology-img' />
                                                                            </div>
                                                                            <span>DynamoDB</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 technology-hover" data-aos="zoom-in" data-aos-delay="500">
                                                                        <div className="single-technology btn_wrapper technology-sec-style">
                                                                            <div className="icon">
                                                                                <img decoding="async" src="images/technology-app-database-img-05.svg" alt="technology-app-database-img-05" className='technology-img' />
                                                                            </div>
                                                                            <span>PostgreSQL</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 technology-hover" data-aos="zoom-in" data-aos-delay="500">
                                                                        <div className="single-technology btn_wrapper technology-sec-style">
                                                                            <div className="icon">
                                                                                <img decoding="async" src="images/technology-app-database-img-06.svg" alt="technology-app-database-img-06" className='technology-img' />
                                                                            </div>
                                                                            <span>Room</span>
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
        </div>
    )
}
