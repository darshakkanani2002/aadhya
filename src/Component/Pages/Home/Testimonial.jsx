import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import './testimonial.css';
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import AOS from 'aos';

export default function Testimonial() {
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
        <div className='testimonial py-5 overflow-hidden'>
            <>
                <Swiper
                    pagination={{
                        type: 'fraction',
                    }}
                    loop={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    // autoplay={{
                    //     delay: 2500,
                    //     disableOnInteraction: false,
                    // }}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    className="mySwiper position-relative py-5 d-none"

                >
                    <SwiperSlide>
                        <div className='container'>
                            <div className='row align-items-center'>
                                <div className='col-lg-5 d-flex justify-content-md-center'>
                                    <img src="images/testimonial-img-01.webp" alt="testimonial-img-01" className='img-fluid rounded-3' />
                                </div>
                                <div className='col-lg-7'>
                                    <div className="testimonal-content">
                                        <span>Great Agency!</span>
                                        <p>By actively seeking, analyzing, and acting upon feedback, a agency can continuously refine its processes, enhance client satisfaction, and foster a culture of continuous.</p>
                                        <div className="author-area">
                                            <div className="content">
                                                <h6>Mr. Daniel Scoot</h6>
                                                <span className='testimonial-post-text'>CEO at astra.com</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='container'>
                            <div className='row align-items-center'>
                                <div className='col-lg-5 d-flex justify-content-md-center'>
                                    <img src="images/testimonial-img-02.webp" alt="testimonial-img-02" className='img-fluid rounded-3' />
                                </div>
                                <div className='col-lg-7'>
                                    <div className="testimonal-content">
                                        <span>Great Agency!</span>
                                        <p>By actively seeking, analyzing, and acting upon feedback, a agency can continuously refine its processes, enhance client satisfaction, and foster a culture of continuous.</p>
                                        <div className="author-area">
                                            <div className="content">
                                                <h6>Mr. Daniel Scoot</h6>
                                                <span className='testimonial-post-text'>CEO at astra.com</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='container'>
                            <div className='row align-items-center'>
                                <div className='col-lg-5 d-flex justify-content-md-center'>
                                    <img src="images/testimonial-img-03.webp" alt="testimonial-img-03" className='img-fluid rounded-3' />
                                </div>
                                <div className='col-lg-7'>
                                    <div className="testimonal-content">
                                        <span>Great Agency!</span>
                                        <p>By actively seeking, analyzing, and acting upon feedback, a agency can continuously refine its processes, enhance client satisfaction, and foster a culture of continuous.</p>
                                        <div className="author-area">
                                            <div className="content">
                                                <h6>Mr. Daniel Scoot</h6>
                                                <span className='testimonial-post-text'>CEO at astra.com</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>


                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-5'>

                            </div>
                            <div className='col-lg-7'>
                                <div className='swiper-button'>
                                    <div className="swiper-button-next"></div>
                                    <div className="swiper-button-prev"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Swiper>
            </>
            <div className='container position-relative'>
                {/* Custom Navigation */}
                <div className="custom-navigation our-service-prev-next-button">
                    <button ref={prevRef} className="our-service-prev custom-prev me-2 our-service-prev-next-arrow">
                        {/* <i className="fa-solid fa-arrow-left"></i> */}
                        <img src="/images/our-service-left-arrow.svg" alt="our-service-left-arrow" className='our-service-img-arrow img-fluid' />
                    </button>
                    <button ref={nextRef} className="our-service-next custom-next ms-2 our-service-prev-next-arrow">
                        {/* <i className="fa-solid fa-arrow-right"></i> */}
                        <img src="/images/our-service-right-arrow.svg" alt="our-service-right-arrow" className='our-service-img-arrow img-fluid' />
                    </button>
                </div>
                <div className="section-title three text-animation row">
                    <div className='about-our-company col-lg-12 our-solution-style-1 mb-5' >
                        <h2 className='text-lg-start text-md-center text-center new-work-text testimonial-before'>Testimonials</h2>
                    </div>
                </div>
                <>
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={30}
                        loop={true}
                        // pagination={{
                        //     clickable: true,
                        // }}
                        // navigation={{
                        //     clickable: true,
                        // }}
                        // autoplay={{
                        //     delay: 2500,
                        //     disableOnInteraction: false,
                        // }}
                        breakpoints={{
                            // When the window is >= 320px (small screens)
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            // When the window is >= 640px (medium screens)
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            // When the window is >= 1024px (large screens)
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                        }}
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
                            <div className='p-3 mb-85'>
                                <div className='testimonial-sec  p-4 position-relative' data-aos="zoom-in" data-aos-delay="500">
                                    <div>
                                        <div className='testimonial-content'>
                                            <p className='mb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>

                                            <div className='row align-items-center'>
                                                <div className='col-lg-6'>
                                                    <div className='testimonial-company-name mb-lg-0 mb-md-3 mb-3'>
                                                        <div className='d-flex align-items-center'>
                                                            <div>
                                                                <img src="/images/testimonial-main-img.svg" alt="testimonial-main-img" className='img-fluid' />
                                                            </div>
                                                            <div>
                                                                <h5 className='mb-0 ms-2'>Aadhya Infotech</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-lg-6'>
                                                    <img src="/images/ic_testimonial_stars.svg" alt="ic_testimonial_stars" className='testimonial-star-ic img-fluid' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='testimonial-quates'>
                                    <img src="/images/testimonial-quates-img.svg" alt="testimonial-quates-img" className='img-fluid' />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='p-3 mb-85'>
                                <div className='testimonial-sec p-4 position-relative' data-aos="zoom-in" data-aos-delay="500">
                                    <div>
                                        <div className='testimonial-content'>
                                            <p className='mb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>

                                            <div className='row align-items-center'>
                                                <div className='col-lg-6'>
                                                    <div className='testimonial-company-name mb-lg-0 mb-md-3 mb-3'>
                                                        <div className='d-flex align-items-center'>
                                                            <div>
                                                                <img src="/images/testimonial-main-img.svg" alt="testimonial-main-img" className='img-fluid' />
                                                            </div>
                                                            <div>
                                                                <h5 className='mb-0 ms-2'>Aadhya Infotech</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-lg-6'>
                                                    <img src="/images/ic_testimonial_stars.svg" alt="ic_testimonial_stars" className='testimonial-star-ic img-fluid' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='testimonial-quates'>
                                    <img src="/images/testimonial-quates-img.svg" alt="testimonial-quates-img" className='img-fluid' />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='p-3 mb-85'>
                                <div className='testimonial-sec p-4 position-relative' data-aos="zoom-in" data-aos-delay="500">
                                    <div>
                                        <div className='testimonial-content'>
                                            <p className='mb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>

                                            <div className='row align-items-center'>
                                                <div className='col-lg-6'>
                                                    <div className='testimonial-company-name mb-lg-0 mb-md-3 mb-3'>
                                                        <div className='d-flex align-items-center'>
                                                            <div>
                                                                <img src="/images/testimonial-main-img.svg" alt="testimonial-main-img" className='img-fluid' />
                                                            </div>
                                                            <div>
                                                                <h5 className='mb-0 ms-2'>Aadhya Infotech</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-lg-6'>
                                                    <img src="/images/ic_testimonial_stars.svg" alt="ic_testimonial_stars" className='testimonial-star-ic img-fluid' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='testimonial-quates'>
                                    <img src="/images/testimonial-quates-img.svg" alt="testimonial-quates-img" className='img-fluid' />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='p-3 mb-85'>
                                <div className='testimonial-sec p-4 position-relative' data-aos="zoom-in" data-aos-delay="500">
                                    <div>
                                        <div className='testimonial-content'>
                                            <p className='mb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>

                                            <div className='row align-items-center'>
                                                <div className='col-lg-6'>
                                                    <div className='testimonial-company-name mb-lg-0 mb-md-3 mb-3'>
                                                        <div className='d-flex align-items-center'>
                                                            <div>
                                                                <img src="/images/testimonial-main-img.svg" alt="testimonial-main-img" className='img-fluid' />
                                                            </div>
                                                            <div>
                                                                <h5 className='mb-0 ms-2'>Aadhya Infotech</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-lg-6'>
                                                    <img src="/images/ic_testimonial_stars.svg" alt="ic_testimonial_stars" className='testimonial-star-ic img-fluid' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='testimonial-quates'>
                                    <img src="/images/testimonial-quates-img.svg" alt="testimonial-quates-img" className='img-fluid' />
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </>
            </div>
        </div>
    )
}
