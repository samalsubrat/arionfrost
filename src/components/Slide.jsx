import React from 'react';

import img1 from './K8P-white/1.jpg';
import img2 from './K8P-white/2.jpg';
import img3 from './K8P-white/3.jpg';
import img4 from './K8P-white/4.jpg';
import img5 from './K8P-white/5.jpg';
import img6 from './K8P-white/6.jpg';
import img7 from './K8P-white/7.jpg';
import img8 from './K8P-white/8.jpg';
import img9 from './K8P-white/9.jpg';
import img10 from './K8P-white/10.jpg';
import "./slide.css"

const Slide = () => {
  // Example data with image paths
  const articles = [
    {
      id: 1,
      imgSrc: img1,
      content1: 'Content 1 for article 1',
      content2: 'Content 2 for article 1',
    },
    {
      id: 2,
      imgSrc: img2,
      content1: 'Content 1 for article 2',
      content2: 'Content 2 for article 2',
    },
    {
      id: 3,
      imgSrc: img3,
      content1: 'Content 1 for article 3',
      content2: 'Content 2 for article 3',
    },
    {
      id: 4,
      imgSrc: img4,
      content1: 'Content 1 for article 4',
      content2: 'Content 2 for article 4',
    },
    {
      id: 5,
      imgSrc: img5,
      content1: 'Content 1 for article 5',
      content2: 'Content 2 for article 5',
    },
    {
      id: 6,
      imgSrc: img6,
      content1: 'Content 1 for article 6',
      content2: 'Content 2 for article 6',
    },
    {
      id: 7,
      imgSrc: img7,
      content1: 'Content 1 for article 7',
      content2: 'Content 2 for article 7',
    },
    {
      id: 8,
      imgSrc: img8,
      content1: 'Content 1 for article 8',
      content2: 'Content 2 for article 8',
    },
    {
      id: 9,
      imgSrc: img9,
      content1: 'Content 1 for article 9',
      content2: 'Content 2 for article 9',
    },
    {
      id: 10,
      imgSrc: img10,
      content1: 'Content 1 for article 10',
      content2: 'Content 2 for article 10',
    },
  ];

  return (
    <div className="container" id="infiniteScroll--left">
      {articles.map((article) => (
        <article key={article.id}>
          <div className="wrapper">
            <div className="img" style={{ backgroundImage: `url(${article.imgSrc})` }}></div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Slide;
