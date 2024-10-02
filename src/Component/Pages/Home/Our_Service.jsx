import React, { useEffect, useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import './testimonial.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';  // Ensure navigation styles are imported
// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import AOS from 'aos';

export default function Our_Service() {
    // Refs to control navigation
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    useEffect(() => {
        AOS.init({
            duration: 2000, // duration of the animations (default: 1000ms)
            once: true, // whether animation should happen only once - while scrolling down
        });
    }, []);

    return (
        <div className='position-relative overflow-hidden'>
            <div className='container-lg container-fluid-md container-fluid'>
                <div className="section-title three text-animation row">
                    <div className='about-our-company-content col-lg-12 our-solution-style-1 text-center mb-5' >
                        <h2 className='testimonial-before'>Our Service</h2>
                        <p className='mt-4'>As one of the leading software development companies, we at Vasundhara have a diverse <br className='d-lg-block d-md-none d-none' /> range of services for our clients, where we operate in these core areas services.</p>
                    </div>
                </div>

                {/* Custom Navigation */}
                <div className="custom-navigation our-service-prev-next-button">
                    <button ref={prevRef} className="our-service-prev custom-prev me-2 our-service-prev-next-arrow">
                        {/* <i className="fa-solid fa-arrow-left"></i> */}
                        <img src="/images/our-service-left-arrow.svg" alt="our-service-left-arrow" className='our-service-img-arrow' />
                    </button>
                    <button ref={nextRef} className="our-service-next custom-next ms-2 our-service-prev-next-arrow">
                        {/* <i className="fa-solid fa-arrow-right"></i> */}
                        <img src="/images/our-service-right-arrow.svg" alt="our-service-right-arrow" className='our-service-img-arrow' />
                    </button>
                </div>

                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 7000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    // Assign the refs to the Swiper navigation buttons
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onSwiper={(swiper) => {
                        // Delay the refs assignment to make sure swiper is initialized
                        setTimeout(() => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        });
                    }}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='mb-85'>
                            <div data-aos="zoom-in" data-aos-delay="500">
                                <div className='our-service our-services-01 position-relative p-3'>
                                    <div className='our-service-inner-border our-services-inner-border-01'>
                                        <div className='our-service-img-back our-service-img-back-01'>
                                            <img src="/images/our-service-icon-01.svg" alt="our-service-icon-01" className='img-fluid' />
                                        </div>
                                        <div className='our-service-text'>
                                            <h5>Mobile App Development</h5>
                                            <p>we specialize in delivering custom mobile app development services tailored to meet our clients' unique business needs.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='mb-85'>
                            <div data-aos="zoom-in" data-aos-delay="500">
                                <div className='our-service our-services-02 position-relative p-3'>
                                    <div className='our-service-inner-border our-services-inner-border-02'>
                                        <div className='our-service-img-back our-service-img-back-02'>
                                            <img src="/images/our-service-icon-02.svg" alt="our-service-icon-02" className='img-fluid' />
                                        </div>
                                        <div className='our-service-text'>
                                            <h5>Game Development</h5>
                                            <p>we offer end-to-end game development services, creating immersive and engaging gaming experiences for various platforms, including mobile, PC, and consoles.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='mb-85'>
                            <div data-aos="zoom-in" data-aos-delay="500">
                                <div className='our-service our-services-03 position-relative p-3'>
                                    <div className="our-service-inner-border our-services-inner-border-03">
                                        <div className='our-service-img-back our-service-img-back-03'>
                                            <img src="/images/our-service-icon-03.svg" alt="our-service-icon-03" className='img-fluid' />
                                        </div>
                                        <div className='our-service-text'>
                                            <h5>Web Development</h5>
                                            <p>we provide comprehensive web development services designed to create dynamic, responsive, and high-performing websites and web applications. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='mb-85'>
                            <div data-aos="zoom-in" data-aos-delay="500">
                                <div className='our-service our-services-02 position-relative p-3'>
                                    <div className='our-service-inner-border our-services-inner-border-02'>
                                        <div className='our-service-img-back our-service-img-back-02'>
                                            <img src="/images/our-service-icon-02.svg" alt="our-service-icon-02" className='img-fluid' />
                                        </div>
                                        <div className='our-service-text'>
                                            <h5>Game Development</h5>
                                            <p>we offer end-to-end game development services, creating immersive and engaging gaming experiences for various platforms, including mobile, PC, and consoles.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}
