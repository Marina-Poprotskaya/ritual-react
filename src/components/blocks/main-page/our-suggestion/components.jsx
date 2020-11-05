import React from 'react';
import bulb from '../../../../images/bulb.png';
import humanBulb from '../../../../images/human_bulb.png';
import ribbon from '../../../../images/ribbon.png';
import humanStar from '../../../../images/human_star.png';

import './style.css';

function OurSuggestion() {
  return (
    <section className="our-suggestion">
      <div className="site-container">
        <div className="title">
          <h3>Мы предлагаем</h3>
        </div>
        <div className="our-suggestion__wrapper">
          <div className="our-suggestion__insert">
            <img src={bulb} alt="bulb"></img>
            <p>Уникальные технологии производства</p>
          </div>
          <div className="our-suggestion__insert">
            <img src={humanBulb} alt="human-bulb"></img>
            <p>Более 10-ти лет на рынке</p>
          </div>
          <div className="our-suggestion__insert">
            <img src={ribbon} alt="ribbon"></img>
            <p>Гарантия качества продукции</p>
          </div>
          <div className="our-suggestion__insert">
            <img src={humanStar} alt="human-star"></img>
            <p>Только положительные отзывы</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurSuggestion;
