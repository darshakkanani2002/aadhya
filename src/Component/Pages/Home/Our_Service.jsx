import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import './testimonial.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';  // Ensure navigation styles are imported
// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Our_Service() {
    // Refs to control navigation
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className='position-relative'>
            <div className='container'>
                <div className="section-title three text-animation row">
                    <div className='about-our-company col-lg-12 our-solution-style-1 text-center mb-5' data-aos="flip-up" >
                        <h2 className='testimonial-before'>Our Service</h2>
                        <p className='mt-4'>As one of the leading software development companies, we at Vasundhara have a diverse <br /> range of services for our clients, where we operate in these core areas services.</p>
                    </div>
                </div>

                {/* Custom Navigation */}
                <div className="custom-navigation our-service-prev-next-button">
                    <button ref={prevRef} className="our-service-prev custom-prev me-2 our-service-prev-next-arrow">
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    <button ref={nextRef} className="our-service-next custom-next ms-2 our-service-prev-next-arrow">
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>

                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    // autoplay={{
                    //     delay: 7000,
                    //     disableOnInteraction: false,
                    // }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
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
                            <div>
                                <div className='our-services-01'>
                                    <div className='our-service-img-back-01'>
                                        <img src="/images/web-development.gif" alt="" className='img-fluid our-service-img' />
                                    </div>
                                    <div className='our-service-text mt-5'>
                                        <h5>Web Development</h5>
                                        <p>We help companies with unique and comprehensive web development services that empower you and your clients.</p>
                                        <a className="learn-more" href="/web-development-company">Learn More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='mb-85'>
                            <div>
                                <div className='our-services-02'>
                                    <div className='our-service-img-back-02'>
                                        <img src="/images/mobile-app-development.gif" alt="" className='img-fluid our-service-img' />
                                    </div>
                                    <div className='our-service-text mt-5'>
                                        <h5>Mobile App Development</h5>
                                        <p>We can assist you with user-friendly, interactive and feature-rich mobile app development services to enable your digital growth.</p>
                                        <a className="learn-more" href="/web-development-company">Learn More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='mb-85'>
                            <div className='our-services-03'>
                                <div className='our-service-img-back-03'>
                                    <img src="/images/game-development.gif" alt="" className='img-fluid our-service-img' />
                                </div>
                                <div className='our-service-text mt-5'>
                                    <h5>Game Development</h5>
                                    <p>We are a leading game development company in India that deploys cutting edge technologies to build and deliver some of the most successful games in the industry. </p>
                                    <a className="learn-more" href="/web-development-company">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='mb-85'>
                            <div className='our-services-04'>
                                <div className='our-service-img-back-04'>
                                    <img src="/images/hire-offshore-developers.gif" alt="" className='img-fluid our-service-img' />
                                </div>
                                <div className='our-service-text mt-5'>
                                    <h5>Game Development</h5>
                                    <p>We are a leading game development company in India that deploys cutting edge technologies to build and deliver some of the most successful games in the industry. </p>
                                    <a className="learn-more" href="/web-development-company">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}
