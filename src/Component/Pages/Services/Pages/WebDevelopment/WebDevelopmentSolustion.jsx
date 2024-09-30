import React, { useEffect } from 'react'
import Slider from "react-slick";
import AOS from 'aos';

export default function WebDevelopmentSolustion() {
    useEffect(() => {
        AOS.init({
            duration: 2000, // duration of the animations (default: 1000ms)
            once: true, // whether animation should happen only once - while scrolling down
        });
    }, []);
    var settings = {
        dots: true,
        infinite: true,
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
        <div>
            <div>
                <div className='d-lg-block d-md-none d-none overflow-hidden'>
                    <div className='app-development-back overflow-hidden'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-12'>
                                    <div className='text-center'>
                                        <h2 className='fw-bold app-heding-before'>Web Development Solutions</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='container'>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-12 mt-5" data-aos="zoom-in">
                                    <div>
                                        <div className='app-development-back-01 app-development'>
                                            <div>
                                                <div className='app-development-img-back-01 app-development-rotate'>
                                                    <img src="/images/web-service-icon-01.gif" alt="web-service-icon-01" className='app-development-img' />
                                                </div>
                                                <div className="app-develop-content mt-5">
                                                    <h4>Custom Web Development </h4>
                                                    <p>We take up projects which deliver tailor-made web app solutions or websites while ensuring quality and timely services.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12 mt-5" data-aos="zoom-in">
                                    <div>
                                        <div className='app-development-back-02 app-development'>
                                            <div>
                                                <div className='app-development-img-back-02 app-development-rotate'>
                                                    <img src="/images/web-service-icon-02.gif" alt="web-service-icon-02" className='app-development-img' />
                                                </div>
                                                <div className="app-develop-content mt-5">
                                                    <h4>Open Source Web Development </h4>
                                                    <p>We do provide open source web development services, so that you can observe, learn and modify the contents as per your convenience.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12 mt-5" data-aos="zoom-in">
                                    <div className='app-development-back-03 app-development'>
                                        <div>
                                            <div className='app-development-img-back-03 app-development-rotate'>
                                                <img src="/images/web-service-icon-03.gif" alt="web-service-icon-03" className='app-development-img' />
                                            </div>
                                            <div className="app-develop-content mt-5">
                                                <h4>Front-end Web Development </h4>
                                                <p>Our team of talented web developers ensure that the front-end of your website or web app is presentable and interactive to the end user.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-12 mt-5" data-aos="zoom-in">
                                    <div className='app-development-back-04 app-development'>
                                        <div>
                                            <div className='app-development-img-back-04 app-development-rotate'>
                                                <img src="/images/web-service-icon-04.gif" alt="web-service-icon-04" className='app-development-img' />
                                            </div>
                                            <div className="app-develop-content mt-5">
                                                <h4>Back-end Web Development</h4>
                                                <p>Whilst the front-end development is crucial for user interaction, the back-end development team takes care of its smooth functioning.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-12 mt-5" data-aos="zoom-in">
                                    <div className='app-development-back-05 app-development'>
                                        <div>
                                            <div className='app-development-img-back-05 app-development-rotate'>
                                                <img src="/images/web-service-icon-05.gif" alt="web-service-icon-05" className='app-development-img' />
                                            </div>
                                            <div className="app-develop-content mt-5">
                                                <h4>CMS Web Development</h4>
                                                <p>Our CMS web development services are vital for any business that is struggling with managing content and keeping the website consistently up-to-date.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-12 mt-5" data-aos="zoom-in">
                                    <div className='app-development-back-06 app-development'>
                                        <div>
                                            <div className='app-development-img-back-06 app-development-rotate'>
                                                <img src="/images/web-service-icon-06.gif" alt="web-service-icon-06" className='app-development-img' />
                                            </div>
                                            <div className="app-develop-content mt-5">
                                                <h4>E-Commerce Web Development</h4>
                                                <p>Websites are the base of every e-commerce business. If you are one of those, try our e-commerce website development services to make your store succeed.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='row justify-content-center'>
                                <div className="col-lg-4 col-md-6 col-12 mt-5" data-aos="zoom-in">
                                    <div className='app-development-back-07 app-development'>
                                        <div>
                                            <div className='app-development-img-back-07 app-development-rotate'>
                                                <img src="/images/web-service-icon-07.gif" alt="web-service-icon-07" className='app-development-img' />
                                            </div>
                                            <div className="app-develop-content mt-5">
                                                <h4>Progressive Web Development</h4>
                                                <p>Web applications need to be as responsive as their mobile counterparts. And our progressive web development services include exactly that and more.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12 mt-5" data-aos="zoom-in">
                                    <div className='app-development-back-08 app-development'>
                                        <div>
                                            <div className='app-development-img-back-08 app-development-rotate'>
                                                <img src="/images/web-service-icon-08.gif" alt="web-service-icon-08" className='app-development-img' />
                                            </div>
                                            <div className="app-develop-content mt-5">
                                                <h4>User-Friendly Web Development</h4>
                                                <p>The websites and web apps we develop are user-friendly and compelling to keep your users and visitors engaged for a long time.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12 mt-5" data-aos="zoom-in">
                                    <div>
                                        <div className='app-development-back-02 app-development'>
                                            <div>
                                                <div className='app-development-img-back-02 app-development-rotate'>
                                                    <img src="/images/web-service-icon-09.gif" alt="web-service-icon-09" className='app-development-img' />
                                                </div>
                                                <div className="app-develop-content mt-5">
                                                    <h4>UI/UX Designing </h4>
                                                    <p>Vasundhara, as a web development company ensures that every site has a unique appeal blended with minimalistic UI/UX design.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-12 mt-5" data-aos="zoom-in">
                                    <div className='app-development-back-04 app-development'>
                                        <div>
                                            <div className='app-development-img-back-04 app-development-rotate'>
                                                <img src="/images/web-service-icon-10.gif" alt="web-service-icon-10" className='app-development-img' />
                                            </div>
                                            <div className="app-develop-content mt-5">
                                                <h4>Website Maintenance</h4>
                                                <p>Our timely maintenance schedule keeps your applications up-to-date and helps in providing valuable experience to users consistently.</p>
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
                                                        <img src="/images/web-service-icon-01.gif" alt="web-service-icon-01" className='app-development-img' />
                                                    </div>
                                                    <div className="app-develop-content mt-5">
                                                        <h4>Custom Web Development </h4>
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
                                                        <img src="/images/web-service-icon-02.gif" alt="web-service-icon-02" className='app-development-img' />
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
                                                        <img src="/images/web-service-icon-03.gif" alt="web-service-icon-03" className='app-development-img' />
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
                                                        <img src="/images/web-service-icon-04.gif" alt="web-service-icon-04" className='app-development-img' />
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
                                                        <img src="/images/web-service-icon-05.gif" alt="web-service-icon-05" className='app-development-img' />
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
                                                        <img src="/images/web-service-icon-06.gif" alt="web-service-icon-06" className='app-development-img' />
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
                                                        <img src="/images/web-service-icon-07.gif" alt="web-service-icon-07" className='app-development-img' />
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
                                                        <img src="/images/web-service-icon-08.gif" alt="web-service-icon-08" className='app-development-img' />
                                                    </div>
                                                    <div className="app-develop-content mt-5">
                                                        <h4>App Migrations & Integrations</h4>
                                                        <p>Our mobile app solutions include assisting you with migrating your apps from one framework to another or integrating them for better functionality.</p>
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
                                                        <img src="/images/web-service-icon-09.gif" alt="web-service-icon-09" className='app-development-img' />
                                                    </div>
                                                    <div className="app-develop-content mt-5">
                                                        <h4>UI/UX Designing </h4>
                                                        <p>Vasundhara, as a web development company ensures that every site has a unique appeal blended with minimalistic UI/UX design.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="p-2">
                                            <div className='app-development-back-04 app-development'>
                                                <div>
                                                    <div className='app-development-img-back-04 app-development-rotate'>
                                                        <img src="/images/web-service-icon-10.gif" alt="web-service-icon-10" className='app-development-img' />
                                                    </div>
                                                    <div className="app-develop-content mt-5">
                                                        <h4>Website Maintenance</h4>
                                                        <p>Our timely maintenance schedule keeps your applications up-to-date and helps in providing valuable experience to users consistently.</p>
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
