import React, { useState } from 'react';
import * as S from './ProjectOptions.styled';

const ProjectOptions = ({ title, price }) => {
  const [checkInfo, setCheckInfo] = useState({
    cleanOcean: '',
    worldPeace: '',
    greenVision: '',
  });

  const [Options, setOptions] = useState(OPTION_DATA);
  const [btnAbled, setBtnAbled] = useState(true);
  const handleChecked = e => {
    const { name, checked } = e.target;
    setCheckInfo({ ...checkInfo, [name]: checked });
  };

  const handleBtnAbled = () => {
    checkInfo.cleanOcean || checkInfo.worldPeace || checkInfo.greenVision
      ? setBtnAbled(false)
      : setBtnAbled(true);
  };
  const btnClick = () => {
    alert('SUCCESS');
  };
  return (
    <S.ProjectOptionsWrap>
      <S.ProjectOptionMain id="3">
        <S.OptionsPrice>{price} +</S.OptionsPrice>
        <S.OptionTitle>{title}세트</S.OptionTitle>
        <S.OptionCheckBox>
          {Options.map(({ id, title, name }) => {
            return (
              <S.OptionCheckBox>
                <S.OptionCheckInput
                  key={id}
                  type="checkbox"
                  name={name}
                  onChange={handleChecked}
                  onInput={handleBtnAbled}
                />
                <S.OptionCheckSpan>{title}</S.OptionCheckSpan>
              </S.OptionCheckBox>
            );
          })}
        </S.OptionCheckBox>
        <S.OptionButton disabled={btnAbled} onClick={btnClick}>
          후원 선택완료
        </S.OptionButton>
      </S.ProjectOptionMain>
    </S.ProjectOptionsWrap>
  );
};

export default ProjectOptions;

const OPTION_DATA = [
  {
    id: 1,
    title: '클린오션',
    name: 'cleanOcean',
  },
  {
    id: 2,
    title: '월드피스',
    name: 'worldpeace',
  },
  {
    id: 3,
    title: '그린비젼',
    name: 'greenVision',
  },
];
