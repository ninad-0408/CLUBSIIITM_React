import React from 'react';

const Footer = () => {
    return (
        <div>
         <section class="page-section bg-dark text-white mb-0" id="about">
                <div class="container">
                    <div class="text-center">
                        <h2 class="page-section-heading d-inline-block text-white"
                            style={{ 'font-family': 'Kaushan Script' }}>ABOUT</h2>
                    </div>
                    <div class="divider-custom divider-light">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                        <div class="divider-custom-line"></div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 ml-auto">
                            <div class="wrap lead" style={{ 'font-family': 'Ubuntu' }}>This is a website which will
                                ease the recruitment process for the clubs and moreover it will help them manage their
                                activities and also it will help club heads to modify the club database of their respective
                                clubs.</div>
                        </div>
                        <div class="col-lg-4 mr-auto mt-5 mt-lg-0">
                            <p class="wrap lead" style={{ 'font-family': 'Ubuntu' }}>This website will also help
                                outsiders to know about clubs of IIITMG so that they can decide which club is better for them
                                according to their interests so that they can apply for it. </p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="page-section" id="contact">
                <div class="container">
                    <div class="text-center">
                        <h2 class="page-section-heading d-inline-block text-secondary mb-0"
                            style={{ 'font-family': 'Kaushan Script' }}>CONTACT</h2>
                    </div>
                    <div class="divider-custom">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                        <div class="divider-custom-line"></div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-4">
                            <div class="d-flex flex-column align-items-center">
                                <div class="icon-contact mb-3"><i class="fas fa-mobile-alt"></i></div>
                                <div class="text-muted">Contact Number</div>
                                <div class="lead font-weight-bold">0123456789</div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="d-flex flex-column align-items-center">
                                <div class="icon-contact mb-3"><i class="fas fa-globe"></i></div>
                                <div class="text-muted">Website</div><a class="lead font-weight-bold" href="">Visit Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
              <footer class="footer text-center bg-dark">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 mb-5 mb-lg-0">
                    <h4 class="mb-4">LOCATION</h4>
                    <p class="pre-wrap lead mb-0">Morena Link Road, Gwalior, MP 474015
                    </p>
                </div>
                <div class="col-lg-4 mb-5 mb-lg-0">
                    <h4 class="mb-4">IIITMG WEBSITE</h4>
                    <a class="btn btn-outline-light btn-social mx-1" href="https://twitter.com/iiitm?lang=en"><i
                            class="fab fa-fw fa-twitter"></i></a>
                    <a class="btn btn-outline-light btn-social mx-1" href="http://www.iiitm.ac.in/index.php/en/"><i
                            class="fab fa-fw fa-google"></i></a>
                    <a class="btn btn-outline-light btn-social mx-1" href="https://www.facebook.com/iiitm/"><i
                            class="fab fa-fw fa-facebook-f"></i></a>
                </div>
                <div class="col-lg-4">
                    <h4 class="mb-4">ABOUT IIITMG</h4>
                    <p class="pre-wrap lead mb-0">IIITMG, located in Madhya Pradesh, is an institute of national
                        importance established by the Government of India in 1997.</p>
                </div>
            </div>
        </div>
    </footer>
        </div>
      
    )
};

export default Footer;
