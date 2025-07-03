import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import { useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { getInitialLikes, saveLikes } from '../data/sliderLikes';

import './SwiperSlider.css'

function SwiperSlider ({ params = [] }) {
  // Функція для отримання оптимізованого шляху до зображення
  const getOptimizedImagePath = (originalPath) => {
    if (!originalPath) return null;
    // Витягуємо ім'я файлу з оригінального шляху
    const fileName = originalPath.split('/').pop();
    // Повертаємо шлях до оптимізованого зображення
    return `/RemontAvto/img/${fileName}`;
  }
  const [forceUpdate, setForceUpdate] = useState(0); // Для оновлення компонента
  const forceUpdateComponent = () => setForceUpdate(prev => prev + 1);
  const swiperRef = useRef(null);
  const [likes, setLikes] = useState(() => {
    const { likes: savedLikes, dislikes: savedDislikes } = getInitialLikes();
    return {
      likes: savedLikes || {},
      dislikes: savedDislikes || {},
      getLikeCount: (id) => {
        const slide = params.find(slide => slide.id === id);
        if (!slide) return 0;
        return savedLikes?.[id] ?? slide.buttonLikeCount;
      },
      getDislikeCount: (id) => {
        const slide = params.find(slide => slide.id === id);
        if (!slide) return 0;
        return savedDislikes?.[id] ?? slide.buttonDislikeCount;
      }
    };
  });

  // Завантажуємо початкові значення при монтуванні
  useEffect(() => {
    const { likes: savedLikes, dislikes: savedDislikes } = getInitialLikes();
    if (savedLikes || savedDislikes) {
      setLikes(prevLikes => ({
        ...prevLikes,
        likes: savedLikes || prevLikes.likes,
        dislikes: savedDislikes || prevLikes.dislikes
      }));
    }
  }, []);

  // Завантажуємо початкові значення при монтуванні
  useEffect(() => {
    const { likes: savedLikes, dislikes: savedDislikes } = getInitialLikes();
    setLikes(prevLikes => ({
      ...prevLikes,
      likes: savedLikes || prevLikes.likes,
      dislikes: savedDislikes || prevLikes.dislikes
    }));
  }, []);

  // Завантажуємо початкові значення при монтуванні
  useEffect(() => {
    const { likes: savedLikes, dislikes: savedDislikes } = getInitialLikes();
    setLikes(prevLikes => ({
      ...prevLikes,
      likes: savedLikes || prevLikes.likes,
      dislikes: savedDislikes || prevLikes.dislikes
    }));
  }, []);

  useEffect(() => {
    saveLikes({
      likes: likes.likes,
      dislikes: likes.dislikes
    });
  }, [likes.likes, likes.dislikes]);

  // Оновлюємо стейт при зміні лайків
  useEffect(() => {
    console.log('Likes state updated:', likes);
  }, [likes]);

  const handleLike = useCallback((id) => {
    console.log('Like clicked for id:', id);
    const currentCount = (likes.likes[id] || params.find(slide => slide.id === id)?.buttonLikeCount || 0) + 1;
    console.log('New like count:', currentCount);
    
    // Оновлюємо стейт лайків
    setLikes(prevLikes => ({
      ...prevLikes,
      likes: {
        ...prevLikes.likes,
        [id]: currentCount
      }
    }));

    // Зберігаємо у localStorage
    saveLikes({
      likes: { ...likes.likes, [id]: currentCount },
      dislikes: likes.dislikes
    });

    // Оновлюємо params
    const updatedSlide = params.find(slide => slide.id === id);
    if (updatedSlide) {
      updatedSlide.buttonLikeCount = currentCount;
    }
  }, [likes.likes]);

  const handleDislike = useCallback((id) => {
    console.log('Dislike clicked for id:', id);
    const currentCount = (likes.dislikes[id] || params.find(slide => slide.id === id)?.buttonDislikeCount || 0) + 1;
    console.log('New dislike count:', currentCount);
    
    // Оновлюємо стейт лайків
    setLikes(prevLikes => ({
      ...prevLikes,
      dislikes: {
        ...prevLikes.dislikes,
        [id]: currentCount
      }
    }));

    // Зберігаємо у localStorage
    saveLikes({
      likes: likes.likes,
      dislikes: { ...likes.dislikes, [id]: currentCount }
    });

    // Оновлюємо params
    const updatedSlide = params.find(slide => slide.id === id);
    if (updatedSlide) {
      updatedSlide.buttonDislikeCount = currentCount;
    }
  }, [likes.dislikes]);

  return (
    <Swiper
      modules={[Navigation, Pagination, EffectFade]}
      spaceBetween={10}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      className="swiperSlider"
    >
      {params.map((slide, index) => (
        <SwiperSlide key={index}>         
          <div className="slider-item">
            <div className="video-container"> 
              <video src={slide.video}  controls loop muted />
            </div>
            
            <div className="imj-container" style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '50%' }} src={getOptimizedImagePath(slide.image)} alt={slide.title} />
              </div>
              <div>
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
            </div>
            <div>
              <div>
                <p>{slide.userStatus}</p>
                <p>{slide.userText}</p>
              </div>
            </div>  
            <div className="vote-buttons">
              <button 
                className="vote-button like-button" 
                onClick={(e) => {
                  e.preventDefault();
                  handleLike(slide.id);
                }}
                key={`like-${slide.id}`}
              >
                👍
              </button>
              <span className="vote-count" key={`like-count-${slide.id}`}>
                {likes.likes[slide.id] || slide.buttonLikeCount}
              </span>
              <button 
                className="vote-button dislike-button" 
                onClick={(e) => {
                  e.preventDefault();
                  handleDislike(slide.id);
                }}
                key={`dislike-${slide.id}`}
              >
                👎
              </button>
              <span className="vote-count" key={`dislike-count-${slide.id}`}>
                {likes.dislikes[slide.id] || slide.buttonDislikeCount}
              </span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperSlider;
