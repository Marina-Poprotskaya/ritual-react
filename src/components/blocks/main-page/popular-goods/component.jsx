import React from 'react';
import cross from '../../../../images/cross.png';

import './style.css';

function PopularGoods() {
  return (
    <section className="popular-goods">
      <div className="site-container">
        <div className="title">
          <h3>Популярные товары</h3>
        </div>
        <div className="popular-goods__wrapper">
          <div className="popular-goods__insert">
            <img src={cross} alt="popular good"></img>
            <span className="metal">Антит золото</span>
            <p>КРЕСТ ПРАВОСЛАВНЫЙ, РАЗМЕР 11,7</p>
            <span className="price">20 руб</span>
          </div>
          <div className="popular-goods__insert">
            <img src={cross} alt="popular good"></img>
            <span className="metal">Антит золото</span>
            <p>КРЕСТ ПРАВОСЛАВНЫЙ, РАЗМЕР 11,7</p>
            <span className="price">20 руб</span>
          </div>
          <div className="popular-goods__insert">
            <img src={cross} alt="popular good"></img>
            <span className="metal">Антит золото</span>
            <p>КРЕСТ ПРАВОСЛАВНЫЙ, РАЗМЕР 11,7</p>
            <span className="price">20 руб</span>
          </div>
          <div className="popular-goods__insert">
            <img src={cross} alt="popular good"></img>
            <span className="metal">Антит золото</span>
            <p>КРЕСТ ПРАВОСЛАВНЫЙ, РАЗМЕР 11,7</p>
            <span className="price">20 руб</span>
          </div>
        </div>
        <button className="button popular-goods-btn">Перейти в каталог</button>
      </div>
    </section>
  );
}

export default PopularGoods;
