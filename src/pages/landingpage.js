
import React from 'react';
import Header from '../../components/header';
export default function LandingPage() {
  return (
    <div>
      <div className='landing__page'>
        <Header />
        <div className='landing__page_content'>
          <p className='landing__page_content_Header_welcomeTag'>Welcome to TenTwenty Farm</p>
          <p className='landing__page_content_Header_main'>From our Farms <br /> To Your Hands</p>
          <div className='landing__page_content__thumb_content'>
            <p className='landing__page_content__thumb__text'>Next</p>
            <img className='landing__page_content__thumb__img' src='https://res.cloudinary.com/deotmwbo8/image/upload/v1678026924/tentwenty/image_93_x33kso.png' />
          </div>
        </div>
      </div>
      <div>
        <div className='Product'>
          <p className='Product__header'>Quality Products</p>
          <p className='Product__subtext'>Cupidatat magna reprehenderit excepteur excepteur duis veniam officia aute in labore qui sit.
            Nostrud eiusmod ea proident non Lorem mollit eiusmod ad nulla do exercitation minim fugiat dolor.
            Magna sit ad sunt et incididunt
            .</p>
        </div>
      </div>
    </div>
  );
}
