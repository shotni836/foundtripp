import React from 'react'
import Header from '../../Header/Header'
import './ToursPackagesListing.css'
import popular from '../../../assets/images/found_trip/most popular/1.jpg'
import fire from '../../../assets/images/found_trip/fire.png'
import { Link } from "react-router-dom";
import Footer from '../../Footer/Footer'

const ToursPackagesListing = () => {
  return (
    <div className="tourPackageListing">
        <Header className='header-render'/>
        <div className="container">
            <h3 className='h3'>Popular Tour Packages</h3>
            <h6 className='h6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h6>


            <div className='filters'>
                <button className='btn btn-primary'>Rating High to Low</button>
                <button className='btn btn-primary'>Price Low to High</button>
                <button className='btn btn-primary'>Most Viewed</button>
            </div>

            <div className="images-grid">
                <div className="card card-details">
                    <div className='tourPackageListingImageDiv'>
                          <Link to='/tourpackagesdetail'><img className="card-img-top" src={popular} alt="Card image cap"/></Link>
                        <span className='badge3'><img src={fire} alt="" style={{height: '28px'}} /></span>
                    </div>
                    <div className="card-body tourPackageListingCard">
                        <p>Sunset view of beautiful lakeside</p>
                        <div className='d-flex rating-sec'>
                            <span className=''>(25 review) </span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                        </div>
                        <div className='d-flex list-details'>
                            <span><i className="fa fa-map-marker" aria-hidden="true"></i>Greece</span>
                            <span><i class="fa fa-clock-o" aria-hidden="true"></i>4 Days</span>
                            <span></span>
                        </div>
                        <div className='booktournow'>
                            <div>
                                <span>from</span><span> $2000/person</span>
                            </div>
                            <div>
                                <button className='grabdealbutton btn btn-success'>Book now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-details">
                    <div className='tourPackageListingImageDiv'>
                            <img className="card-img-top" src={popular} alt="Card image cap"/>
                        <span className='badge3'><img src={fire} alt="" style={{height: '28px'}} /></span>
                    </div>
                    <div className="card-body tourPackageListingCard">
                        <p>Sunset view of beautiful lakeside</p>
                        <div className='d-flex rating-sec'>
                            <span className=''>(25 review) </span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                        </div>
                        <div className='d-flex list-details'>
                            <span><i className="fa fa-map-marker" aria-hidden="true"></i>Greece</span>
                            <span><i class="fa fa-clock-o" aria-hidden="true"></i>4 Days</span>
                            <span></span>
                        </div>
                        <div className='booktournow'>
                            <div>
                                <span>from</span><span> $2000/person</span>
                            </div>
                            <div>
                                <button className='grabdealbutton btn btn-success'>Book now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-details">
                    <div className='tourPackageListingImageDiv'>
                            <img className="card-img-top" src={popular} alt="Card image cap"/>
                        <span className='badge3'><img src={fire} alt="" style={{height: '28px'}} /></span>
                    </div>
                    <div className="card-body tourPackageListingCard">
                        <p>Sunset view of beautiful lakeside</p>
                        <div className='d-flex rating-sec'>
                            <span className=''>(25 review) </span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                        </div>
                        <div className='d-flex list-details'>
                            <span><i className="fa fa-map-marker" aria-hidden="true"></i>Greece</span>
                            <span><i class="fa fa-clock-o" aria-hidden="true"></i>4 Days</span>
                            <span></span>
                        </div>
                        <div className='booktournow'>
                            <div>
                                <span>from</span><span> $2000/person</span>
                            </div>
                            <div>
                                <button className='grabdealbutton btn btn-success'>Book now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-details">
                    <div className='tourPackageListingImageDiv'>
                            <img className="card-img-top" src={popular} alt="Card image cap"/>
                        <span className='badge3'><img src={fire} alt="" style={{height: '28px'}} /></span>
                    </div>
                    <div className="card-body tourPackageListingCard">
                        <p>Sunset view of beautiful lakeside</p>
                        <div className='d-flex rating-sec'>
                            <span className=''>(25 review) </span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                        </div>
                        <div className='d-flex list-details'>
                            <span><i className="fa fa-map-marker" aria-hidden="true"></i>Greece</span>
                            <span><i class="fa fa-clock-o" aria-hidden="true"></i>4 Days</span>
                            <span></span>
                        </div>
                        <div className='booktournow'>
                            <div>
                                <span>from</span><span> $2000/person</span>
                            </div>
                            <div>
                                <button className='grabdealbutton btn btn-success'>Book now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-details">
                    <div className='tourPackageListingImageDiv'>
                            <img className="card-img-top" src={popular} alt="Card image cap"/>
                        <span className='badge3'><img src={fire} alt="" style={{height: '28px'}} /></span>
                    </div>
                    <div className="card-body tourPackageListingCard">
                        <p>Sunset view of beautiful lakeside</p>
                        <div className='d-flex rating-sec'>
                            <span className=''>(25 review) </span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                        </div>
                        <div className='d-flex list-details'>
                            <span><i className="fa fa-map-marker" aria-hidden="true"></i>Greece</span>
                            <span><i class="fa fa-clock-o" aria-hidden="true"></i>4 Days</span>
                            <span></span>
                        </div>
                        <div className='booktournow'>
                            <div>
                                <span>from</span><span> $2000/person</span>
                            </div>
                            <div>
                                <button className='grabdealbutton btn btn-success'>Book now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-details">
                    <div className='tourPackageListingImageDiv'>
                            <img className="card-img-top" src={popular} alt="Card image cap"/>
                        <span className='badge3'><img src={fire} alt="" style={{height: '28px'}} /></span>
                    </div>
                    <div className="card-body tourPackageListingCard">
                        <p>Sunset view of beautiful lakeside</p>
                        <div className='d-flex rating-sec'>
                            <span className=''>(25 review) </span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                        </div>
                        <div className='d-flex list-details'>
                            <span><i className="fa fa-map-marker" aria-hidden="true"></i>Greece</span>
                            <span><i class="fa fa-clock-o" aria-hidden="true"></i>4 Days</span>
                            <span></span>
                        </div>
                        <div className='booktournow'>
                            <div>
                                <span>from</span><span> $2000/person</span>
                            </div>
                            <div>
                                <button className='grabdealbutton btn btn-success'>Book now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-details">
                    <div className='tourPackageListingImageDiv'>
                            <img className="card-img-top" src={popular} alt="Card image cap"/>
                        <span className='badge3'><img src={fire} alt="" style={{height: '28px'}} /></span>
                    </div>
                    <div className="card-body tourPackageListingCard">
                        <p>Sunset view of beautiful lakeside</p>
                        <div className='d-flex rating-sec'>
                            <span className=''>(25 review) </span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                        </div>
                        <div className='d-flex list-details'>
                            <span><i className="fa fa-map-marker" aria-hidden="true"></i>Greece</span>
                            <span><i class="fa fa-clock-o" aria-hidden="true"></i>4 Days</span>
                            <span></span>
                        </div>
                        <div className='booktournow'>
                            <div>
                                <span>from</span><span> $2000/person</span>
                            </div>
                            <div>
                                <button className='grabdealbutton btn btn-success'>Book now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <Footer/>
    </div>
  )
}

export default ToursPackagesListing