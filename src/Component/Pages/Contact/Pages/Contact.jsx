import React from 'react'
import Iframe from 'react-iframe'

export default function Contact() {
    return (
        <div>
            <div className='padding-top-89'>
                <div className='contact-hero'>
                    <div class="container">
                        <div class="contact-hero-content">
                            <div>
                                <h1>Contact Us</h1>
                                <p>We are here to help you with any queries and questions you may have. Get familiar with us and kick-start with our services.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Form section */}
            <div>
                <div className='container'>
                    <div className='contact-form-back my-5 p-lg-5 p-md-5 p-sm-5 p-4'>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className='contact-form-heading'>
                                    <h2>Get in <span>Touch</span></h2>
                                    <p className='mb-0'>Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie
                                        vel, ornare
                                        non id blandit netus.</p>
                                </div>
                                <form action="">
                                    <div className='row'>
                                        <div className='col-lg-12'>
                                            <div>
                                                <div class="form-floating my-3">
                                                    <input type="text" class="form-control contact-us-input" id="floatingInput" placeholder="Name" required="" />
                                                    <label for="floatingInput" class="contact-us-lable">Name <span className='text-danger'>*</span></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-12'>
                                            <div>
                                                <div class="form-floating mb-3">
                                                    <input type="email" class="form-control contact-us-input" id="floatingInput" placeholder="Email" />
                                                    <label for="floatingInput" class="contact-us-lable">Email</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div>
                                                <div class="form-floating mb-3">
                                                    <input type="text" class="form-control contact-us-input" id="floatingInput" placeholder="Phone number" required="" />
                                                    <label for="floatingInput" class="contact-us-lable">Phone number
                                                        <span className='text-danger'>*</span></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-12'>
                                            <div>
                                                <div class="form-floating mb-3">
                                                    <input type="text" class="form-control contact-us-input" id="floatingInput" placeholder="How did you find us?" />
                                                    <label for="floatingInput" class="contact-us-lable">How did you find us?
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-lg-12'>
                                            <div>
                                                <button class="contact-us-send-btn">SEND</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                                <div className='my-5'>
                                    <div className='row justify-content-center'>
                                        <div className='col-lg-6 mb-3'>
                                            <div className='d-flex align-items-center justify-content-lg-center justify-content-center'>
                                                <div>
                                                    <img src="/images/ic_contect_us_phone_01.svg" alt="ic_contect_us_phone_01" className='img-fluid contact-img' />
                                                </div>
                                                <div className='contact-img-contant'>
                                                    <div className='ps-3'>
                                                        <h6 class="mb-0">PHONE</h6>
                                                        <p class="mb-0">03 5432 1234</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-6 mb-3'>
                                            <div className='d-flex align-items-center justify-content-lg-center justify-content-center'>
                                                <div>
                                                    <img src="/images/ic_contact_us_mail_03.svg" alt="ic_contact_us_mail_03" className='contact-img' />
                                                </div>
                                                <div className='contact-img-contant'>
                                                    <div className='ps-3'>
                                                        <h6 class="mb-0">Email</h6>
                                                        <p class="mb-0">info@marcc.com.au</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className='col-lg-6'>
                                <div className="contact-us-map-bg">
                                    <div className="text-center text-sm-center text-md-center text-lg-start ms-lg-5 ms-md-0 ms-0 ps-lg-5 ps-md-0 ps-0">
                                        <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.4170945478!2d72.73989521791626!3d21.15934029875684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1710914582641!5m2!1sen!2sin" width="100%" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="contact-us-map position-relative z-1"></Iframe>
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
