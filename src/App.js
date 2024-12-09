import React, {useRef} from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import ScrolldownBtn from './Components/ScrolldownBtn/ScrolldownBtn';
import Videocard from './Components/Video Card/Videocard';
import VideoModal from './Components/Video Modal/VideoModal';
import HeroCentered from './Components/Hero Centered/HeroCentered';
import IconColumns from './Components/IconColumns/IconColumns';
import HeroCenteredLarge from './Components/HeroCenteredLarge/HeroCenteredLarge';
import Carousel from './Components/Carousel/Carousel';
import ImageCardLayout from './Components/ImageCardLayout/ImageCardLayout';
import Customers from './Components/Customers/Customers';
import RatingCard from './Components/RatingCard/RatingCard';
import Footer from './Components/Footer/Footer';
import ShuffleCard from './Components/ShuffleCard/ShuffleCard';
import ImageCardLayout2 from './Components/ImageCardLayout2/ImageCardLayout2';
import ImageCardLayout3 from './Components/ImageCardLayout3/ImageCardLayout3';
import GalleryLayout from './Components/GalleryLayout/GalleryLayout';
import NewsLayout from './Components/NewsLayout/NewsLayout';
import ContactForm from './Components/ContactForm/ContactForm';

function App() {
  const targetRef = useRef(null);
  const scrollToComponent = () => {
    targetRef.current?.scrollIntoView({behavior:"smooth"});
  };
  const paraText= "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam alias. Sed.";

  return (
   <Routes>
      <Route path='/' element={
        <div className='containerr'>
          <div id="nav-hero">
            <Navbar />
            <Hero/>
            <ScrolldownBtn onScrollToComponent={scrollToComponent}/>
          </div>
          <div ref={targetRef}>
            <Videocard />
            <VideoModal />
          </div>
          <div>
           <HeroCentered backgroundColor="rgb(250, 250, 250)"/>
           <IconColumns />
           <HeroCenteredLarge />
           <Carousel />
           <HeroCenteredLarge headingText="Recent Blog Post" backgroundColor="rgb(101, 192, 186)" color="rgba(255, 255, 255, 0.7)" />
           <ImageCardLayout />
           <Customers />
           <HeroCentered headingText="Top Destination" backgroundColor="white" changePara/>
           <RatingCard />
           <Footer />
          </div>
        </div>
    }/>
    <Route path='/hotels' element={
        <div>
          <div className='hotel-img'>
            <Navbar />
            <Hero heroHeading="Our Hotel" displayHeroBtn="false"/>
          </div>
          <div>
            <IconColumns backgroundColor="white"/>
            <ShuffleCard />
            <ShuffleCard headingText="Presidential Room" imgSrc="https://preview.colorlib.com/theme/hepta/images/hero_2.jpg.webp" reverseRow/>
            <HeroCenteredLarge headingText="Hotel Gallery" backgroundColor="white" color="grey" paraText={paraText}/>
            <Carousel largeCarousel background="linear-gradient(360deg, rgb(233, 236, 239) 45%, white 45%)"/>
            <HeroCenteredLarge headingText="More Hotel Features" backgroundColor="rgb(233, 236, 239)" color="grey" paraText={paraText}/>
            <ImageCardLayout2 />
            <Footer />
          </div>
        </div>
    }/>
    <Route path='/about-us' element={
        <div>
          <div className='about-img'>
            <Navbar />
            <Hero heroHeading="About Us" displayHeroBtn="false"/>
          </div>
          <div>
            <div className="pad-btm"></div>
            <ShuffleCard />
            <div className="pad-btm"></div>
            <HeroCenteredLarge headingText="Hotel Gallery" backgroundColor="white" color="grey" />
            <Carousel largeCarousel />
            <div className="pad-btm"></div>
            <HeroCentered headingText="Team" backgroundColor="white"/>
            <ImageCardLayout3 />
            <Footer />
          </div>
        </div>
    }/>
    <Route path='/gallery' element={
        <div>
          <div className='about-img'>
            <Navbar />
            <Hero heroHeading="Gallery" displayHeroBtn="false"/>
          </div>
          <div>
            <GalleryLayout />
            <Footer />
          </div>
        </div>
    }/>
    <Route path='/news' element={
        <div>
          <div className='news-img'>
            <Navbar />
            <Hero heroHeading="Blog" displayHeroBtn="false"/>
          </div>
          <div>
            <NewsLayout />
            <Footer />
          </div>
        </div>
    }/>
    <Route path='/contact' element={
        <div>
          <div className='contact-img'>
            <Navbar />
            <Hero heroHeading="Contact" displayHeroBtn="false"/>
          </div>
          <div>
            <ContactForm />
            <Customers />
            <Footer />
          </div>
        </div>
    }/>
   </Routes>
   
  );
}

export default App;
