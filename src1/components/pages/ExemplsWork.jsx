import React, { useState } from 'react';
import { SERVICES } from '../data/cardBannersData.js';
import './ExemplsWork.css';
import CardBanner from './components/cardBaner.jsx';
import { IMGWORK } from '../data/cardBannersData.js';
import SwiperSlider from '../Sliders/SwiperSlider.jsx';
import { SLIDER_DATA_VIDEO } from '../data/sliderData';



const ExemplsWork = () => {
  const [visibleItems, setVisibleItems] = useState(4);

  const showMore = () => {
    setVisibleItems(prev => Math.min(prev + 4, IMGWORK.length));
  };

  const isShowMoreVisible = visibleItems < IMGWORK.length;

  return (
    <>
      <div className="exempls-work-page">
        <section className="services-header">
          <div className="container">
            <h1 className="h1-style al-center">Приклади робіт</h1>

            <p>Наша автомастерская - это семейный бизнес, поэтому мы делаем все как для себя. 
Качественно. Надолго. Без переплат Посмотрите примеры выполненных работ, 
чтобы быть уверенным в надежности специалистов, в руки которых вы передадите автомобиль</p>
          </div>
        </section>
        <section className="services-slider">
          <div className="container">
          <div className="element">
              <div className="slider">                
                <SwiperSlider params={SLIDER_DATA_VIDEO} />
              </div>
            </div>
          </div>
        </section>
        <section className="services-content">
          <div className="container">
            <div className="services-grid">
              <div className="element card-img-img2" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {IMGWORK.slice(0, visibleItems).map((card) => (
                    <CardBanner 
                        key={card.id} 
                        imgCardBan={card.imgCardBan} 
                        imgCardBan2={card.imgCardBan2}
                        parentClassName="card-img-img2"
                    />
                ))}
              </div>
              {isShowMoreVisible && (
                <div className="element" style={{ textAlign: 'center' }}>
                  <button 
                    type="button" 
                    className="color-black al-center" 
                    style={{ 
                        width: '200px', 
                        height: '50px', 
                        borderRadius: '8px', 
                        border: '1px solid #afacac', 
                        textAlign: 'center'
                    }}
                    onClick={showMore}
                  >
                    Показати ще
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ExemplsWork;
