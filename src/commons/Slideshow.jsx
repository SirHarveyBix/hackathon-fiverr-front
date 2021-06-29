import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import img1 from '../img/photo-test.jpg';
import img2 from '../img/photo-test2.jpg';
import img3 from '../img/photo-test3.jpg';
import './Slideshow.css';

const Slideshow = () => {
  return (
    <div className='slide-container' style={{ width: '100%', height: '10%' }}>
      <Fade>
        <div className='each-fade'>
          <div className='image-container'>
            <img src={img1} alt='img' />
          </div>
        </div>
        <div className='each-fade'>
          <div className='image-container'>
            <img src={img2} alt='img' />
          </div>
        </div>
        <div className='each-fade'>
          <div className='image-container'>
            <img src={img3}alt='img' />
          </div>
        </div>
      </Fade>
    </div>
  );
}
export default Slideshow;