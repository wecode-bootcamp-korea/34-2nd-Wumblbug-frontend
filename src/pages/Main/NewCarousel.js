import React from 'react';
import { Carousel } from 'antd';
import styled from 'styled-components';
import 'antd/dist/antd.css';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const NewCarousel = ({ images }) => (
  <CarouselWrapper>
    <Carousel autoplay style={{ width: '100%', height: '300px' }}>
      {images.map(({ id, url, alt }) => {
        return (
          <div style={contentStyle} key={id}>
            <CarouselImage src={url} alt={alt} />
          </div>
        );
      })}
    </Carousel>
  </CarouselWrapper>
);

export default NewCarousel;

const CarouselWrapper = styled.div`
  width: 79%;
  height: 300px;
  padding: 120px 0 300px 0;
  margin: 0 auto 50px;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;
