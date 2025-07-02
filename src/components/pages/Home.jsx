import React, { useState } from 'react';
import './Home.css';
// import Slider from './components/slider';
// import { SLIDER_DATA } from '../../components/data/sliderData';

import SwiperSlider from '../Sliders/SwiperSlider.jsx';
import { SLIDER_DATA } from '../../components/data/sliderData';
// Шляхи до зображень
const img1 = 'src/assets/img/1.jpg';
const img2 = 'src/assets/img/2.jpg';
const img3 = 'src/assets/img/3.jpg';
const bgpag1 = 'src/assets/img/bgpag1.jpg';
const bgpag2 = 'src/assets/img/pexels-pixabay.png';
const bgpag3 = 'src/assets/img/bgpag3.png';
const bgpag4 = 'src/assets/img/bgpag4.png';

import CardBanner from './components/cardBaner';
import { CARDBANER } from '../../components/data/cardBannersData.js';
import { CARDBANER2 } from '../../components/data/cardBannersData.js';
import { CARDWORK } from '../../components/data/cardBannersData.js';
import { CARDBANER1 } from '../../components/data/cardBannersData.js';
import { IMGWORK } from '../../components/data/cardBannersData.js';


const Home = () => {
  const [slides, setSlides] = useState(() => {
    const savedData = localStorage.getItem('sliderData');
    return savedData ? JSON.parse(savedData) : SLIDER_DATA;
  });

  const [visibleItems, setVisibleItems] = useState(4);

  const showMore = () => {
    setVisibleItems(prev => Math.min(prev + 4, IMGWORK.length));
  };

  const isShowMoreVisible = visibleItems < IMGWORK.length;

  return (
    <>
      <section style={{ background: `url(${bgpag1}) no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', minHeight: '100vh' }}>
        <div>
          <h1 className="color-white position-center ">
            Вітаємо в автосервісі
          </h1>
          <p className="color-white position-center">
            Кузовний ремонт будь-якої складності
          </p>
          <div className="element">
            <div className="card card-banner-container-pr">
              {CARDBANER1.map((card) => (
                <CardBanner key={card.id} imgCardBan={card.imgCardBan} textCardBan={card.textCardBan} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div className="container">
            <div className="element">
              <h1 className="h1-style al-center">Детальніше про Центр Автофарбування</h1>
              <p className="color-black al-center">
              Повне чи часткове відновлення ЛФП за короткий термін та з гарантією якості
              </p>
            </div>
            <div className="element">
              <div className="card card-banner-detail-container" style={{backgroundColor: '#fff'}}>
                {CARDBANER.map((card) => (
                  <CardBanner key={card.id} imgCardBan={card.imgCardBan} textCardBan={card.textCardBan} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>        
      <section style={{background: `url(${bgpag2}) no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100vw', height: '100', padding: '80px 0'}}>
        <box>
          <div className="container">
            <div className="element">
              <h1 className="h1-style al-center">Выгоды</h1>
              <p className="color-white al-center">
              Ваш автомобіль буде таким самим блискучим я після придбання, а ви будете задоволені що обрали саме нас
              </p>
            </div>
            <div className="element">
              <div className="card card-banner-container-br">
                {CARDBANER2.map((card) => (
                  <CardBanner key={card.id} imgCardBan={card.imgCardBan} textCardBan={card.textCardBan} />
                ))}
              </div>
            </div>
          </div>
        </box>
      </section>
      <section>
        <div className="box">
          <div className="container">
            <div className="element">
              <h1 className="h1-style al-center">Послуги</h1>
              <p className="color-black al-center">
              У нас ви не лише можете пофорбувати але й отримати низку послуг з ремонту та  повернути своїй "ластівці" заводський вигляд
              </p>
            </div>
            <div className="element">
              <div className="card card-banner-work-container">
                {CARDWORK.map((card) => (
                  <CardBanner key={card.id} imgCardBan={card.imgCardBan} textCardBan={card.textCardBan} />
                ))}
              </div>
            </div>
            <div className="element" style={{ textAlign: 'center' }}>
              <button type="button" className="color-black al-center" style={{ width: '200px', height: '50px', borderRadius: '8px', border: '1px solid #afacac', textAlign: 'center' }}>Подробнее</button>
            </div>
          </div>
        </div>
      </section>      
      <section className="home-page" style={{background: `url(${bgpag3}) no-repeat`, backgroundSize: '100% 100%', backgroundPosition: 'center', width: '100vw', height: '100', padding: '80px 0'}}>
        <div className="box" >
          <div className="container">
            <div className="element">
              <h1 className="h1-style al-center">Відгуки</h1>
              <p className="color-white al-center">
             Подивіться на відгуки тих, хто вже звернувся до нашої мастерні
              </p>
            </div>
            <div className="element">
              <div className="slider">
                {/* <Slider slides={slides} setSlides={setSlides} /> */}
                <SwiperSlider params={SLIDER_DATA} />
              </div>
            </div>
            <div className="element" style={{ textAlign: 'center' }}>
              <button type="button" className="color-black al-center" style={{ width: '200px', height: '50px', borderRadius: '8px', border: '1px solid #afacac', textAlign: 'center' }}>Подробнее</button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="box">
          <div className="container">
            <div className="element">
              <h1 className="h1-style al-center">Приклади робіт</h1>
              <p className="color-black al-center">
              Наша автомайстерня - це сімейний бізнес, тому ми робимо все як для себе. Якісно. Надовго. Без переплат. Подивіться на зразки наших виконаних робіт, щоб бути упевненим у надійності наших спеціалістів, в руки яких ви передаєте свій автомобіль.
              </p>
            </div>
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
      <section style={{ background: `url(${bgpag4}) no-repeat rgba(0, 0, 0, 0.5)`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100vw', height: '100', padding: '80px 0' }}>
        <div className="container">
          <div className="box">
            <div className="element">
              <p className="color-white al-center">
                Відчуйте знову ту радость, коли ви тільки придбали блискучий автомобіль в салоні! Якісне фарбування та ремонт автомобіля - це відмінний варіант оновити авто без придбання нового
              </p>
            </div>
          </div>
          <div className="box-files" >
            <item className="element-files" >
              <p className="color-white" style={{ minWidth: '35vw' }}>
              Ви можете додати фото для оцінки вартості ремонту через форму
              </p>
              <label htmlFor="fileInput">Виберіть файл</label>
              <input type="file" id="fileInput" multiple/>
            </item>
            <item className="element-files" >
              <input type="text" placeholder="Ваше ім'я" />
              <input type="phone" placeholder="Ваш номер телефону" />
              <button type="button">Заказать звонок</button>
            </item>              
          </div>
        </div>
      </section>  
    
  </>
  );
};

export default Home;

              