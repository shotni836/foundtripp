import React from 'react'
import './InternationDeals.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img from '../../assets/images/main-banner2.svg'
import deal1 from '../../assets/images/found_trip/internatioanl deals/1.jpg'
import deal2 from '../../assets/images/found_trip/internatioanl deals/2.jpg'
import deal3 from '../../assets/images/found_trip/internatioanl deals/3.jpg'

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const InternationDeals = () => {
  return (
    <div className='internationaldeals'>
        <div className="container">
            <h4>Top International Deals</h4>
            <h6>We see the world with new eyes</h6>
            
            <Carousel
                className='firstCarousel'
                responsive={responsive}
                autoPlay={true}
                infinite={true}
                autoPlaySpeed={3000}>
                    <div className="card internationdealCarousel">
                        <div className='hover-effect'>
                            <img className="card-img-top" src={deal1} alt="Card image cap"/>

                        </div>
                        <div className="card-body pt-4">
                            <p className='header'><i className="fa fa-map-marker" aria-hidden="true"></i> Rome</p>
                            <hr className='hr'/>
                            <p>Rome is the capital of Italy. It is also the capital of <strong>Lazio Region</strong></p>
                            <hr className='hr'/>
                            <div className='d-flex rating-section'>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className=''>25 review</span>
                            </div>
                        </div>
                    </div>
                    <div className="card internationdealCarousel">
                        <div className='hover-effect'>
                            <img className="card-img-top" src={deal2} alt="Card image cap"/>

                        </div>
                        <div className="card-body pt-4">
                            <p className='header'><i className="fa fa-map-marker" aria-hidden="true"></i> Rome</p>
                            <hr className='hr'/>
                            <p>Rome is the capital of Italy. It is also the capital of <strong>Lazio Region</strong></p>
                            <hr className='hr'/>
                            <div className='d-flex rating-section'>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className=''>25 review</span>
                            </div>
                        </div>
                    </div>
                    <div className="card internationdealCarousel">
                        <div className='hover-effect'>
                            <img className="card-img-top" src={deal3} alt="Card image cap"/>

                        </div>
                        <div className="card-body pt-4">
                            <p className='header'><i className="fa fa-map-marker" aria-hidden="true"></i> Rome</p>
                            <hr className='hr'/>
                            <p>Rome is the capital of Italy. It is also the capital of <strong>Lazio Region</strong></p>
                            <hr className='hr'/>
                            <div className='d-flex rating-section'>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className=''>25 review</span>
                            </div>
                        </div>
                    </div>
                    <div className="card internationdealCarousel">
                        <div className='hover-effect'>
                            <img className="card-img-top" src={deal1} alt="Card image cap"/>

                        </div>
                        <div className="card-body pt-4">
                            <p className='header'><i className="fa fa-map-marker" aria-hidden="true"></i> Rome</p>
                            <hr className='hr'/>
                            <p>Rome is the capital of Italy. It is also the capital of <strong>Lazio Region</strong></p>
                            <hr className='hr'/>
                            <div className='d-flex rating-section'>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className=''>25 review</span>
                            </div>
                        </div>
                    </div>
                    <div className="card internationdealCarousel">
                        <div className='hover-effect'>
                            <img className="card-img-top" src={deal2} alt="Card image cap"/>

                        </div>
                        <div className="card-body pt-4">
                            <p className='header'><i className="fa fa-map-marker" aria-hidden="true"></i> Rome</p>
                            <hr className='hr'/>
                            <p>Rome is the capital of Italy. It is also the capital of <strong>Lazio Region</strong></p>
                            <hr className='hr'/>
                            <div className='d-flex rating-section'>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className=''>25 review</span>
                            </div>
                        </div>
                    </div>
                    <div className="card internationdealCarousel">
                        <div className='hover-effect'>
                            <img className="card-img-top" src={deal3} alt="Card image cap"/>

                        </div>
                        <div className="card-body pt-4">
                            <p className='header'><i className="fa fa-map-marker" aria-hidden="true"></i> Rome</p>
                            <hr className='hr'/>
                            <p>Rome is the capital of Italy. It is also the capital of <strong>Lazio Region</strong></p>
                            <hr className='hr'/>
                            <div className='d-flex rating-section'>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className=''>25 review</span>
                            </div>
                        </div>
                    </div>
                    <div className="card internationdealCarousel">
                        <div className='hover-effect'>
                            <img className="card-img-top" src={deal1} alt="Card image cap"/>

                        </div>
                        <div className="card-body pt-4">
                            <p className='header'><i className="fa fa-map-marker" aria-hidden="true"></i> Rome</p>
                            <hr className='hr'/>
                            <p>Rome is the capital of Italy. It is also the capital of <strong>Lazio Region</strong></p>
                            <hr className='hr'/>
                            <div className='d-flex rating-section'>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className=''>25 review</span>
                            </div>
                        </div>
                    </div>
                </Carousel>
        </div>
    </div>
  )
}

export default InternationDeals