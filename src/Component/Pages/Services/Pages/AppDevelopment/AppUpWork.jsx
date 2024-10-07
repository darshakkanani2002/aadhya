import React from 'react'
import './AppDevelopmet.css'
import Slider from "react-slick";

export default function AppUpWork() {
    var settings = {
        infinite: true,
        dots: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    autoplay: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                }
            }
        ]
    };
    return (
        <div className='overflow-hidden d-none'>
            <div className='app-main-upwork appupwork-media'>
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
            <div>
                <div className='appupwork-slider-media'>
                    <div className="slider-container mt-5">
                        <Slider {...settings} className='mt-5'>
                            <div className='p-3'>
                                <div className='text-center app-slide-upwork-box'>
                                    <div>
                                        <div className='text-center'>
                                            <img src="/images/app-upwork-img-01.svg" alt="app-upwork-img-01" className='d-flex m-auto' />
                                        </div>
                                        <div className='app-upwork-content mt-3'>
                                            <p className='mb-0'>10+ Years in  Industry</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='p-3'>
                                <div className='text-center app-slide-upwork-box'>
                                    <div>
                                        <div>
                                            <img src="/images/app-upwork-img-02.svg" alt="app-upwork-img-02" className='d-flex m-auto' />
                                        </div>
                                        <div className='app-upwork-content mt-3'>
                                            <p className='mb-0'>2x Growth Rate</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='p-3'>
                                <div className='text-center app-slide-upwork-box'>
                                    <div>
                                        <div>
                                            <img src="/images/app-upwork-img-03.svg" alt="app-upwork-img-03" className='d-flex m-auto' width='91' height='83' />
                                        </div>
                                        <div className='app-upwork-content mt-3'>
                                            <p className='mb-0'>300+ Exports Professionals</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='p-3'>
                                <div className='text-center app-slide-upwork-box'>
                                    <div>
                                        <div>
                                            <img src="/images/app-upwork-img-04.svg" alt="app-upwork-img-04" className='d-flex m-auto' />
                                        </div>
                                        <div className='app-upwork-content mt-3'>
                                            <p className='mb-0'>789+ Projects Delivered</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}
