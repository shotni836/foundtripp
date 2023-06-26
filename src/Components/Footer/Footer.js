import React from 'react'
import './Footer.css'
import logo from '../../assets/images/LOGO.svg'
import footer from '../../assets/images/footer_banner.png'
import hotel from '../../assets/images/hotel.jpg'

const Footer = () => {
  return (
    <>
        <footer className="main-footer" style={{backgroundImage: 'url('+footer+')'}}>
            <div className="container">
                <div className="footer-content">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column web-logo">
                            <div className="logo-widget footer-widget">
                                <figure className="logo-box"><a href="#"><img src={logo} alt=""/></a></figure>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="service-widget footer-widget">
                                <div className="footer-title">Address</div>
                                    <ul className="list">
                                        <li className='footer-address'><i className="fa fa-map-marker" aria-hidden="true"></i>Found Trip Pvt Ltd Address- Office No. B1/767, Spaze I Tech Park, Sector-49, Sonha Road, Gurugram</li>
                                        <li><i className="fa fa-phone" aria-hidden="true"></i> +91-9953286839</li>
                                        <li><i className="fa fa-envelope" aria-hidden="true"></i>info@foundtrip.com</li>
                                    </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="service-widget footer-widget">
                                <div className="footer-title">Address</div>
                                    <ul className="list">
                                        <li><img src={hotel} style={{height: '14px'}} />Tours & Packages</li>
                                        <li><i className="fa fa-plane" aria-hidden="true"></i>Flights</li>
                                        <li><i className="fa fa-hotel"></i>Hotels</li>
                                    </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="service-widget footer-widget">
                                <div className="footer-title">Address</div>
                                    <ul className="list">
                                        <li><i className="fa fa-facebook" aria-hidden="true"></i>Facebook</li>
                                        <li><i className="fa fa-twitter" aria-hidden="true"></i>Twitter</li>
                                        <li><i className="fa fa-instagram" aria-hidden="true"></i>Instagram</li>
                                        <li><i className="fa fa-linkedin" aria-hidden="true"></i>Linkedin</li>
                                        <li><i className="fa fa-youtube" aria-hidden="true"></i>Youtube</li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div className="footer-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 column">
                        <div className="copyright"><a href="#">Foundtrip.com</a> &copy; 2023 All Right Reserved</div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 column">
                        <ul className="footer-nav">
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer