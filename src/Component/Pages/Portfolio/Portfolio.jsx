import React from 'react'
import Testimonial from '../Home/Testimonial'

export default function Portfolio() {
    return (
        <div>
            <div className='padding-top-89'>
                <div className='app-hero-back' id='main-section'>
                    <div className='container'>
                        <div className='row align-items-center'>
                            <div className='col-lg-6 text-lg-start text-md-center text-center'>
                                <div className='app-hero-content'>
                                    <h1 className='fw-bold'>Our Wall of Pride and Creativity</h1>
                                    <p>When we say that Vasundhara Infotech is a leading custom software development solution provider in the India, there’s a reason behind it - Our work. Check out our portfolio where you will come across some of the mind-blowing projects we have been a part of.</p>
                                    <a className="hero-btn btn-white-color btn-animate " href="/quotation">Get a Quote</a>
                                </div>
                            </div>
                            <div className='col-lg-6 px-1 pt-lg-0 pt-md-5 pt-5'>
                                <div className='position-relative'>
                                    <img src="/images/portfolio-hero-main-img.svg" alt="game-hero-img-01" className='img-fluid app-hero-01 w-100' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div className="home2-portfolio-section bg-white">
                            <div className='container'>
                                <div className="section-title three text-animation row">
                                    <div className='about-our-company col-lg-12 our-solution-style-1 text-center mb-5'>
                                        <h2 className='text-lg-start text-md-center text-center new-work-text heading-text-before'>Our Portfolio</h2>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12'>
                                        <ul className="nav nav-pills mb-3 d-flex justify-content-center work-navigation-ul gap-5" id="pills-tab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">App Development</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Game Development</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link active" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Website Development</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false">Ui/Ux Design</button>
                                            </li>
                                        </ul>
                                        <div className="tab-content" id="pills-tabContent">
                                            <div className="tab-pane fade" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
                                                <div className='container'>
                                                    <div className='row'>
                                                        <div className='col-lg-4 col-md-6 col-sm-6 col-12 mt-4'>
                                                            <a href="#">
                                                                <div className='position-relative wok-img-div'>
                                                                    <img src="/images/work-app-img-01.webp" alt="work-app-img-01" className='img-fluid' />
                                                                    <div className='work-name-text-img'>
                                                                        <h5 className='mb-0'>Adrian James 6 Pack Abs</h5>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className='col-lg-4 col-md-6 col-sm-6 col-12 mt-4'>
                                                            <a href="#">
                                                                <div className='position-relative wok-img-div'>
                                                                    <img src="/images/work-app-img-02.png" alt="work-app-img-02" className='img-fluid' />
                                                                    <div className='work-name-text-img'>
                                                                        <h5 className='mb-0'>RTO</h5>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className='col-lg-4 col-md-6 col-sm-6 col-12 mt-4'>
                                                            <a href="#">
                                                                <div className='position-relative wok-img-div'>
                                                                    <img src="/images/work-app-img-03.webp" alt="work-app-img-03" className='img-fluid' />
                                                                    <div className='work-name-text-img'>
                                                                        <h5 className='mb-0'>Clubmall</h5>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
                                                <div className='container'>
                                                    <div className='row'>
                                                        <div className='col-lg-4 col-md-6 col-sm-6 col-12 mt-4'>
                                                            <a href="#">
                                                                <div className='position-relative wok-img-div'>
                                                                    <img src="/images/work-game-img-01.webp" alt="work-game-img-01" className='img-fluid rounded-4' />
                                                                    <div className='work-name-text-img'>
                                                                        <h5 className='mb-0'>ACCUBOW</h5>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className='col-lg-4 col-md-6 col-sm-6 col-12 mt-4'>
                                                            <a href="#">
                                                                <div className='position-relative wok-img-div'>
                                                                    <img src="/images/work-game-img-02.webp" alt="work-game-img-02" className='img-fluid' />
                                                                    <div className='work-name-text-img'>
                                                                        <h5 className='mb-0'>Zombie Shooter</h5>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className='col-lg-4 col-md-6 col-sm-6 col-12 mt-4'>
                                                            <a href="#">
                                                                <div className='position-relative wok-img-div'>
                                                                    <img src="/images/work-game-img-03.webp" alt="work-game-img-03" className='img-fluid' />
                                                                    <div className='work-name-text-img'>
                                                                        <h5 className='mb-0'>Traffic Rider</h5>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade show active" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex="0">
                                                <div className='container'>
                                                    <div className='row'>
                                                        <div className='col-lg-4 col-md-6 col-sm-6 col-12 mt-4'>
                                                            <a href="https://shop-gift.netlify.app" target='_blank'>
                                                                <div className='position-relative wok-img-div'>
                                                                    <img src="/images/work-web-img-01.jpg" alt="work-web-img-01" className='img-fluid rounded-4' />
                                                                    <div className='work-name-text-img'>
                                                                        <h5 className='mb-0'>Gift Shop</h5>
                                                                    </div>
                                                                </div>
                                                                <div className="image-wrap d-none">
                                                                    <a href="https://rahmanzeb.com">
                                                                        <img src="/images/Jewelry Landing Page.png" />
                                                                    </a>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className='col-lg-4 col-md-6 col-sm-6 col-12 mt-4'>
                                                            <a href="https://vedartharchitech.netlify.app" target='_blank'>
                                                                <div className='position-relative wok-img-div'>
                                                                    <img src="/images/work-web-img-02.jpg" alt="work-web-img-02" className='img-fluid rounded-4' />
                                                                    <div className='work-name-text-img'>
                                                                        <h5 className='mb-0'>Vedarch Design</h5>
                                                                    </div>
                                                                </div>

                                                            </a>
                                                        </div>
                                                        <div className='col-lg-4 col-md-6 col-sm-6 col-12 mt-4'>
                                                            <a href="https://effulgent-bonbon-a558df.netlify.app" target='_blank'>
                                                                <div className='position-relative wok-img-div'>
                                                                    <img src="/images/work-web-img-03.jpg" alt="work-web-img-03" className='img-fluid rounded-4' />
                                                                    <div className='work-name-text-img'>
                                                                        <h5 className='mb-0'>Asal Masala</h5>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabIndex="0">
                                                <div className='row'>
                                                    <div className='col-lg-4 col-md-6 col-sm-6 col-12 mt-4'>
                                                        <a href="#">
                                                            <div className='position-relative wok-img-div'>
                                                                <img src="/images/work-ui-img-04.jpg" alt="work-ui-img-04" className='img-fluid rounded-4 work-ui-images' />
                                                                <div className='work-name-text-img'>
                                                                    <h5 className='mb-0'>Ui/UX Design</h5>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className='col-lg-4 col-md-6 col-sm-6 col-12 mt-4'>
                                                        <a href="#">
                                                            <div className='position-relative wok-img-div'>
                                                                <img src="/images/work-ui-img-02.jpg" alt="work-ui-img-02   " className='img-fluid rounded-4 work-ui-images' />
                                                                <div className='work-name-text-img'>
                                                                    <h5 className='mb-0'>Weather Ui/UX Design</h5>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className='col-lg-4 col-md-6 col-sm-6 col-12 mt-4'>
                                                        <a href="#">
                                                            <div className='position-relative wok-img-div'>
                                                                <img src="/images/work-ui-img-03.jpg" alt="work-ui-img-03" className='img-fluid rounded-4 work-ui-images' />
                                                                <div className='work-name-text-img'>
                                                                    <h5 className='mb-0'>Car Wash Ui/UX Design</h5>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* testimonial */}
                        <div>
                            <Testimonial></Testimonial>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
