import React from "react";
import "./ToursPackagesDetail.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import south1 from "../../../assets/images/found_trip/south east asia/1.png";
import airIndia from "../../../assets/images/air_india2.png";
import caB_service from "../../../assets/images/caB_service.jpg";
import deluxe_room from "../../../assets/images/deluxe_room.jpg";
import activities1 from "../../../assets/images/activities1.jpg";
import map from "../../../assets/images/found_trip/map.svg";
import "react-accessible-accordion/dist/fancy-example.css";
import SimpleHeader from "../../SimpleHeader/SimpleHeader";
import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const responsive2 = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const CustomDots = ({ onMove, index, onClick, active }) => {
  return (
    <li className={active ? "active" : "inactive"} onClick={() => onClick()}>
      <img className="card-img-top" src={south1} alt="Card image cap" />
    </li>
  );
};

// const scrollTo = () => {
//     console.log($(this).find('a').css( "background-color", "red" ))
//     $(this).find('a').css( "background-color", "red" );
//     $('html, body').animate({
//         scrollTop: $( $(this).find('.scrollTo').attr('href') ).offset().top
//     }, 500);
//     return false;
// }

const ToursPackagesDetail = () => {
  return (
    <div className="tourPackageDetail">
      <SimpleHeader />
      <div className="container">
        {/* <div className="reverse-carousel row">
            <Carousel
            className="firstCarousel"
            responsive={responsive}
            slidesToSlide={1}
            showDots={true}
            renderButtonGroupOutside={true}
            renderDotsOutside={true}
            customDot={<CustomDots />}
            >
            <img className="card-img-top" src={south1} alt="Card image cap" />
            <img className="card-img-top" src={south1} alt="Card image cap" />
            <img className="card-img-top" src={south1} alt="Card image cap" />
            <img className="card-img-top" src={south1} alt="Card image cap" />
            <img className="card-img-top" src={south1} alt="Card image cap" />
            </Carousel>
        </div> */}
        <div className="row mt-5">
          <div className="col-9">
            <h4>Adriatic Adventure - Zagrb to Athens</h4>
            <div className="d-flex">
              <p className="mb-0">
                <i className="fa fa-map-marker" aria-hidden="true"></i> Phi Phi Island, Thailand
              </p>
              <div className="d-flex rating-sec">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="">(25 review) </span>
              </div>
            </div>

            <div className="overall-package-inst">
            <button>
                <a href="#info" class="scrollTo">
                  <i class="fa fa-plane" aria-hidden="true"></i> Flights (2)
                </a>
              </button>
              <i class="fa fa-plus" aria-hidden="true"></i>
              <button>
                <a href="#overview" class="scrollTo">
                  <i class="fa fa-bed" aria-hidden="true"></i> Stay (2)
                </a>
              </button>
              <i class="fa fa-plus" aria-hidden="true"></i>
              <button>
                <a href="#itinerary" class="scrollTo">
                  <i class="fas fa-walking"></i> Activities (4)
                </a>
              </button>
              <i class="fa fa-plus" aria-hidden="true"></i>
              <button>
                <a href="#packages" class="scrollTo">
                  <i class="fa fa-car" aria-hidden="true"></i> Transfers (2)
                </a>
              </button>
              <i class="fa fa-plus" aria-hidden="true"></i>
              <button>
                <a href="#packages" class="scrollTo">
                  <i class="fa fa-info-circle"></i> More
                </a>
              </button>
            </div>

            <div className="packages_stay">
              <div className="packages_stay_header">
                <div>
                  <h5>Delhi → bali</h5>
                  <span>Tuesday, Jan 1</span>
                </div>
                
                <div>
                <Link to='/changeFlight'>
                  <button>
                    <i class="fa fa-info"></i>
                  </button>
                  <button style={{ marginRight: "10px" }}> Change</button>

                  <button>
                    <i class="fa fa-times" style={{ color: "red" }}></i>
                  </button>
                  </Link>
                  <button style={{ color: "red" }}> Remove</button>
                </div>
              </div>
              <div className="packages_stay_hotel packages_flights">
                <div className="d-flex align-items-center">
                  <img src={airIndia} />
                  <div>
                    <p>Air India</p>
                    <span>Air 10</span>
                  </div>
                </div>
                <div>
                  <p>10:00</p>
                  <span>Delhi</span>
                </div>
                <div>
                  <p>08 h 20 m</p>
                  <hr style={{ marginTop: '0', marginBottom: '0', border: '1px solid #10a5b2'}}></hr>
                  <span>1 stop (Dubai)</span>
                </div>
                <div>
                  <p>19:00</p>
                  <span>Phi Phi Island</span>
                </div>
              </div>
            </div>

            <div className="packages_stay">
              <div className="packages_stay_header">
                <div>
                  <h5>bali → Delhi</h5>
                  <span>Saturday, Jan 5</span>
                </div>
                <div>
                <Link to='/changeFlight'>
                  <button>
                    <i class="fa fa-info"></i>
                  </button>
                  <button style={{ marginRight: "10px" }}> Change</button>

                  <button>
                    <i class="fa fa-times" style={{ color: "red" }}></i>
                  </button>
                  </Link>
                  <button style={{ color: "red" }}> Remove</button>
                </div>
              </div>
              <div className="packages_stay_hotel packages_flights">
                <div className="d-flex align-items-center">
                  <img src={airIndia} />
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
            </div>

            <div className="packages_stay">
              <div className="packages_stay_header">
                <div>
                  <h5>4N in Phi Phi Island</h5>
                  <h6>
                    Andaman sea, 42 km away from Amphoe Mueang.
                    <span>Tuesday, Jan 1 - Friday, Jan 5</span>
                  </h6>
                </div>
                <Link to='/changeHotel'>
                <div>
                  <button>
                    <i class="fa fa-info"></i>
                  </button>
                  <button> Change</button>
                </div>
                </Link>
              </div>
              <div className="packages_stay_hotel">
                <Carousel
                  className="firstCarousel packages_stay_hotel_carousel"
                  responsive={responsive}
                  slidesToSlide={1}
                >
                  <img
                    className="card-img-top"
                    src={deluxe_room}
                    alt="Card image cap"
                  />
                  <img
                    className="card-img-top"
                    src={deluxe_room}
                    alt="Card image cap"
                  />
                  <img
                    className="card-img-top"
                    src={deluxe_room}
                    alt="Card image cap"
                  />
                  <img
                    className="card-img-top"
                    src={deluxe_room}
                    alt="Card image cap"
                  />
                  <img
                    className="card-img-top"
                    src={deluxe_room}
                    alt="Card image cap"
                  />
                </Carousel>
                <div className="packages_stay_hotel_details">
                  <div className="d-flex">
                    <div>
                      <p>Room details</p>
                      <span>Deluxe room with mountain view</span>
                    </div>
                    <div className="d-flex rating-sec mx-3">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="">(25 review) </span>
                    </div>
                  </div>
                  <div className="packages_stay_hotel_room_facility">
                    <span>
                      <i class="fa fa-check" aria-hidden="true"></i> Refundale
                    </span>
                    <span>
                      <i class="fa fa-check" aria-hidden="true"></i> Wi-fi
                    </span>
                    <span>
                      <i class="fa fa-check" aria-hidden="true"></i> Breakfast
                      included
                    </span>
                    <span>
                      <i class="fa fa-check" aria-hidden="true"></i>
                      Accomodation - 2
                    </span>
                    <span>
                      <i class="fa fa-check" aria-hidden="true"></i> Air
                      Conditioner
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="packages_stay">
              <div className="packages_stay_header">
                <div>
                  <h6>
                    Padang/Melasti Beach/Pandawa Beach/Suluban Beach, GWK
                    culture park, Uluwatu Cliff Temple.
                  </h6>
                  <span>Wednesday, Jan 2</span>
                </div>
                <Link to='/changeHotel'>
                <div>
                  <button>
                    <i class="fa fa-info"></i>
                  </button>
                  <button> Change</button>
                </div>
                </Link>
              </div>
              <div className="packages_stay_hotel">
                <img
                  className="card-img-top"
                  src={activities1}
                  alt="Card image cap"
                  style={{ width: "250px" }}
                />
                <div
                  className="packages_stay_hotel_details"
                  style={{ padding: "10px" }}
                >
                  <div className="tour-activities">
                    {/* <img src={south1} style={{height: '160px'}} /> */}
                    <div>
                      <span>
                        <i class="fa fa-clock-o" aria-hidden="true"></i> 10 Hrs
                      </span>
                      <div className="row mx-2 mt-2">
                        <div className="col-6">
                          Inclusions
                          <div className="activity-include">
                            <ul style={{ paddingLeft: "0" }}>
                              <li>
                                <i class="fa fa-check" aria-hidden="true"></i>
                                Include Private car with driver cum guide
                              </li>
                              <li>
                                <i class="fa fa-check" aria-hidden="true"></i>
                                Entrance Fee
                              </li>
                              <li>
                                <i class="fa fa-check" aria-hidden="true"></i>
                                Mineral Water
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-6">
                          Exclusions
                          <div className="activity-exclude">
                            <ul style={{ paddingLeft: "0" }}>
                              <li>
                                <i class="fa fa-times" aria-hidden="true"></i>
                                Personal Guide
                              </li>
                              <li>
                                <i class="fa fa-times" aria-hidden="true"></i>
                                Food
                              </li>
                              <li>
                                <i class="fa fa-times" aria-hidden="true"></i>
                                Meal & Personal Expenses
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="packages_stay">
              <div className="packages_stay_header">
                <div>
                  <h6>
                    Padang/Melasti Beach/Pandawa Beach/Suluban Beach, GWK
                    culture park, Uluwatu Cliff Temple.
                  </h6>
                  <span>Thursday, Jan 3</span>
                </div>
                <Link to='/changeHotel'>
                <div>
                  <button>
                    <i class="fa fa-info"></i>
                  </button>
                  <button> Change</button>
                </div>
                </Link>
              </div>
              <div className="packages_stay_hotel">
                <img
                  className="card-img-top"
                  src={south1}
                  alt="Card image cap"
                  style={{ width: "250px" }}
                />
                <div
                  className="packages_stay_hotel_details"
                  style={{ padding: "10px" }}
                >
                  <div className="tour-activities">
                    {/* <img src={south1} style={{height: '160px'}} /> */}
                    <div>
                      <span>
                        <i class="fa fa-clock-o" aria-hidden="true"></i> 10 Hrs
                      </span>
                      <div className="row mx-2 mt-2">
                        <div className="col-6">
                          Inclusions
                          <div className="activity-include">
                            <ul style={{ paddingLeft: "0" }}>
                              <li>
                                <i class="fa fa-check" aria-hidden="true"></i>
                                Include Private car with driver cum guide
                              </li>
                              <li>
                                <i class="fa fa-check" aria-hidden="true"></i>
                                Entrance Fee
                              </li>
                              <li>
                                <i class="fa fa-check" aria-hidden="true"></i>
                                Mineral Water
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-6">
                          Exclusions
                          <div className="activity-exclude">
                            <ul style={{ paddingLeft: "0" }}>
                              <li>
                                <i class="fa fa-times" aria-hidden="true"></i>
                                Personal Guide
                              </li>
                              <li>
                                <i class="fa fa-times" aria-hidden="true"></i>
                                Food
                              </li>
                              <li>
                                <i class="fa fa-times" aria-hidden="true"></i>
                                Meal & Personal Expenses
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="packages_stay">
              <div className="packages_stay_header">
                <div>
                  <h5>
                    Home to Delhi Airport
                  </h5>
                  <span>Wednesday, Jan 2</span>
                </div>
                <Link to='/changeCab'>
                <div>
                  <button>
                    <i class="fa fa-info"></i>
                  </button>
                  <button> Change</button>
                </div>
                </Link>
              </div>
              <div className="packages_stay_hotel">
                <img
                  className="card-img-top"
                  src={caB_service}
                  alt="Card image cap"
                  style={{ width: "250px" }}
                />
                <div
                  className="packages_stay_hotel_details"
                  style={{ padding: "10px" }}
                >
                  <div className="tour-activities">
                    {/* <img src={south1} style={{height: '160px'}} /> */}
                    <div>
                      <div className="row mx-2 mt-2">
                        <div className="col-12">
                          <div className="">
                            <ul style={{ paddingLeft: "0" }}>
                              <li>
                                <i class="fa fa-check" aria-hidden="true" style={{ marginRight: '10px' }}></i>
                                Include Private car with driver cum guide
                              </li>
                              <li>
                                <i class="fa fa-check" aria-hidden="true" style={{ marginRight: '10px' }}></i>
                                Entrance Fee
                              </li>
                              <li>
                                <i class="fa fa-check" aria-hidden="true" style={{ marginRight: '10px' }}></i>
                                Mineral Water
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="row" id="overview">
              <div className="col-12 overview">
                <div className="detailed-div">
                  <span>
                    <i class="fa fa-clock-o" aria-hidden="true"></i> 5 Days
                  </span>
                  <span>
                    <i class="fa fa-user" aria-hidden="true"></i> Max People -
                    20
                  </span>
                  <span>
                    <i class="fa fa-calendar" aria-hidden="true"></i> Jan 1 -
                    Jan 5
                  </span>
                  <span>
                    <i class="fa fa-child"></i> Min Age - 10
                  </span>
                  <span>
                    <i class="fa fa-car" aria-hidden="true"></i> Pickup -
                    Airport
                  </span>
                  <span>
                    <i class="fa fa-language" aria-hidden="true"></i> Language -
                    English, Thai
                  </span>
                </div>
                <div className="description">
                  <h6>Description</h6>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>

                  <div className="package-detail">
                    <div className="package-detail-list">
                      <p>Departure & Return location</p>
                      <p>New Delhi, India</p>
                    </div>
                    <div className="package-detail-list">
                      <p>Bedroom</p>
                      <p>4 Bedrooms</p>
                    </div>
                    <div className="package-detail-list">
                      <p>Departure Time</p>
                      <p>3 hours before flight time</p>
                    </div>
                    <div className="package-detail-list">
                      <p>Arrival Time</p>
                      <p>07:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            <hr />

            <div className="row overview" id="itinerary">
              <div className="col-3">
                <svg
                  width="43"
                  height="38"
                  viewBox="0 0 43 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M43 .442c0-.016-.008-.03-.01-.047-.002-.015.003-.031 0-.047-.003-.014-.013-.024-.018-.037a.372.372 0 0 0-.035-.082.41.41 0 0 0-.177-.172.409.409 0 0 0-.08-.031.397.397 0 0 0-.085-.017C42.581.007 42.568 0 42.553 0c-.018 0-.032.008-.049.01-.016.002-.031-.003-.047 0L28.519 3.04 14.577.01h-.007c-.015-.003-.033 0-.05-.002-.013 0-.024-.008-.039-.008-.013 0-.025.006-.037.008-.018 0-.037 0-.054.003h-.004L.35 3.06c-.013.003-.024.013-.037.017a.44.44 0 0 0-.152.082.389.389 0 0 0-.059.062.438.438 0 0 0-.046.068.459.459 0 0 0-.049.165c0 .014-.008.025-.008.04v34.063c0 .017.008.03.01.047s-.001.03.002.047c.004.016.013.028.018.043a.377.377 0 0 0 .08.141c.014.017.026.033.042.047.026.023.056.04.087.058.017.009.031.02.049.026a.448.448 0 0 0 .255.022l13.94-3.03 13.94 3.03c.032.008.064.011.095.011.005 0 .01-.003.014-.003a.432.432 0 0 0 .082-.008l14.036-3.05c.014-.002.024-.012.037-.017a.47.47 0 0 0 .152-.082.44.44 0 0 0 .056-.06.43.43 0 0 0 .049-.07.432.432 0 0 0 .03-.075.374.374 0 0 0 .018-.089c0-.014.008-.025.008-.04V.443zM.894 3.85 14.037.993v16.584a.446.446 0 0 0-.272.136.44.44 0 0 0 .032.625c.082.073.158.151.24.225v15.589L.894 37.008V3.85zM14.93 19.413c.275.273.544.544.785.792a.448.448 0 0 0 .63.011.44.44 0 0 0 .012-.625 48.965 48.965 0 0 0-1.427-1.407V.993l13.144 2.856v21.217c-.259.11-.517.208-.776.284a.44.44 0 0 0 .125.866.446.446 0 0 0 .126-.019c.174-.051.35-.113.525-.178v10.988l-13.144-2.856V19.413zm14.036 6.215a9.751 9.751 0 0 0 1.137-.678.44.44 0 0 0 .11-.616.448.448 0 0 0-.62-.11 9.369 9.369 0 0 1-.627.398V3.85L42.108.993v33.159l-13.143 2.855V25.628z"
                    fill="#99A3AD"
                  ></path>
                  <path
                    d="M5.452 26.484a26.968 26.968 0 0 1-.167-.966.445.445 0 0 0-.508-.37.442.442 0 0 0-.373.504c.055.352.105.634.147.857a2.365 2.365 0 0 0-1.848 2.297 2.37 2.37 0 0 0 2.378 2.358 2.37 2.37 0 0 0 2.378-2.358c-.001-1.174-.873-2.143-2.007-2.322zM5.08 30.28c-.82 0-1.487-.661-1.487-1.474S4.26 27.33 5.08 27.33c.82 0 1.486.662 1.486 1.475 0 .813-.667 1.474-1.486 1.474zM38.218 6.8l1.051-1.043a.44.44 0 0 0 0-.625.449.449 0 0 0-.63 0l-1.051 1.043-1.05-1.043a.449.449 0 0 0-.631 0 .44.44 0 0 0 0 .625L36.958 6.8l-1.051 1.043a.44.44 0 0 0 .316.755.45.45 0 0 0 .315-.13l.66-.656c.005.106.01.204.013.323.006.24.204.432.445.432h.012a.444.444 0 0 0 .434-.453l-.006-.185.542.539a.45.45 0 0 0 .631 0 .44.44 0 0 0 0-.626L38.22 6.8zM12.178 15.992c-.9-.55-1.764-.9-2.644-1.073a.441.441 0 1 0-.173.867c.773.152 1.542.466 2.35.959a.448.448 0 0 0 .613-.146.44.44 0 0 0-.146-.607zM4.551 23.348l.028-.001a.445.445 0 0 0 .418-.468 21.743 21.743 0 0 1-.042-1.335c0-.433.014-.869.048-1.3a.443.443 0 0 0-.41-.475c-.244-.032-.46.164-.479.406-.036.453-.05.913-.05 1.369 0 .47.015.938.043 1.388.014.235.21.416.444.416zM4.94 17.99a.447.447 0 0 0 .577-.254c.34-.877.834-1.479 1.47-1.788a.44.44 0 0 0 .202-.592.448.448 0 0 0-.596-.202c-.844.411-1.486 1.174-1.908 2.265a.439.439 0 0 0 .255.57zM18.24 21.53a.45.45 0 0 0-.63-.004.44.44 0 0 0-.003.626 27.948 27.948 0 0 0 2.017 1.868.444.444 0 0 0 .628-.057.44.44 0 0 0-.057-.623 27.215 27.215 0 0 1-1.954-1.81zM37.629 10.418a.443.443 0 0 0-.478.41c-.07.942-.19 1.822-.357 2.612a.442.442 0 0 0 .438.533c.206 0 .39-.143.435-.351.175-.828.301-1.746.374-2.729a.446.446 0 0 0-.412-.475zM36.584 15.69a.447.447 0 0 0-.594.209c-.051.105-.104.209-.16.311-.306.561-.686 1.257-1.138 2.015a.44.44 0 0 0 .157.606.45.45 0 0 0 .611-.155c.459-.77.845-1.476 1.155-2.045.062-.115.123-.232.18-.35a.44.44 0 0 0-.211-.59zM33.236 20.46a20.156 20.156 0 0 1-1.677 2.046.441.441 0 0 0 .326.745.446.446 0 0 0 .325-.14c.585-.62 1.174-1.339 1.75-2.137a.44.44 0 0 0-.102-.616.446.446 0 0 0-.622.101zM24.791 25.553a7.526 7.526 0 0 1-2.417-.754.446.446 0 0 0-.631.222.44.44 0 0 0 .21.558l.017.01c.904.448 1.816.731 2.712.842a.445.445 0 0 0 .498-.384.443.443 0 0 0-.389-.494z"
                    fill="#99A3AD"
                  ></path>
                </svg>
              </div>
              <div className="col-9">
                <div
                  class="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        <span className="itinerary-circle">1</span> Day 1 (
                        <b>Jan 1</b>)
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        <Carousel
                          className="secondCarousel"
                          responsive={responsive2}
                          showDots={true}
                          autoPlay
                        >
                          <img src={south1} />
                          <img src={south1} />
                          <img src={south1} />
                          <img src={south1} />
                          <img src={south1} />
                        </Carousel>
                        <h5 className="mt-3">Garden Villa</h5>
                        <ul
                          style={{ paddingLeft: "0" }}
                          className="room-details"
                        >
                          <li>
                            <i class="fa fa-times-circle"></i>&nbsp;
                            Non-refundable
                          </li>
                          <li>
                            <i
                              class="fa fa-check-circle"
                              aria-hidden="true"
                            ></i>
                            &nbsp; Free Welcome Drink on Arrival
                          </li>
                          <li>
                            <i
                              class="fa fa-check-circle"
                              aria-hidden="true"
                            ></i>
                            &nbsp; Free Late check-out, Subject to Availability
                          </li>
                          <li>
                            <i
                              class="fa fa-check-circle"
                              aria-hidden="true"
                            ></i>
                            &nbsp; Free Breakfast
                          </li>
                          <li>
                            <i
                              class="fa fa-check-circle"
                              aria-hidden="true"
                            ></i>
                            &nbsp; Free Early Check in, Subject to Availability
                          </li>
                        </ul>
                        <hr></hr>
                        <h5 className="mt-3">Activities</h5>
                        <h6 className="mt-2">
                          Padang/Melasti Beach/Pandawa Beach/Suluban Beach, GWK
                          culture park, Uluwatu Cliff Temple.
                        </h6>

                        <div className="tour-activities">
                          {/* <img src={south1} style={{height: '160px'}} /> */}
                          <div>
                            <span>
                              <i class="fa fa-clock-o" aria-hidden="true"></i>
                              10 Hrs
                            </span>
                            <div className="row mx-2 mt-2">
                              <div className="col-6">
                                Inclusions
                                <div className="activity-include">
                                  <ul style={{ paddingLeft: "0" }}>
                                    <li>
                                      <i
                                        class="fa fa-check"
                                        aria-hidden="true"
                                      ></i>
                                      Include Private car with driver cum guide
                                    </li>
                                    <li>
                                      <i
                                        class="fa fa-check"
                                        aria-hidden="true"
                                      ></i>
                                      Entrance Fee
                                    </li>
                                    <li>
                                      <i
                                        class="fa fa-check"
                                        aria-hidden="true"
                                      ></i>
                                      Mineral Water
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-6">
                                Exclusions
                                <div className="activity-exclude">
                                  <ul style={{ paddingLeft: "0" }}>
                                    <li>
                                      <i
                                        class="fa fa-times"
                                        aria-hidden="true"
                                      ></i>
                                      Personal Guide
                                    </li>
                                    <li>
                                      <i
                                        class="fa fa-times"
                                        aria-hidden="true"
                                      ></i>
                                      Food
                                    </li>
                                    <li>
                                      <i
                                        class="fa fa-times"
                                        aria-hidden="true"
                                      ></i>
                                      Meal & Personal Expenses
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr></hr>
                        <h5 className="mt-3">Car Facility</h5>
                        <div className="row mx-2">
                          <div className="col-6">Private Transfer</div>
                          <div className="col-6">Baggage Included</div>
                        </div>
                        <div className="row mt-2 mx-2">
                          <div className="col-6">Pickup at airport</div>
                          <div className="col-6">Drop at hotel</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        <span className="itinerary-circle">2</span> Day 2 (
                        <b>Jan 2</b>)
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        <h5 className="mt-3">Happy Homes</h5>
                        <ul
                          style={{ paddingLeft: "0" }}
                          className="room-details"
                        >
                          <li>
                            <i class="fa fa-times-circle"></i>&nbsp;
                            Non-refundable
                          </li>
                          <li>
                            <i
                              class="fa fa-check-circle"
                              aria-hidden="true"
                            ></i>
                            &nbsp; Free Welcome Drink on Arrival
                          </li>
                          <li>
                            <i
                              class="fa fa-check-circle"
                              aria-hidden="true"
                            ></i>
                            &nbsp; Free Late check-out, Subject to Availability
                          </li>
                          <li>
                            <i
                              class="fa fa-check-circle"
                              aria-hidden="true"
                            ></i>
                            &nbsp; Free Breakfast
                          </li>
                          <li>
                            <i
                              class="fa fa-check-circle"
                              aria-hidden="true"
                            ></i>
                            &nbsp; Free Early Check in, Subject to Availability
                          </li>
                        </ul>
                        <hr></hr>
                        <h5 className="mt-3">Activities</h5>
                        <h6 className="mt-2">
                          Padang/Melasti Beach/Pandawa Beach/Suluban Beach, GWK
                          culture park, Uluwatu Cliff Temple.
                        </h6>

                        <div className="tour-activities">
                          {/* <img src={south1} style={{height: '160px'}} /> */}
                          <div>
                            <span>
                              <i class="fa fa-clock-o" aria-hidden="true"></i>
                              10 Hrs
                            </span>
                            <div className="row mx-2 mt-2">
                              <div className="col-6">
                                Inclusions
                                <div className="activity-include">
                                  <ul style={{ paddingLeft: "0" }}>
                                    <li>
                                      <i
                                        class="fa fa-check"
                                        aria-hidden="true"
                                      ></i>
                                      Include Private car with driver cum guide
                                    </li>
                                    <li>
                                      <i
                                        class="fa fa-check"
                                        aria-hidden="true"
                                      ></i>
                                      Entrance Fee
                                    </li>
                                    <li>
                                      <i
                                        class="fa fa-check"
                                        aria-hidden="true"
                                      ></i>
                                      Mineral Water
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-6">
                                Exclusions
                                <div className="activity-exclude">
                                  <ul style={{ paddingLeft: "0" }}>
                                    <li>
                                      <i
                                        class="fa fa-times"
                                        aria-hidden="true"
                                      ></i>
                                      Personal Guide
                                    </li>
                                    <li>
                                      <i
                                        class="fa fa-times"
                                        aria-hidden="true"
                                      ></i>
                                      Food
                                    </li>
                                    <li>
                                      <i
                                        class="fa fa-times"
                                        aria-hidden="true"
                                      ></i>
                                      Meal & Personal Expenses
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        <span className="itinerary-circle">3</span> Day 3 (
                        <b>Jan 3</b>)
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        <h5 className="mt-3">Spring Resort</h5>
                        <ul
                          style={{ paddingLeft: "0" }}
                          className="room-details"
                        >
                          <li>
                            <i class="fa fa-times-circle"></i>&nbsp;
                            Non-refundable
                          </li>
                          <li>
                            <i
                              class="fa fa-check-circle"
                              aria-hidden="true"
                            ></i>
                            &nbsp; Free Welcome Drink on Arrival
                          </li>
                          <li>
                            <i
                              class="fa fa-check-circle"
                              aria-hidden="true"
                            ></i>
                            &nbsp; Free Late check-out, Subject to Availability
                          </li>
                          <li>
                            <i
                              class="fa fa-check-circle"
                              aria-hidden="true"
                            ></i>
                            &nbsp; Free Breakfast
                          </li>
                          <li>
                            <i
                              class="fa fa-check-circle"
                              aria-hidden="true"
                            ></i>
                            &nbsp; Free Early Check in, Subject to Availability
                          </li>
                        </ul>
                        <hr></hr>
                        <h5 className="mt-3">Activities</h5>
                        <h6 className="mt-2">
                          Padang/Melasti Beach/Pandawa Beach/Suluban Beach, GWK
                          culture park, Uluwatu Cliff Temple.
                        </h6>

                        <div className="tour-activities">
                          {/* <img src={south1} style={{height: '160px'}} /> */}
                          <div>
                            <span>
                              <i class="fa fa-clock-o" aria-hidden="true"></i>
                              10 Hrs
                            </span>
                            <div className="row mx-2 mt-2">
                              <div className="col-6">
                                Inclusions
                                <div className="activity-include">
                                  <ul style={{ paddingLeft: "0" }}>
                                    <li>
                                      <i
                                        class="fa fa-check"
                                        aria-hidden="true"
                                      ></i>
                                      Include Private car with driver cum guide
                                    </li>
                                    <li>
                                      <i
                                        class="fa fa-check"
                                        aria-hidden="true"
                                      ></i>
                                      Entrance Fee
                                    </li>
                                    <li>
                                      <i
                                        class="fa fa-check"
                                        aria-hidden="true"
                                      ></i>
                                      Mineral Water
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-6">
                                Exclusions
                                <div className="activity-exclude">
                                  <ul style={{ paddingLeft: "0" }}>
                                    <li>
                                      <i
                                        class="fa fa-times"
                                        aria-hidden="true"
                                      ></i>
                                      Personal Guide
                                    </li>
                                    <li>
                                      <i
                                        class="fa fa-times"
                                        aria-hidden="true"
                                      ></i>
                                      Food
                                    </li>
                                    <li>
                                      <i
                                        class="fa fa-times"
                                        aria-hidden="true"
                                      ></i>
                                      Meal & Personal Expenses
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr />
            <div className="row" id="packages">
              <div className="col-3 overview">
                <svg
                  width="50"
                  height="56"
                  viewBox="0 0 50 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.0157 0.127686H24.9679C21.6869 0.129864 18.4385 0.787955 15.4081 2.06438C12.3776 3.34081 9.62461 5.21058 7.30612 7.56694C4.98764 9.92329 3.14911 12.7201 1.89553 15.7976C0.641942 18.8752 -0.00215716 22.1732 5.42768e-06 25.5034C0.000252218 25.6667 0.0590139 25.8244 0.165333 25.9469C0.271652 26.0695 0.41827 26.1487 0.577845 26.1696C0.737421 26.1906 0.89906 26.1519 1.03262 26.0609C1.16618 25.9698 1.26255 25.8325 1.30374 25.6746C1.47986 24.998 2.10654 23.0634 2.89022 22.2039C3.99055 21.1594 5.33307 20.6056 6.77668 20.6172C8.20636 20.6136 9.57983 21.182 10.5995 22.1992C11.6258 23.3104 12.1684 24.6663 12.1684 26.1199C12.1684 26.2984 12.2382 26.4695 12.3626 26.5957C12.4869 26.7219 12.6555 26.7928 12.8313 26.7928C13.0071 26.7928 13.1758 26.7219 13.3001 26.5957C13.4244 26.4695 13.4942 26.2984 13.4942 26.1199C13.4942 24.6681 14.035 23.3147 15.058 22.2046C16.1518 21.1661 17.4853 20.6173 18.9187 20.6173C19.6312 20.6115 20.3379 20.7482 20.9984 21.0196C21.6589 21.2911 22.2602 21.6919 22.768 22.1993C23.7943 23.3105 24.3369 24.6665 24.3369 26.1199V44.326C24.3369 45.5699 23.8501 46.7629 22.9835 47.6424C22.1169 48.522 20.9416 49.0162 19.7161 49.0162C18.4905 49.0162 17.3152 48.522 16.4486 47.6424C15.582 46.7629 15.0952 45.5699 15.0952 44.326V42.1116C15.0952 41.9331 15.0253 41.762 14.901 41.6358C14.7767 41.5096 14.6081 41.4387 14.4323 41.4387C14.2565 41.4387 14.0878 41.5096 13.9635 41.6358C13.8392 41.762 13.7694 41.9331 13.7694 42.1116V44.326C13.7694 45.9268 14.3959 47.4621 15.5111 48.594C16.6263 49.7259 18.1389 50.3619 19.7161 50.3619C21.2932 50.3619 22.8058 49.7259 23.921 48.594C25.0362 47.4621 25.6628 45.9268 25.6628 44.326V26.1199C25.6628 24.6679 26.2034 23.3148 27.2265 22.2051C28.3203 21.1667 29.6536 20.6179 31.0872 20.6179H31.1138C32.5435 20.6143 33.917 21.1828 34.9366 22.2C35.9629 23.3111 36.5055 24.6665 36.5055 26.1206C36.5055 26.2991 36.5754 26.4702 36.6997 26.5964C36.824 26.7226 36.9926 26.7935 37.1685 26.7935C37.3443 26.7935 37.5129 26.7226 37.6372 26.5964C37.7615 26.4702 37.8314 26.2991 37.8314 26.1206C37.8314 24.6689 38.372 23.3155 39.3952 22.2052C40.489 21.1667 41.8224 20.618 43.2557 20.618H43.2824C44.7121 20.6144 46.0856 21.1827 47.1053 22.1999C47.8914 23.0567 48.5195 24.9971 48.6963 25.6745C48.7375 25.8324 48.8338 25.9697 48.9674 26.0608C49.101 26.1518 49.2626 26.1905 49.4222 26.1695C49.5818 26.1486 49.7284 26.0694 49.8347 25.9468C49.941 25.8242 49.9998 25.6665 50 25.5032V25.4707C49.9958 18.7479 47.3617 12.3019 42.6767 7.5496C37.9917 2.79732 31.6392 0.127744 25.0157 0.127686ZM48.0616 21.268C48.0558 21.2616 48.0497 21.2553 48.0435 21.2491C46.7765 19.9788 45.0662 19.2682 43.2853 19.272H43.2522C41.4716 19.272 39.8184 19.9522 38.4714 21.239C38.4617 21.2483 38.4522 21.258 38.443 21.2678C37.9254 21.8213 37.4952 22.4528 37.168 23.1398C36.841 22.4529 36.4112 21.8214 35.8938 21.268C35.8878 21.2616 35.8817 21.2552 35.8757 21.2491C34.6086 19.9788 32.8983 19.2682 31.1173 19.272H31.0842C29.3035 19.272 27.6503 19.9522 26.3035 21.239C26.2937 21.2483 26.2843 21.2579 26.2752 21.2677C25.7574 21.8211 25.3272 22.4525 24.9998 23.1395C24.6726 22.4525 24.2425 21.821 23.7248 21.2675C23.7189 21.2611 23.7129 21.2548 23.7067 21.2487C22.4397 19.9784 20.7294 19.2678 18.9485 19.2716H18.9154C17.1347 19.2716 15.4816 19.9517 14.1344 21.2386C14.1247 21.2479 14.1152 21.2575 14.106 21.2674C13.5885 21.8209 13.1586 22.4525 12.8314 23.1395C12.5042 22.4524 12.0741 21.821 11.5564 21.2675C11.5505 21.2611 11.5445 21.2548 11.5383 21.2487C10.2714 19.9785 8.56139 19.2678 6.78066 19.2715H6.74751C4.9668 19.2715 3.3136 19.9516 1.96655 21.2385C1.95683 21.2478 1.94733 21.2574 1.93816 21.2674C1.82613 21.3891 1.72132 21.5174 1.62426 21.6517C2.52389 16.0239 5.36592 10.9042 9.64244 7.20767C13.9189 3.51112 19.3512 1.47861 24.9683 1.47341H24.9998C25.0051 1.47273 25.0105 1.47273 25.0157 1.47341C30.6357 1.47473 36.0719 3.50557 40.3517 7.20259C44.6315 10.8996 47.4758 16.0216 48.3756 21.6523C48.2785 21.518 48.1737 21.3896 48.0616 21.268Z"
                    fill="#99A3AD"
                  ></path>
                  <path
                    d="M49.6287 34.0793L39.8939 29.2311C39.8032 29.1859 39.7034 29.1624 39.6023 29.1624C39.5011 29.1624 39.4014 29.1859 39.3106 29.2311L29.5758 34.0655C29.4644 34.1209 29.3705 34.2069 29.3048 34.3137C29.2391 34.4206 29.2043 34.544 29.2043 34.67V43.919C29.2043 44.9461 29.4805 46.0925 30.0031 47.2341C30.6726 48.6962 31.6698 49.9592 32.739 50.6977L39.2287 55.1857C39.3387 55.2618 39.4688 55.3025 39.6019 55.3025C39.7351 55.3025 39.8651 55.2618 39.9751 55.1857L46.465 50.6976C48.447 49.3275 49.9997 46.3499 49.9997 43.9189V34.6834C49.9997 34.5576 49.9649 34.4343 49.8993 34.3275C49.8337 34.2207 49.74 34.1347 49.6287 34.0793ZM48.6738 43.9187C48.6738 45.8829 47.3205 48.4779 45.7186 49.5853L39.6019 53.8151L33.4852 49.5853C32.6078 48.9787 31.777 47.915 31.2054 46.6666C30.7699 45.7153 30.53 44.7394 30.53 43.9191V35.0895L39.6009 30.5845L48.6733 35.1027L48.6738 43.9187Z"
                    fill="#99A3AD"
                  ></path>
                  <path
                    d="M35.9457 41.4619C35.8196 41.3385 35.6505 41.2707 35.4754 41.2734C35.3002 41.2761 35.1332 41.349 35.0109 41.4763C34.8885 41.6036 34.8208 41.7749 34.8225 41.9527C34.8242 42.1305 34.8952 42.3004 35.0199 42.4253L37.9605 45.3362C38.0844 45.4587 38.2505 45.5274 38.4234 45.5274C38.5964 45.5274 38.7625 45.4587 38.8863 45.3362L44.1839 40.0917C44.3086 39.9668 44.3796 39.7969 44.3813 39.6191C44.383 39.4413 44.3153 39.27 44.193 39.1427C44.0706 39.0154 43.9036 38.9425 43.7285 38.9398C43.5533 38.9371 43.3842 39.0049 43.2581 39.1284L38.4239 43.9146L35.9457 41.4619Z"
                    fill="#99A3AD"
                  ></path>
                </svg>
              </div>
              <div className="col-9 overview">
                <div className="inclusion-exclusion">
                  <div className="package-detail-list">
                    <p>Price includes</p>
                    <p>
                      <i class="fa fa-check" aria-hidden="true"></i> Air fares
                    </p>
                    <p>
                      <i class="fa fa-check" aria-hidden="true"></i> 3 nights
                      hotel accomodation
                    </p>
                    <p>
                      <i class="fa fa-check" aria-hidden="true"></i> Tour guide
                    </p>
                    <p>
                      <i class="fa fa-check" aria-hidden="true"></i> Entrance
                      fees
                    </p>
                  </div>
                  <div className="package-detail-list">
                    <p>Price excluded</p>
                    <p>
                      <i class="fa fa-times" aria-hidden="true"></i> Guide
                      service fees
                    </p>
                    <p>
                      <i class="fa fa-times" aria-hidden="true"></i> Driver
                      service fees
                    </p>
                    <p>
                      <i class="fa fa-times" aria-hidden="true"></i> Any private
                      expenses
                    </p>
                    <p>
                      <i class="fa fa-times" aria-hidden="true"></i> Room
                      service fees
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="make-package-booking">
              <h6 className="mb-4">Make a booking</h6>
              <i class="fa fa-calendar" aria-hidden="true"></i> Jan 1 - Jan 5 (5
              days)
              <button>Change</button>
              <div className="mt-3">
                <label>
                  <strong>No of people</strong>
                </label>
                <br />
                <select className="form-control mt-2" name="" id="no-of-people">
                  <option selected disabled>
                    Select no of people
                  </option>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                </select>
              </div>
              <div className="mt-3 package-booking-total">
                <p>
                  <span>$100 * 2 guests</span>
                  <span>$300.00</span>
                </p>
                <p>
                  <span>Booking fee + Tax</span>
                  <span>$10.00</span>
                </p>
                <p>
                  <span>Book now & save</span>
                  <span>$50.00</span>
                </p>
                <p>
                  <span>Other charges</span>
                  <span>$0.00</span>
                </p>
                <hr className="normal-hr" />
                <p>
                  <span>Total</span>
                  <span>$260.00</span>
                </p>
              </div>
              <button className="btn package-booking">Book now</button>
            </div>
            <div className="package-google-maps">
              <h6 className="mb-4">Google maps</h6>
              <ReactSVG src={map} style={{ width: "100%" }} />
              <img src="" alt="" />
              <p>
                <span className="box">4.6</span> Exceptional location rating
                score
              </p>
              <p>
                <span>
                  <i
                    class="fa fa-map-marker"
                    aria-hidden="true"
                    style={{ color: "red" }}
                  ></i>
                </span>
                Better than 99% of properties in London
              </p>
              <p>
                <span>
                  <i
                    class="fa fa-map-marker"
                    aria-hidden="true"
                    style={{ color: "red" }}
                  ></i>
                </span>
                Exceptional location - inside city center
              </p>
              <p>
                <span>
                  <i
                    class="fa fa-map-marker"
                    aria-hidden="true"
                    style={{ color: "red" }}
                  ></i>
                </span>
                Popular neighbourhood
              </p>
            </div>
            <div className="package-booking-phone">
              <h6 className="mb-4">Book by phone</h6>
              <p>
                <i
                  class="fa fa-phone"
                  aria-hidden="true"
                  style={{ marginRight: "10px" }}
                ></i>
                +98612792
              </p>
              <p>
                <i
                  class="fa fa-calendar"
                  aria-hidden="true"
                  style={{ marginRight: "10px" }}
                ></i>
                Mon - Fri &nbsp; 09:00 - 18:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const accordionContent = document.querySelectorAll(".accordion-content");

accordionContent.forEach((item, index) => {
  let header = item.querySelector("header");
  header.addEventListener("click", () => {
    console.log("hi");
    item.classList.toggle("open");

    let description = item.querySelector(".description");
    if (item.classList.contains("open")) {
      description.style.height = `${description.scrollHeight}px`; //scrollHeight property returns the height of an element including padding , but excluding borders, scrollbar or margin
      item.querySelector("i").classList.replace("fa-plus", "fa-minus");
    } else {
      description.style.height = "0px";
      item.querySelector("i").classList.replace("fa-minus", "fa-plus");
    }
    removeOpen(index); //calling the funtion and also passing the index number of the clicked header
  });
});

function removeOpen(index1) {
  accordionContent.forEach((item2, index2) => {
    if (index1 != index2) {
      item2.classList.remove("open");

      let des = item2.querySelector(".description");
      des.style.height = "0px";
      item2.querySelector("i").classList.replace("fa-minus", "fa-plus");
    }
  });
}

export default ToursPackagesDetail;
