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

const Detail = () => {
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    fetch('data/detailData.json')
      .then(res => res.json())
      .then(result => {
        setDetailData(result.results);
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

  const [likeContent, setLikeContent] = useState({
    heart: false,
    likesCount: like_count,
  });

  const likeCountUp = () => {
    if (!likeContent.heart) {
      setLikeContent({ heart: true, likesCount: like_count + 1 });
    } else {
      setLikeContent({ heart: false, likesCount: like_count });
    }
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
                    {!likeContent.heart ? (
                      <FontAwesomeIcon icon={faHeartBroken} />
                    ) : (
                      <FontAwesomeIcon icon={faHeart} />
                    )}
                    <span>{likeContent.likesCount}</span>
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
    </S.DetailWrap>
  );
};

export default Detail;

// const DETAIL_DATA = {
//   results: {
//     id: 1,
//     thumbmail:
//       'https://greeneeds.s3.ap-northeast-2.amazonaws.com/img/jewellery1.webp',
//     category: '쥬얼리',
//     title: '블루 오션 팔찌',
//     like_count: 0,
//     target_amount: 500000,
//     price: 57000,
//     start_datetime: '2022-07-06',
//     end_datetime: '2022-12-06',
//     pay_end_date: '2022-12-17',
//     settlement_date: '2022-12-07',
//     introduction:
//       '금과 은, 보석을 채굴하는 과정에서 발생하는 노동을 줄이고, 탄소 중립을 위하여 재활용된 금과 은, 보석을 사용하여 지구 친화적이고 지속가능한 제품을 생산',
//     budget_plan: '원단 구입,부자재 구입,생산 공임비,배송 인건비,운임비',
//     organizations: [
//       {
//         id: 1,
//         name: '클린오션',
//       },
//       {
//         id: 2,
//         name: '월드피스',
//       },
//       {
//         id: 3,
//         name: '그린비젼',
//       },
//     ],
//     images: [
//       {
//         id: 2,
//         url: 'https://greeneeds.s3.ap-northeast-2.amazonaws.com/img/jewellery1.webp',
//       },
//       {
//         id: 3,
//         url: 'https://greeneeds.s3.ap-northeast-2.amazonaws.com/img/jewellery1_1.jpeg',
//       },
//     ],
//     remain_days: 149,
//   },
// };
