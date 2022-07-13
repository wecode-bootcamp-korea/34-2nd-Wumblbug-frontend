import React, { useState } from 'react';
import ProjectSection from '../ProjectSection/ProjectSection';
import * as S from './Funding.styled';
import PriceCard from '../PriceCard/PriceCard';
import Dates from '../Dates/Dates';

const Funding = ({
  info,
  setInfo,
  saveInfo,
  setStartDate,
  setEndDate,
  setTargetAmount,
}) => {
  const [inputValue, setInputValue] = useState(0);

  // console.log(inputValue);

  return (
    <S.FundingWrap>
      <S.FundingEditorWrap>
        <ProjectSection
          contentsName="목표 금액"
          contents="프로젝트를 완수하기 위해 필요한 금액을 설정해주세요."
          contentsRightName="목표금액"
          contentsRight={
            <>
              <S.InputWrap
                type="number"
                placeholder="금액을 입력해주세요"
                name="target_amount"
                onChange={e => {
                  // saveInfo(e);
                  saveInfo(e, true);
                  // setTargetAmount(Number(e.target.value));
                  setInputValue(e.target.value);
                }}
              />
              <S.PriceWrap>
                <PriceCard
                  priceTitle="목표금액 달성시 예상 수령액"
                  price={Math.floor(inputValue * 0.92)}
                />
                <PriceCard
                  priceTitle="총 수수료"
                  price={Math.floor(inputValue * 0.08)}
                />
                <PriceCard
                  priceTitle="결제대행 수수료 (총 결제액의 3%)"
                  price={Math.floor(inputValue * 0.03)}
                />
                <PriceCard
                  priceTitle="플랫폼 수수료 (총 모금액의 5%)"
                  price={Math.floor(inputValue * 0.05)}
                />
              </S.PriceWrap>
            </>
          }
        />
        <ProjectSection
          contentsName="펀딩 일정"
          contents="설정한 일시가 되면 펀딩이 자동 시작됩니다. 펀딩 시작 전까지 날짜를 변경할 수 있고, 즉시 펀딩을 시작할 수도 있습니다."
          contentsRightName="시작일 / 종료일"
          contentsRight={
            <Dates
              info={info}
              setInfo={setInfo}
              saveInfo={saveInfo}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
            />
          }
        />
      </S.FundingEditorWrap>
    </S.FundingWrap>
  );
};

export default Funding;
