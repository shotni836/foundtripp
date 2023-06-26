import React, { useState } from 'react'
import './ChangeHotel.css'
import google_map from '../../assets/images/gmap.jpg'
import hotel_image from '../../assets/images/hotel_image1.jpg'
import hotel1 from '../../assets/images/hotel1.jpg'
import hotel2 from '../../assets/images/hotel2.jpg'
import hotel3 from '../../assets/images/hotel3.jpg'
import Success from '../Success/Success'

const ChangeHotel = () => {
    const [showLogin, setShowLogin] = useState(false);
  return (
    <div>
      <div className="changeFlight">
        <header className="change-hotel-header">
            <div className="container" style={{ color: 'rgb(16, 165, 178)'}}><i class="fa fa-building" aria-hidden="true" style={{ marginRight: '10px' }}></i> Change Hotel</div>
        </header>
      <div className="container mt-5">
        <div className="row">
        <div className="col-7">
            <div className='tourpackagelist' onClick={() => setShowLogin(true)}>
            <Success show={showLogin} close={() => setShowLogin(false)} />
            <img className='google_map' src={hotel_image} alt="" />
                <div className='mx-4 p-2'>
                    <h6>Bali Tour Packages 4 Days 3 Nights</h6>
                    <span>In Rome (Quartiere XXXI Giuliano Dalmata) </span>
                    <ul className='ul-style'>
                        <li><i class="fa fa-check" aria-hidden="true" style={{ marginRight: '10px' }}></i> Refundale</li>
                        <li><i class="fa fa-check" aria-hidden="true" style={{ marginRight: '10px' }}></i> Swimming pool</li>
                        <li><i class="fa fa-check" aria-hidden="true" style={{ marginRight: '10px' }}></i> Extra mattress</li>
                        <li><i class="fa fa-times" aria-hidden="true" style={{ marginRight: '10px' }}></i> breakfast</li>
                    </ul>
                    <div className='price-symbol-green'><i class="fa fa-angle-double-down" aria-hidden="true"></i> &#8377; 1200</div>
                </div>
            </div>
            <div className='tourpackagelist' onClick={() => setShowLogin(true)}>
            <img className='google_map' src={hotel3} alt="" />
                <div className='mx-4 p-2'>
                    <h6>Bali Tour Packages 4 Days 3 Nights</h6>
                    <span>In Rome (Quartiere XXXI Giuliano Dalmata) </span>
                    <ul className='ul-style'>
                        <li><i class="fa fa-check" aria-hidden="true" style={{ marginRight: '10px' }}></i> Refundale</li>
                        <li><i class="fa fa-check" aria-hidden="true" style={{ marginRight: '10px' }}></i> Swimming pool</li>
                        <li><i class="fa fa-check" aria-hidden="true" style={{ marginRight: '10px' }}></i> Extra mattress</li>
                        <li><i class="fa fa-times" aria-hidden="true" style={{ marginRight: '10px' }}></i> breakfast</li>
                    </ul>
                    <div className='price-symbol-red'><i class="fa fa-angle-double-up" aria-hidden="true"></i> &#8377; 1200</div>
                </div>
            </div>
            <div className='tourpackagelist' onClick={() => setShowLogin(true)}>
            <img className='google_map' src={hotel2} alt="" />
                <div className='mx-4 p-2'>
                    <h6>Bali Tour Packages 4 Days 3 Nights</h6>
                    <span>In Rome (Quartiere XXXI Giuliano Dalmata) </span>
                    <ul className='ul-style'>
                        <li><i class="fa fa-check" aria-hidden="true" style={{ marginRight: '10px' }}></i> Refundale</li>
                        <li><i class="fa fa-check" aria-hidden="true" style={{ marginRight: '10px' }}></i> Swimming pool</li>
                        <li><i class="fa fa-check" aria-hidden="true" style={{ marginRight: '10px' }}></i> Extra mattress</li>
                        <li><i class="fa fa-times" aria-hidden="true" style={{ marginRight: '10px' }}></i> breakfast</li>
                    </ul>
                    <div className='price-symbol-green'><i class="fa fa-angle-double-down" aria-hidden="true"></i> &#8377; 1200</div>
                </div>
            </div>
            <div className='tourpackagelist' onClick={() => setShowLogin(true)}>
            <img className='google_map' src={hotel1} alt="" />
                <div className='mx-4 p-2'>
                    <h6>Bali Tour Packages 4 Days 3 Nights</h6>
                    <span>In Rome (Quartiere XXXI Giuliano Dalmata) </span>
                    <ul className='ul-style'>
                        <li><i class="fa fa-check" aria-hidden="true" style={{ marginRight: '10px' }}></i> Refundale</li>
                        <li><i class="fa fa-check" aria-hidden="true" style={{ marginRight: '10px' }}></i> Swimming pool</li>
                        <li><i class="fa fa-check" aria-hidden="true" style={{ marginRight: '10px' }}></i> Extra mattress</li>
                        <li><i class="fa fa-times" aria-hidden="true" style={{ marginRight: '10px' }}></i> breakfast</li>
                    </ul>
                    <div className='price-symbol-green'><i class="fa fa-angle-double-down" aria-hidden="true"></i> &#8377; 1200</div>
                </div>
            </div>
            <div className='tourpackagelist' onClick={() => setShowLogin(true)}>
            <img className='google_map' src={hotel2} alt="" />
                <div className='mx-4 p-2'>
                    <h6>Bali Tour Packages 4 Days 3 Nights</h6>
                    <span>In Rome (Quartiere XXXI Giuliano Dalmata) </span>
                    <ul className='ul-style'>
                        <li><i class="fa fa-check" aria-hidden="true" style={{ marginRight: '10px' }}></i> Refundale</li>
                        <li><i class="fa fa-check" aria-hidden="true" style={{ marginRight: '10px' }}></i> Swimming pool</li>
                        <li><i class="fa fa-check" aria-hidden="true" style={{ marginRight: '10px' }}></i> Extra mattress</li>
                        <li><i class="fa fa-times" aria-hidden="true" style={{ marginRight: '10px' }}></i> breakfast</li>
                    </ul>
                    <div className='price-symbol-red'><i class="fa fa-angle-double-up" aria-hidden="true"></i> &#8377; 1200</div>
                </div>
            </div>
            <div className='tourpackagelist' onClick={() => setShowLogin(true)}>
            <img className='google_map' src={hotel3} alt="" />
                <div className='mx-4 p-2'>
                    <h6>Bali Tour Packages 4 Days 3 Nights</h6>
                    <span>In Rome (Quartiere XXXI Giuliano Dalmata) </span>
                    <ul className='ul-style'>
                        <li><i class="fa fa-check" aria-hidden="true" style={{ marginRight: '10px' }}></i> Refundale</li>
                        <li><i class="fa fa-check" aria-hidden="true" style={{ marginRight: '10px' }}></i> Swimming pool</li>
                        <li><i class="fa fa-check" aria-hidden="true" style={{ marginRight: '10px' }}></i> Extra mattress</li>
                        <li><i class="fa fa-times" aria-hidden="true" style={{ marginRight: '10px' }}></i> breakfast</li>
                    </ul>
                    <div className='price-symbol-red'><i class="fa fa-angle-double-up" aria-hidden="true"></i> &#8377; 1200</div>
                </div>
            </div>
            <div className='tourpackagelist' onClick={() => setShowLogin(true)}>
            <img className='google_map' src={hotel_image} alt="" />
                <div className='mx-4 p-2'>
                    <h6>Bali Tour Packages 4 Days 3 Nights</h6>
                    <span>In Rome (Quartiere XXXI Giuliano Dalmata) </span>
                    <ul className='ul-style'>
                        <li><i class="fa fa-check" aria-hidden="true" style={{ marginRight: '10px' }}></i> Refundale</li>
                        <li><i class="fa fa-check" aria-hidden="true" style={{ marginRight: '10px' }}></i> Swimming pool</li>
                        <li><i class="fa fa-check" aria-hidden="true" style={{ marginRight: '10px' }}></i> Extra mattress</li>
                        <li><i class="fa fa-times" aria-hidden="true" style={{ marginRight: '10px' }}></i> breakfast</li>
                    </ul>
                    <div className='price-symbol-red'><i class="fa fa-angle-double-up" aria-hidden="true"></i> &#8377; 1200</div>
                </div>
            </div>
            <div className='tourpackagelist' onClick={() => setShowLogin(true)}>
            <img className='google_map' src={hotel_image} alt="" />
                <div className='mx-4 p-2'>
                    <h6>Bali Tour Packages 4 Days 3 Nights</h6>
                    <span>In Rome (Quartiere XXXI Giuliano Dalmata) </span>
                    <ul className='ul-style'>
                        <li><i class="fa fa-check" aria-hidden="true" style={{ marginRight: '10px' }}></i> Refundale</li>
                        <li><i class="fa fa-check" aria-hidden="true" style={{ marginRight: '10px' }}></i> Swimming pool</li>
                        <li><i class="fa fa-check" aria-hidden="true" style={{ marginRight: '10px' }}></i> Extra mattress</li>
                        <li><i class="fa fa-times" aria-hidden="true" style={{ marginRight: '10px' }}></i> breakfast</li>
                    </ul>
                    <div className='price-symbol-red'><i class="fa fa-angle-double-up" aria-hidden="true"></i> &#8377; 1200</div>
                </div>
            </div>
            <div className='tourpackagelist' onClick={() => setShowLogin(true)}>
            <img className='google_map' src={hotel_image} alt="" />
                <div className='mx-4 p-2'>
                    <h6>Bali Tour Packages 4 Days 3 Nights</h6>
                    <span>In Rome (Quartiere XXXI Giuliano Dalmata) </span>
                    <ul className='ul-style'>
                        <li><i class="fa fa-check" aria-hidden="true" style={{ marginRight: '10px' }}></i> Refundale</li>
                        <li><i class="fa fa-check" aria-hidden="true" style={{ marginRight: '10px' }}></i> Swimming pool</li>
                        <li><i class="fa fa-check" aria-hidden="true" style={{ marginRight: '10px' }}></i> Extra mattress</li>
                        <li><i class="fa fa-times" aria-hidden="true" style={{ marginRight: '10px' }}></i> breakfast</li>
                    </ul>
                    <div className='price-symbol-red'><i class="fa fa-angle-double-up" aria-hidden="true"></i> &#8377; 1200</div>
                </div>
            </div>
            <div className='tourpackagelist' onClick={() => setShowLogin(true)}>
            <img className='google_map' src={hotel_image} alt="" />
                <div className='mx-4 p-2'>
                    <h6>Bali Tour Packages 4 Days 3 Nights</h6>
                    <span>In Rome (Quartiere XXXI Giuliano Dalmata) </span>
                    <ul className='ul-style'>
                        <li><i class="fa fa-check" aria-hidden="true" style={{ marginRight: '10px' }}></i> Refundale</li>
                        <li><i class="fa fa-check" aria-hidden="true" style={{ marginRight: '10px' }}></i> Swimming pool</li>
                        <li><i class="fa fa-check" aria-hidden="true" style={{ marginRight: '10px' }}></i> Extra mattress</li>
                        <li><i class="fa fa-times" aria-hidden="true" style={{ marginRight: '10px' }}></i> breakfast</li>
                    </ul>
                    <div className='price-symbol-red'><i class="fa fa-angle-double-up" aria-hidden="true"></i> &#8377; 1200</div>
                </div>
            </div>
            <div className='tourpackagelist' onClick={() => setShowLogin(true)}>
            <img className='google_map' src={hotel_image} alt="" />
                <div className='mx-4 p-2'>
                    <h6>Bali Tour Packages 4 Days 3 Nights</h6>
                    <span>In Rome (Quartiere XXXI Giuliano Dalmata) </span>
                    <ul className='ul-style'>
                        <li><i class="fa fa-check" aria-hidden="true" style={{ marginRight: '10px' }}></i> Refundale</li>
                        <li><i class="fa fa-check" aria-hidden="true" style={{ marginRight: '10px' }}></i> Swimming pool</li>
                        <li><i class="fa fa-check" aria-hidden="true" style={{ marginRight: '10px' }}></i> Extra mattress</li>
                        <li><i class="fa fa-times" aria-hidden="true" style={{ marginRight: '10px' }}></i> breakfast</li>
                    </ul>
                    <div className='price-symbol-red'><i class="fa fa-angle-double-up" aria-hidden="true"></i> &#8377; 1200</div>
                </div>
            </div>
          </div>
          <div className="col-5">
            <img src={google_map} alt="" style={{ width: '100%', position: 'fixed' }} />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ChangeHotel
