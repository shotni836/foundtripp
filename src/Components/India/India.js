import React from 'react'
import './India.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img from '../../assets/images/main-banner2.svg'
import india1 from '../../assets/images/found_trip/best in india/1.jpg'
import india2 from '../../assets/images/found_trip/best in india/2.jpg'
import india3 from '../../assets/images/found_trip/best in india/3.jpg'
import india4 from '../../assets/images/found_trip/best in india/4.jpg'

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
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const India = () => {
  return (
    <div className='indiaTour'>
        <div className="container">
            <h4 className='h4-style'>Best in India</h4>
            <h6 className='h6-style'>Let's Travel</h6>
            
            <Carousel
                className='firstCarousel'
                responsive={responsive}
                autoPlay={true}
                infinite={true}
                autoPlaySpeed={3000}>
                    <div className="card indiaCarousel">
                        <div className='hover-effect'>
                            <img className="card-img-top" src={india2} alt="Card image cap"/>
                            <div className='package4'>
                                <h6 className='inside-h6'>Pilgrimage</h6>
                                <button>Know more</button>
                            </div>
                        </div>
                    </div>
                    <div className="card indiaCarousel">
                        <div className='hover-effect'>
                            <img className="card-img-top" src={india2} alt="Card image cap"/>
                            <div className='package4'>
                                <h6 className='inside-h6'>Pilgrimage</h6>
                                <button>Know more</button>
                            </div>
                        </div>
                    </div>
                    <div className="card indiaCarousel">
                        <div className='hover-effect'>
                            <img className="card-img-top" src={india2} alt="Card image cap"/>
                            <div className='package4'>
                                <h6 className='inside-h6'>Pilgrimage</h6>
                                <button>Know more</button>
                            </div>
                        </div>
                    </div>
                    <div className="card indiaCarousel">
                        <div className='hover-effect'>
                            <img className="card-img-top" src={india2} alt="Card image cap"/>
                            <div className='package4'>
                                <h6 className='inside-h6'>Pilgrimage</h6>
                                <button>Know more</button>
                            </div>
                        </div>
                    </div>
                    <div className="card indiaCarousel">
                        <div className='hover-effect'>
                            <img className="card-img-top" src={india2} alt="Card image cap"/>
                            <div className='package4'>
                                <h6 className='inside-h6'>Pilgrimage</h6>
                                <button>Know more</button>
                            </div>
                        </div>
                    </div>
                    <div className="card indiaCarousel">
                        <div className='hover-effect'>
                            <img className="card-img-top" src={india2} alt="Card image cap"/>
                            <div className='package4'>
                                <h6 className='inside-h6'>Pilgrimage</h6>
                                <button>Know more</button>
                            </div>
                        </div>
                    </div>
                    <div className="card indiaCarousel">
                        <div className='hover-effect'>
                            <img className="card-img-top" src={india2} alt="Card image cap"/>
                            <div className='package4'>
                                <h6 className='inside-h6'>Pilgrimage</h6>
                                <button>Know more</button>
                            </div>
                        </div>
                    </div>
                    <div className="card indiaCarousel">
                        <div className='hover-effect'>
                            <img className="card-img-top" src={india2} alt="Card image cap"/>
                            <div className='package4'>
                                <h6 className='inside-h6'>Pilgrimage</h6>
                                <button>Know more</button>
                            </div>
                        </div>
                    </div>
                </Carousel>
        </div>
    </div>
  )
}

export default India