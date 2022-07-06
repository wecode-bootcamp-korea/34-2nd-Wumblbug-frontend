import React from 'react';
import * as S from './ProjectIntroduce.styled';
import ProjectOptions from './ProjectOptions';

const ProjectIntroduce = ({ title, introduction, image_url, price }) => {
  return (
    <S.IntroduceWrap>
      <S.IntroduceMain id="1">
        <S.IntroduceTitleBox>
          <S.IntroduceTitle> | 프로젝트 소개 </S.IntroduceTitle>
        </S.IntroduceTitleBox>

        <S.IntroduceTextBox>
          <S.IntroduceTextSpan>{introduction}</S.IntroduceTextSpan>
          {image_url.map(({ url, id }) => {
            return <S.IntroduceImg src={url} alt="items" key={id} />;
          })}
        </S.IntroduceTextBox>
      </S.IntroduceMain>
      <ProjectOptions title={title} price={price} />
    </S.IntroduceWrap>
  );
};

export default ProjectIntroduce;
