import React from 'react'
import './Europe.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img from '../../assets/images/main-banner2.svg'
import europe1 from '../../assets/images/found_trip/EUROPE/1.jpg'
import europe2 from '../../assets/images/found_trip/EUROPE/2.webp'

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
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
  const responsive2 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Europe = () => {
  return (
    <div className='europe'>
        <div className="container">
            <h4>Europe</h4>
            <h6>We see the world with new eyes</h6>
            
            <Carousel
                className='firstCarousel'
                responsive={responsive}
                infinite={true}
            >
                    <div className="card europeCarousel">
                        <div className='hover-effect'>
                        <img className="card-img-top" src={europe1} alt="Card image cap"/>
                        <div className='seen-on-hover'>
                            <img className="card-img-top" src={europe2} alt="Card image cap"/>
                        </div>
                            {/* <Carousel
                            className='firstCarousel'
                            responsive={responsive2}
                            pauseOnHover={false}
                            arrows={false}>
                                
                                <img className="card-img-top" src={europe1} alt="Card image cap"/>
                                <img className="card-img-top" src={europe2} alt="Card image cap"/>
                            </Carousel> */}
                            <div className='addBg'>
                                <span><i className="fa fa-map-marker" aria-hidden="true"></i> France</span>
                            </div>
                        </div>
                    </div>
                    <div className="card europeCarousel">
                        <div className='hover-effect'>
                            <img className="card-img-top" src={europe1} alt="Card image cap"/>
                            <div className='seen-on-hover'>
                                <img className="card-img-top" src={europe2} alt="Card image cap"/>
                            </div>
                            <div className='addBg'>
                                <span><i className="fa fa-map-marker" aria-hidden="true"></i> France</span>
                            </div>
                        </div>
                    </div>
                    <div className="card europeCarousel">
                        <div className='hover-effect'>
                            <img className="card-img-top" src={europe1} alt="Card image cap"/>
                            <div className='seen-on-hover'>
                                <img className="card-img-top" src={europe2} alt="Card image cap"/>
                            </div>
                            <div className='addBg'>
                                <span><i className="fa fa-map-marker" aria-hidden="true"></i> France</span>
                            </div>
                        </div>
                    </div>
                    <div className="card europeCarousel">
                        <div className='hover-effect'>
                            <img className="card-img-top" src={europe1} alt="Card image cap"/>
                            <div className='seen-on-hover'>
                                <img className="card-img-top" src={europe2} alt="Card image cap"/>
                            </div>
                            <div className='addBg'>
                                <span><i className="fa fa-map-marker" aria-hidden="true"></i> France</span>
                            </div>
                        </div>
                    </div>
                    <div className="card europeCarousel">
                        <div className='hover-effect'>
                            <img className="card-img-top" src={europe1} alt="Card image cap"/>
                            <div className='seen-on-hover'>
                                <img className="card-img-top" src={europe2} alt="Card image cap"/>
                            </div>
                            <div className='addBg'>
                                <span><i className="fa fa-map-marker" aria-hidden="true"></i> France</span>
                            </div>
                        </div>
                    </div>
                    <div className="card europeCarousel">
                        <div className='hover-effect'>
                            <img className="card-img-top" src={europe1} alt="Card image cap"/>
                            <div className='seen-on-hover'>
                                <img className="card-img-top" src={europe2} alt="Card image cap"/>
                            </div>
                            <div className='addBg'>
                                <span><i className="fa fa-map-marker" aria-hidden="true"></i> France</span>
                            </div>
                        </div>
                    </div>
                    <div className="card europeCarousel">
                        <div className='hover-effect'>
                            <img className="card-img-top" src={europe1} alt="Card image cap"/>
                            <div className='seen-on-hover'>
                                <img className="card-img-top" src={europe2} alt="Card image cap"/>
                            </div>
                            <div className='addBg'>
                                <span><i className="fa fa-map-marker" aria-hidden="true"></i> France</span>
                            </div>
                        </div>
                    </div>
                </Carousel>
        </div>
    </div>
  )
}

export default Europe