import React, { useEffect, useState } from 'react';
import * as S from './Detail.styled';
import ProjectDetailHeader from './ProjectDetailHeader';
import ProjectDetail from './ProjectDetail';
import ProjectIntroduce from './ProjectIntroduce';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faHeartBroken,
  faShareNodes,
} from '@fortawesome/free-solid-svg-icons';
import ProjectBudjet from './ProjectBudjet';
import { Link } from 'react-scroll';
import axios from 'axios';
import Footer from '../../components/Footer/Footer';

const Detail = () => {
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    axios.get('data/detailData.json').then(res => {
      setDetailData(res.data.results);
    });
  }, []);

  const {
    title,
    category,
    thumbmail,
    target_amount,
    total_amount,
    price,
    start_datetime,
    budget_plan,
    remain_days,
    images,
    settlement_date,
    end_datetime,
    like_count,
    introduction,
  } = detailData;

  const likeCountUp = () => {
    setDetailData(prevData => {
      prevData.isLike = !prevData.isLike;
      prevData.isLike ? prevData.like_count++ : prevData.like_count--;
      return { ...prevData };
    });
  };
  let totalPrice;
  let discount;
  let targetAmount;

  if (detailData.total_amount) {
    totalPrice = total_amount.toLocaleString('ko-KR', {
      style: 'currency',
      currency: 'KRW',
    });
    discount = (total_amount / target_amount).toLocaleString('ko-KR', {
      style: 'percent',
    });

    targetAmount = target_amount.toLocaleString('ko-KR', {
      style: 'currency',
      currency: 'KRW',
    });
  }

  return (
    <S.DetailWrap>
      {detailData.id && (
        <>
          <S.DetailMain>
            <S.DetailTitle>
              <S.TitleButton>{category}</S.TitleButton>
              <S.TitleSpan>{title}</S.TitleSpan>
            </S.DetailTitle>
            <S.DetailBody>
              <S.ImgBox>
                <S.Img src={thumbmail} alt="items" />
              </S.ImgBox>
              <S.BodyDetail>
                <S.TotalFunding>
                  <span>모인금액</span>
                  <S.TotalInfoBox>
                    <S.TotalSpan>{totalPrice}</S.TotalSpan>
                    <S.TotalPtag>{discount}</S.TotalPtag>
                  </S.TotalInfoBox>
                </S.TotalFunding>
                <S.RemainnigTimeBox>
                  <span> 남은시간</span>
                  <S.TotalInfoBox>
                    <S.TotalSpan>{remain_days}</S.TotalSpan>
                    <S.TotalPtag>일</S.TotalPtag>
                  </S.TotalInfoBox>
                </S.RemainnigTimeBox>
                <S.SponsorBox>
                  <span>후원자</span>
                  <S.TotalInfoBox>
                    <S.TotalSpan>3,543</S.TotalSpan>
                    <S.TotalPtag>명</S.TotalPtag>
                  </S.TotalInfoBox>
                </S.SponsorBox>
                <div>
                  <S.DetailBox>
                    <S.DetailSpan>목표금액</S.DetailSpan>
                    <span>{targetAmount}</span>
                  </S.DetailBox>
                  <S.DetailBox>
                    <S.DetailSpan>펀딩 기간</S.DetailSpan>
                    <p>
                      {start_datetime} ~{end_datetime}
                    </p>
                  </S.DetailBox>
                  <S.DetailBox>
                    <S.DetailSpan>결제 </S.DetailSpan>
                    <p>목표금액 달성시 {settlement_date}에 결제 진행</p>
                  </S.DetailBox>
                </div>
                <S.ButtonBox>
                  <S.HeartBtn onClick={likeCountUp}>
                    {detailData.isLike ? (
                      <FontAwesomeIcon icon={faHeart} />
                    ) : (
                      <FontAwesomeIcon icon={faHeartBroken} />
                    )}
                    <span>{like_count}</span>
                  </S.HeartBtn>
                  <S.ShareBtn>
                    <FontAwesomeIcon icon={faShareNodes} />
                  </S.ShareBtn>
                  <Link to="3" spy={true} smooth={true}>
                    <S.FundingBtn>이 프로젝트 후원하기</S.FundingBtn>
                  </Link>
                </S.ButtonBox>
              </S.BodyDetail>
            </S.DetailBody>
          </S.DetailMain>
          <ProjectDetailHeader />
          <ProjectDetail />
          <ProjectIntroduce
            title={title}
            introduction={introduction}
            image_url={images}
            price={price}
          />
          <ProjectBudjet budjet_plan={budget_plan} />
        </>
      )}
      <Footer />
    </S.DetailWrap>
  );
};

export default Detail;
