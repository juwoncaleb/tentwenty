import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
    const [isDisplayed, setIsDisplayed] = useState(false);

    const handleClick = () => {
        setIsDisplayed(!isDisplayed);
    };
    return (
        <div className='header'>
            <div className='header__elements__desktop'>
                <div className='header__elements_navlink'>
                    <p>About</p>
                    <p>News</p>
                    <p>Services</p>
                    <p>Our Team</p>
                    <p>Make Enquiry</p>
                </div>
                <button className='header__elements__button'>
                    <p className='header__elements__button__text'>Contact Us</p>
                    <img className='header__elements__button__arrow' src='https://res.cloudinary.com/deotmwbo8/image/upload/v1678044812/tentwenty/shape_1_1_xfiti7.png' />
                </button>
            </div>
            <div>
                <div className='header__elements__mobile'>
                    <button className='header__elements__button'>
                        <p className='header__elements__button__text'>Contact Us</p>
                        <img className='header__elements__button__arrow' src='https://res.cloudinary.com/deotmwbo8/image/upload/v1678044812/tentwenty/shape_1_1_xfiti7.png' />
                    </button>

                    <div onClick={handleClick} className='header__elements__hamburgermenu'>
                        <div className='header__elements__menu'>
                            <hr className='menu__strokes__one' />
                            <hr className='menu__strokes__two' />
                            <hr className='menu__strokes__three' />
                        </div>
                    </div>

                </div>
                <div
                >
                    {isDisplayed &&
                        <motion.div className='mobile__nav'
                            animate={{  }}
                            transition={{ ease: "easeOut", duration: 2 }}
                        >
                            <motion.div className='mobile__nav__link'>

                                <motion.p
                                whileHover={{
                                    scale: 1.2,
                                    transition: { duration: 1 },
                                  }}
                                className='mobile__nav__items'>
                                    About
                                </motion.p>
                                <motion.p className='mobile__nav__items'>
                                    News
                                </motion.p>
                                <motion.p className='mobile__nav__items'>
                                    Services
                                </motion.p>
                                <motion.p className='mobile__nav__items'>
                                    Our Team
                                </motion.p>
                                <motion.p className='mobile__nav__items'>
                                    Make Enquiry
                                </motion.p>
                            </motion.div>
                        </motion.div>}

                </div>
            </div>
        </div>
    )
}
