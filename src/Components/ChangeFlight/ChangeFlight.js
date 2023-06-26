import React from "react";
import "./ChangeFlight.css";

const changeFlight = () => {
  return (
    <div className="changeFlight">
        <header className="change-hotel-header">
            <div className="container" style={{ color: 'rgb(16, 165, 178)'}}><i class="fa fa-plane" aria-hidden="true" style={{ marginRight: '10px' }}></i> Change Flight</div>
        </header>
      <div className="container mt-5">
        <div className="row">
          <div className="col-3 add-shadow">
            <div class="series-search">
              <span>Price</span>
              <ul class="filters mt-1" style={{ paddingLeft: "0" }}>
                <li>
                  <input type="checkbox" /> Lesser
                </li>
                <li>
                  <input type="checkbox" /> Higher
                </li>
              </ul>
            </div>
            <div class="series-search mt-4">
              <span>DEPARTURE TIME</span>
              <ul class="filters mt-1" style={{ paddingLeft: "0" }}>
                <li>
                  <input type="checkbox" /> Early morning ( 12 am - 8 am )
                </li>
                <li>
                  <input type="checkbox" /> Morning ( 8 am - 12 pm )
                </li>
                <li>
                  <input type="checkbox" /> Mid-day ( 12 pm - 4 pm )
                </li>
                <li>
                  <input type="checkbox" /> Evening ( 4 pm - 8 pm )
                </li>
                <li>
                  <input type="checkbox" /> Night ( 8 pm - 12 am )
                </li>
              </ul>
            </div>
            <div class="series-search mt-4">
              <span>ARRIVAL TIME</span>
              <ul class="filters mt-1" style={{ paddingLeft: "0" }}>
                <li>
                  <input type="checkbox" /> Early morning ( 12 am - 8 am )
                </li>
                <li>
                  <input type="checkbox" /> Morning ( 8 am - 12 pm )
                </li>
                <li>
                  <input type="checkbox" /> Mid-day ( 12 pm - 4 pm )
                </li>
                <li>
                  <input type="checkbox" /> Evening ( 4 pm - 8 pm )
                </li>
                <li>
                  <input type="checkbox" /> Night ( 8 pm - 12 am )
                </li>
              </ul>
            </div>
            <div class="series-search mt-4">
              <span>STOPS</span>
              <ul class="filters mt-1" style={{ paddingLeft: "0" }}>
                <li>
                  <input type="checkbox" /> Non-stop
                </li>
                <li>
                  <input type="checkbox" /> 1
                </li>
                <li>
                  <input type="checkbox" /> 2 or more
                </li>
              </ul>
            </div>
            <div class="series-search mt-4">
              <span>AIRLINES</span>
              <ul class="filters mt-1" style={{ paddingLeft: "0" }}>
                <li>
                  <input type="checkbox" /> Air India ( 10 Flights )
                </li>
                <li>
                  <input type="checkbox" /> Indigo ( 4 Flights )
                </li>
                <li>
                  <input type="checkbox" /> Vistara ( 12 Flights )
                </li>
                <li>
                  <input type="checkbox" /> South West ( 5 Flights )
                </li>
                <li>
                  <input type="checkbox" /> Emirates ( 1 Flights )
                </li>
              </ul>
            </div>
          </div>


          <div className="col-9">
            <div className="tourpackagelist d-flex">
              <div className="mx-4 detail">
                <h5 className="mb-3">Delhi → Bali</h5>
                <div className="packages_stay_hotel packages_flights">
                <div className="d-flex align-items-center">
                  {/* <img src={airIndia} /> */}
                  <div>
                    <p>Air India</p>
                    <span>Air 10</span>
                  </div>
                </div>
                <div>
                  <p>19:00</p>
                  <span>Phi Phi Island</span>
                </div>
                <div>
                  <p>08 h 20 m</p>
                  <hr style={{ marginTop: '0', marginBottom: '0', border: '1px solid #10a5b2'}}></hr>
                  <span>1 stop (Dubai)</span>
                </div>
                <div>
                  <p>10:00</p>
                  <span>Delhi</span>
                </div>
              </div>
              <p className="tripCost">Trip Cost : 120000 + 1200 = 121200</p>
              </div>
              <div className="more-details">
                <div>
                   <div className='price-symbol-red justify-content-center'><i class="fa fa-angle-double-up" aria-hidden="true"></i> &#8377; 1200</div>
                </div>
                  <button className="btn mt-5">
                    Select
                  </button>
              </div>
            </div>
            <div className="tourpackagelist d-flex">
              <div className="mx-4 detail">
                <h5 className="mb-3">Delhi → Bali</h5>
                <div className="packages_stay_hotel packages_flights">
                <div className="d-flex align-items-center">
                  {/* <img src={airIndia} /> */}
                  <div>
                    <p>Air India</p>
                    <span>Air 10</span>
                  </div>
                </div>
                <div>
                  <p>19:00</p>
                  <span>Phi Phi Island</span>
                </div>
                <div>
                  <p>08 h 20 m</p>
                  <hr style={{ marginTop: '0', marginBottom: '0', border: '1px solid #10a5b2'}}></hr>
                  <span>1 stop (Dubai)</span>
                </div>
                <div>
                  <p>10:00</p>
                  <span>Delhi</span>
                </div>
              </div>
              <p className="tripCost">Trip Cost : 120000 - 1200 = 118800</p>
              </div>
              <div className="more-details">
                <div className="high-price">
                <div className='price-symbol-green justify-content-center'><i class="fa fa-angle-double-down" aria-hidden="true"></i> &#8377; 1200</div>
                </div>
                  <button className="btn mt-5">
                    Select
                  </button>
              </div>
            </div>
            <div className="tourpackagelist d-flex">
              <div className="mx-4 detail">
                <h5 className="mb-3">Delhi → Bali</h5>
                <div className="packages_stay_hotel packages_flights">
                <div className="d-flex align-items-center">
                  {/* <img src={airIndia} /> */}
                  <div>
                    <p>Air India</p>
                    <span>Air 10</span>
                  </div>
                </div>
                <div>
                  <p>19:00</p>
                  <span>Phi Phi Island</span>
                </div>
                <div>
                  <p>08 h 20 m</p>
                  <hr style={{ marginTop: '0', marginBottom: '0', border: '1px solid #10a5b2'}}></hr>
                  <span>1 stop (Dubai)</span>
                </div>
                <div>
                  <p>10:00</p>
                  <span>Delhi</span>
                </div>
              </div>
              <p className="tripCost">Trip Cost : 120000 - 1200 = 118800</p>

              </div>
              <div className="more-details">
                <div className="high-price">
                <div className='price-symbol-green justify-content-center'><i class="fa fa-angle-double-down" aria-hidden="true"></i> &#8377; 1200</div>
                </div>
                  <button className="btn mt-5">
                    Select
                  </button>
              </div>
            </div>
            <div className="tourpackagelist d-flex">
              <div className="mx-4 detail">
                <h5 className="mb-3">Delhi → Bali</h5>
                <div className="packages_stay_hotel packages_flights">
                <div className="d-flex align-items-center">
                  {/* <img src={airIndia} /> */}
                  <div>
                    <p>Air India</p>
                    <span>Air 10</span>
                  </div>
                </div>
                <div>
                  <p>19:00</p>
                  <span>Phi Phi Island</span>
                </div>
                <div>
                  <p>08 h 20 m</p>
                  <hr style={{ marginTop: '0', marginBottom: '0', border: '1px solid #10a5b2'}}></hr>
                  <span>1 stop (Dubai)</span>
                </div>
                <div>
                  <p>10:00</p>
                  <span>Delhi</span>
                </div>
              </div>
              <p className="tripCost">Trip Cost : 120000 - 1200 = 118800</p>

              </div>
              <div className="more-details">
                <div>
                   <div className='price-symbol-red justify-content-center'><i class="fa fa-angle-double-up" aria-hidden="true"></i> &#8377; 1200</div>
                </div>
                  <button className="btn mt-5">
                    Select
                  </button>
              </div>
            </div>
            <div className="tourpackagelist d-flex">
              <div className="mx-4 detail">
                <h5 className="mb-3">Delhi → Bali</h5>
                <div className="packages_stay_hotel packages_flights">
                <div className="d-flex align-items-center">
                  {/* <img src={airIndia} /> */}
                  <div>
                    <p>Air India</p>
                    <span>Air 10</span>
                  </div>
                </div>
                <div>
                  <p>19:00</p>
                  <span>Phi Phi Island</span>
                </div>
                <div>
                  <p>08 h 20 m</p>
                  <hr style={{ marginTop: '0', marginBottom: '0', border: '1px solid #10a5b2'}}></hr>
                  <span>1 stop (Dubai)</span>
                </div>
                <div>
                  <p>10:00</p>
                  <span>Delhi</span>
                </div>
              </div>
              <p className="tripCost">Trip Cost : 120000 - 1200 = 118800</p>

              </div>
              <div className="more-details">
                <div>
                   <div className='price-symbol-red justify-content-center'><i class="fa fa-angle-double-up" aria-hidden="true"></i> &#8377; 1200</div>
                </div>
                  <button className="btn mt-5">
                    Select
                  </button>
              </div>
            </div>
            <div className="tourpackagelist d-flex">
              <div className="mx-4 detail">
                <h5 className="mb-3">Delhi → Bali</h5>
                <div className="packages_stay_hotel packages_flights">
                <div className="d-flex align-items-center">
                  {/* <img src={airIndia} /> */}
                  <div>
                    <p>Air India</p>
                    <span>Air 10</span>
                  </div>
                </div>
                <div>
                  <p>19:00</p>
                  <span>Phi Phi Island</span>
                </div>
                <div>
                  <p>08 h 20 m</p>
                  <hr style={{ marginTop: '0', marginBottom: '0', border: '1px solid #10a5b2'}}></hr>
                  <span>1 stop (Dubai)</span>
                </div>
                <div>
                  <p>10:00</p>
                  <span>Delhi</span>
                </div>
              </div>
              <p className="tripCost">Trip Cost : 120000 - 1200 = 118800</p>

              </div>
              <div className="more-details">
                <div>
                   <div className='price-symbol-red justify-content-center'><i class="fa fa-angle-double-up" aria-hidden="true"></i> &#8377; 1200</div>
                </div>
                  <button className="btn mt-5">
                    Select
                  </button>
              </div>
            </div>
            <div className="tourpackagelist d-flex">
              <div className="mx-4 detail">
                <h5 className="mb-3">Delhi → Bali</h5>
                <div className="packages_stay_hotel packages_flights">
                <div className="d-flex align-items-center">
                  {/* <img src={airIndia} /> */}
                  <div>
                    <p>Air India</p>
                    <span>Air 10</span>
                  </div>
                </div>
                <div>
                  <p>19:00</p>
                  <span>Phi Phi Island</span>
                </div>
                <div>
                  <p>08 h 20 m</p>
                  <hr style={{ marginTop: '0', marginBottom: '0', border: '1px solid #10a5b2'}}></hr>
                  <span>1 stop (Dubai)</span>
                </div>
                <div>
                  <p>10:00</p>
                  <span>Delhi</span>
                </div>
              </div>
              <p className="tripCost">Trip Cost : 120000 - 1200 = 118800</p>

              </div>
              <div className="more-details">
                <div>
                   <div className='price-symbol-red justify-content-center'><i class="fa fa-angle-double-up" aria-hidden="true"></i> &#8377; 1200</div>
                </div>
                  <button className="btn mt-5">
                    Select
                  </button>
              </div>
            </div>
            <div className="tourpackagelist d-flex">
              <div className="mx-4 detail">
                <h5 className="mb-3">Delhi → Bali</h5>
                <div className="packages_stay_hotel packages_flights">
                <div className="d-flex align-items-center">
                  {/* <img src={airIndia} /> */}
                  <div>
                    <p>Air India</p>
                    <span>Air 10</span>
                  </div>
                </div>
                <div>
                  <p>19:00</p>
                  <span>Phi Phi Island</span>
                </div>
                <div>
                  <p>08 h 20 m</p>
                  <hr style={{ marginTop: '0', marginBottom: '0', border: '1px solid #10a5b2'}}></hr>
                  <span>1 stop (Dubai)</span>
                </div>
                <div>
                  <p>10:00</p>
                  <span>Delhi</span>
                </div>
              </div>
              <p className="tripCost">Trip Cost : 120000 - 1200 = 118800</p>

              </div>
              <div className="more-details">
                <div>
                   <div className='price-symbol-red justify-content-center'><i class="fa fa-angle-double-up" aria-hidden="true"></i> &#8377; 1200</div>
                </div>
                  <button className="btn mt-5">
                    Select
                  </button>
              </div>
            </div>
            <div className="tourpackagelist d-flex">
              <div className="mx-4 detail">
                <h5 className="mb-3">Delhi → Bali</h5>
                <div className="packages_stay_hotel packages_flights">
                <div className="d-flex align-items-center">
                  {/* <img src={airIndia} /> */}
                  <div>
                    <p>Air India</p>
                    <span>Air 10</span>
                  </div>
                </div>
                <div>
                  <p>19:00</p>
                  <span>Phi Phi Island</span>
                </div>
                <div>
                  <p>08 h 20 m</p>
                  <hr style={{ marginTop: '0', marginBottom: '0', border: '1px solid #10a5b2'}}></hr>
                  <span>1 stop (Dubai)</span>
                </div>
                <div>
                  <p>10:00</p>
                  <span>Delhi</span>
                </div>
              </div>
              <p className="tripCost">Trip Cost : 120000 - 1200 = 118800</p>

              </div>
              <div className="more-details">
                <div>
                   <div className='price-symbol-red justify-content-center'><i class="fa fa-angle-double-up" aria-hidden="true"></i> &#8377; 1200</div>
                </div>
                  <button className="btn mt-5">
                    Select
                  </button>
              </div>
            </div>
            <div className="tourpackagelist d-flex">
              <div className="mx-4 detail">
                <h5 className="mb-3">Delhi → Bali</h5>
                <div className="packages_stay_hotel packages_flights">
                <div className="d-flex align-items-center">
                  {/* <img src={airIndia} /> */}
                  <div>
                    <p>Air India</p>
                    <span>Air 10</span>
                  </div>
                </div>
                <div>
                  <p>19:00</p>
                  <span>Phi Phi Island</span>
                </div>
                <div>
                  <p>08 h 20 m</p>
                  <hr style={{ marginTop: '0', marginBottom: '0', border: '1px solid #10a5b2'}}></hr>
                  <span>1 stop (Dubai)</span>
                </div>
                <div>
                  <p>10:00</p>
                  <span>Delhi</span>
                </div>
              </div>
              <p className="tripCost">Trip Cost : 120000 - 1200 = 118800</p>

              </div>
              <div className="more-details">
                <div>
                   <div className='price-symbol-red justify-content-center'><i class="fa fa-angle-double-up" aria-hidden="true"></i> &#8377; 1200</div>
                </div>
                  <button className="btn mt-5">
                    Select
                  </button>
              </div>
            </div>
            <div className="tourpackagelist d-flex">
              <div className="mx-4 detail">
                <h5 className="mb-3">Delhi → Bali</h5>
                <div className="packages_stay_hotel packages_flights">
                <div className="d-flex align-items-center">
                  {/* <img src={airIndia} /> */}
                  <div>
                    <p>Air India</p>
                    <span>Air 10</span>
                  </div>
                </div>
                <div>
                  <p>19:00</p>
                  <span>Phi Phi Island</span>
                </div>
                <div>
                  <p>08 h 20 m</p>
                  <hr style={{ marginTop: '0', marginBottom: '0', border: '1px solid #10a5b2'}}></hr>
                  <span>1 stop (Dubai)</span>
                </div>
                <div>
                  <p>10:00</p>
                  <span>Delhi</span>
                </div>
              </div>
              <p className="tripCost">Trip Cost : 120000 - 1200 = 118800</p>

              </div>
              <div className="more-details">
                <div>
                   <div className='price-symbol-red justify-content-center'><i class="fa fa-angle-double-up" aria-hidden="true"></i> &#8377; 1200</div>
                </div>
                  <button className="btn mt-5">
                    Select
                  </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default changeFlight;
