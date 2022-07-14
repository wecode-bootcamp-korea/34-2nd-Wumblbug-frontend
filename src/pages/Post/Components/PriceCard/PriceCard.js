import React from 'react';
import * as S from './PriceCard.styled';

const PriceCard = ({ priceTitle, price }) => {
  return (
    <S.PriceCardWrap>
      <span>{priceTitle}</span>
      <span>{price}</span>
    </S.PriceCardWrap>
  );
};

export default PriceCard;
