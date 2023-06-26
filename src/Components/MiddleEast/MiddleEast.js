import React from 'react'
import './MiddleEast.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img from '../../assets/images/main-banner2.svg'
import east1 from '../../assets/images/found_trip/MIDDLE EAST/1.jpg'
import east2 from '../../assets/images/found_trip/MIDDLE EAST/2.jpg'
import east3 from '../../assets/images/found_trip/MIDDLE EAST/3.webp'
import east4 from '../../assets/images/found_trip/MIDDLE EAST/4.webp'

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
const MiddleEast = () => {
  return (
    <div className='middleeast'>
        <div className="container">
            <h4>Middle East</h4>
            <h6>We see the world with new eyes</h6>
            
            <Carousel
                className='firstCarousel'
                responsive={responsive}
                autoPlay={true}
                infinite={true}
                autoPlaySpeed={3000}>
                    <div className="card middleeastCarousel">
                        <div className='hover-effect'>
                            <img className="card-img-top" src={east1} alt="Card image cap"/>
                            <div className='addBg'>
                                <span><i className="fa fa-map-marker" aria-hidden="true"></i> France</span>
                            </div>
                        </div>
                    </div>
                    <div className="card middleeastCarousel">
                        <div className='hover-effect'>
                            <img className="card-img-top" src={east2} alt="Card image cap"/>
                            <div className='addBg'>
                                <span><i className="fa fa-map-marker" aria-hidden="true"></i> France</span>
                            </div>
                        </div>
                    </div>
                    <div className="card middleeastCarousel">
                        <div className='hover-effect'>
                            <img className="card-img-top" src={east3} alt="Card image cap"/>
                            <div className='addBg'>
                                <span><i className="fa fa-map-marker" aria-hidden="true"></i> France</span>
                            </div>
                        </div>
                    </div>
                    <div className="card middleeastCarousel">
                        <div className='hover-effect'>
                            <img className="card-img-top" src={east4} alt="Card image cap"/>
                            <div className='addBg'>
                                <span><i className="fa fa-map-marker" aria-hidden="true"></i> France</span>
                            </div>
                        </div>
                    </div>
                    <div className="card middleeastCarousel">
                        <div className='hover-effect'>
                            <img className="card-img-top" src={east1} alt="Card image cap"/>
                            <div className='addBg'>
                                <span><i className="fa fa-map-marker" aria-hidden="true"></i> France</span>
                            </div>
                        </div>
                    </div>
                    <div className="card middleeastCarousel">
                        <div className='hover-effect'>
                            <img className="card-img-top" src={east3} alt="Card image cap"/>
                            <div className='addBg'>
                                <span><i className="fa fa-map-marker" aria-hidden="true"></i> France</span>
                            </div>
                        </div>
                    </div>
                    <div className="card middleeastCarousel">
                        <div className='hover-effect'>
                            <img className="card-img-top" src={east4} alt="Card image cap"/>
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

export default MiddleEast