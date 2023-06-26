import React from 'react'
import './SeasonalTour.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img from '../../assets/images/main-banner2.svg'
import seasonal1 from '../../assets/images/found_trip/seasonal tour/seasonal1.jpg'
import seasonal2 from '../../assets/images/found_trip/seasonal tour/seasonal2.jpg'
import seasonal3 from '../../assets/images/found_trip/seasonal tour/seasonal3.jpg'
import winter from '../../assets/images/found_trip/icon/winter.svg'
import rain from '../../assets/images/found_trip/icon/rain.svg'
import summer from '../../assets/images/found_trip/icon/summer.svg'
import Snowfall from 'react-snowfall'
import  Rainfall  from  'react-rainfall-animation/src/Rain'

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
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const SeasonalTour = () => {
  return (
    <div className='seasonaltour'>
        <div className="container">
            <h4 className='h4-style'>Seasonal Tour</h4>
            <h6 className='h6-style'>Our best last minutes offers. Book now and go!</h6>

            <div className="row">
                <div className="col">
                    <div className="card seasonaltourCarousel">
                        <div className='hover-effect'>
                            <Snowfall />
                            <img className="card-img-top change-height" src={seasonal2} alt="Card image cap"/>
                            <span className='badge2'><img className="card-img-top" src={winter} alt="Card image cap"/></span>
                            <div className='package2'>
                                <h6 className='inside-h6'>Winter</h6>
                                <p className='inside-p'>Experience natural beauty of glacier</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card seasonaltourCarousel">
                        <div className='hover-effect'>
                            <img className="card-img-top change-height" src={seasonal3} alt="Card image cap"/>
                            <span className='badge2'><img className="card-img-top" src={summer} alt="Card image cap"/></span>
                            <div className='package2'>
                                <h6 className='inside-h6'>Summer</h6>
                                <p className='inside-p'>Enjoy the mixed weather of beaches</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card seasonaltourCarousel">
                        <div className='hover-effect'>
                            <div id='Rain'>
                            <Rainfall dropletsAmount={200} />
                            </div>
                            
                            <img className="card-img-top change-height" src={seasonal1} alt="Card image cap"/>
                            <span className='badge2'><img className="card-img-top" src={rain} alt="Card image cap"/></span>
                            <div className='package2'>
                                <h6 className='inside-h6'>Monsoon</h6>
                                <p className='inside-p'>Witness heart-warming monsoon</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SeasonalTour