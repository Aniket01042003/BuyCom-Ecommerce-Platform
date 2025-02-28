import React, { useRef, useState } from 'react';
import './HomeSectionCarousel.css';
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';

const HomeSectionCarousel = ({data,sectionName}) => {
  const carouselRef = useRef(null); // Ref for AliceCarousel
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 5 },
  };

  const items = data.map((item, index) => (
    <HomeSectionCard key={index} product={item} />
  ));

  const maxIndex = items.length - responsive[1024].items;

  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  const syncActiveIndex = (event) => {
    setActiveIndex(event.item);
  };

  return (
    <div className="home-section-carousel ">
      <h2 className="blockquote">{sectionName}</h2>
      <div className="carousel-wrapper relative p-5">
        <AliceCarousel
          items={items}
          responsive={responsive}
          disableDotsControls
          disableButtonsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
          ref={carouselRef}
        />
        {activeIndex < maxIndex && (
          <Button
            onClick={slideNext}
            variant="contained"
            className="butrig carousel-next-button z-50"
            sx={{
              position: 'absolute',
              top: '8rem',
              right: '-9rem',
              color: 'white',
              bgcolor: 'white',
              transform: 'translateX(50%) rotate(90deg)',
            }}
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: 'rotate(90deg)', color: 'black' }}
            />
          </Button>
        )}
        {activeIndex > 0 && (
          <Button
            onClick={slidePrev}
            variant="contained"
            className="butleft carousel-prev-button z-50"
            sx={{
              position: 'absolute',
              top: '8rem',
              left: '-2rem',
              color: 'white',
              bgcolor: 'white',
              transform: 'translateX(50%) rotate(90deg)',
            }}
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: 'rotate(-90deg)', color: 'black' }}
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
