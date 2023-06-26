import React from 'react'
import './SimpleHeader.css'
import logo from '../../assets/images/LOGO.svg'
import language from '../../assets/images/language1.png'
import { Link } from 'react-router-dom'

const SimpleHeader = () => {
  return (
    <div className='simple-header'>
        <div className='home-banner'>
            
            <nav className="navbar navbar-light justify-content-between pt-3">
                <a className="navbar-brand">
                    <Link to='/'><img src={logo} alt="" /></Link>
                </a>
                <div>
                    <div class="dropdown2 mx-2">Top Beach Destinations <i class="fa fa-angle-down mx-1"></i>
                        <ul class="dropdown-menu2">
                            <li><a href="#">Maldives</a></li>
                            <li><a href="#">Bali</a></li>
                            <li><a href="#">Goa</a></li>
                        </ul>
                    </div>
                    <div class="dropdown2 mx-2">Europe Experience <i class="fa fa-angle-down mx-1"></i>
                        <ul class="dropdown-menu2">
                            <li><a href="#">Rome</a></li>
                            <li><a href="#">London</a></li>
                            <li><a href="#">Paris</a></li>
                            <li><a href="#">Prague</a></li>
                        </ul>
                    </div>
                    <div class="dropdown2 mx-2">Visa on Arrival <i class="fa fa-angle-down mx-1"></i>
                        <ul class="dropdown-menu2">
                            <li><a href="#">Easy Access</a></li>
                            <li><a href="#">Minimal documents</a></li>
                        </ul>
                    </div>
                    <div class="dropdown2 mx-2">Customize Packages <i class="fa fa-angle-down mx-1"></i>
                        <ul class="dropdown-menu2">
                            <li><a href="#">Tours and packages</a></li>
                            <li><a href="#">Hotels with Flights</a></li>
                        </ul>
                    </div>
                    <div class="dropdown2 mx-2">Seasonal Tour <i class="fa fa-angle-down mx-1"></i>
                        <ul class="dropdown-menu2">
                            <li><a href="#">Winter</a></li>
                            <li><a href="#">Summer</a></li>
                            <li><a href="#">Monsoon</a></li>
                            <li><a href="#">Spring</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    {/* <div class="dropdown2 mx-2"><img className='language-svg' src={language} alt="" />
                        <ul class="dropdown-menu2">
                            <li><a href="#">English</a></li>
                            <li><a href="#">Hindi</a></li>
                        </ul>
                    </div> */}
                    <div class="dropdown2 mx-2"><i class="fa fa-user user-icon" aria-hidden="true"></i>
                        <ul class="dropdown-menu2 dropdown4">
                            <li><a href="#">Kshitiz</a></li>
                            <li><a href="#">Logout</a></li>
                        </ul>
                    </div>
                </div>
                {/* <button className='button-header'>Login</button> */}
            </nav>
        </div>
    </div>
  )
}

export default SimpleHeader