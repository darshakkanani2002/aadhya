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
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <div>
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
    )
}
