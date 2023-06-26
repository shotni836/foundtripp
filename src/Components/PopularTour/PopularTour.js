import React from 'react'
import './PopularTour.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import popular from '../../assets/images/found_trip/most popular/1.jpg'
import { Link } from "react-router-dom";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
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

const PopularTour = () => {
  return (
    <div className='populartour'>
        <div className="container">
            <h4>Most Popular Tours</h4>
            <h6>Our best last minutes offers. Book now and go!</h6>
            
            <Carousel
                className='firstCarousel'
                responsive={responsive}
                infinite={true}
                autoPlay={true}>
                    <div className="card populartourCarousel">
                            <div className='populartourImageDiv'>
                                <Link to='/tourspackageslist'>
                                <img className="card-img-top" src={popular} alt="Card image cap"/>
                                </Link>
                                <span className='badge3'>$190 / person</span>
                                <div className='package3'>
                                    <i className="fa fa-clock-o mx-2"></i>5D 4N <div className="vl mx-3"></div> <i className="fa fa-map-marker mx-2" aria-hidden="true"></i> Malaysia
                                </div>
                            </div>
                        <div className="card-body pt-4 populartourCard">
                            <h5>Sunset view of beautiful lakeside</h5>
                            <div className='d-flex rating-sec'>
                                <span className=''>(25 review) </span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                            </div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <button className='grabdealbutton'>Book now</button>
                            <button className='grabdealbutton mt-2'>Add to wishlist</button>
                        </div>
                    </div>
                    <div className="card populartourCarousel">
                        <div className='populartourImageDiv'>
                            <Link to='/tourspackageslist'>
                                <img className="card-img-top" src={popular} alt="Card image cap"/>
                            </Link>
                            <span className='badge3'>$190 / person</span>
                            <div className='package3'>
                                <i className="fa fa-clock-o mx-2"></i>5D 4N <div className="vl mx-3"></div> <i className="fa fa-map-marker mx-2" aria-hidden="true"></i> Malaysia
                            </div>
                        </div>
                        <div className="card-body pt-4 populartourCard">
                            <h5>Sunset view of beautiful lakeside</h5>
                            <div className='d-flex rating-sec'>
                                <span className=''>(25 review) </span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                            </div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <button className='grabdealbutton'>Book now</button>
                            <button className='grabdealbutton mt-2'>Add to wishlist</button>
                        </div>
                    </div>
                    <div className="card populartourCarousel">
                        <div className='populartourImageDiv'>
                            <Link to='/tourspackageslist'>
                                <img className="card-img-top" src={popular} alt="Card image cap"/>
                            </Link>
                            <span className='badge3'>$190 / person</span>
                            <div className='package3'>
                                <i className="fa fa-clock-o mx-2"></i>5D 4N <div className="vl mx-3"></div> <i className="fa fa-map-marker mx-2" aria-hidden="true"></i> Malaysia
                            </div>
                        </div>
                        <div className="card-body pt-4 populartourCard">
                            <h5>Sunset view of beautiful lakeside</h5>
                            <div className='d-flex rating-sec'>
                                <span className=''>(25 review) </span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                            </div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <button className='grabdealbutton'>Book now</button>
                            <button className='grabdealbutton mt-2'>Add to wishlist</button>
                        </div>
                    </div>
                    <div className="card populartourCarousel">
                        <div className='populartourImageDiv'>
                            <Link to='/tourspackageslist'>
                                <img className="card-img-top" src={popular} alt="Card image cap"/>
                            </Link>
                            <span className='badge3'>$190 / person</span>
                            <div className='package3'>
                                <i className="fa fa-clock-o mx-2"></i>5D 4N <div className="vl mx-3"></div> <i className="fa fa-map-marker mx-2" aria-hidden="true"></i> Malaysia
                            </div>
                        </div>
                        <div className="card-body pt-4 populartourCard">
                            <h5>Sunset view of beautiful lakeside</h5>
                            <div className='d-flex rating-sec'>
                                <span className=''>(25 review) </span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                            </div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <button className='grabdealbutton'>Book now</button>
                            <button className='grabdealbutton mt-2'>Add to wishlist</button>
                        </div>
                    </div>
                    <div className="card populartourCarousel">
                        <div className='populartourImageDiv'>
                            <Link to='/tourspackageslist'>
                                <img className="card-img-top" src={popular} alt="Card image cap"/>
                            </Link>
                            <span className='badge3'>$190 / person</span>
                            <div className='package3'>
                                <i className="fa fa-clock-o mx-2"></i>5D 4N <div className="vl mx-3"></div> <i className="fa fa-map-marker mx-2" aria-hidden="true"></i> Malaysia
                            </div>
                        </div>
                        <div className="card-body pt-4 populartourCard">
                            <h5>Sunset view of beautiful lakeside</h5>
                            <div className='d-flex rating-sec'>
                                <span className=''>(25 review) </span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                            </div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <button className='grabdealbutton'>Book now</button>
                            <button className='grabdealbutton mt-2'>Add to wishlist</button>
                        </div>
                    </div>
                    <div className="card populartourCarousel">
                        <div className='populartourImageDiv'>
                            <Link to='/tourspackageslist'>
                                <img className="card-img-top" src={popular} alt="Card image cap"/>
                            </Link>
                            <span className='badge3'>$190 / person</span>
                            <div className='package3'>
                                <i className="fa fa-clock-o mx-2"></i>5D 4N <div className="vl mx-3"></div> <i className="fa fa-map-marker mx-2" aria-hidden="true"></i> Malaysia
                            </div>
                        </div>
                        <div className="card-body pt-4 populartourCard">
                            <h5>Sunset view of beautiful lakeside</h5>
                            <div className='d-flex rating-sec'>
                                <span className=''>(25 review) </span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                            </div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <button className='grabdealbutton'>Book now</button>
                            <button className='grabdealbutton mt-2'>Add to wishlist</button>
                        </div>
                    </div>
                    <div className="card populartourCarousel">
                        <div className='populartourImageDiv'>
                            <Link to='/tourspackageslist'>
                                <img className="card-img-top" src={popular} alt="Card image cap"/>
                            </Link>
                            <span className='badge3'>$190 / person</span>
                            <div className='package3'>
                                <i className="fa fa-clock-o mx-2"></i>5D 4N <div className="vl mx-3"></div> <i className="fa fa-map-marker mx-2" aria-hidden="true"></i> Malaysia
                            </div>
                        </div>
                        <div className="card-body pt-4 populartourCard">
                            <h5>Sunset view of beautiful lakeside</h5>
                            <div className='d-flex rating-sec'>
                                <span className=''>(25 review) </span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                            </div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <button className='grabdealbutton'>Book now</button>
                            <button className='grabdealbutton mt-2'>Add to wishlist</button>
                        </div>
                    </div>
                </Carousel>
        </div>
    </div>
  )
}

export default PopularTour