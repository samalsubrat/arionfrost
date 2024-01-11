import React, {useRef, useLayoutEffect  } from 'react';
import "./App.css";
import image from "./Images/Keychron01.png";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import './pagemodule.css';


const Hero = () => {

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: '-500px',
    });

    requestAnimationFrame(animate);

    return () => {
      gsap.killTweensOf(firstText.current);
      gsap.killTweensOf(secondText.current);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent });
    gsap.set(secondText.current, { xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };

  return (
    <div className='page1'>
        <div className="sliderContainer">
        <div className="slider" ref={slider}>
          <p className="firstText" ref={firstText}>Arion Frost Keyboard-</p>
          <p className="secondText" ref={secondText}>Arion Frost Keyboard-</p>
        </div>
      </div>  
        <a href="https://www.meckeys.com/shop/keyboard/80-keyboard/arion-frost/"><button className="button-primary">Buy Now</button></a>
        <img src={image} alt='Keyboard' draggable="false"/>
    </div>
  );
};

export default Hero;