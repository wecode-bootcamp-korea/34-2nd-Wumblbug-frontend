import React, { useEffect, useState } from 'react';
import NewCarousel from './NewCarousel';
import FundingList from './FundingList';
import Nav from '../../components/Nav/Nav';
import LoggedInNav from '../../components/Nav/LoggedInNav';
import styled from 'styled-components';

const Main = () => {
  const [images, setImages] = useState([]);
  const [fundingItems, setFundingItems] = useState([]);

  useEffect(() => {
    fetch('/data/carouselData.json')
      .then(response => response.json())
      .then(result => setImages(result));
  }, []);

  useEffect(() => {
    fetch('/data/fundingData.json')
      .then(response => response.json())
      .then(result =>
        setFundingItems(
          result.results.sort(
            (prev, current) => new Date(current.date) - new Date(prev.date)
          )
        )
      );
  }, []);

  useEffect(() => {
    // fetch('http://10.58.7.118:8000/projects?order=recent')
    fetch('data/funding')
      .then(res => res.json())
      .then(data => {
        setFundingItems(data.results);
      });
  }, []);

  // BACKEND와의 통신 시, 필요
  // useEffect(() => {
  // fetch(
  // 10.58.7.118:8000/projects?order=recent')
  //   .then(res => res.json())
  //   .then(data => {
  //     setFundingItems(data);
  //   });

  // const sortByLikes = () => {
  //   fetch('http://10.58.7.118:8000/projects?order=likes')
  //     .then(res => res.json())
  //     .then(data => {
  //       setFundingItems(data.results);
  //     }, []);
  // };

  return (
    <>
      {!localStorage.getItem('token') ? <Nav /> : <LoggedInNav />}
      <MainWrapper>
        <NewCarousel images={images} />
        <FundingList
          setFundingItems={setFundingItems}
          fundingItems={fundingItems}
        />
      </MainWrapper>
    </>
  );
};

export default Main;

const MainWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;
