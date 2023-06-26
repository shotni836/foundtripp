import React from 'react'
import './ChangeCab.css'

const ChangeCab = () => {
  return (
    <div className="changeFlight">
        <header className="change-hotel-header">
            <div className="container" style={{ color: 'rgb(16, 165, 178)'}}><i class="fa fa-plane" aria-hidden="true" style={{ marginRight: '10px' }}></i> Change Cab</div>
        </header>
      <div className="container mt-5">
        <div className="row">
          <div className="col-3 add-shadow">
            <div class="series-search">
              <span>Seater</span>
              <ul class="filters mt-1" style={{ paddingLeft: "0" }}>
                <li>
                  <input type="checkbox" /> 2
                </li>
                <li>
                  <input type="checkbox" /> 4
                </li>
                <li>
                  <input type="checkbox" /> 5 or more
                </li>
              </ul>
            </div>
            <div class="series-search mt-4">
              <span>Facillity</span>
              <ul class="filters mt-1" style={{ paddingLeft: "0" }}>
                <li>
                  <input type="checkbox" /> Air Conditioner
                </li>
                <li>
                  <input type="checkbox" /> Music System
                </li>
                <li>
                  <input type="checkbox" /> Luggage Carrier
                </li>
              </ul>
            </div>
          </div>


          <div className="col-9">
            <div className="tourpackagelist d-flex">
              <div className="mx-4 detail">
                <h5 className="mb-3">Home → Delhi Airport</h5>
                <div className="packages_stay_hotel packages_flights">
                <div className="d-flex align-items-center">
                  {/* <img src={airIndia} /> */}
                  <div>
                    <p>Toyota</p>
                    <span>Glanza</span>
                  </div>
                </div>
                <div>
                  <p>Seater</p>
                  <span>5</span>
                </div>
                <div>
                  <p>Facility</p>
                  <span>AC available</span>
                </div>
                <div>
                  <p>Luggage carrier</p>
                  <span>Available</span>
                </div>
              </div>
              </div>
              <div className="more-details">
                <div>
                <div className='price-symbol-green' style={{ justifyContent: 'center' }}><i class="fa fa-angle-double-down" aria-hidden="true"></i> &#8377; 1200</div>
                </div>
                  <button className="btn mt-4">
                    Select
                  </button>
              </div>
            </div>
            <div className="tourpackagelist d-flex">
              <div className="mx-4 detail">
                <h5 className="mb-3">Home → Delhi Airport</h5>
                <div className="packages_stay_hotel packages_flights">
                <div className="d-flex align-items-center">
                  {/* <img src={airIndia} /> */}
                  <div>
                    <p>Toyota</p>
                    <span>Glanza</span>
                  </div>
                </div>
                <div>
                  <p>Seater</p>
                  <span>5</span>
                </div>
                <div>
                  <p>Facility</p>
                  <span>AC available</span>
                </div>
                <div>
                  <p>Luggage carrier</p>
                  <span>Available</span>
                </div>
              </div>
              </div>
              <div className="more-details">
                <div>
                <div className='price-symbol-red' style={{ justifyContent: 'center' }}><i class="fa fa-angle-double-up" aria-hidden="true"></i> &#8377; 1200</div>
                </div>
                  <button className="btn mt-4">
                    Select
                  </button>
              </div>
            </div>
            <div className="tourpackagelist d-flex">
              <div className="mx-4 detail">
                <h5 className="mb-3">Home → Delhi Airport</h5>
                <div className="packages_stay_hotel packages_flights">
                <div className="d-flex align-items-center">
                  {/* <img src={airIndia} /> */}
                  <div>
                    <p>Toyota</p>
                    <span>Glanza</span>
                  </div>
                </div>
                <div>
                  <p>Seater</p>
                  <span>5</span>
                </div>
                <div>
                  <p>Facility</p>
                  <span>AC available</span>
                </div>
                <div>
                  <p>Luggage carrier</p>
                  <span>Available</span>
                </div>
              </div>
              </div>
              <div className="more-details">
                <div>
                <div className='price-symbol-green' style={{ justifyContent: 'center' }}><i class="fa fa-angle-double-down" aria-hidden="true"></i> &#8377; 1200</div>
                </div>
                  <button className="btn mt-4">
                    Select
                  </button>
              </div>
            </div>
            <div className="tourpackagelist d-flex">
              <div className="mx-4 detail">
                <h5 className="mb-3">Home → Delhi Airport</h5>
                <div className="packages_stay_hotel packages_flights">
                <div className="d-flex align-items-center">
                  {/* <img src={airIndia} /> */}
                  <div>
                    <p>Toyota</p>
                    <span>Glanza</span>
                  </div>
                </div>
                <div>
                  <p>Seater</p>
                  <span>5</span>
                </div>
                <div>
                  <p>Facility</p>
                  <span>AC available</span>
                </div>
                <div>
                  <p>Luggage carrier</p>
                  <span>Available</span>
                </div>
              </div>
              </div>
              <div className="more-details">
                <div>
                <div className='price-symbol-green' style={{ justifyContent: 'center' }}><i class="fa fa-angle-double-down" aria-hidden="true"></i> &#8377; 1200</div>
                </div>
                  <button className="btn mt-4">
                    Select
                  </button>
              </div>
            </div>
            <div className="tourpackagelist d-flex">
              <div className="mx-4 detail">
                <h5 className="mb-3">Home → Delhi Airport</h5>
                <div className="packages_stay_hotel packages_flights">
                <div className="d-flex align-items-center">
                  {/* <img src={airIndia} /> */}
                  <div>
                    <p>Toyota</p>
                    <span>Glanza</span>
                  </div>
                </div>
                <div>
                  <p>Seater</p>
                  <span>5</span>
                </div>
                <div>
                  <p>Facility</p>
                  <span>AC available</span>
                </div>
                <div>
                  <p>Luggage carrier</p>
                  <span>Available</span>
                </div>
              </div>
              </div>
              <div className="more-details">
                <div>
                <div className='price-symbol-green' style={{ justifyContent: 'center' }}><i class="fa fa-angle-double-down" aria-hidden="true"></i> &#8377; 1200</div>
                </div>
                  <button className="btn mt-4">
                    Select
                  </button>
              </div>
            </div>
            <div className="tourpackagelist d-flex">
              <div className="mx-4 detail">
                <h5 className="mb-3">Home → Delhi Airport</h5>
                <div className="packages_stay_hotel packages_flights">
                <div className="d-flex align-items-center">
                  {/* <img src={airIndia} /> */}
                  <div>
                    <p>Toyota</p>
                    <span>Glanza</span>
                  </div>
                </div>
                <div>
                  <p>Seater</p>
                  <span>5</span>
                </div>
                <div>
                  <p>Facility</p>
                  <span>AC available</span>
                </div>
                <div>
                  <p>Luggage carrier</p>
                  <span>Available</span>
                </div>
              </div>
              </div>
              <div className="more-details">
                <div>
                <div className='price-symbol-green' style={{ justifyContent: 'center' }}><i class="fa fa-angle-double-down" aria-hidden="true"></i> &#8377; 1200</div>
                </div>
                  <button className="btn mt-4">
                    Select
                  </button>
              </div>
            </div>
            <div className="tourpackagelist d-flex">
              <div className="mx-4 detail">
                <h5 className="mb-3">Home → Delhi Airport</h5>
                <div className="packages_stay_hotel packages_flights">
                <div className="d-flex align-items-center">
                  {/* <img src={airIndia} /> */}
                  <div>
                    <p>Toyota</p>
                    <span>Glanza</span>
                  </div>
                </div>
                <div>
                  <p>Seater</p>
                  <span>5</span>
                </div>
                <div>
                  <p>Facility</p>
                  <span>AC available</span>
                </div>
                <div>
                  <p>Luggage carrier</p>
                  <span>Available</span>
                </div>
              </div>
              </div>
              <div className="more-details">
                <div>
                <div className='price-symbol-green' style={{ justifyContent: 'center' }}><i class="fa fa-angle-double-down" aria-hidden="true"></i> &#8377; 1200</div>
                </div>
                  <button className="btn mt-4">
                    Select
                  </button>
              </div>
            </div>
            <div className="tourpackagelist d-flex">
              <div className="mx-4 detail">
                <h5 className="mb-3">Home → Delhi Airport</h5>
                <div className="packages_stay_hotel packages_flights">
                <div className="d-flex align-items-center">
                  {/* <img src={airIndia} /> */}
                  <div>
                    <p>Toyota</p>
                    <span>Glanza</span>
                  </div>
                </div>
                <div>
                  <p>Seater</p>
                  <span>5</span>
                </div>
                <div>
                  <p>Facility</p>
                  <span>AC available</span>
                </div>
                <div>
                  <p>Luggage carrier</p>
                  <span>Available</span>
                </div>
              </div>
              </div>
              <div className="more-details">
                <div>
                <div className='price-symbol-green' style={{ justifyContent: 'center' }}><i class="fa fa-angle-double-down" aria-hidden="true"></i> &#8377; 1200</div>
                </div>
                  <button className="btn mt-4">
                    Select
                  </button>
              </div>
            </div>
            <div className="tourpackagelist d-flex">
              <div className="mx-4 detail">
                <h5 className="mb-3">Home → Delhi Airport</h5>
                <div className="packages_stay_hotel packages_flights">
                <div className="d-flex align-items-center">
                  {/* <img src={airIndia} /> */}
                  <div>
                    <p>Toyota</p>
                    <span>Glanza</span>
                  </div>
                </div>
                <div>
                  <p>Seater</p>
                  <span>5</span>
                </div>
                <div>
                  <p>Facility</p>
                  <span>AC available</span>
                </div>
                <div>
                  <p>Luggage carrier</p>
                  <span>Available</span>
                </div>
              </div>
              </div>
              <div className="more-details">
                <div>
                <div className='price-symbol-green' style={{ justifyContent: 'center' }}><i class="fa fa-angle-double-down" aria-hidden="true"></i> &#8377; 1200</div>
                </div>
                  <button className="btn mt-4">
                    Select
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChangeCab
