import React from 'react'
import './RemotePlace.css'
import img from '../../assets/images/main-banner2.svg'
import remote1 from '../../assets/images/found_trip/remote/remote1.jpg'
import remote2 from '../../assets/images/found_trip/remote/remote2.jpg'

const RemotePlace = () => {
  return (
    <div className='remoteplace'>
        <div className="container">
            <h4>Find a new remote office</h4>
            <h6>Try out our work from wherever guide to discover which global destination is your perfect fit to both work and play</h6>
            <div className='row mt-5'>
                <div className="col">
                    <div className="card remoteplacecard">
                        <div class="img__wrap">
                            <img className="card-img-top" src={remote1} alt="Card image cap" />     
                            <div class="img__description_layer1">
                                <h5 class="img__description">The work from wherever guide</h5>
                            </div>
                            <div class="img__description_layer">
                                <p class="img__description">Have fun with your remote work flexibility by searching for your "next" home</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card remoteplacecard">
                        <div class="img__wrap">
                        <img className="card-img-top" src={remote2} alt="Card image cap" />  
                            <div class="img__description_layer1">
                                <h5 class="img__description">Top 10 trending remote work destination</h5>
                            </div>
                            <div class="img__description_layer">
                                <p class="img__description">Find your next remote work location based on top 10 trending destinations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RemotePlace