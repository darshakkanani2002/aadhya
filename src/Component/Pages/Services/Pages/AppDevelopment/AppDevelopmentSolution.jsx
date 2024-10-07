import React, { useEffect } from 'react'
import './AppDevelopmet.css'
import Slider from "react-slick";
import AOS from 'aos';

export default function AppDevelopmentSolution() {
    useEffect(() => {
        AOS.init({
            duration: 2000, // duration of the animations (default: 1000ms)
            once: true, // whether animation should happen only once - while scrolling down
        });
    }, []);
    var settings = {
        infinite: true,
        dots: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,

                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <div>
            <div>
                <div className='d-lg-block d-md-none d-none overflow-hidden'>
                    <div className='app-development-back overflow-hidden'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-12'>
                                    <div className='text-center'>
                                        <h2 className='fw-bold app-heding-before'>App Development Solutions</h2>
                                        <p className='mt-5 text-dark fw-semibold'>
                                            App development solutions provide tailored software services for creating mobile applications, offering end-to-end processes from concept design to deployment across platforms. These solutions cater to business needs, ensuring apps are functional, user-friendly, and scalable for various devices.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='container'>
                            <div className='row justify-content-center'>
                                <div className="col-lg-4 mt-5">
                                    <div className='app-solution-ic'>
                                        <img src="/images/app-solustion-ic-01.png" alt="app-solution-ic-01" className='img-fluid d-flex m-auto' />
                                    </div>
                                    <div className='app-solustion-shape-back'>
                                        <img src="/images/app-solustion-shape.png" alt="app-solustion-shape" className='img-fluid d-flex m-auto' />
                                        <div className='text-center'>
                                            <div className='p-4 app-solution-content'>
                                                <h3 className='mb-4 fw-semibold'>Technology Consultation</h3>
                                                <p>Let our team of experts guide you on each significant technical aspect of app development, so that you can make informed decisions.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 mt-5">
                                    <div className='app-solution-ic'>
                                        <img src="/images/app-solustion-ic-02.png" alt="app-solution-ic-02" className='img-fluid d-flex m-auto' />
                                    </div>
                                    <div className='app-solustion-shape-back'>
                                        <img src="/images/app-solustion-shape.png" alt="app-solustion-shape" className='app-solustion-blue-shape img-fluid d-flex m-auto' />
                                        <div className='text-center'>
                                            <div className='p-4 app-solution-content'>
                                                <h3 className='mb-4 fw-semibold'>Native App Development</h3>
                                                <p>We use a combination of expertise and proficiency to develop applications based on React Native and Flutter frameworks.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 mt-5">
                                    <div className='app-solution-ic'>
                                        <img src="/images/app-solustion-ic-03.png" alt="app-solution-ic-03" className='img-fluid d-flex m-auto' />
                                    </div>
                                    <div className='app-solustion-shape-back'>
                                        <img src="/images/app-solustion-shape.png" alt="app-solustion-shape" className='app-solustion-purple-shape img-fluid d-flex m-auto' />
                                        <div className='text-center'>
                                            <div className='p-4 app-solution-content'>
                                                <h3 className='mb-4 fw-semibold'>Progressive Web App Development</h3>
                                                <p>Our progressive web app development services can benefit you with a responsive and polished app for all devices.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 mt-5">
                                    <div className='app-solution-ic'>
                                        <img src="/images/app-solustion-ic-04.png" alt="app-solution-ic-04" className='img-fluid d-flex m-auto' />
                                    </div>
                                    <div className='app-solustion-shape-back'>
                                        <img src="/images/app-solustion-shape.png" alt="app-solustion-shape" className='app-solustion-pink-shape img-fluid d-flex m-auto' />
                                        <div className='text-center'>
                                            <div className='p-4 app-solution-content'>
                                                <h3 className='mb-4 fw-semibold'>UI & UX Designing</h3>
                                                <p>We house UI and UX experts who play a pivotal role in making your mobile app appealing and user-friendly.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 mt-5">
                                    <div className='app-solution-ic'>
                                        <img src="/images/app-solustion-ic-05.png" alt="app-solution-ic-05" className='img-fluid d-flex m-auto' />
                                    </div>
                                    <div className='app-solustion-shape-back'>
                                        <img src="/images/app-solustion-shape.png" alt="app-solustion-shape" className='app-solustion-gray-shape img-fluid d-flex m-auto' />
                                        <div className='text-center'>
                                            <div className='p-4 app-solution-content'>
                                                <h3 className='mb-4 fw-semibold'>Maintenance & Support</h3>
                                                <p>Periodic maintenance and upgrades of the application are seamlessly handled under our mobile app development services.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 mt-5">
                                    <div className='app-solution-ic'>
                                        <img src="/images/app-solustion-ic-06.png" alt="app-solution-ic-06" className='img-fluid d-flex m-auto' />
                                    </div>
                                    <div className='app-solustion-shape-back'>
                                        <img src="/images/app-solustion-shape.png" alt="app-solustion-shape" className='app-solustion-orange-shape img-fluid d-flex m-auto' />
                                        <div className='text-center'>
                                            <div className='p-4 app-solution-content'>
                                                <h3 className='mb-4 fw-semibold'>Maintenance & Support</h3>
                                                <p>Periodic maintenance and upgrades of the application are seamlessly handled under our mobile app development services.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 mt-5">
                                    <div className='app-solution-ic'>
                                        <img src="/images/app-solustion-ic-07.png" alt="app-solution-ic-07" className='img-fluid d-flex m-auto' />
                                    </div>
                                    <div className='app-solustion-shape-back'>
                                        <img src="/images/app-solustion-shape.png" alt="app-solustion-shape" className='app-solustion-indigo-shape img-fluid d-flex m-auto' />
                                        <div className='text-center'>
                                            <div className='p-4 app-solution-content'>
                                                <h3 className='mb-4 fw-semibold'>Maintenance & Support</h3>
                                                <p>Periodic maintenance and upgrades of the application are seamlessly handled under our mobile app development services.</p>
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
                                            <div className='app-development'>
                                                <div>
                                                    <div className='app-solution-ic'>
                                                        <img src="/images/app-solustion-ic-01.png" alt="app-solution-ic-01" className='img-fluid d-flex m-auto' />
                                                    </div>
                                                    <div className='app-solustion-shape-back'>
                                                        <img src="/images/app-solustion-shape.png" alt="app-solustion-shape" className='img-fluid d-flex m-auto' />
                                                        <div className='text-center'>
                                                            <div className='p-lg-4 p-md-3 p-sm-3 p-2 app-solution-content'>
                                                                <h3 className='mb-4 fw-semibold'>Technology Consultation</h3>
                                                                <p>Let our team of experts guide you on each significant technical aspect of app development, so that you can make informed decisions.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='p-2'>
                                            <div className='app-development'>
                                                <div>
                                                    <div className='app-solution-ic'>
                                                        <img src="/images/app-solustion-ic-02.png" alt="app-solution-ic-02" className='img-fluid d-flex m-auto' />
                                                    </div>
                                                    <div className='app-solustion-shape-back'>
                                                        <img src="/images/app-solustion-shape.png" alt="app-solustion-shape" className='app-solustion-blue-shape img-fluid d-flex m-auto' />
                                                        <div className='text-center'>
                                                            <div className='p-lg-4 p-md-3 p-sm-3 p-2 app-solution-content'>
                                                                <h3 className='mb-4 fw-semibold'>Native App Development</h3>
                                                                <p>We use a combination of expertise and proficiency to develop applications based on React Native and Flutter frameworks.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='p-2'>
                                            <div className='app-development'>
                                                <div>
                                                    <div className='app-solution-ic'>
                                                        <img src="/images/app-solustion-ic-03.png" alt="app-solution-ic-03" className='img-fluid d-flex m-auto' />
                                                    </div>
                                                    <div className='app-solustion-shape-back'>
                                                        <img src="/images/app-solustion-shape.png" alt="app-solustion-shape" className='app-solustion-purple-shape img-fluid d-flex m-auto' />
                                                        <div className='text-center'>
                                                            <div className='p-lg-4 p-md-3 p-sm-3 p-2 app-solution-content'>
                                                                <h3 className='mb-4 fw-semibold'>Progressive Web App Development</h3>
                                                                <p>Our progressive web app development services can benefit you with a responsive and polished app for all devices.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='p-2'>
                                            <div className='app-development'>
                                                <div>
                                                    <div className='app-solution-ic'>
                                                        <img src="/images/app-solustion-ic-04.png" alt="app-solution-ic-04" className='img-fluid d-flex m-auto' />
                                                    </div>
                                                    <div className='app-solustion-shape-back'>
                                                        <img src="/images/app-solustion-shape.png" alt="app-solustion-shape" className='app-solustion-pink-shape img-fluid d-flex m-auto' />
                                                        <div className='text-center'>
                                                            <div className='p-lg-4 p-md-3 p-sm-3 p-2 app-solution-content'>
                                                                <h3 className='mb-4 fw-semibold'>UI & UX Designing</h3>
                                                                <p>We house UI and UX experts who play a pivotal role in making your mobile app appealing and user-friendly.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='p-2'>
                                            <div className='app-development'>
                                                <div>
                                                    <div className='app-solution-ic'>
                                                        <img src="/images/app-solustion-ic-05.png" alt="app-solution-ic-05" className='img-fluid d-flex m-auto' />
                                                    </div>
                                                    <div className='app-solustion-shape-back'>
                                                        <img src="/images/app-solustion-shape.png" alt="app-solustion-shape" className='app-solustion-gray-shape img-fluid d-flex m-auto' />
                                                        <div className='text-center'>
                                                            <div className='p-lg-4 p-md-3 p-sm-3 p-2 app-solution-content'>
                                                                <h3 className='mb-4 fw-semibold'>Maintenance & Support</h3>
                                                                <p>Periodic maintenance and upgrades of the application are seamlessly handled under our mobile app development services.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='p-2'>
                                            <div className='app-development'>
                                                <div>
                                                    <div className='app-solution-ic'>
                                                        <img src="/images/app-solustion-ic-06.png" alt="app-solution-ic-06" className='img-fluid d-flex m-auto' />
                                                    </div>
                                                    <div className='app-solustion-shape-back'>
                                                        <img src="/images/app-solustion-shape.png" alt="app-solustion-shape" className='app-solustion-orange-shape img-fluid d-flex m-auto' />
                                                        <div className='text-center'>
                                                            <div className='p-lg-4 p-md-3 p-sm-3 p-2 app-solution-content'>
                                                                <h3 className='mb-4 fw-semibold'>Maintenance & Support</h3>
                                                                <p>Periodic maintenance and upgrades of the application are seamlessly handled under our mobile app development services.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='p-2'>
                                            <div className='app-development'>
                                                <div>
                                                    <div className='app-solution-ic'>
                                                        <img src="/images/app-solustion-ic-07.png" alt="app-solution-ic-07" className='img-fluid d-flex m-auto' />
                                                    </div>
                                                    <div className='app-solustion-shape-back'>
                                                        <img src="/images/app-solustion-shape.png" alt="app-solustion-shape" className='app-solustion-indigo-shape img-fluid d-flex m-auto' />
                                                        <div className='text-center'>
                                                            <div className='p-lg-4 p-md-3 p-sm-3 p-2 app-solution-content'>
                                                                <h3 className='mb-4 fw-semibold'>Maintenance & Support</h3>
                                                                <p>Periodic maintenance and upgrades of the application are seamlessly handled under our mobile app development services.</p>
                                                            </div>
                                                        </div>
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
        </div>
    )
}
