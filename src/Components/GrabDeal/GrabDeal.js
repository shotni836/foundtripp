import React from 'react'
import './GrabDeal.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img from '../../assets/images/main-banner2.svg'
import grab1 from '../../assets/images/found_trip/GRAB/grab1.jpg'
import grab2 from '../../assets/images/found_trip/GRAB/grab2.jpg'
import grab3 from '../../assets/images/found_trip/GRAB/grab3.jpg'
import grab4 from '../../assets/images/found_trip/GRAB/grab4.jpeg'

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const GrabDeal = () => {
  return (
    <div className='grabdeal'>
        <div className="container">
            <h4>Grab the Deals</h4>
            <h6>Our best last minutes offers. Book and go!</h6>
            
            <Carousel
                className='firstCarousel'
                responsive={responsive}
                autoPlay={true}
                infinite={true}
                autoPlaySpeed={3000}>
                    <div className="card grabdealCarousel">
                        <div className='hover-effect'>
                            <img className="card-img-top" src={grab1} alt="Card image cap"/>
                            <span className='badge1'>$190 / person</span>
                            <div className='package1'>
                                <i className="fa fa-clock-o mx-2"></i>5D 4N <div className="vl mx-3"></div> <i className="fa fa-map-marker mx-2" aria-hidden="true"></i> Malaysia
                            </div>
                        </div>
                        <div className="card-body pt-4">
                            <button className='grabdealbutton'>Book now</button>
                        </div>
                    </div>
                    <div className="card grabdealCarousel">
                        <div className='hover-effect'>
                            <img className="card-img-top" src={grab2} alt="Card image cap"/>
                            <span className='badge1'>$190 / person</span>
                            <div className='package1'>
                                <i className="fa fa-clock-o mx-2"></i>5D 4N <div className="vl mx-3"></div> <i className="fa fa-map-marker mx-2" aria-hidden="true"></i> Malaysia
                            </div>
                        </div>
                        <div className="card-body pt-4">
                             <button className='grabdealbutton'>Book now</button>
                                
                        </div>
                    </div>
                    <div className="card grabdealCarousel">
                        <div className='hover-effect'>
                            <img className="card-img-top" src={grab3} alt="Card image cap"/>
                            <span className='badge1'>$190 / person</span>
                            <div className='package1'>
                                <i className="fa fa-clock-o mx-2"></i>5D 4N <div className="vl mx-3"></div> <i className="fa fa-map-marker mx-2" aria-hidden="true"></i> Malaysia
                            </div>
                        </div>
                        <div className="card-body pt-4">
                             <button className='grabdealbutton'>Book now</button>
                                
                        </div>
                    </div>
                    <div className="card grabdealCarousel">
                        <div className='hover-effect'>
                            <img className="card-img-top" src={grab1} alt="Card image cap"/>
                            <span className='badge1'>$190 / person</span>
                            <div className='package1'>
                                <i className="fa fa-clock-o mx-2"></i>5D 4N <div className="vl mx-3"></div> <i className="fa fa-map-marker mx-2" aria-hidden="true"></i> Malaysia
                            </div>
                        </div>
                        <div className="card-body pt-4">
                             <button className='grabdealbutton'>Book now</button>
                                
                        </div>
                    </div>
                    <div className="card grabdealCarousel">
                        <div className='hover-effect'>
                            <img className="card-img-top" src={grab2} alt="Card image cap"/>
                            <span className='badge1'>$190 / person</span>
                            <div className='package1'>
                                <i className="fa fa-clock-o mx-2"></i>5D 4N <div className="vl mx-3"></div> <i className="fa fa-map-marker mx-2" aria-hidden="true"></i> Malaysia
                            </div>
                        </div>
                        <div className="card-body pt-4">
                             <button className='grabdealbutton'>Book now</button>
                                
                        </div>
                    </div>
                    <div className="card grabdealCarousel">
                        <div className='hover-effect'>
                            <img className="card-img-top" src={grab3} alt="Card image cap"/>
                            <span className='badge1'>$190 / person</span>
                            <div className='package1'>
                                <i className="fa fa-clock-o mx-2"></i>5D 4N <div className="vl mx-3"></div> <i className="fa fa-map-marker mx-2" aria-hidden="true"></i> Malaysia
                            </div>
                        </div>
                        <div className="card-body pt-4">
                             <button className='grabdealbutton'>Book now</button>
                                
                        </div>
                    </div>
                    <div className="card grabdealCarousel">
                        <div className='hover-effect'>
                            <img className="card-img-top" src={grab1} alt="Card image cap"/>
                            <span className='badge1'>$190 / person</span>
                            <div className='package1'>
                                <i className="fa fa-clock-o mx-2"></i>5D 4N <div className="vl mx-3"></div> <i className="fa fa-map-marker mx-2" aria-hidden="true"></i> Malaysia
                            </div>
                        </div>
                        <div className="card-body pt-4">
                             <button className='grabdealbutton'>Book now</button>
                                
                        </div>
                    </div>
                </Carousel>
        </div>
    </div>
  )
}

export default GrabDeal