import React from 'react'
import './Testimonials.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img from '../../assets/images/main-banner2.svg'
import user from '../../assets/images/user1.png'

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Testimonials = () => {
  return (
    <div className='testimonials'>
        <div className="container">
            <h4 className='h4-style'>What People Say About Us</h4>
            <h6 className='h6-style'>Each time we travel, we see the world with new eyes</h6>
            
            <Carousel
                className='firstCarousel'
                responsive={responsive}
                showDots={true}
                autoPlay>
                    <div className="card testimonialsCarousel">
                        <div className='hover-effect'>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                            <span className='badge5'><i className="fa fa-quote-left"></i></span>
                            <div className='center-div'>
                                <img src={user} alt="" />
                                <p className='highlight-name'>Kshitiz</p>
                                <p>Software Developer</p>
                            </div>
                        </div>
                    </div>
                    <div className="card testimonialsCarousel">
                        <div className='hover-effect'>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                            <span className='badge5'><i className="fa fa-quote-left"></i></span>
                            <div className='center-div'>
                                <img src={user} alt="" />
                                <p className='highlight-name'>Kshitiz</p>
                                <p>Software Developer</p>
                            </div>
                        </div>
                    </div>
                    <div className="card testimonialsCarousel">
                        <div className='hover-effect'>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                            <span className='badge5'><i className="fa fa-quote-left"></i></span>
                            <div className='center-div'>
                                <img src={user} alt="" />
                                <p className='highlight-name'>Kshitiz</p>
                                <p>Software Developer</p>
                            </div>
                        </div>
                    </div>
                    <div className="card testimonialsCarousel">
                        <div className='hover-effect'>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                            <span className='badge5'><i className="fa fa-quote-left"></i></span>
                            <div className='center-div'>
                                <img src={user} alt="" />
                                <p className='highlight-name'>Kshitiz</p>
                                <p>Software Developer</p>
                            </div>
                        </div>
                    </div>
                    <div className="card testimonialsCarousel">
                        <div className='hover-effect'>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                            <span className='badge5'><i className="fa fa-quote-left"></i></span>
                            <div className='center-div'>
                                <img src={user} alt="" />
                                <p className='highlight-name'>Kshitiz</p>
                                <p>Software Developer</p>
                            </div>
                        </div>
                    </div>
                    <div className="card testimonialsCarousel">
                        <div className='hover-effect'>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                            <span className='badge5'><i className="fa fa-quote-left"></i></span>
                            <div className='center-div'>
                                <img src={user} alt="" />
                                <p className='highlight-name'>Kshitiz</p>
                                <p>Software Developer</p>
                            </div>
                        </div>
                    </div>
                    <div className="card testimonialsCarousel">
                        <div className='hover-effect'>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                            <span className='badge5'><i className="fa fa-quote-left"></i></span>
                            <div className='center-div'>
                                <img src={user} alt="" />
                                <p className='highlight-name'>Kshitiz</p>
                                <p>Software Developer</p>
                            </div>
                        </div>
                    </div>
                </Carousel>
        </div>
    </div>
  )
}

export default Testimonials