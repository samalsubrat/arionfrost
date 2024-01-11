import React from 'react';
import img from "./Images/Arion Frost 03.png";
import image from "./Images/ArionFrost05.png";
const PageThree = () => {
  return (
    <div className='page2'>
        <div className='subdiv'>
            <div className="prelubed switches">
                <img src={img} alt="keyboard" draggable="false"/>
                <div className="subdiv-heading" >Pre-lubed <br/>Gateron 3.0 Switches</div>
                <div className="subdiv-gradient"></div>
            </div>
            <div className="prelubed keycaps">
                <img src={image} alt="keyboard" draggable="false"/>
                <div className="subdiv-heading" >Double-Shot <br/>OSA PBT Keycaps</div>
                <div className="subdiv-gradient"></div>
            </div>
        </div>
    </div>
  );
};

export default PageThree;