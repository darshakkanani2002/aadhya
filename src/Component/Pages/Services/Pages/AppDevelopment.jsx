import React from 'react'
import './AppDevelopmet.css'
import Slider from "react-slick";

export default function AppDevelopment() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='padding-top-135 overflow-hidden'>
            <div className='app-hero-back'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-lg-6'>
                            <div className='app-hero-content'>
                                <h1 className='fw-bold'>Mobile App Development <br></br>Company</h1>
                                <p>We build dynamic, user-friendly, and engaging mobile applications.</p>
                                <a className="hero-btn btn-white-color btn-animate " href="/quotation">Get a Quote</a>
                            </div>
                        </div>
                        <div className='col-lg-6 px-1 d-lg-block d-md-none d-none'>
                            <div className='position-relative'>
                                <img src="/images/app-hero-01.svg" alt="app-hero-01" className='img-fluid app-hero-01' />
                                <img src="/images/app-hero-search-img.svg" alt="app-hero-search-img" className='app-hero-search-img img-fluid' />
                                <img src="/images/app-hero-lock-img.svg" alt="app-hero-lock-img" className='app-hero-lock-img img-fluid' />
                                <img src="/images/app-hero-user-img.svg" alt="app-hero-user-img" className='app-hero-user-img img-fluid' />
                            </div>
                        </div>
                        <div className='col-lg-6 d-lg-none d-md-block d-block'>
                            <div className='position-relative pt-lg-0 pt-md-5 pt-5'>
                                <img src="/images/app-hero-02.svg" alt="app-hero-02" className='img-fluid app-hero-01' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Upwork Section */}
            <div className='app-main-upwork'>
                <div className='app-upwork-box'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-3 col-md-6 col-12 mt-lg-0 mt-md-4 mt-4'>
                                <div className='d-flex align-items-center justify-content-center app-upwork-img'>
                                    <div>
                                        <img src="/images/app-upwork-img-01.svg" alt="app-upwork-img-01" />
                                    </div>
                                    <div className='app-upwork-content ms-4'>
                                        <p className='mb-0'>10+ Years in  </p>
                                        <p className='mb-0'>  Industry</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 col-12 mt-lg-0 mt-md-4 mt-4'>
                                <div className='d-flex align-items-center justify-content-center app-upwork-img'>
                                    <div>
                                        <img src="/images/app-upwork-img-02.svg" alt="app-upwork-img-02" />
                                    </div>
                                    <div className='app-upwork-content ms-4'>
                                        <p className='mb-0'>2x Growth Rate  </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 col-12 mt-lg-0 mt-md-4 mt-4'>
                                <div className='d-flex align-items-center justify-content-center app-upwork-img'>
                                    <div>
                                        <img src="/images/app-upwork-img-03.svg" alt="app-upwork-img-03" className='img-fluid' width='91' height='66' />
                                    </div>
                                    <div className='app-upwork-content ms-4'>
                                        <p className='mb-0'>300+ Exports  </p>
                                        <p className='mb-0'> Professionals</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 col-12 mt-lg-0 mt-md-4 mt-4'>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <div>
                                        <img src="/images/app-upwork-img-04.svg" alt="app-upwork-img-04" />
                                    </div>
                                    <div className='app-upwork-content ms-4'>
                                        <p className='mb-0'>789+ Projects  </p>
                                        <p className='mb-0'>  Delivered</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* App development solution section */}
            <div className='d-lg-block d-md-none d-none overflow-hidden'>
                <div className='app-development-back overflow-hidden'>
                    <div className='container overflow-hidden'>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='text-center'>
                                    <h2 className='fw-bold app-heding-before'>App Development Solutions</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='container'>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-12 mt-5">
                                <div>
                                    <div className='app-development-back-01 app-development'>
                                        <div>
                                            <div className='app-development-img-back-01 app-development-rotate'>
                                                <img src="/images/app-develop-img-01.gif" alt="app-develop-img-01" className='app-development-img' />
                                            </div>
                                            <div className="app-develop-content mt-5">
                                                <h4>Technology Consultation </h4>
                                                <p>Let our team of experts guide you on each significant technical aspect of app development, so that you can make informed decisions.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12 mt-5">
                                <div>
                                    <div className='app-development-back-02 app-development'>
                                        <div>
                                            <div className='app-development-img-back-02 app-development-rotate'>
                                                <img src="/images/app-develop-img-02.gif" alt="app-develop-img-02" className='app-development-img' />
                                            </div>
                                            <div className="app-develop-content mt-5">
                                                <h4>Native App Development </h4>
                                                <p>We use a combination of expertise and proficiency to develop applications based on React Native and Flutter frameworks.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12 mt-5">
                                <div>
                                    <div className='app-development-back-03 app-development'>
                                        <div className='app-development-img-back-03 app-development-rotate'>
                                            <img src="/images/app-develop-img-03.gif" alt="app-develop-img-03" className='app-development-img' />
                                        </div>
                                        <div className="app-develop-content mt-5">
                                            <h4>Native App Development </h4>
                                            <p>We use a combination of expertise and proficiency to develop applications based on React Native and Flutter frameworks.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-12 mt-5">
                                <div>
                                    <div className='app-development-back-04 app-development'>
                                        <div className='app-development-img-back-04 app-development-rotate'>
                                            <img src="/images/app-develop-img-04.gif" alt="app-develop-img-04" className='app-development-img' />
                                        </div>
                                        <div className="app-develop-content mt-5">
                                            <h4>Progressive Web App Development</h4>
                                            <p>Our progressive web app development services can benefit you with a responsive and polished app for all devices.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-12 mt-5">
                                <div>
                                    <div className='app-development-back-05 app-development'>
                                        <div className='app-development-img-back-05 app-development-rotate'>
                                            <img src="/images/app-develop-img-05.gif" alt="app-develop-img-05" className='app-development-img' />
                                        </div>
                                        <div className="app-develop-content mt-5">
                                            <h4>UI & UX Designing</h4>
                                            <p>We house UI and UX experts who play a pivotal role in making your mobile app appealing and user-friendly.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-12 mt-5">
                                <div>
                                    <div className='app-development-back-06 app-development'>
                                        <div className='app-development-img-back-06 app-development-rotate'>
                                            <img src="/images/app-develop-img-06.gif" alt="app-develop-img-06" className='app-development-img' />
                                        </div>
                                        <div className="app-develop-content mt-5">
                                            <h4>Maintenance & Support</h4>
                                            <p>Periodic maintenance and upgrades of the application are seamlessly handled under our mobile app development services.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='row justify-content-center'>
                            <div className="col-lg-4 col-md-6 col-12 mt-5">
                                <div>
                                    <div className='app-development-back-07 app-development'>
                                        <div className='app-development-img-back-07 app-development-rotate'>
                                            <img src="/images/app-develop-img-07.gif" alt="app-develop-img-07" className='app-development-img' />
                                        </div>
                                        <div className="app-develop-content mt-5">
                                            <h4>QA & Testing</h4>
                                            <p>Every app is tested for superior quality and functioning. In fact, if you have developed one, we run a detailed check to ensure optimum performance.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12 mt-5">
                                <div>
                                    <div className='app-development-back-08 app-development'>
                                        <div className='app-development-img-back-08 app-development-rotate'>
                                            <img src="/images/app-develop-img-08.gif" alt="app-develop-img-08" className='app-development-img' />
                                        </div>
                                        <div className="app-develop-content mt-5">
                                            <h4>App Migrations & Integrations</h4>
                                            <p>Our mobile app solutions include assisting you with migrating your apps from one framework to another or integrating them for better functionality.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* for media query */}
            <div className='d-lg-none d-md-block d-block'>
                <div className='app-development-back'>
                    <div className='container position-relative'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-12'>
                                    <div className='text-center'>
                                        <h2 className='fw-bold app-heding-before'>App Development Solutions</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slider-container mt-5">
                            <Slider {...settings}>
                                <div>
                                    <div className='p-2'>
                                        <div className='app-development-back-01 app-development'>
                                            <div>
                                                <div className='app-development-img-back-01 app-development-rotate'>
                                                    <img src="/images/app-develop-img-01.gif" alt="app-develop-img-01" className='app-development-img' />
                                                </div>
                                                <div className="app-develop-content mt-5">
                                                    <h4>Technology Consultation </h4>
                                                    <p>Let our team of experts guide you on each significant technical aspect of app development, so that you can make informed decisions.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className='p-2'>
                                        <div className='app-development-back-02 app-development'>
                                            <div>
                                                <div className='app-development-img-back-02 app-development-rotate'>
                                                    <img src="/images/app-develop-img-02.gif" alt="app-develop-img-02" className='app-development-img' />
                                                </div>
                                                <div className="app-develop-content mt-5">
                                                    <h4>Native App Development </h4>
                                                    <p>We use a combination of expertise and proficiency to develop applications based on React Native and Flutter frameworks.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='p-2'>
                                        <div className='app-development-back-03 app-development'>
                                            <div>
                                                <div className='app-development-img-back-03 app-development-rotate'>
                                                    <img src="/images/app-develop-img-03.gif" alt="app-develop-img-03" className='app-development-img' />
                                                </div>
                                                <div className="app-develop-content mt-5">
                                                    <h4>Native App Development </h4>
                                                    <p>We use a combination of expertise and proficiency to develop applications based on React Native and Flutter frameworks.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='p-2'>
                                        <div className='app-development-back-04 app-development'>
                                            <div>
                                                <div className='app-development-img-back-04 app-development-rotate'>
                                                    <img src="/images/app-develop-img-04.gif" alt="app-develop-img-04" className='app-development-img' />
                                                </div>
                                                <div className="app-develop-content mt-5">
                                                    <h4>Progressive Web App Development</h4>
                                                    <p>Our progressive web app development services can benefit you with a responsive and polished app for all devices.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='p-2'>
                                        <div className='app-development-back-05 app-development'>
                                            <div>
                                                <div className='app-development-img-back-05 app-development-rotate'>
                                                    <img src="/images/app-develop-img-05.gif" alt="app-develop-img-05" className='app-development-img' />
                                                </div>
                                                <div className="app-develop-content mt-5">
                                                    <h4>UI & UX Designing</h4>
                                                    <p>We house UI and UX experts who play a pivotal role in making your mobile app appealing and user-friendly.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='p-2'>
                                        <div className='app-development-back-06 app-development'>
                                            <div>
                                                <div className='app-development-img-back-06 app-development-rotate'>
                                                    <img src="/images/app-develop-img-06.gif" alt="app-develop-img-06" className='app-development-img' />
                                                </div>
                                                <div className="app-develop-content mt-5">
                                                    <h4>Maintenance & Support</h4>
                                                    <p>Periodic maintenance and upgrades of the application are seamlessly handled under our mobile app development services.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='p-2'>
                                        <div className='app-development-back-07 app-development'>
                                            <div>
                                                <div className='app-development-img-back-07 app-development-rotate'>
                                                    <img src="/images/app-develop-img-07.gif" alt="app-develop-img-07" className='app-development-img' />
                                                </div>
                                                <div className="app-develop-content mt-5">
                                                    <h4>QA & Testing</h4>
                                                    <p>Every app is tested for superior quality and functioning. In fact, if you have developed one, we run a detailed check to ensure optimum performance.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='p-2'>
                                        <div className='app-development-back-08 app-development'>
                                            <div>
                                                <div className='app-development-img-back-08 app-development-rotate'>
                                                    <img src="/images/app-develop-img-08.gif" alt="app-develop-img-08" className='app-development-img' />
                                                </div>
                                                <div className="app-develop-content mt-5">
                                                    <h4>App Migrations & Integrations</h4>
                                                    <p>Our mobile app solutions include assisting you with migrating your apps from one framework to another or integrating them for better functionality.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
