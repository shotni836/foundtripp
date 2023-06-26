import React from 'react'
import OtherHeader from '../../OtherHeader/OtherHeader'
import './ToursPackagesListing.css'
import seasonal3 from '../../../assets/images/found_trip/seasonal tour/seasonal3.jpg'
import Footer from '../../Footer/Footer'
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";


const  ToursPackagesListing = () => {
  return (
    <div className="tourPackageListing">
        <OtherHeader className='header-render'/>
        <div className="container">
            <div className='filters'>
                <button className='btn btn-primary'>Rating High to Low</button>
                <button className='btn btn-primary'>Price Low to High</button>
                <button className='btn btn-primary'>Most Viewed</button>
            </div>
            <h3 className='h3'>Bali Tour Packages</h3>
            <h6 className='h6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h6>
            
            <div className='tourpackagelist'>
            <Link to='/tourpackagesdetail'><img src={seasonal3} style={{height: '320px', width: '350px'}} alt="" /></Link>
                <div className='mx-4 detail'>
                    <h5>Bali Tour Packages 4 Days 3 Nights</h5>
                    <span>Kuta (2N) + Ubud (1N)</span>
                    <p className='circle-attraction'>
                        <span>Attraction</span>
                        <span>Leisure</span>
                    </p>
                    <ul style={{listStyleType: 'disc', paddingLeft: '10px', marginTop: '40px'}}>
                        <li>Guided Temple Tour: Taman Ayun Temple + Alas Kedaton Temple + Tanah Lot Temple</li>
                        <li>Experience Sunset at Uluwatu Temple</li>
                        <li>Sacred Temple of Lempuyang,Tirtha Gangga Holy Bathing and Toekad Cepung</li>
                    </ul>
                </div>
                <div className='more-details'>
                    <p>Inclusions (Customizable)</p>
                    <p><i class="fa fa-check" aria-hidden="true"></i> Hotels</p>
                    <p><i class="fa fa-check" aria-hidden="true"></i> 5 Activities</p>
                    <p><i class="fa fa-check" aria-hidden="true"></i> Transfers</p>
                    <p><i class="fa fa-times" aria-hidden="true"></i> Flights</p>
                    <p>Starts from <br /> Rs. 20,500/person</p>
                    <Link to='/tourpackagesdetail'><button className='btn btn-success w-100 mt-4'>View Deal</button></Link>
                </div>
            </div>
            <div className='tourpackagelist'>
            <Link to='/tourpackagesdetail'><img src={seasonal3} style={{height: '320px', width: '350px'}} alt="" /></Link>
                <div className='mx-4 detail'>
                    <h5>Bali Tour Packages 4 Days 3 Nights</h5>
                    <span>Kuta (2N) + Ubud (1N)</span>
                    <p className='circle-attraction'>
                        <span>Attraction</span>
                        <span>Leisure</span>
                    </p>
                    <ul style={{listStyleType: 'disc', paddingLeft: '10px', marginTop: '40px'}}>
                        <li>Guided Temple Tour: Taman Ayun Temple + Alas Kedaton Temple + Tanah Lot Temple</li>
                        <li>Experience Sunset at Uluwatu Temple</li>
                        <li>Sacred Temple of Lempuyang,Tirtha Gangga Holy Bathing and Toekad Cepung</li>
                    </ul>
                </div>
                <div className='more-details'>
                    <p>Inclusions (Customizable)</p>
                    <p><i class="fa fa-check" aria-hidden="true"></i> Hotels</p>
                    <p><i class="fa fa-check" aria-hidden="true"></i> 5 Activities</p>
                    <p><i class="fa fa-check" aria-hidden="true"></i> Transfers</p>
                    <p><i class="fa fa-times" aria-hidden="true"></i> Flights</p>
                    <p>Starts from <br /> Rs. 20,500/person</p>
                    <Link to='/tourpackagesdetail'><button className='btn btn-success w-100 mt-4'>View Deal</button></Link>
                </div>
            </div>
            <div className='tourpackagelist'>
            <Link to='/tourpackagesdetail'><img src={seasonal3} style={{height: '320px', width: '350px'}} alt="" /></Link>
                <div className='mx-4 detail'>
                    <h5>Bali Tour Packages 4 Days 3 Nights</h5>
                    <span>Kuta (2N) + Ubud (1N)</span>
                    <p className='circle-attraction'>
                        <span>Attraction</span>
                        <span>Leisure</span>
                    </p>
                    <ul style={{listStyleType: 'disc', paddingLeft: '10px', marginTop: '40px'}}>
                        <li>Guided Temple Tour: Taman Ayun Temple + Alas Kedaton Temple + Tanah Lot Temple</li>
                        <li>Experience Sunset at Uluwatu Temple</li>
                        <li>Sacred Temple of Lempuyang,Tirtha Gangga Holy Bathing and Toekad Cepung</li>
                    </ul>
                </div>
                <div className='more-details'>
                    <p>Inclusions (Customizable)</p>
                    <p><i class="fa fa-check" aria-hidden="true"></i> Hotels</p>
                    <p><i class="fa fa-check" aria-hidden="true"></i> 5 Activities</p>
                    <p><i class="fa fa-check" aria-hidden="true"></i> Transfers</p>
                    <p><i class="fa fa-times" aria-hidden="true"></i> Flights</p>
                    <p>Starts from <br /> Rs. 20,500/person</p>
                    <Link to='/tourpackagesdetail'><button className='btn btn-success w-100 mt-4'>View Deal</button></Link>
                </div>
            </div>
            <div className='tourpackagelist'>
            <Link to='/tourpackagesdetail'><img src={seasonal3} style={{height: '320px', width: '350px'}} alt="" /></Link>
                <div className='mx-4 detail'>
                    <h5>Bali Tour Packages 4 Days 3 Nights</h5>
                    <span>Kuta (2N) + Ubud (1N)</span>
                    <p className='circle-attraction'>
                        <span>Attraction</span>
                        <span>Leisure</span>
                    </p>
                    <ul style={{listStyleType: 'disc', paddingLeft: '10px', marginTop: '40px'}}>
                        <li>Guided Temple Tour: Taman Ayun Temple + Alas Kedaton Temple + Tanah Lot Temple</li>
                        <li>Experience Sunset at Uluwatu Temple</li>
                        <li>Sacred Temple of Lempuyang,Tirtha Gangga Holy Bathing and Toekad Cepung</li>
                    </ul>
                </div>
                <div className='more-details'>
                    <p>Inclusions (Customizable)</p>
                    <p><i class="fa fa-check" aria-hidden="true"></i> Hotels</p>
                    <p><i class="fa fa-check" aria-hidden="true"></i> 5 Activities</p>
                    <p><i class="fa fa-check" aria-hidden="true"></i> Transfers</p>
                    <p><i class="fa fa-times" aria-hidden="true"></i> Flights</p>
                    <p>Starts from <br /> Rs. 20,500/person</p>
                    <Link to='/tourpackagesdetail'><button className='btn btn-success w-100 mt-4'>View Deal</button></Link>
                </div>
            </div>
            <div className='tourpackagelist'>
            <Link to='/tourpackagesdetail'><img src={seasonal3} style={{height: '320px', width: '350px'}} alt="" /></Link>
                <div className='mx-4 detail'>
                    <h5>Bali Tour Packages 4 Days 3 Nights</h5>
                    <span>Kuta (2N) + Ubud (1N)</span>
                    <p className='circle-attraction'>
                        <span>Attraction</span>
                        <span>Leisure</span>
                    </p>
                    <ul style={{listStyleType: 'disc', paddingLeft: '10px', marginTop: '40px'}}>
                        <li>Guided Temple Tour: Taman Ayun Temple + Alas Kedaton Temple + Tanah Lot Temple</li>
                        <li>Experience Sunset at Uluwatu Temple</li>
                        <li>Sacred Temple of Lempuyang,Tirtha Gangga Holy Bathing and Toekad Cepung</li>
                    </ul>
                </div>
                <div className='more-details'>
                    <p>Inclusions (Customizable)</p>
                    <p><i class="fa fa-check" aria-hidden="true"></i> Hotels</p>
                    <p><i class="fa fa-check" aria-hidden="true"></i> 5 Activities</p>
                    <p><i class="fa fa-check" aria-hidden="true"></i> Transfers</p>
                    <p><i class="fa fa-times" aria-hidden="true"></i> Flights</p>
                    <p>Starts from <br /> Rs. 20,500/person</p>
                    <Link to='/tourpackagesdetail'><button className='btn btn-success w-100 mt-4'>View Deal</button></Link>
                </div>
            </div>
            <div className='tourpackagelist'>
            <Link to='/tourpackagesdetail'><img src={seasonal3} style={{height: '320px', width: '350px'}} alt="" /></Link>
                <div className='mx-4 detail'>
                    <h5>Bali Tour Packages 4 Days 3 Nights</h5>
                    <span>Kuta (2N) + Ubud (1N)</span>
                    <p className='circle-attraction'>
                        <span>Attraction</span>
                        <span>Leisure</span>
                    </p>
                    <ul style={{listStyleType: 'disc', paddingLeft: '10px', marginTop: '40px'}}>
                        <li>Guided Temple Tour: Taman Ayun Temple + Alas Kedaton Temple + Tanah Lot Temple</li>
                        <li>Experience Sunset at Uluwatu Temple</li>
                        <li>Sacred Temple of Lempuyang,Tirtha Gangga Holy Bathing and Toekad Cepung</li>
                    </ul>
                </div>
                <div className='more-details'>
                    <p>Inclusions (Customizable)</p>
                    <p><i class="fa fa-check" aria-hidden="true"></i> Hotels</p>
                    <p><i class="fa fa-check" aria-hidden="true"></i> 5 Activities</p>
                    <p><i class="fa fa-check" aria-hidden="true"></i> Transfers</p>
                    <p><i class="fa fa-times" aria-hidden="true"></i> Flights</p>
                    <p>Starts from <br /> Rs. 20,500/person</p>
                    <Link to='/tourpackagesdetail'><button className='btn btn-success w-100 mt-4'>View Deal</button></Link>
                </div>
            </div>
            <div className='tourpackagelist'>
            <Link to='/tourpackagesdetail'><img src={seasonal3} style={{height: '320px', width: '350px'}} alt="" /></Link>
                <div className='mx-4 detail'>
                    <h5>Bali Tour Packages 4 Days 3 Nights</h5>
                    <span>Kuta (2N) + Ubud (1N)</span>
                    <p className='circle-attraction'>
                        <span>Attraction</span>
                        <span>Leisure</span>
                    </p>
                    <ul style={{listStyleType: 'disc', paddingLeft: '10px', marginTop: '40px'}}>
                        <li>Guided Temple Tour: Taman Ayun Temple + Alas Kedaton Temple + Tanah Lot Temple</li>
                        <li>Experience Sunset at Uluwatu Temple</li>
                        <li>Sacred Temple of Lempuyang,Tirtha Gangga Holy Bathing and Toekad Cepung</li>
                    </ul>
                </div>
                <div className='more-details'>
                    <p>Inclusions (Customizable)</p>
                    <p><i class="fa fa-check" aria-hidden="true"></i> Hotels</p>
                    <p><i class="fa fa-check" aria-hidden="true"></i> 5 Activities</p>
                    <p><i class="fa fa-check" aria-hidden="true"></i> Transfers</p>
                    <p><i class="fa fa-times" aria-hidden="true"></i> Flights</p>
                    <p>Starts from <br /> Rs. 20,500/person</p>
                    <Link to='/tourpackagesdetail'><button className='btn btn-success w-100 mt-4'>View Deal</button></Link>
                </div>
            </div>
            <div className='tourpackagelist'>
            <Link to='/tourpackagesdetail'><img src={seasonal3} style={{height: '320px', width: '350px'}} alt="" /></Link>
                <div className='mx-4 detail'>
                    <h5>Bali Tour Packages 4 Days 3 Nights</h5>
                    <span>Kuta (2N) + Ubud (1N)</span>
                    <p className='circle-attraction'>
                        <span>Attraction</span>
                        <span>Leisure</span>
                    </p>
                    <ul style={{listStyleType: 'disc', paddingLeft: '10px', marginTop: '40px'}}>
                        <li>Guided Temple Tour: Taman Ayun Temple + Alas Kedaton Temple + Tanah Lot Temple</li>
                        <li>Experience Sunset at Uluwatu Temple</li>
                        <li>Sacred Temple of Lempuyang,Tirtha Gangga Holy Bathing and Toekad Cepung</li>
                    </ul>
                </div>
                <div className='more-details'>
                    <p>Inclusions (Customizable)</p>
                    <p><i class="fa fa-check" aria-hidden="true"></i> Hotels</p>
                    <p><i class="fa fa-check" aria-hidden="true"></i> 5 Activities</p>
                    <p><i class="fa fa-check" aria-hidden="true"></i> Transfers</p>
                    <p><i class="fa fa-times" aria-hidden="true"></i> Flights</p>
                    <p>Starts from <br /> Rs. 20,500/person</p>
                    <Link to='/tourpackagesdetail'><button className='btn btn-success w-100 mt-4'>View Deal</button></Link>
                </div>
            </div>
            <div className='tourpackagelist'>
            <Link to='/tourpackagesdetail'><img src={seasonal3} style={{height: '320px', width: '350px'}} alt="" /></Link>
                <div className='mx-4 detail'>
                    <h5>Bali Tour Packages 4 Days 3 Nights</h5>
                    <span>Kuta (2N) + Ubud (1N)</span>
                    <p className='circle-attraction'>
                        <span>Attraction</span>
                        <span>Leisure</span>
                    </p>
                    <ul style={{listStyleType: 'disc', paddingLeft: '10px', marginTop: '40px'}}>
                        <li>Guided Temple Tour: Taman Ayun Temple + Alas Kedaton Temple + Tanah Lot Temple</li>
                        <li>Experience Sunset at Uluwatu Temple</li>
                        <li>Sacred Temple of Lempuyang,Tirtha Gangga Holy Bathing and Toekad Cepung</li>
                    </ul>
                </div>
                <div className='more-details'>
                    <p>Inclusions (Customizable)</p>
                    <p><i class="fa fa-check" aria-hidden="true"></i> Hotels</p>
                    <p><i class="fa fa-check" aria-hidden="true"></i> 5 Activities</p>
                    <p><i class="fa fa-check" aria-hidden="true"></i> Transfers</p>
                    <p><i class="fa fa-times" aria-hidden="true"></i> Flights</p>
                    <p>Starts from <br /> Rs. 20,500/person</p>
                    <Link to='/tourpackagesdetail'><button className='btn btn-success w-100 mt-4'>View Deal</button></Link>
                </div>
            </div>
            <div className='tourpackagelist'>
            <Link to='/tourpackagesdetail'><img src={seasonal3} style={{height: '320px', width: '350px'}} alt="" /></Link>
                <div className='mx-4 detail'>
                    <h5>Bali Tour Packages 4 Days 3 Nights</h5>
                    <span>Kuta (2N) + Ubud (1N)</span>
                    <p className='circle-attraction'>
                        <span>Attraction</span>
                        <span>Leisure</span>
                    </p>
                    <ul style={{listStyleType: 'disc', paddingLeft: '10px', marginTop: '40px'}}>
                        <li>Guided Temple Tour: Taman Ayun Temple + Alas Kedaton Temple + Tanah Lot Temple</li>
                        <li>Experience Sunset at Uluwatu Temple</li>
                        <li>Sacred Temple of Lempuyang,Tirtha Gangga Holy Bathing and Toekad Cepung</li>
                    </ul>
                </div>
                <div className='more-details'>
                    <p>Inclusions (Customizable)</p>
                    <p><i class="fa fa-check" aria-hidden="true"></i> Hotels</p>
                    <p><i class="fa fa-check" aria-hidden="true"></i> 5 Activities</p>
                    <p><i class="fa fa-check" aria-hidden="true"></i> Transfers</p>
                    <p><i class="fa fa-times" aria-hidden="true"></i> Flights</p>
                    <p>Starts from <br /> Rs. 20,500/person</p>
                    <Link to='/tourpackagesdetail'><button className='btn btn-success w-100 mt-4'>View Deal</button></Link>
                </div>
            </div>
            <div className='tourpackagelist'>
            <Link to='/tourpackagesdetail'><img src={seasonal3} style={{height: '320px', width: '350px'}} alt="" /></Link>
                <div className='mx-4 detail'>
                    <h5>Bali Tour Packages 4 Days 3 Nights</h5>
                    <span>Kuta (2N) + Ubud (1N)</span>
                    <p className='circle-attraction'>
                        <span>Attraction</span>
                        <span>Leisure</span>
                    </p>
                    <ul style={{listStyleType: 'disc', paddingLeft: '10px', marginTop: '40px'}}>
                        <li>Guided Temple Tour: Taman Ayun Temple + Alas Kedaton Temple + Tanah Lot Temple</li>
                        <li>Experience Sunset at Uluwatu Temple</li>
                        <li>Sacred Temple of Lempuyang,Tirtha Gangga Holy Bathing and Toekad Cepung</li>
                    </ul>
                </div>
                <div className='more-details'>
                    <p>Inclusions (Customizable)</p>
                    <p><i class="fa fa-check" aria-hidden="true"></i> Hotels</p>
                    <p><i class="fa fa-check" aria-hidden="true"></i> 5 Activities</p>
                    <p><i class="fa fa-check" aria-hidden="true"></i> Transfers</p>
                    <p><i class="fa fa-times" aria-hidden="true"></i> Flights</p>
                    <p>Starts from <br /> Rs. 20,500/person</p>
                    <Link to='/tourpackagesdetail'><button className='btn btn-success w-100 mt-4'>View Deal</button></Link>
                </div>
            </div>
        </div>
        <div className='footer'>
            <Footer/>
        </div>
    </div>
  )
}

export default  ToursPackagesListing