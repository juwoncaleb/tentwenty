import { useState, useEffect, useRef } from 'react';
import Header from '../../components/header';
import { motion, AnimatePresence } from "framer-motion"
import { CarouselUrl, url } from '../../utils/images';


export default function LandingPage() {
  // CAROUSEL LOGICS
  const [width, setWidth] = useState(0)
  const carousel = useRef()
  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])

  // BACKGROUND IMAGE CHANGE LOGIC
  const [backgroundImageUrl, setBackgroundImageUrl] = useState(url[0]);

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

  // FRAMER MOTION ANIMATION VARIANTS
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
  const textVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)', // clip the text initially
    },
    visible: {
      opacity: 1,
      y: 0,
      clipPath: 'polygon(450% 50%, 00% 100%, 0% 0%, 400% 0%)', // reveal the text
      transition: {
        duration: 1.5,
      },
    },
  };


  return (
    <div>
      {/* HERO SECTION */}
      <AnimatePresence>
        {!isClicked && (
          <motion.div variants={variants} initial="hidden" animate="visible" transition={{ duration: 0.5 }} className="landing__page" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
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

      {/* SECOND PAGE */}
      {/* TEXTS  ANIMATION*/}
      <div className='Product'>
        <motion.p className='fonnty' variants={textVariants} initial="hidden" whileInView="visible" >
          Quality Product
        </motion.p>
        <motion.p className='forty' variants={textVariants} initial="hidden" whileInView="visible"  >
       Commodo elit et ut enim. Incididunt elit velit voluptate labore non ea. Nisi velit duis excepteur culpa enim deserunt deserunt quis ad veniam. Ea eu mollit do duis fugiat duis anim pariatur. Proident duis veniam ad dolor et elit excepteur commodo. Amet adipisicing ipsum nostrud dolore amet labore Lorem laboris do. Cillum sit elit proident qui mollit enim dolor Lorem non.
        </motion.p>

        {/* CAROSEL ANIMATION */}
        <motion.div ref={carousel} className='Product__image'>
          <motion.div drag="x" dragConstraints={{ right: 100, left: -width }} className='Product__image__container'>
            {CarouselUrl.map(image => {
              return (
                <motion.div  key={image} className='Product__image__img'>
                  <img src={image} alt="carouselImg" />
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}