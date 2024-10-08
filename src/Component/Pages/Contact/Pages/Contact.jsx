import React from 'react'
import Iframe from 'react-iframe'

export default function Contact() {
    return (
        <div className='overflow-hidden'>
            <div className='padding-top-89'>
                <div className='contact-hero'>
                    <div className="container">
                        <div className="contact-hero-content">
                            <div>
                                <h1>Contact Us</h1>
                                <p>We are here to help you with any queries and questions you may have. Get familiar with us and kick-start with our services.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Form section */}
                <div>
                    <div className='container'>
                        <div className='contact-form-back my-5 p-lg-5 p-md-5 p-sm-5 p-4'>
                            <div className='row align-items-center'>
                                <div className='col-lg-6'>
                                    <div className='contact-form-heading'>
                                        <h2 className='fw-bold'>Get in <span>Touch</span></h2>
                                        <p className='mb-0'>Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie
                                            vel, ornare
                                            non id blandit netus.</p>
                                    </div>
                                    <form>
                                        <div className='row'>
                                            <div className='col-lg-12'>
                                                <div>
                                                    <div className="form-floating my-3">
                                                        <input type="text" className="form-control contact-us-input" id="floatingInput" placeholder="Name" required="" />
                                                        <label for="floatingInput" className="contact-us-lable">Name <span className='text-danger'>*</span></label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-lg-12'>
                                                <div>
                                                    <div className="form-floating mb-3">
                                                        <input type="email" className="form-control contact-us-input" id="floatingInput" placeholder="Email" />
                                                        <label for="floatingInput" className="contact-us-lable">Email</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div>
                                                    <div className="form-floating mb-3">
                                                        <input type="text" className="form-control contact-us-input" id="floatingInput" placeholder="Phone number" required="" />
                                                        <label for="floatingInput" className="contact-us-lable">Phone number
                                                            <span className='text-danger'>*</span></label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-lg-12'>
                                                <div>
                                                    <div className="form-floating mb-3">
                                                        <input type="text" className="form-control contact-us-input" id="floatingInput" placeholder="How did you find us?" />
                                                        <label for="floatingInput" className="contact-us-lable">How did you find us?
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='col-lg-12'>
                                                <div>
                                                    <button className="contact-us-send-btn">SEND</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                    <div className='mt-5'>
                                        <div className='row justify-content-center'>
                                            <div className='col-lg-6 mb-lg-0 mb-md-3 mb-3'>
                                                <div className='d-flex align-items-center justify-content-lg-center justify-content-center'>
                                                    <div>
                                                        <img src="/images/ic_contect_us_phone_01.svg" alt="ic_contect_us_phone_01" className='img-fluid contact-img' />
                                                    </div>
                                                    <div className='contact-img-contant'>
                                                        <div className='ps-3'>
                                                            <h6 className="mb-0">PHONE</h6>
                                                            <p className="mb-0">+91 - 9099310347</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-lg-6 mb-lg-0 mb-md-3 mb-3'>
                                                <div className='d-flex align-items-center justify-content-lg-center justify-content-center'>
                                                    <div>
                                                        <img src="/images/ic_contact_us_mail_03.svg" alt="ic_contact_us_mail_03" className='contact-img' />
                                                    </div>
                                                    <div className='contact-img-contant'>
                                                        <div className='ps-3'>
                                                            <h6 className="mb-0">Email</h6>
                                                            <p className="mb-0">info@marcc.com.au</p>
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
                                            <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14876.31277179149!2d72.85670806738278!3d21.228747694632208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f1300c6e52f%3A0xf88307c9c18657e2!2sDhara%20Trade%20Center!5e0!3m2!1sen!2sin!4v1728363143482!5m2!1sen!2sin" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="contact-us-map position-relative z-1"></Iframe>
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
