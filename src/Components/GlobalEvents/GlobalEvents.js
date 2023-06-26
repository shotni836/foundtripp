import React from 'react'
import './GlobalEvents.css'
import img from '../../assets/images/main-banner2.svg'
import event1 from '../../assets/images/found_trip/4.png'
import event2 from '../../assets/images/found_trip/gevent.png'

const GlobalEvents = () => {
  return (
    <div className='globalevents'>
        <div className="container">
            <h4>Global Events</h4>
            <h6>Travel With Us</h6>
            <div>
                <div className='row mt-5'>
                    <div className="col change-col-1">
                        <div className="card card-reverse">
                            <img className="card-img-top" src={event1} alt="Card image cap" />
                            <div className="card-body">
                                <div className='addBorder'>
                                    <h5 className="card-title">3<sup>rd</sup> IRF Africa Regional Congress & Exhibition</h5>
                                    <p className="card-text">Accra International Conference, Center Castle Road, Accra, Ghana, Accra, DC</p>
                                    <div className='button'>
                                        <button>Know More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col change-col-2">
                        <div className="card card-reverse">
                            <img className="card-img-top" src={event1} alt="Card image cap" />
                            <div className="card-body">
                                <div className='addBorder'>
                                    <h5 className="card-title">IRF Global R2T Conference & Exhibition</h5>
                                    <p className="card-text">Arizona State University Memorial Union Building, Pheonix, AZ</p>
                                    <div className='button'>
                                        <button>Know More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className="col change-col-1">
                        <div className="card normal-card">
                            <div className="card-body">
                                <div className='addBorder'>
                                    <h5 className="card-title">Perfomance-Based Contracts Executive Seminar</h5>
                                    <p className="card-text">Courtyard Marriott Brussels, AVENUE DES OLYMPIADES 6, Brussels</p>
                                    <div className='button'>
                                        <button>Know More</button>
                                    </div>
                                </div>
                            </div>
                            <img className="card-img-top" src={event2} alt="Card image cap" />
                        </div>
                    </div>
                    <div className="col change-col-2">
                        <div className="card normal-card">
                            <div className="card-body">
                                <div className='addBorder'>
                                    <h5 className="card-title">"Vision Zero for the Balkans" Road Safety Conference</h5>
                                    <p className="card-text">Crown Plaza Belgrade Vladimira Popovica 10, Belgrade</p>
                                    <div className='button'>
                                        <button>Know More</button>
                                    </div>
                                </div>
                            </div>
                            <img className="card-img-top" src={event2} alt="Card image cap" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GlobalEvents