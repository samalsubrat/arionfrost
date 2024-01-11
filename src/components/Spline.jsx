import React from 'react'
import Spline from '@splinetool/react-spline';
import img1 from "./K8P-white/1.jpg"
import img2 from "./K8P-white/2.jpg"
import img3 from "./K8P-white/3.jpg"
import img4 from "./K8P-white/4.jpg"
import img5 from "./K8P-white/5.jpg"
import img6 from "./K8P-white/6.jpg"
import img7 from "./K8P-white/7.jpg"
import img8 from "./K8P-white/8.jpg"
import img9 from "./K8P-white/9.jpg"
import img10 from "./K8P-white/10.jpg"
export default function Hello() {
  return (
    <div>
    <div className='textHeading'>Explore the Keyboard</div>
    <div className='keyboardSpline'>
    <Spline className='spline' scene="https://prod.spline.design/O3pWZ0YPHMd1hP6A/scene.splinecode" />
    </div>
    </div>
  );
}


