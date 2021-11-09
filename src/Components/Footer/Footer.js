import React from 'react';

const Footer = () => {
    return (
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
    )
};

export default Footer;
