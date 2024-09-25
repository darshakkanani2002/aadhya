import React from 'react'
import './AppDevelopmet.css'
import Slider from "react-slick";
export default function AppDevelopProcess() {
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
                breakpoint: 1640,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                    infinite: true,
                    autoplay: true,
                }
            },
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,
                    autoplay: true,
                }
            },
            {
                breakpoint: 1340,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    autoplay: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    autoplay: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
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
            <div className="slider-container mt-5">
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='text-center'>
                                <h2 className='fw-bold app-heding-before'>App Development Process</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <Slider {...settings} className='mt-5'>
                    <div>
                        <div className='p-2 app-proccess-sec'>
                            <div className='app-delop-process-text'>
                                <div className='app-develop-process-content'>
                                    <h2>Understanding <br className='br-tag-display' /> Requirements</h2>
                                    <p>This stage helps us understand client's perspective and end goals of our application.</p>
                                </div>
                            </div>
                            <div className='app-develop-process-border'>
                                <div className='app-process-img'>
                                    <div className='app-process-circle'>
                                        <img src="/images/app-proccess-img-01.svg" alt="app-proccess-img-01" className='img-fluid proccess-img' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='p-2 app-process-bottom'>
                            <div className='app-develop-process-border-2'>
                                <div className='app-process-img-2'>
                                    <div className='app-process-circle-2'>
                                        <img src="/images/app-proccess-img-02.svg" alt="app-proccess-img-02" className='img-fluid proccess-img-2' />
                                    </div>
                                </div>
                            </div>
                            <div className='app-delop-process-text-2'>
                                <div className='app-develop-process-content-2'>
                                    <h2>Creating Strategies</h2>
                                    <p>Various strategies are developed to deliver the project on time.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='p-2'>
                            <div className='app-delop-process-text'>
                                <div className='app-develop-process-content'>
                                    <h2>Using Right <br className='br-tag-display' />Technology</h2>
                                    <p>Further, we select technology to use for app development which depends on the type of apk.</p>
                                </div>
                            </div>
                            <div className='app-develop-process-border'>
                                <div className='app-process-img'>
                                    <div className='app-process-circle'>
                                        <img src="/images/app-proccess-img-03.svg" alt="app-proccess-img-03" className='img-fluid proccess-img' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='p-2 app-process-bottom'>
                            <div className='app-develop-process-border-2'>
                                <div className='app-process-img-2'>
                                    <div className='app-process-circle-2'>
                                        <img src="/images/app-proccess-img-06.svg" alt="app-proccess-img-06" className='img-fluid proccess-img-2' />
                                    </div>
                                </div>
                            </div>
                            <div className='app-delop-process-text-2'>
                                <div className='app-develop-process-content-2'>
                                    <h2>Developing The App</h2>
                                    <p>A team of developers works simultaneously on the coding and app</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='p-2'>
                            <div className='app-delop-process-text'>
                                <div className='app-develop-process-content'>
                                    <h2>Testing <br className='br-tag-display' /> Phase</h2>
                                    <p>Once the app is developed, it goes through a thorough testing process for bugs and errors.</p>
                                </div>
                            </div>
                            <div className='app-develop-process-border'>
                                <div className='app-process-img'>
                                    <div className='app-process-circle'>
                                        <img src="/images/app-proccess-img-07.svg" alt="app-proccess-img-07" className='img-fluid proccess-img' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='p-2 app-process-bottom'>
                            <div className='app-develop-process-border-2'>
                                <div className='app-process-img-2'>
                                    <div className='app-process-circle-2'>
                                        <img src="/images/app-proccess-img-08.svg" alt="app-proccess-img-08" className='img-fluid proccess-img-2' />
                                    </div>
                                </div>
                            </div>
                            <div className='app-delop-process-text-2'>
                                <div className='app-develop-process-content-2'>
                                    <h2>Launching Project</h2>
                                    <p>After successful testing, the project is delivered to the client.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div>
                        <div className='p-2'>
                            <div className='app-delop-process-text'>
                                <div className='app-develop-process-content'>
                                    <h2>Understanding Requirements</h2>
                                    <p>This stage helps us understand client's perspective and end goals.</p>
                                </div>
                            </div>
                            <div className='app-develop-process-border'>
                                <div className='app-process-img'>
                                    <div className='app-process-circle'>
                                        <img src="/images/app-proccess-img-01.svg" alt="app-proccess-img-01" className='img-fluid proccess-img' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='p-2 app-process-bottom'>
                            <div className='app-develop-process-border-2'>
                                <div className='app-process-img-2'>
                                    <div className='app-process-circle-2'>
                                        <img src="/images/app-proccess-img-02.svg" alt="app-proccess-img-02" className='img-fluid proccess-img-2' />
                                    </div>
                                </div>
                            </div>
                            <div className='app-delop-process-text-2'>
                                <div className='app-develop-process-content-2'>
                                    <h2>Creating Strategies</h2>
                                    <p>Various strategies are developed to deliver the project on time.</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </Slider>
            </div>
        </div>
    )
}
