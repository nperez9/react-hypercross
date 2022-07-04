import React from 'react';

import { CardProps } from './BSCard.types';
import styles from './BSCard.module.css';

const Card: React.FC<CardProps> = ({
  title,
  paragraph,
  subtitle = '',
  links = [],
  imageSrc = '',
  imagePosition = 'top',
}) => {
  let imageCard = null;
  let subitleCard = null;

  if (imageSrc) {
    imageCard = <img src={imageSrc} className={`card-img-${imagePosition}`} alt={title} />;
  }
  if (subtitle) {
    subitleCard = <h6 className='card-subtitle'>{subtitle}</h6>;
  } 

  const linksCard = links.map(({ url, target, title }) => {
    return (
      <a href={url} className='card-link' target={target} key={url}>
        {title}
      </a>
    );
  });

  return (
    <div className={'card'}>
      {imagePosition === 'top' && imageCard}
      <div className={`card-body ${styles.FlexBody}`}>
        <h5 className='card-title'>{title}</h5>
        {subitleCard}
        <p className='card-text'>{paragraph}</p>
        <div>{linksCard}</div>
      </div>
      {imagePosition === 'bottom' && imageCard}
    </div>
  );
};

export default Card;
