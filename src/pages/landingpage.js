import { useState, useEffect } from 'react';
import Header from '../../components/header';
import { motion, AnimatePresence } from "framer-motion"


export default function LandingPage() {
  // MAPPING THE URL OF THE BACKGROUND IMAGE IN AN ARRAY
  const url = [
    'https://res.cloudinary.com/deotmwbo8/image/upload/v1678105842/tentwenty/photo-1612441804231-77a36b284856_lwgyjm.jpg',
    'https://res.cloudinary.com/deotmwbo8/image/upload/v1678106003/tentwenty/farm-landscape-15657395_ziaaog.jpg',
    'https://res.cloudinary.com/deotmwbo8/image/upload/v1678026925/tentwenty/pexels-tim-mossholder-974314_1_rgrnnk.png',

  ];
  const [backgroundImageUrl, setBackgroundImageUrl] = useState(url[0]);
  const [currentUrlIndex, setCurrentUrlIndex] = useState(0);

  const handleButtonClick = () => {
    // Increment the current index by 1 and reset to 0 if it reaches the end of the array
    const nextIndex = (currentUrlIndex + 1) % url.length;
    setCurrentUrlIndex(nextIndex);
    // Set the new background image URL based on the current index
    setBackgroundImageUrl(url[currentUrlIndex]);
  };


  // TRIGGER ANIMATION 
  const [isClicked, setIsClicked] = useState(false);

  const handleTap = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 1); // the same duration as the animation
  };

  const variants = {
    hidden: {
      opacity: 0,
      scale: 1.2,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
    },
  };

  return (
    <div>
      <AnimatePresence>
        {!isClicked && (
          <motion.div
          variants={variants}
            initial= "hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            className="landing__page"
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
            <Header />
            <div className='landing__page_content'>
              <p className='landing__page_content_Header_welcomeTag'>Welcome to TenTwenty Farm</p>
              <p className='landing__page_content_Header_main'>From our Farms <br /> To Your Hands</p>


              <motion.div onTap={handleTap} onClick={handleButtonClick} className='landing__page_content__thumb_content'>
                <p className='landing__page_content__thumb__text'>Next</p>
                <img className='landing__page_content__thumb__img' src='https://res.cloudinary.com/deotmwbo8/image/upload/v1678026924/tentwenty/image_93_x33kso.png' />
              </motion.div>
            </div>
          </motion.div>
        )}

      </AnimatePresence>
      <div className='Product'>
        <motion.p className='fonnty'
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: -60 }}
          transition={{ ease: "easeOut", duration: 0.9 }}
        >
          Quality Product
        </motion.p>
        <motion.p className='forty'
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: -50 }}
          transition={{ ease: "easeOut", duration: 1.1 }}
        >
          Veniam minim consectetur quis qui excepteur ut exercitation culpa.

        </motion.p>





        {/* <div className='Product__image'>
          <img src='https://res.cloudinary.com/deotmwbo8/image/upload/v1678026919/tentwenty/image_41_1_byf9n6.png' />
          <img src='https://res.cloudinary.com/deotmwbo8/image/upload/v1678026923/tentwenty/pexels-christian-diokno-3841338_1_mmdkbe.png' />
          <img src='https://res.cloudinary.com/deotmwbo8/image/upload/v1678026925/tentwenty/image_41_ohxngy.png' />
          <img src='https://res.cloudinary.com/deotmwbo8/image/upload/v1678055095/tentwenty/image_40_2x_iaprp4.png' />
          <img src='https://res.cloudinary.com/deotmwbo8/image/upload/v1678055093/tentwenty/image_40_1_mb0ebm.png' />
          <img src='https://res.cloudinary.com/deotmwbo8/image/upload/v1678055093/tentwenty/image_40_atrft3.png' />
        </div> */}
      </div>
    </div>
  );
}
