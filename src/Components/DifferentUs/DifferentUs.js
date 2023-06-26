import React from 'react'
import './DifferentUs.css'
import img from '../../assets/images/main-banner2.svg'
import video from '../../assets/images/found_trip/video/girl.png'
import clients from '../../assets/images/clients.png'
import medal from '../../assets/images/medal.png'
import locate from '../../assets/images/locate.png'

const DifferentUs = () => {
  return (
    <div className='differentUs'>
        <div className="container">
            <div className="row">
                <div className="col-9">
                    <h4>What makes us different</h4>
                    <h6>Go Travel Discover</h6>
                    <div className="row mt-5">
                        <div className="col col-grid-1 col-hr">
                            <div className="d-flex">
                                <img src={clients} alt="" style={{width : '50px', height: '50px'}} />
                                <div>
                                    <strong className='mx-4'>500k+ Customers</strong>
                                    <p className='mx-4'>Satisfied Clients</p>
                                </div>
                            </div>
                        </div>
                        <div className="col col-grid-1 col-hr">
                            <div className="d-flex">
                                <img src={medal} alt="" style={{width : '50px', height: '50px'}} />
                                <div>
                                    <strong className='mx-4'>250k+ Customers</strong>
                                    <p className='mx-4'>Satisfied Clients</p>
                                </div>
                            </div>
                        </div>
                        <div className="col col-grid-1">
                            <div className="d-flex">
                                <img src={locate} alt="" style={{width : '50px', height: '50px'}} />
                                <div>
                                    <strong className='mx-4'>10k+ Customers</strong>
                                    <p className='mx-4'>Satisfied Clients</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <img src={video} alt="" style={{width : '100%'}} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default DifferentUs