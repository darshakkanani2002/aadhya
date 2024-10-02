import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Our_solution() {
    useEffect(() => {
        AOS.init({
            duration: 2000, // duration of the animations (default: 1000ms)
            once: true, // whether animation should happen only once - while scrolling down
        });
    }, []);

    return (
        <div>
            <div className="home2-process-section our-solustion-section py-lg-5 py-md-5 py-5 my-5">
                <div className="container-lg container-fluid">
                    <div className='overflow-hidden'>
                    </div>
                    <div className='container'>
                        <div className='overflow-hidden'>
                            <div className="section-title three text-animation row">
                                <div className='about-our-company col-lg-12 our-solution-style-1 text-center mb-5'>
                                    <h2 className='heading-text-before'>Our Solution<span> Proccess</span> </h2>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-12 mb-5 text-lg-start text-md-center text-center our-solution-process-design-02 p-3'>
                                <div className='row justify-content-center'>
                                    <div className='col-lg-3'>
                                        <div className='position-relative'>
                                            <img src="/images/our-solution-img-01.png" alt="our-solution-img-01" className='img-fluid our-solution-img-shadow-01' />
                                            <div className='our-solution-step-img'>
                                                <img src="/images/our-service-procees-b.png" alt="our-service-procees-b" className='img-fluid our-solution-process-img' />
                                            </div>
                                        </div>

                                    </div>
                                    <div className='col-lg-5'>
                                        <div className='our-solution-content pt-4'>
                                            <h2 className='mb-3'>Discovery and Consultation</h2>
                                            <p className='mb-0'>
                                                Understand the client's goals, challenges,<br className='d-lg-block d-md-none' /> and requirements through initial <br className='d-lg-block d-md-none' /> meetings and consultations.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 mb-5 our-solustion-procees-a text-lg-start text-md-center text-center our-solution-process-design-01 p-3'>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <div className='position-relative'>
                                            <img src="/images/our-solution-img-02.png" alt="our-solution-img-02" className='img-fluid our-solution-img-shadow-02' />
                                            <div className='our-solution-step-img'>
                                                <img src="/images/our-service-procees-a.png" alt="our-service-procees-a" className='img-fluid our-solution-process-img' />
                                            </div>
                                        </div>

                                    </div>
                                    <div className='col-lg-6'>
                                        <div className='our-solution-content pt-4'>
                                            <h2 className='mb-3'>Design and
                                                Architecture</h2>
                                            <p className='mb-0'>
                                                If applicable, create a user-centric design for software interfaces, websites, or applications.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-6 mb-5 text-lg-start text-md-center text-center our-solution-process-design-03 p-3'>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <div className='position-relative'>
                                            <img src="/images/our-solution-img-03.png" alt="our-solution-img-03" className='img-fluid our-solution-img-shadow-03' />
                                            <div className='our-solution-step-img'>
                                                <img src="/images/our-service-procees-c.png" alt="our-service-procees-c" className='img-fluid our-solution-process-img' />
                                            </div>
                                        </div>

                                    </div>
                                    <div className='col-lg-6'>
                                        <div className='our-solution-content pt-4'>
                                            <h2 className='mb-3'>Development</h2>
                                            <p className='mb-0'>
                                                Understand the client's goals, challenges, and requirements through initial meetings and consultations.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-12 text-lg-start text-md-center text-center our-solution-process-design-04 p-3'>
                                <div className='row justify-content-center'>
                                    <div className='col-lg-3'>
                                        <div className='position-relative'>
                                            <img src="/images/our-solution-img-04.png" alt="our-solution-img-04" className='img-fluid our-solution-img-shadow-04' />
                                            <div className='our-solution-step-img'>
                                                <img src="/images/our-service-procees-d.png" alt="our-service-procees-d" className='img-fluid our-solution-process-img' />
                                            </div>
                                        </div>

                                    </div>
                                    <div className='col-lg-5'>
                                        <div className='our-solution-content pt-4'>
                                            <h2 className='mb-3'>Documentation & Launch</h2>
                                            <p className='mb-0'>
                                                Understand the client's goals, <br className='d-lg-block d-md-none' /> challenges, and requirements through <br className='d-lg-block d-md-none' /> initial meetings and consultations.
                                            </p>
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
