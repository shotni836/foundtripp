import React from 'react'
import './TravelWithUs.css'
import line from '../../assets/images/found_trip/map.png'

const TravelWithUs = () => {
  return (
    <div className="travelWithUs">
        <div className="container">
            <h4>WHY TRAVEL WITH FOUNDTRIP</h4>
            <h6>Reliable, Transperant, Advance</h6>
        </div>
            <img src={line} alt="" style={{width: '100%', marginTop: '20px'}} />
        <div className="container">
            <div className="row mt-4">
                <div className="col travel-us-guide text-center">Traveling With FoundTrip Ensures Safety With Its Rigorous Safety Protocols And Measures. From Carefully Vetted Accommodations To Experienced Local Guides, FoundTrip Prioritizes Your Safety At Every Step Of Your Journey. </div>
                <div className="col travel-us-guide text-center">Traveling With FoundTrip Ensures Safety With Its Rigorous Safety Protocols And Measures. From Carefully Vetted Accommodations To Experienced Local Guides, FoundTrip Prioritizes Your Safety At Every Step Of Your Journey. </div>
                <div className="col travel-us-guide text-center">Traveling With FoundTrip Ensures Safety With Its Rigorous Safety Protocols And Measures. From Carefully Vetted Accommodations To Experienced Local Guides, FoundTrip Prioritizes Your Safety At Every Step Of Your Journey. </div>
                <div className="col travel-us-guide text-center">Traveling With FoundTrip Ensures Safety With Its Rigorous Safety Protocols And Measures. From Carefully Vetted Accommodations To Experienced Local Guides, FoundTrip Prioritizes Your Safety At Every Step Of Your Journey. </div>
            </div>
        </div>
    </div>
  )
}

export default TravelWithUs