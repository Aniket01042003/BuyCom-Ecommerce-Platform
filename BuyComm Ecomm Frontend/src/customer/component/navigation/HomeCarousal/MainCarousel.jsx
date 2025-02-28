import React from 'react';
import './MainCarousel.css'
import Banner1 from '../../../../assets/images/Banner1.jpg'
import Banner2 from '../../../../assets/images/Banner2.jpg'
import Banner3 from '../../../../assets/images/Banner3.jpg'
import Banner4 from '../../../../assets/images/Banner4.jpg'
import Banner5 from '../../../../assets/images/Banner5.jpg'
import Banner6 from '../../../../assets/images/Banner6.jpg'
import Banner7 from '../../../../assets/images/Banner7.jpg'
import Banner8 from '../../../../assets/images/Banner8.jpg'
import 'react-alice-carousel/lib/alice-carousel.css';

const items = [
  <div className="item" data-value="1"><img src={Banner1} alt="img not loaded" /></div>,
  <div className="item" data-value="2"><img src={Banner2} alt="img not loaded" /></div>,
  <div className="item" data-value="3"><img src={Banner3} alt="img not loaded" /></div>,
  <div className="item" data-value="4"><img src={Banner4} alt="img not loaded" /></div>,
  <div className="item" data-value="5"><img src={Banner5} alt="img not loaded" /></div>,
  <div className="item" data-value="6"><img src={Banner6} alt="img not loaded" /></div>,
  <div className="item" data-value="7"><img src={Banner7} alt="img not loaded" /></div>,
  <div className="item" data-value="8"><img src={Banner8} alt="img not loaded" /></div>,
];

const MainCarousel = () => (
  <div id="carouselExampleControls" className="carousel slide mb-10" data-ride="carousel" data-interval="1500">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="d-block w-100" src={Banner1} alt="First slide"></img>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src={Banner2} alt="Second slide"></img>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src={Banner3} alt="Third slide"></img>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src={Banner4} alt="Third slide"></img>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src={Banner5} alt="Third slide"></img>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src={Banner6} alt="Third slide"></img>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src={Banner7} alt="Third slide"></img>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src={Banner8} alt="Third slide"></img>
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
);
export default MainCarousel;
