import React from 'react'

export default function Header() {
    return (
        <div className='header'>
            <div className='header__elements'>
                <div className='header__elements_navlink'>
                    <p>About</p>
                    <p>News</p>
                    <p>Services</p>
                    <p>Our Team</p>
                    <p>Make Enquiry</p>
                </div>
                <button className='header__elements__button'>
                    <p className='header__elements__button__text'>Contact Us</p>
                    <img className='header__elements__button__arrow' src='https://res.cloudinary.com/deotmwbo8/image/upload/v1678044812/tentwenty/shape_1_1_xfiti7.png'/>
                </button>
            </div>
        </div>
    )
}
