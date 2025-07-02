import React from 'react';
import { cardBanners } from './data/cardBannersData';

const CardBanner = ({ banner }) => {
    return (
        <div className="card-banner">
            <img 
                src={banner.imgCardBan} 
                alt={banner.textCardBan}
                className="card-banner__image"
            />
            <div className="card-banner__content">
                <h3 className="card-banner__text">{banner.textCardBan}</h3>
            </div>
        </div>
    );
};

const CardBannerList = () => {
    return (
        <div className="card-banner-list">
            {cardBanners.map((banner) => (
                <CardBanner 
                    key={banner.id}
                    banner={banner}
                />
            ))}
        </div>
    );
};

export { CardBanner, CardBannerList };
