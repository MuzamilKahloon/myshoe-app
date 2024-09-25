import React from 'react';
import Flipkart from '../../public/images/flipkart.svg';
import Amazon from '../../public/images/amazon.svg';
import Shoe from '../../public/images/shoe_image.svg';

const Hero = () => {
  return (
    <div>
      <main className='container Hero'>
        <div className='Hero-content'>
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
          <div className='Hero-btn'>
            <button className="shop-now">Shop Now</button>
            <button className='secondary-btn'>Category</button>
          </div>
          <div className='Shop'>Shop Now at</div>
          <div className='Hero-icons'>
            <img src={Flipkart} alt="Flipkart logo" />
            <img src={Amazon} alt="Amazon logo" />
          </div>
        </div>
        <div className='Hero-shoe'>
          <img src={Shoe} alt="Shoe" />
        </div>
      </main>
    </div>
  );
}

export default Hero;
