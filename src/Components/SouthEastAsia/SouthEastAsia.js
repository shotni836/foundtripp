import React from 'react'
import './SouthEastAsia.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img from '../../assets/images/main-banner2.svg'
import south1 from '../../assets/images/found_trip/south east asia/1.png'
import south2 from '../../assets/images/found_trip/south east asia/2.jpg'
import south3 from '../../assets/images/found_trip/south east asia/3.jpeg'
import south4 from '../../assets/images/found_trip/south east asia/4.png'

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

const SouthEastAsia = () => {
  return (
    <div className='southeastasia'>
        <div className="container">
            <h4>South East Asia</h4>
            <h6>We see the world with new eyes</h6>
            
            <Carousel
                className='firstCarousel'
                responsive={responsive}
                autoPlay={true}
                infinite={true}
                autoPlaySpeed={3000}>
                    <div className="card southEastAsiaCarousel">
                        <div className='hover-effect'>
                            <img className="card-img-top" src={south1} alt="Card image cap"/>
                            <div className='addBg'>
                                <span><i className="fa fa-map-marker" aria-hidden="true"></i> France</span>
                            </div>
                        </div>
                    </div>
                    <div className="card southEastAsiaCarousel">
                        <div className='hover-effect'>
                            <img className="card-img-top" src={south2} alt="Card image cap"/>
                            <div className='addBg'>
                                <span><i className="fa fa-map-marker" aria-hidden="true"></i> France</span>
                            </div>
                        </div>
                    </div>
                    <div className="card southEastAsiaCarousel">
                        <div className='hover-effect'>
                            <img className="card-img-top" src={south3} alt="Card image cap"/>
                            <div className='addBg'>
                                <span><i className="fa fa-map-marker" aria-hidden="true"></i> France</span>
                            </div>
                        </div>
                    </div>
                    <div className="card southEastAsiaCarousel">
                        <div className='hover-effect'>
                            <img className="card-img-top" src={south4} alt="Card image cap"/>
                            <div className='addBg'>
                                <span><i className="fa fa-map-marker" aria-hidden="true"></i> France</span>
                            </div>
                        </div>
                    </div>
                    <div className="card southEastAsiaCarousel">
                        <div className='hover-effect'>
                            <img className="card-img-top" src={south1} alt="Card image cap"/>
                            <div className='addBg'>
                                <span><i className="fa fa-map-marker" aria-hidden="true"></i> France</span>
                            </div>
                        </div>
                    </div>
                    <div className="card southEastAsiaCarousel">
                        <div className='hover-effect'>
                            <img className="card-img-top" src={south2} alt="Card image cap"/>
                            <div className='addBg'>
                                <span><i className="fa fa-map-marker" aria-hidden="true"></i> France</span>
                            </div>
                        </div>
                    </div>
                    <div className="card southEastAsiaCarousel">
                        <div className='hover-effect'>
                            <img className="card-img-top" src={south3} alt="Card image cap"/>
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

export default SouthEastAsia