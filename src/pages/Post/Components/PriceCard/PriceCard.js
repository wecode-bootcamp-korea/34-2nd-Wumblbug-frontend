import React from 'react';
import * as S from './PriceCard.styled';

const PriceCard = ({ priceTitle, price }) => {
  return (
    <S.PriceCardWrap>
      <S.PriceTitle>{priceTitle}</S.PriceTitle>
      <S.PriceNumber>{price}</S.PriceNumber>
    </S.PriceCardWrap>
  );
};

export default PriceCard;
