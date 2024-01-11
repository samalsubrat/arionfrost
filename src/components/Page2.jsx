import React from 'react'
import "./App.css";
import image from "./Images/ArionFrost08.png"

const Page2 = () => {
  return (
    <div className='page2'>
        <div className="text"> A masterpiece of modern engineering and design that's set to redefine your keyboard experience.</div>
        <div className='wired'>
            <img src={image}  alt="keyboard" draggable="false"/>
            <div className="gradient"></div>
            <div className="gradient-bottom"></div>
            <div className="heading">Wired and Wireless</div>
            <div className="body-text">An excellent solution for multitasking. You can connect the <b>Arion Frost</b> with up to <br/><b>3 devices wirelessly</b> via its stable Broadcom <b>Bluetooth 5.1</b> for seamless <br/> multitasking across your laptop, phone, and tablet. Switch among them swiftly, and it's fully compatible with both Mac and Windows. <br/>A reliable <b>USB Type-C</b> wired connection is also available when you need it.</div>
        </div>
    </div>
  )
}

export default Page2;