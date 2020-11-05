import React from 'react';
import Banner from '../banner/component';
import PopularGoods from '../popular-goods/component';
import OurSuggestion from '../our-suggestion/components';
import OurProducts from '../our-products/components';
import OurWorks from '../our-works/component';

import './style.css';

function MainPage() {
  return (
    <div className="main">
      <Banner />
      <PopularGoods />
      <OurSuggestion />
      <OurProducts />
      <OurWorks />
    </div>
  );
}

export default MainPage;
